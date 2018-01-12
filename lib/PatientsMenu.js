import * as d3Selection from 'd3-selection';
import Util from './Util';

let patientsMap = {};

export default class PatientsMenu {

  constructor(clinicalPath) {
    this.clinicalPath = clinicalPath;
    this.margin = { top: 10, right: 10, bottom: 10, left: 10 };
    this.span = d3Selection.select('#patients-menu').classed('menu hidden', true);
    d3Selection.selectAll('#sliderik').on('input', this.updateGraph);
    d3Selection.selectAll('#patients').on('change', this.updateGraph);
  }

  draw(data) {
    this.show();
    const patients = data.patients;
    const select = document.getElementById('patients');
    for (const pat in patients) {
      const option = document.createElement('option');
      option.text = option.value = patients[pat].patientID;
      patientsMap[patients[pat].patientID] = patients[pat].path;
      select.add(option, 0);
    }
    console.log(patientsMap);
  }

  updateGraph() {
    const sliderValue = document.getElementById('sliderik').value;
    document.getElementById('sliderik').title = `${sliderValue}%`;

    const selection = document.getElementById('patients');
    const selectionValue = selection.options[selection.selectedIndex].value;
    const paths = selectionValue === 'null' ? null : patientsMap[selectionValue];

    this.clinicalPath.updatePaths(Util.transform(paths), sliderValue);
  }

  hide() {
    this.span.classed('hidden', true);
    document.getElementById('sliderik').value = 0;
  }

  show() {
    patientsMap = {};
    this.clinicalPath.updatePaths(null, 0);
    this.span.classed('hidden', false);
    document.getElementById('sliderik').value = 0;
    document.getElementById('default-combo').selected = true;
  }
}
