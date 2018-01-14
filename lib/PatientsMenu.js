import * as d3Selection from 'd3-selection';
import Util from './Util';
import { setRange } from './range';

let patientsMap = {};

export default class PatientsMenu {

  constructor(clinicalPath) {
    this.clinicalPath = clinicalPath;
    this.margin = { top: 10, right: 10, bottom: 10, left: 10 };
    this.div = d3Selection.select('#patients-menu').classed('menu hidden', true);
    setRange();
  }

  setUpdaters() {
    d3Selection.select('#sliderik').on('input', () => {
      this.updateGraph();
    });
    d3Selection.select('#sliderik2').on('input', () => {
      this.updateGraph();
    });
    d3Selection.select('#patients').on('change', () => {
      this.updateGraph();
    });
  }

  draw(data) {
    this.show();
    const patients = data.patients;
    const select = d3Selection.select('#patients');
    select.append('option')
      .property('value', 'null')
      .text('None');
    for (const patient of patients) {
      select.append('option')
        .property('value', patient.patientID)
        .text(patient.patientID);
      patientsMap[patient.patientID] = patient.path;
    }
  }

  updateGraph() {
    const sliderValue = parseInt(d3Selection.select('#sliderik').property('value'), 10);
    const slider2Value = parseInt(d3Selection.select('#sliderik2').property('value'), 10);
    let minValue;
    let maxValue;
    if (sliderValue <= slider2Value) {
      minValue = sliderValue;
      maxValue = slider2Value;
    } else {
      minValue = slider2Value;
      maxValue = sliderValue;
    }
    d3Selection.select('#sliderik').attr('title', sliderValue);
    d3Selection.select('#sliderik2').attr('title', slider2Value);
    const select = d3Selection.select('#patients').node();
    const selectedValue = select.options[select.selectedIndex].value;
    const paths = selectedValue === 'null' ? null : patientsMap[selectedValue];
    this.clinicalPath.updatePaths(Util.transform(paths), minValue, maxValue);
  }

  hide() {
    this.div.classed('hidden', true);
    d3Selection.select('#sliderik').property('value', 0);
  }

  show() {
    patientsMap = {};
    this.clinicalPath.updatePaths(null, 0, Number.MAX_SAFE_INTEGER);
    this.div.classed('hidden', false);
    d3Selection.select('#sliderik').property('value', 0);
    d3Selection.select('#default-combo').property('selected', true);
  }
}
