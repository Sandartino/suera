export class Color {
  static color = {
    'Фентъзи': '#6699FF',
    'Драма': '#660000',
    'Трилър': '#009900',
    'Романи': '#CC9933',
    'Литература': '#CC99CC',
    'История': '#9900CC',
    'Наука': '#999999'
  };

  private dataResult;

  set setColor(object:object) {
    this.dataResult = object;
    for (let key in Color.color) {
      if (this.dataResult["genre"] == key) {
        this.dataResult.color = Color.color[key]
      }
    }
  }

}
