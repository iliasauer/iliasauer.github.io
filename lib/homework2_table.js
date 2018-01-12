import {d3} from './libraries'

import DataHandler from "./homework2/DataHandler";
import DataProcessor from "./homework2/DataProcessor";
import ContentMaker from "./homework2/table/ContentMaker";

const contentContainer = d3.select("#content_container");

const dataHandler = new DataHandler("countries_1995_2012");
dataHandler.handle(
    data => {
        const dataProcessor = new DataProcessor(data);
        const contentMaker = new ContentMaker(contentContainer, dataProcessor);
        contentMaker.setUpdaters();
        contentMaker.updateContent();
    }
);
