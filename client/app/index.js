const fields = [
  document.querySelector('#data'),
  document.querySelector('#valor'),
  document.querySelector('#quantidade'),
];
const [ date, amount, quantity ] = fields;

const tbody = document.querySelector('table tbody');

const form = document.querySelector('.form');
form.addEventListener('submit', e => {
  e.preventDefault();

  const tr = document.createElement('tr');
  fields.forEach(field => {
    const td = document.createElement('td');
    td.textContent = field.value;

    tr.appendChild(td);
  });

  const tdVolume = document.createElement('td');  
  
  tdVolume.textContent = amount.value * quantity.value;
  tr.appendChild(tdVolume);

  tbody.appendChild(tr);

  date.value = '';
  amount.value = '';
  quantity.value = '';

  date.focus();
});