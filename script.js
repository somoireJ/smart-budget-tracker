const inputForm = document.querySelector('#input-form');
const expensesList = document.querySelector('#expenses-list');
const totalAmount = document.querySelector('#total-amount');

let total = 0;

// Add a new expense
inputForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get the values from the form
  const name = document.querySelector('#name').value;
  const category = document.querySelector('#category').value;
  const amount = document.querySelector('#amount').value;

  // Create the expense item
  const expense = new Expense(name, category, amount);

  // Add the item to the list
  expensesList.appendChild(expense.getHtmlElement());

  // Calculate the total
  total += parseInt(amount);
  totalAmount.innerText = total;
});

// Expense class
class Expense {
  constructor(name, category, amount) {
    this.name = name;
    this.category = category;
    this.amount = amount;
  }

  getHtmlElement() {
    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.innerHTML = `
      <div class="d-flex justify-content-between align-items-center">
        <span>${this.name}</span>
        <span>${this.category}</span>
        <span>${this.amount}</span>
      </div>
    `;

    return li;
  }
}