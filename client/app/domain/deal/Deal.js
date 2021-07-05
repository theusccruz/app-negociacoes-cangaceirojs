class Deal {
  #date;
  #amount;
  #quantity;

  constructor(date, amount, quantity) {
    this.#date = date;
    this.#amount = amount;
    this.#quantity = quantity;
  }

  getVolume() {
    return this.#amount * this.#quantity;
  }

  get date() {
    return this.#date;
  }

  get amount() {
    return this.#amount;
  }

  get quantity() {
    return this.#quantity;
  }

}
