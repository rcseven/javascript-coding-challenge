class Cylinder {
  constructor(r, h) {
    this.radius = r;
    this.height = h;
  }

  getVolume() {
    const volume = 3.141592654 * this.radius * this.radius * this.height;
    return volume.toFixed(4);
  }
}

const cylinder = new Cylinder(2, 3);
console.log(cylinder.getVolume());
