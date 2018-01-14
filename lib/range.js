import * as d3Selection from 'd3-selection';

function setRange() {
  const range = d3Selection.select('#sliderik');
  range.style('margin-top', 0);
  range.style('margin-bottom', 0);
  const range2 = d3Selection.select('#sliderik2');
  range2.style('margin-bottom', 0);
}

export { setRange };
