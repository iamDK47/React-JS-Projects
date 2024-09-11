const button = document.getElementById('#submit')
const expenseList = document.getElementById('expense-list')
const expenseForm = document.getElementById('expense-form')

let expenses = []

expenseForm.addEventListener('submit', (e) => {
     e.defaultPrevented()
     
     const name = document.getElementById('expense-name').value
     const amount = parseFloat(document.getElementById('expense-amount').value)
     const category = document.getElementById('expense-category').value
     const date = document.getElementById('expense-date').value
     // function insertData(){
          
     //      const table = document.getElementById('expense-list')
     //      let newRow = table.insertRow(table.rows)
     
     //      newRow.insertCell(0).innerHTML = name
     //      newRow.insertCell(1).innerHTML = amount
     //      newRow.insertCell(2).innerHTML = category
     //      newRow.insertCell(3).innerHTML = date
     // }
     
     const expense = {
          id: Date.now(),
          name,
          amount,
          category,
          date
     };
     
     expenses.push(expense);
     displayExpenses()
     
})


function displayExpenses(expenses) {
     expenseList.innerHTML = "";
     expenses.forEach(expense => {
         const row = document.createElement("tr");

         row.innerHTML = `
             <td>${expense.name}</td>
             <td>$${expense.amount.toFixed(2)}</td>
             <td>${expense.category}</td>
             <td>${expense.date}</td>
             <td>
                 <button class="edit-btn" data-id="${expense.id}">Edit</button>
                 <button class="delete-btn" data-id="${expense.id}">Delete</button>
             </td>
         `;

         expenseList.appendChild(row);
     });
 }