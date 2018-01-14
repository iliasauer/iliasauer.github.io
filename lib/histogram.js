import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';
import * as d3Format from 'd3-format';
import * as d3Scale from 'd3-scale';
import * as d3Selection from 'd3-selection';
import * as d3Tip from 'd3-tip';
import Util from './Util';

function determineTitle(nodeObj) {
  if (nodeObj.short_name === 'AD-OD') {
    return 'Admission department (other)';
  } else {
    return nodeObj.long_name;
  }
}

const tooltipMargin = { top: 20, right: 10, bottom: 20, left: 60 };
const tooltipWidth = 320;
const tooltipHeight = 320;
const xShift = 10;
const yShift = 20;
const tooltipSvgWidth = tooltipWidth * 0.70;
const tooltipSvgHeight = tooltipHeight * 0.70;
const tooltipFormatCount = d3Format.format(',.0f');
const tooltipFormatTick = d3Format.format('.0s');

function customHistogram(numberOfBins) {
  return (values) => {
    if (values.length === 0) return undefined;
    const minVal = d3Array.min(values);
    const maxVal = d3Array.max(values);
    const delta = maxVal - minVal;
    const step = delta / numberOfBins;
    let acc = minVal;
    const bins = [];
    while (maxVal - (acc + step) >= -Number.EPSILON * 10000) {
      const bin = [];
      const x0 = acc;
      acc += step;
      const x1 = acc;
      bin.x0 = x0;
      bin.x1 = x1;
      for (const value of values) {
        if (x0 <= value && value < x1) {
          bin.push(value);
        }
      }
      bins.push(bin);
    }
    for (const value of values) {
      if (value === maxVal) {
        bins[bins.length - 1].push(value);
      }
    }
    return {
      bins,
      minVal,
      maxVal,
    };
  };
}

function createTooltip(svg) {
  const tooltip = d3Tip.default()
    .attr('class', 'tooltip')
    .offset([20, 20])
    .html("<div id='tooltip-container' class='tooltip-container'></div>");
  svg.call(tooltip);
  return tooltip;
}

function appendTooltip(datum) {
  const tipSvg = d3Selection.select('#tooltip-container')
    .append('svg')
    .attr('width', tooltipWidth - tooltipMargin.left - tooltipMargin.right)
    .attr('height', tooltipHeight - tooltipMargin.top - tooltipMargin.bottom);
  const numberOfBins = 10;
  const histogram = customHistogram(numberOfBins)(datum.object.time);
  if (histogram !== undefined) {
    const bins = histogram.bins;
    const xScale = d3Scale.scaleLinear()
      .domain([histogram.minVal, histogram.maxVal])
      .rangeRound([0, tooltipSvgWidth]);
    const yScale = d3Scale.scaleLinear()
      .domain([0, d3Array.max(bins, d => d.length)])
      .range([tooltipSvgHeight, 0]);
    const bar = tipSvg.selectAll('.tooltip-bar')
      .data(bins)
      .enter()
      .append('g')
      .attr('class', 'tooltip-bar')
      .attr('transform', d => `translate(${xScale(d.x0) + xShift},${yScale(d.length) + yShift})`);
    bar.append('rect')
      .attr('x', 1)
      .attr('width', xScale(bins[0].x1) - xScale(bins[0].x0) - 1)
      .attr('height', d => tooltipSvgHeight - yScale(d.length));
    bar.append('text')
      .attr('dy', '.5em')
      .attr('y', 5)
      .attr('x', (xScale(bins[0].x1) - xScale(bins[0].x0)) / 2)
      .attr('text-anchor', 'middle')
      .attr('fill', 'white')
      .attr('font-size', '8px')
      .text(d => tooltipFormatCount(d.length));
    tipSvg.append('g')
      .attr('class', 'axis')
      .attr('transform', `translate(${xShift}, ${tooltipSvgHeight + yShift})`)
      .call(d3Axis.axisBottom(xScale).tickValues([
        histogram.minVal,
        histogram.minVal + ((histogram.maxVal - histogram.minVal) / 2),
        histogram.maxVal])
        .tickFormat(tooltipFormatTick));
    tipSvg.append('text')
      .attr('transform', `translate(${(tooltipSvgWidth / 2) + xShift}, ${tooltipSvgHeight + tooltipMargin.top + 10 + yShift})`)
      .style('text-anchor', 'middle')
      .text('Length of Stay');
    const title = determineTitle(datum.object);
    tipSvg.append('text')
      .attr('transform', `translate(${(tooltipSvgWidth / 2) + xShift}, ${yShift / 2})`)
      .style('font-size', '12px')
      .style('font-weight', 'bold')
      .style('text-transform', 'uppercase')
      .style('text-anchor', 'middle')
      .attr('fill', 'black')
      .text(title);
  } else {
    tipSvg.append('text')
      .attr('transform', `translate(${(tooltipSvgWidth / 2) + xShift}, ${(tooltipSvgHeight / 2) + yShift})`)
      .style('font-size', '12px')
      .style('font-weight', 'bold')
      .style('text-transform', 'uppercase')
      .style('text-anchor', 'middle')
      .attr('fill', 'black')
      .text('No data');
  }
}


function isTooltipNode(id) {
  return !Util.isSink(id[0]) && (id !== 'fakeSource');
}

export { createTooltip, appendTooltip, isTooltipNode };
