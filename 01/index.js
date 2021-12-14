class ClasseJS {
  constructor(element) {
    this.el = element.el;
    this.data = element.data;
  }

  insertMessage() {
    const element = document.querySelector(this.el);
    console.log(this.el)
    element.innerText = this.data.message;
  }
}

let app = new ClasseJS({
  el: '#app',
  data: {
  message: 'Olá Mundo!'
  }
})

app.insertMessage();
