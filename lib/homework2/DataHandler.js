export default class {

  constructor(name) {
    this.name = name;
    this.address = `/data/${name}.json`;
  }

  handle(f) {
    fetch(this.address)
            .then(response => response.json())
            .then(data => f(data));
  }

}
