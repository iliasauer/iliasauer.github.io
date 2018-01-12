const d3 = require("d3");

const data = [
    ["apples", "red"],
    ["orange", "orange"],
    ["bananas", "yellow"],
];

d3.select("#content_container").append("h3")
    .text("List all first entries in array then all second ones");
let chainBlock = d3.select("#content_container").append("div").attr("id", "chain");
d3.select("#content_container").append("h3")
    .text("Second element is nested inside first element");
let nestedBlock = d3.select("#content_container").append("div").attr("id", "nested");
d3.select("#content_container").append("h3")
    .text("Both elements are contained in a third element");
let appendBlock = d3.select("#content_container").append("div").attr("id", "append");

let div1 = chainBlock.selectAll("#chain div").data(data);
let div1Enter = div1.enter();
div1Enter.append("div").attr("class", "one").text(d => d[0]);
div1Enter.append("div").attr("class", "two").text(d => d[1]);

let div2 = nestedBlock.selectAll("#nested div").data(data);
let div2Enter = div2.enter();
div2Enter.append("div").attr("class","one").text(d => d[0])
    .append("div").attr("class","two").text(d => d[1]);

let div3 = appendBlock.selectAll("#append .row").data(data);
let div3Enter = div3.enter();
let row = div3Enter.append("div").attr("class", "row");
row.each(function(d) {
    d3.select(this).append("div").attr("class", "one").text(d => d[0]);
    d3.select(this).append("div").attr("class", "two").text(d => d[1]);
});
