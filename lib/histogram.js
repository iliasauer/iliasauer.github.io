import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';
import * as d3Format from 'd3-format';
import * as d3Scale from 'd3-scale';
import * as d3Selection from 'd3-selection';
import * as d3Tip from 'd3-tip';

const tooltipMargin = { top: 20, right: 10, bottom: 20, left: 10 };
const tooltipWidth = 200;
const tooltipHeight = 300;
const tooltipFormatCount = d3Format.format(',.0f');

function createTooltip(svg) {
  const tooltip = d3Tip.default()
    .attr('class', 'tooltip')
    .offset([20, 20])
    .html("<div id='tooltip-container' class='tooltip-container'></div>");
  svg.call(tooltip);
  return tooltip;
}

export { createTooltip, tooltipMargin, tooltipWidth, tooltipHeight, tooltipFormatCount };
