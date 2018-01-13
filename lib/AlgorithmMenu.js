import * as d3Selection from 'd3-selection';

function handlePatientsIds(data) {
  for (const cluster of data) {
    for (const patient of cluster.patients) {
      patient.patientID = patient.patientID.substring(0, 11).trim();
    }
  }
}

const MENU_ITEMS = ['KCET', 'KCST', 'TDC', 'SF'];

export default class AlgorithmMenu {

  constructor(clustersView) {
    this.clustersView = clustersView;
    this.margin = { top: 10, right: 10, bottom: 10, left: 10 };
    const span = d3Selection.select('#algorithm-menu').classed('menu', true);
    this.svgBounds = span.node().getBoundingClientRect();
    this.svgWidth = this.svgBounds.width - this.margin.left - this.margin.right;
    this.svgHeight = 250;
    this.svg = span.append('svg')
            .attr('width', this.svgWidth)
            .attr('height', this.svgHeight);
  }

  draw() {
    this.addFilter();
    for (let i = 0; i < MENU_ITEMS.length; ++i) {
      this.addMenuPoint(i + 1, MENU_ITEMS[i]);
    }
  }

  async upload(fileName) {
    console.log(`Uploading file: ${fileName}`);
    const data = await (await fetch(`data/${fileName}`)).json();
    handlePatientsIds(data);
    this.clustersView.draw(data);
  }

  addMenuPoint(index, s) {
    const g = this.svg.append('g');
    const text = s;
    const xRect = 10;
    const width = this.svgWidth * 0.7;
    const height = 30;
    const yRect = (height + 20) * index;
    const xText = xRect + (width / 2);
    const yText = yRect + (height / 2);
    this.buildRectangle(g, xRect, yRect, width, height, text);
    this.buildText(g, xText, yText, text);
  }

  buildRectangle(g, xRect, yRect, width, height, text) {
    const that = this;
    g.append('rect')
            .attr('class', 'button shadowed')
            .attr('x', xRect)
            .attr('y', yRect)
            .attr('rx', 20)
            .attr('ry', 20)
            .attr('width', width)
            .attr('height', height)
            .attr('filename', `${text}.json`)
            .on('click', function (d) {
              const thisBtn = g.select('rect');
              thisBtn.classed('selected', true);
              that.upload(thisBtn.attr('filename'));
            });
  }

  buildText(g, xText, yText, text) {
    g.append('text')
      .attr('class', 'button-text')
      .attr('x', xText)
      .attr('y', yText)
      .text(text)
      .on('click', function (d) {
        g.select('rect').on('click')();
      });
  }

  addFilter() {
    const defs = this.svg.append('defs');

    const filter = defs.append('filter')
            .attr('id', 'drop-shadow')
            .attr('height', '150%');

    filter.append('feGaussianBlur')
            .attr('in', 'SourceAlpha')
            .attr('stdDeviation', 1)
            .attr('result', 'blur');
    filter.append('feOffset')
            .attr('in', 'blur')
            .attr('dx', 1)
            .attr('dy', 1)
            .attr('result', 'offsetBlur');

    const feMerge = filter.append('feMerge');

    feMerge.append('feMergeNode')
            .attr('in', 'offsetBlur');
    feMerge.append('feMergeNode')
            .attr('in', 'SourceGraphic');
  }

}
