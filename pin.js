import Map from './map'
import LineDrawer from 'somwhere';

class Pin {
  constructor(lat, lng) {
    Object.assign(this, { lat, lng });
  }

  addToMap(map) {
    map.addPin(pin);
    return this;
  }

  removeFromMap(map) {
    map.removePin(this);
    return this;
  }

  drawTo(nextPin) {
    // this renders a line on the screen
    // invoke this method to draw the line
    LineDrawer.connect(this, nextPin);
  }
}

export default Pin;
