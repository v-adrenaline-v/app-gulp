class RandomCharReplace {
  constructor(el) {
    this.el = document.querySelector(el);
    this.en = 'abcdefghijklmnopqrstuvwxyz';
  }
  random() {
    let text = this.el.innerText.split('');
    text[Math.floor(Math.random() * text.length)] = this.en[Math.floor(Math.random() * text.length)];
    this.el.innerText = text.join('');
  }
}

window.onload = () => {
  var random = new RandomCharReplace('#block');
  setInterval(() => random.random(), 100);
};