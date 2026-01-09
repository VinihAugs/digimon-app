export class Digimon {
  constructor({ name, img, level }) {
    this.name = name;
    this.img = img;
    this.level = level;
  }

  static fromApi(data) {
    return new Digimon({
      name: data.name,
      img: data.img,
      level: data.level,
    });
  }

  toJSON() {
    return {
      name: this.name,
      img: this.img,
      level: this.level,
    };
  }
}

