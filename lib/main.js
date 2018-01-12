import 'babel-polyfill';
import '../styles/style.scss';
import Histogram from './Histogram';
import ClinicalPath from './ClinicalPath';
import PatientsMenu from './PatientsMenu';
import ClustersView from './ClustersView';
import AlgorithmMenu from './AlgorithmMenu';

const histogram = new Histogram();
const clinicalPath = new ClinicalPath(histogram);
const patientsMenu = new PatientsMenu(clinicalPath);
const clustersView = new ClustersView(clinicalPath, patientsMenu);
const mainMenu = new AlgorithmMenu(clustersView);
mainMenu.draw();
