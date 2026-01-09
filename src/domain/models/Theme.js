export class Theme {
  constructor({ name, color, buttoncolor, image, fundo }) {
    this.name = name;
    this.color = color;
    this.buttoncolor = buttoncolor;
    this.image = image;
    this.fundo = fundo;
  }

  get isDefault() {
    return this.name === "sem_tema";
  }

  get logoPath() {
    return this.fundo === "/screens/sem_tema.png" 
      ? "/screens/Mask.png" 
      : "/screens/Logo.png";
  }

  get buttonImagePath() {
    return this.isDefault 
      ? this.image 
      : `/button_light/${this.name.toLowerCase()}.png`;
  }

  toJSON() {
    return {
      name: this.name,
      color: this.color,
      buttoncolor: this.buttoncolor,
      image: this.image,
      fundo: this.fundo,
    };
  }
}

