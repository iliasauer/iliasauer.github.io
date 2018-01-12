import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';
import * as d3Ease from 'd3-ease';
import * as d3Format from 'd3-format';
import * as d3Scale from 'd3-scale';
import * as d3Selection from 'd3-selection';
import * as d3Shape from 'd3-shape';
import * as d3TimeFormat from 'd3-time-format';

const MARGINS = { top: 10, bottom: 70, left: 200, right: 40 };
const WIDTH = 1200 - MARGINS.left - MARGINS.right;
const HEIGHT = 600;
const DURATION = 1500;
const DELAY = 500;
const DATE_PARSER = d3TimeFormat.timeParse('%Y');
const FORMAT_PERCENT = d3Format.format('.0%');

const X_SCALE = d3Scale.scaleTime().rangeRound([0, WIDTH]);
const Y_SCALE = d3Scale.scaleLinear().rangeRound([HEIGHT, 0]);
const COLOR = d3Scale.scaleOrdinal(d3Scale.schemeCategory10);
const LINEARIZER = d3Shape.line()
    .x(datum => X_SCALE(datum.x))
    .y(datum => Y_SCALE(datum.y));
const STACKIZER = d3Shape.stack();
const AREA = d3Shape.area()
    .x((datum, index) => X_SCALE(datum.data.date))
    .y0(datum => Y_SCALE(datum[0]))
    .y1(datum => Y_SCALE(datum[1]));


export default class LineChart {

  constructor(mainElement, dataProcessor) {
    mainElement
            .attr('width', WIDTH + MARGINS.left + MARGINS.right)
            .attr('height', HEIGHT + MARGINS.top + MARGINS.bottom);
    this.mainElement = mainElement;
    this.dataProcessor = dataProcessor;
    this.mainGroup = this._addMainGroup();
    this.isArea = false;
    this.data = [];
  }

  _addMainGroup() {
    return this.mainElement.append('g')
            .attr('transform', `translate(${MARGINS.left},${MARGINS.top})`);
  }

  updateChart(dataForLines) {
    this.data = dataForLines;
    const keys = [];
    for (const datum of dataForLines) {
      keys.push(datum.key);
    }
    const dataForStack = [];
    for (let i = 0; i < dataForLines[0].values.length; ++i) {
      const stackObj = {};
      for (const datum of dataForLines) {
        stackObj[datum.key] = datum.values[i].y;
        stackObj.date = datum.values[i].x;
      }
      dataForStack.push(stackObj);
    }
    d3Selection.selectAll('.axis').remove();
    X_SCALE.domain(d3Array.extent(dataForStack, datum => datum.date));
    Y_SCALE.domain([0, 1]);
    COLOR.domain(keys);
    STACKIZER.keys(keys);
    let lineGroups;
    let lineGroup;
    if (this.isArea) {
      lineGroups = this.mainGroup.selectAll('.line_chart_value')
                .data(STACKIZER(dataForStack), datum => datum[0][1] + datum[0][3] + datum[0][5]);
      lineGroup = lineGroups.enter().append('g')
                .attr('class', 'line_chart_value');
      lineGroup.append('path')
                .attr('class', 'area')
                .style('fill', 'rgba(0, 0, 0, 0)')
                .style('stroke', 'rgba(0, 0, 0, 0)')
                .transition()
                .duration(500)
                .ease(d3Ease.easeLinear)
                .attr('d', AREA)
                .style('stroke', datum => COLOR(datum.key))
                .transition()
                .duration(500)
                .ease(d3Ease.easeLinear)
                .style('fill', datum => COLOR(datum.key));
      lineGroups.exit().selectAll('.area').transition()
                .duration(300)
                .ease(d3Ease.easeLinear)
                .style('stroke', 'none')
                .style('fill', 'none');
      lineGroups.exit().transition()
                .duration(300)
                .remove();
    } else {
      lineGroups = this.mainGroup.selectAll('.line_chart_value')
                .data(dataForLines, datum => datum.key + datum.values[0].y);
      lineGroup = lineGroups.enter().append('g')
                .attr('class', 'line_chart_value');
      lineGroup.append('path')
                .attr('class', 'line')
                .style('stroke', datum => datum.color = COLOR(datum.key))
                .style('stroke-opacity', 0.0)
                .transition()
                .duration(500)
                .ease(d3Ease.easeLinear)
                .attr('d', datum => LINEARIZER(datum.values))
                .style('stroke-opacity', 1.0);
      lineGroups.exit().selectAll('.line').transition()
                .duration(300)
                .ease(d3Ease.easeLinear)
                .style('stroke-opacity', 0.0);
      lineGroups.exit().transition()
                .duration(300)
                .remove();
    }
    const legendSpace = WIDTH / dataForLines.length;
    lineGroup.append('text')
            .attr('x', (datum, index) => (legendSpace / 2) + index * legendSpace)
            .attr('y', HEIGHT + (MARGINS.bottom / 2) + 5)
            .attr('class', 'legend')
            .style('fill', datum => datum.color = COLOR(datum.key))
            .text(datum => datum.key);
    const bottomAxis = d3Axis.axisBottom(X_SCALE);
    this.mainGroup.append('g')
            .attr('class', 'axis')
            .attr('transform', `translate(0,${HEIGHT})`)
            .call(bottomAxis);
    const leftAxis = d3Axis.axisLeft(Y_SCALE).tickFormat(FORMAT_PERCENT);
    this.mainGroup.append('g')
            .attr('class', 'axis')
            .call(leftAxis);
  }

}
