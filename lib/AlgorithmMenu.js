import * as d3Request from 'd3-request';
import * as d3Selection from 'd3-selection';

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
    this.addMenuPoint(1, 'KCET');
    this.addMenuPoint(2, 'KCST');
    this.addMenuPoint(3, 'TDC');
    this.addMenuPoint(4, 'NO CLUSTERING');
  }

  upload(fileName) {
    console.log(`Uploading file: ${fileName}`);
    const that = this;
    d3Request.json(`data/${fileName}`, (data) => {
      console.log('file loaded: ');
      that.handlePatientsIds(data);
      console.log(data);
      that.callback(that, data);
    });
  }

  callback(classData, jsonData) {
    classData.clustersView.draw(jsonData);
  }

  handlePatientsIds(data) {
    for (const i in data) {
      for (const pat in data[i].patients) {
        data[i].patients[pat].patientID = data[i].patients[pat].patientID.substring(0, 11).trim();
      }
    }
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

  buildText(g, xText, yText, text) {
    g.append('text')
            .attr('class', 'button-text')
            .attr('x', xText)
            .attr('y', yText)
            .text(text);
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
              d3Selection.selectAll('.button').classed('selected', false);
              const thisBtn = d3Selection.select(this);
              thisBtn.classed('selected', true);
              that.upload(thisBtn.attr('filename'));
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
