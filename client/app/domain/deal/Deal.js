class Deal {
  constructor(_date, _amount, _quantity) {
    this._date = new Date(_date.getTime()),
    Object.assign(this, {
      _amount,
      _quantity,
    });

    Object.freeze(this);
  }

  getVolume() {
    return this._amount * this._quantity;
  }

  get date() {
    // é retornada um cópia de _date, assim impede a modificação dos dados
    return new Date(this._date.getTime());
  }

  get amount() {
    return this._amount;
  }

  get quantity() {
    return this._quantity;
  }

}
