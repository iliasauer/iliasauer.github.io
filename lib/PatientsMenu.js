import * as d3Selection from 'd3-selection';
import Util from './Util';

let patientsMap = {};

export default class PatientsMenu {

  constructor(clinicalPath) {
    this.clinicalPath = clinicalPath;
    this.margin = { top: 10, right: 10, bottom: 10, left: 10 };
    this.div = d3Selection.select('#patients-menu').classed('menu hidden', true);
  }

  setUpdaters() {
    d3Selection.select('#sliderik').on('input', () => {
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
    const sliderValue = d3Selection.select('#sliderik').property('value');
    d3Selection.select('#sliderik').attr('title', sliderValue);
    const select = d3Selection.select('#patients').node();
    const selectedValue = select.options[select.selectedIndex].value;
    const paths = selectedValue === 'null' ? null : patientsMap[selectedValue];
    this.clinicalPath.updatePaths(Util.transform(paths), sliderValue);
  }

  hide() {
    this.div.classed('hidden', true);
    d3Selection.select('#sliderik').property('value', 0);
  }

  show() {
    patientsMap = {};
    this.clinicalPath.updatePaths(null, 0);
    this.div.classed('hidden', false);
    d3Selection.select('#sliderik').property('value', 0);
    d3Selection.select('#default-combo').property('selected', true);
  }
}
