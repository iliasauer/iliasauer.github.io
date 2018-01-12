import * as d3Array from 'd3-array';
import * as d3Hierarchy from 'd3-hierarchy';
import * as d3Selection from 'd3-selection';
import 'd3-transition';

export default class ClustersView {

  constructor(clinicalPath, patientsMenu) {
    this.clinicalPath = clinicalPath;
    this.patientsMenu = patientsMenu;

    this.margin = { top: 10, right: 10, bottom: 10, left: 10 };
    this.span = d3Selection.select('#clusters').classed('content', true);
    this.svgWidth = 800 - this.margin.left - this.margin.right;
    this.svgHeight = 500;

    this.data = {};
    this.svg = this.span.append('svg')
            .attr('width', this.svgWidth)
            .attr('height', this.svgHeight);
  }

  draw(jsonData) {
    this.show();
    console.log(jsonData);
    console.log('drawing circles...');
    this.data = jsonData;
    this.printCircles(this.data);
  }

  printCircles(data) {
    d3Selection.selectAll('.cluster-text').remove();
    d3Selection.selectAll('circle').transition()
      .duration(1000)
      .attr('r', 0)
      .remove();
    const that = this;
    data.sort((a, b) => d3Array.ascending(a.patients.length, b.patients.length));
    let packData = this.packed(data);
    const pack = d3Hierarchy.pack()
            .size([that.svgWidth - 10, that.svgHeight - 10])
            .padding(5);

    const chart = that.svg.append('g')
            .attr('transform', 'translate(2,2)')
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

    node
            .append('circle')
            .on('click', (d) => {
              that.drawGraph(that, that.getClusterData(that, d.data.clusterId));
            })
            .transition()
            .duration(1000)
            .delay(1000)
            .attr('r', d => d.r)
            .attr('class', d => !d.children ? 'cluster shadowed' : 'invisible');

    node.filter(d => !d.children).append('text')
            .attr('class', 'cluster-text')
            .transition()
            .delay(2100)
            .text(d => d.data.name);
  }

  packed(data) {
    const packed = {
      name: 'clusters',
      children: [],
    };
    for (const i in data) {
      const cluster = data[i];
      packed.children.push({
        name: (parseInt(i) + 1).toString(),
        size: cluster.patients.length,
        clusterId: cluster.clusterID,
      });
    }
    return packed;
  }

  hide(object, data) {
    d3Selection.selectAll('.cluster-text').remove();
    d3Selection.selectAll('circle').transition()
      .duration(1000)
      .attr('r', 0)
      .remove();
    this.span.transition().delay(1000)
      .attr('class', 'content hidden')
      .on('end', () => {
        object.callback(object, data);
      });
  }

  show() {
    this.clinicalPath.hide();
    this.patientsMenu.hide();
    this.span.classed('hidden', false);
  }

  drawGraph(object, data) {
    object.hide(object, data);
  }

  callback(object, data) {
    object.clinicalPath.draw(data);
    object.patientsMenu.draw(data);
  }

  getClusterData(object, clusterId) {
    const allData = object.data;
    for (const i in allData) {
      if (allData[i].clusterID === clusterId) {
        console.log(clusterId);
        const result = { graph: allData[i].graph, patients: allData[i].patients };
        console.log(result);
        return result;
      }
    }
    return null;
  }
}
