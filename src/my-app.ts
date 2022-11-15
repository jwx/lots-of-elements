function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

export class MyApp {
  public count = 100000;

  public elements = [];
  constructor() {
    for (let i = 0; i < this.count; i++) {
      this.elements.push({
        text: `Element ${i + 1}`,
        left: random(0, 1000),
        top: random(50, 800),
      })
    }
  }
}
