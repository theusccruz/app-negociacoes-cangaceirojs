const controller = new DealController();

const form = document.querySelector('.form');
form.addEventListener('submit', controller.add.bind(controller));
