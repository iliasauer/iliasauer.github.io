import 'babel-polyfill';
import '../styles/style.scss';
import ClinicalPath from './ClinicalPath';
import PatientsMenu from './PatientsMenu';
import ClustersView from './ClustersView';
import AlgorithmMenu from './AlgorithmMenu';

const clinicalPath = new ClinicalPath();
const patientsMenu = new PatientsMenu(clinicalPath);
const clustersView = new ClustersView(clinicalPath, patientsMenu);
const mainMenu = new AlgorithmMenu(clustersView);
mainMenu.draw();
