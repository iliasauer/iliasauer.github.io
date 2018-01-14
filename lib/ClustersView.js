import * as d3Array from 'd3-array';
import * as d3Hierarchy from 'd3-hierarchy';
import * as d3Selection from 'd3-selection';
import 'd3-transition';

function drawGraph(object, data) {
  object.hide(object, data);
}

function callback(object, data) {
  object.clinicalPath.draw(data);
  object.patientsMenu.draw(data);
}

function getClusterData(object, clusterId) {
  for (const cluster of object.data) {
    if (cluster.clusterID === clusterId) {
      return { graph: cluster.graph, patients: cluster.patients };
    }
  }
  return null;
}


export default class ClustersView {

  constructor(clinicalPath, patientsMenu) {
    this.clinicalPath = clinicalPath;
    this.patientsMenu = patientsMenu;
    this.patientsMenu.setUpdaters();
    this.margin = { top: 10, right: 10, bottom: 10, left: 10 };
    this.div = d3Selection.select('#clusters').classed('content', true);
    this.svgWidth = 800 - this.margin.left - this.margin.right;
    this.svgHeight = 600;

    this.data = {};
    this.svg = this.div.append('svg')
      .attr('width', this.svgWidth)
      .attr('height', this.svgHeight);
  }

  draw(jsonData) {
    this.addHeader();
    this.show();
    this.data = jsonData;
    this.printCircles();
  }

  printCircles() {
    d3Selection.selectAll('.cluster-text').remove();
    d3Selection.selectAll('circle').transition()
      .duration(1000)
      .attr('r', 0)
      .remove();
    const that = this;
    this.data.sort((a, b) => d3Array.ascending(a.patients.length, b.patients.length));
    let packData = this.getPacked();
    const pack = d3Hierarchy.pack()
      .size([this.svgWidth - 10, this.svgHeight - 40])
      .padding(5);

    const chart = this.svg.append('g')
      .attr('transform', 'translate(2,40)')
      .attr('class', 'chart');

    packData = d3Hierarchy.hierarchy(packData)
      .sum(d => d.size + (d.size / 2))
      .sort((a, b) => b.value - a.value);

    const nodes = pack(packData).descendants();

    const node = chart.selectAll('.node')
      .data(nodes)
      .enter()
      .append('g')
      .attr('transform', d => `translate(${d.x},${d.y})`);

    node.append('title')
      .text(d => `Number of patients in cluster: ${d.data.size}`);

    node.append('circle')
      .on('click', d => drawGraph(that, getClusterData(that, d.data.clusterId)))
      .transition()
      .duration(800)
      .delay(800)
      .attr('r', d => d.r)
      .attr('class', d => !d.children ? 'cluster shadowed' : 'invisible');

    node.filter(d => !d.children).append('text')
      .on('click', (d) => {
        node.select('circle').on('click')(d);
      })
      .attr('class', 'cluster-text')
      .transition()
      .delay(1800)
      .text(d => d.data.clusterId);
  }

  getPacked() {
    const packed = {
      name: 'clusters',
      children: [],
    };
    for (let i = 0; i < this.data.length; ++i) {
      const cluster = this.data[i];
      packed.children.push({
        name: (i + 1).toString(),
        size: cluster.patients.length,
        clusterId: cluster.clusterID,
      });
    }
    return packed;
  }

  hide(object, data) {
    d3Selection.selectAll('.cluster-text').remove();
    d3Selection.selectAll('circle').transition()
      .duration(800)
      .attr('r', 0)
      .remove();
    this.div.transition().delay(800)
      .attr('class', 'content hidden')
      .on('end', () => {
        callback(object, data);
      });
  }

  show() {
    this.clinicalPath.hide();
    this.patientsMenu.hide();
    this.div.classed('hidden', false);
  }

  addHeader() {
    const g = this.svg.append('g');
    g.append('text')
      .attr('x', (10 + ((this.svgWidth) / 2)) - 44)
      .attr('y', 40)
      .classed('clusters-header', true)
      .text('clusters');
  }
}
