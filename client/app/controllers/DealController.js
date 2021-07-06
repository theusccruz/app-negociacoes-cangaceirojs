class DealController {
  constructor() {
    this._date = document.querySelector('#data');
    this._amount = document.querySelector('#valor');
    this._quantity = document.querySelector('#quantidade');
  }

  add(event) {
    event.preventDefault();

    const { _date, _amount, _quantity } = this;

    const dateArray = new Date(
      ..._date.value
      .split('-')
      .map((dateParam, index) => {
        if (index === 1) {
          return dateParam -1;
        }

        return dateParam;
      })
    );

    const deal = new Deal(
      dateArray,
      _amount.value,
      _quantity.value
    );

    console.log(deal);





  }

}
