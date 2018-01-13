import * as d3Drag from 'd3-drag';
import * as d3Scale from 'd3-scale';
import * as d3Selection from 'd3-selection';
import Util from './Util';

export default class ClinicalPath {

  constructor(histogram) {
    this.histogram = histogram;
    this.margin = { top: 10, right: 10, bottom: 10, left: 10 };
    this.span = d3Selection.select('#clinical-path').classed('content hidden', true);

    this.svgWidth = 1200 - this.margin.left - this.margin.right;
    this.svgHeight = 800;
    this.graph = { nodes: [], links: [] };
    this.nodeMap = {};
    this.pathMap = {};
    this.coordinateMap = {
      h: { x: this.svgWidth - 150, y: this.svgHeight / 8 },
      c: { x: this.svgWidth - 150, y: (this.svgHeight * 2) / 8 },
      t: { x: this.svgWidth - 150, y: (this.svgHeight * 3) / 8 },
      d: { x: this.svgWidth - 150, y: (this.svgHeight * 4) / 8 },
      w: { x: this.svgWidth - 150, y: (this.svgHeight * 5) / 8 },
      u: { x: this.svgWidth - 150, y: (this.svgHeight * 6) / 8 },
    };
    this.order = [];
    this.shortNames = [];
    this.xScale = null;
    this.yScale = null;
    this.svg = this.span.append('svg')
            .attr('width', this.svgWidth)
            .attr('height', this.svgHeight);

    this.addArrows();
    this.patientsNumber = 0;
    this.sinkPaths = {};
  }

  draw(data) {
    this.addHeader();
    this.show();
    this.patientsNumber = data.patients.length;
    this.order = Util.orderNodes(data.graph);
    this.shortNames = Util.collectShortNames(data.graph);
    this.sinkPaths = Util.collectSinkPaths(data.patients);
    this.xScale = d3Scale.scaleBand().domain(this.order)
      .range([250, this.svgWidth - 250]);
    this.yScale = d3Scale.scaleBand().domain(this.shortNames)
      .range([100, this.svgHeight - 50]);
    this.collectNodes(data.graph);
    this.collectLinks(data.patients);
    this.drawGraph();
  }

  collectNodes(nodes) {
    for (const [key, value] of Object.entries(nodes)) {
      this.buildNode(key, value);
    }
    const fakeSource = this.createFakeSource();
    this.graph.nodes.push(fakeSource);
    this.nodeMap[fakeSource.id] = fakeSource;
  }

  createFakeSource() {
    return {
      id: 'fakeSource',
      name: 'entrance',
      fixed: true,
      x: 50,
      y: this.svgHeight / 2,
      width: 100,
      height: 30,
      class: 'node-sink',
      object: { short_name: 'entrance' },
    };
  }

  collectLinks(patients) {
    for (const patient of patients) {
      this.buildPaths(patient.path);
    }
    for (const pathKey in this.pathMap) {
      this.graph.links.push({
        source: this.nodeMap[pathKey.substring(0, 3)],
        target: this.nodeMap[pathKey.substring(3, 6)],
        count: this.pathMap[pathKey],
      });
    }
    this.graph.links.push({
      source: this.nodeMap.fakeSource,
      target: this.nodeMap[this.order[0]],
      count: this.patientsNumber,
    });
    console.log('graph links: ');
    console.log(this.graph.links);
  }

  buildNode(key, value) {
    const id = key.substring(0, 1);
    const coords = this.coordinateMap[id];
    const node = Util.isSink(id)
            ? {
              id: key,
              name: value.short_name,
              fixed: true,
              width: 100,
              height: 30,
              class: 'node-sink',
              x: coords.x,
              y: coords.y,
              object: value,
            }
            : {
              id: key,
              name: value.short_name,
              x: this.xScale(key),
              y: this.yScale(value.short_name),
              width: 50,
              height: 30,
              class: 'node',
              object: value,
              fixed: false,
            };
    this.graph.nodes.push(node);
    this.nodeMap[key] = node;
  }

  updatePaths(comboValue, sliderValue) {
    const that = this;
    const percent = +sliderValue / 100;
    this.svg.selectAll('.link').classed('bold', d => d.count / that.patientsNumber >= percent);
    this.svg.selectAll('.path-text').classed('hidden', d => d.count / that.patientsNumber < percent);
    if (comboValue !== null) {
      this.svg.selectAll('.link').classed('patient-selected', d => Util.isPathSelected(comboValue, d, this.nodeMap.fakeSource.id));
    }
  }

