import * as d3Selection from 'd3-selection';

export default class Histogram {

  constructor() {
    this.margin = { top: 10, right: 10, bottom: 10, left: 10 };
    this.span = d3Selection.select('#histogram').classed('hist', true);
    this.svgWidth = 1200 - this.margin.left - this.margin.right;
    this.svgHeight = 350;

    this.svg = this.span.append('svg')
            .attr('width', this.svgWidth)
            .attr('height', this.svgHeight);
  }

  draw(data) {
    this.show();
        // нарисовать гистограмму (бар чарт)
  }

  hide() {
    this.span.classed('hidden', true);
  }

  show() {
    this.span.classed('hidden', false);
  }
}
