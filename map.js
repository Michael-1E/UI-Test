class Map {
  pins = [];

  addPin(pin) {
    this.pins.push(pin);
    return this;
  }

  removePin(pin) {
    this.pins = this.pins.filter((item) => item === pin);
  }
}

export default Map