  drawHistogram(data) {
    this.histogram.draw(data);
  }

  hide() {
    this.histogram.hide();
    this.svg.selectAll('g').remove();
    this.nodeMap = {};
    this.pathMap = {};
    this.graph = { nodes: [], links: [] };
    this.shortNames = [];
    this.order = [];
    this.span.classed('hidden', true);
  }

  show() {
    this.span.classed('hidden', false);
  }

  buildPaths(paths) {
    for (const path in paths) {
      if (+path === paths.length - 1) {
        break;
      }
      const key = { source: paths[path], target: paths[+path + 1] };
      const mapKey = key.source + key.target;
      if (mapKey in this.pathMap) {
        this.pathMap[mapKey]++;
      } else {
        this.pathMap[mapKey] = 1;
      }
    }
  }

  drawGraph() {
    const that = this;
    const link = this.svg.selectAll('.link-g')
            .data(this.graph.links)
            .enter()
            .append('g');

    function sweeped(d){
      if (+d.source.y > +d.target.y) return 1;
      return 0;
    }

    function line(d) {
      const sourceX = +d.source.x + +d.source.width;
      const sourceY = +d.source.y + (+d.source.height / 2);
      const targetX = +d.target.x;
      const targetY = +d.target.y + (+d.target.height / 2);
      const dx = targetX - sourceX;
      const dy = targetY - sourceY;
      const dr = Math.sqrt((dx * dx) + (dy * dy));
      return `M${sourceX},${sourceY}A${dr},${dr} 0 0,${sweeped(d)
        } ${targetX},${targetY}`;
    }

    const paths = link.append('path')
             .attr('id', d => d.source.id + d.target.id)
             .attr('d', line)
             .attr('class', 'link')
             .attr('from', d => d.source.id)
             .attr('to', d => d.target.id)
             .style('marker-end', 'url(#end-arrow)');


    link.append('text')
      .attr('dy', -2)
      .attr('class', 'path-text')
      .append('textPath')
      .attr('xlink:href', d => `#${d.source.id}${d.target.id}`)
      .style('text-anchor', 'middle')
      .attr('startOffset', '50%')
      .text(d => d.count);

    const node = this.svg.selectAll('.node')
      .data(this.graph.nodes)
      .enter()
      .append('g')
      .on('click', (d) => {
        if (d.id in that.sinkPaths) {
          that.svg.selectAll('.link').classed('sinked', dLink => Util.isPathSelected(that.sinkPaths[d.id], dLink));
        }
      })
      .call(d3Drag.drag().on('drag', dragged));

    const nodeRects = node.append('rect')
      .attr('class', 'nodes')
      .attr('x', d => d.x)
      .attr('y', d => d.y).attr('width', d => d.width).attr('height', d => d.height)
      .attr('rx', 20)
      .attr('ry', 20)
      .attr('class', d => `${d.class} ${d.name}`);

    const nodeText = node.append('text')
      .attr('class', 'node-text')
      .attr('dx', d => d.x + (d.width / 2))
      .attr('dy', d => d.y + (d.height / 2))
      .text(d => d.object.short_name);

    node.append('title')
      .attr('class', 'node-text')
      .text(d => d.object.long_name);

    function dragged(d) {
      if (!d.fixed) {
        d.x = d3Selection.event.x;
        d.y = d3Selection.event.y;
        nodeRects.filter(d1 => d1 === d).attr('x', d.x).attr('y', d.y);
        nodeText.filter(d1 => d1 === d).attr('dx', d.x + (d.width / 2)).attr('dy', d.y + (d.height / 2));
        paths.filter(l => l.source === d || l.target === d).attr('d', line);
      }
    }
  }

  addArrows() {
    this.svg.append('defs')
            .append('marker')
            .attr('id', 'end-arrow')
            .attr('viewBox', '0 -5 20 10')
            .attr('refX', 10)
            .attr('markerWidth', 10)
            .attr('markerHeight', 10)
            .attr('orient', 'auto')
            .append('path')
            .attr('d', 'M0,-5L10,0L0,5')
            .attr('fill', '#000');
  }

  addHeader() {
    const g = this.svg.append('g');
    g.append('text')
      .attr('x', (10 + ((this.svgWidth) / 2)) - 44)
      .attr('y', 40)
      .classed('clusters-header', true)
      .text('pathways');
  }
}
