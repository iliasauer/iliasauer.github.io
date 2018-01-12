const d3 = require("d3");

const contentContainer = d3.select("#content_container");
const interactiveBlock = contentContainer.append("div")
    .attr("id", "interactive_block")
    .attr("class", "interactive_block");
let continents = new Set();
let yearRange = {
    min: Number.MAX_SAFE_INTEGER,
    max: 0
};

const margin = {top: 50, bottom: 10, left: 300, right: 40};
const width = 900 - margin.left - margin.right;
const height = 900 - margin.top - margin.bottom;
const duration = 1500;
const delay = 500;
const color = d3.scale.category10();

const chart = interactiveBlock.append("div")
    .attr("id", "chart")
    .attr("class", "chart");

const svg = chart.append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom);

const g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

const line = d3.svg.line()
    .interpolate("basis")
    .x(d => xScale(d["date"]))
    .y(d => yScale(d["price"]));

const axis = d3.svg.line()
    .interpolate("basis")
    .x(d => xScale(d["date"]))
    .y(h);

const area = d3.svg.area()
    .interpolate("basis")
    .x(d => xScale(d["date"]))
    .y1(d => yScale(d["price"]));

getJson("../dist/data/countries_demo.json", (err, data) => {
    data = reformatData(data["data"]);
});

function getJson(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = () => {
        const status = xhr.status;
        if (status === 200) {
            callback(null, xhr.response);
        } else {
            callback(status, xhr.response);
        }
    };
    xhr.send();
}

function reformatData(data) {
    let newData = [];
    for (let obj of data) {
        const name = obj["name"];
        const continent = obj["continent"];
        continents.add(continent);
        const yearObjects = obj["years"];
        for (let yearObject of yearObjects) {
            const year = parseInt(yearObject["year"]);
            if (yearRange.max < year) {
                yearRange.max = year;
            }
            if (yearRange.min > year) {
                yearRange.min = year;
            }
            const newObject = {
                name: name,
                continent: continent,
                gdp: yearObject["gdp"],
                population: yearObject["population"],
                life_expectancy: yearObject["life_expectancy"],
                year: year
            };
            newData.push(newObject)
        }
    }
    continents = [...continents];
    return newData;
}
