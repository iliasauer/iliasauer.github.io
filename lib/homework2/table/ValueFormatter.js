import * as d3Format from 'd3-format';

export default class {

  constructor(value) {
    this.value = value;
  }

  formatWithComma() {
    return d3Format.format(',')(this.value);
  }

  formatAsDecimal() {
    return d3Format.format(',.1f')(this.value);
  }

  formatAsMoney() {
    return `$${d3Format.format('.2s')(this.value)}`;
  }

}
