import * as d3Select from 'd3-selection';
import DataHandler from './homework2/DataHandler';
import DataProcessor from './homework2/DataProcessor';
import ContentMaker from './homework2/barchart/ContentMaker';
import '../styles/homework2.css';

const contentContainer = d3Select.select('#content_container');

const dataHandler = new DataHandler('countries_1995_2012');
dataHandler.handle(
  (data) => {
    const dataProcessor = new DataProcessor(data);
    const contentMaker = new ContentMaker(contentContainer, dataProcessor);
    contentMaker.setUpdaters();
    contentMaker.updateContent();
  }
);
