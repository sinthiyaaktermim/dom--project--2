
// function getInputValueById(id) {
//   const value = parseFloat(document.getElementById(id).value);
//   return value
// }





const calculateButton = document.getElementById('calculate');
calculateButton.addEventListener('click', function () {
  const income = parseFloat(document.getElementById('income').value);
  const software = parseFloat(document.getElementById('software').value);
  const courses = parseFloat(document.getElementById('courses').value);
  const internet = parseFloat(document.getElementById('internet').value);

  // const income = document.getInputValueById('income');
  // const software = document.getInputValueById('software');
  // const courses = document.getInputValueById('courses');
  // const internet = document.getInputValueById('internet');




  const totalExpenses = software + courses + internet;
  const balance = income - totalExpenses;

  const totalExpensesElement = document.getElementById('total-expenses');
  totalExpensesElement.innerText = totalExpenses.toFixed(2);

  const balanceElement = document.getElementById('balance');
  balanceElement.innerText = balance.toFixed(2);

  const result = document.getElementById('results');
 result.classList.remove('hidden');
// history

 const historyItem = document.createElement('div');
 historyItem.className = "bg-white p-3 rounded-md border-indigo-500";
 historyItem.innerHTML = `
 <p class="text-xs text-gray-500">${new Date().toLocaleDateString()}</p>
 <p class="text-xs text-gray-500">Income:$${income.toFixed(2)}</p>
 <p class="text-xs text-gray-500">Expenses:$${totalExpenses.toFixed(2)}</p>
 <p class="text-xs text-gray-500">Income:$${balance.toFixed(2)}</p>
 
 `;
 const historyContainer = document.getElementById('history-list');
 historyContainer.insertBefore(historyItem,historyContainer.firstChild);
 // historyContainer.appendChild(historyItem);

});

const calculateSavingButton = document.getElementById('calculate-savings');
calculateSavingButton.addEventListener('click', function () {
  const savings = parseFloat(document.getElementById('savings').value);
  const income = parseFloat(document.getElementById('income').value);
  const software = parseFloat(document.getElementById('software').value);
  const courses = parseFloat(document.getElementById('courses').value);
  const internet = parseFloat(document.getElementById('internet').value);

  if (income <= 0 || isNaN(income)) {
    document.getElementById('income-error').classList.remove('hidden');
    return
  }

  if (software <= 0 || isNaN(software)) {
    document.getElementById('software-error').classList.remove('hidden');
    return
  }
  if (courses <= 0 || isNaN(courses)) {
    document.getElementById('courses-error').classList.remove('hidden');
    return
  }
  if (internet <= 0 || isNaN(internet)) {
    document.getElementById('internet-error').classList.remove('hidden');
    return
  
}

  const totalExpenses = software + courses + internet;
  const balance = income - totalExpenses;

  const savingAmount = (savings * balance) / 100;

 const remaingBalance = balance - savingAmount;
 
 
  const savingElement = document.getElementById('savings-amount');
 savingElement.innerText = savingAmount.toFixed(2);
 const remaingElement = document.getElementById('remaining-balance');
 remaingElement.innerText = remaingBalance.toFixed(2)
});



// history tab functionality

const historyTab = document.getElementById('history-tab');
// assistant tab functionality
const assistanTab = document.getElementById('assistant-tab');
historyTab.addEventListener('click', function () {
 historyTab.classList.add("text-white", "bg-gradient-to-r", "from-blue-500", "to-purple-600");
 historyTab.classList.remove('text-gray-600');
  assistanTab.classList.remove(
    'text-white',
    'bg-gradient-to-r',
    'from-blue-500',
    'to-purple-600'
  );
 document.getElementById('expense-form').classList.add('hidden');
 document.getElementById('history-list').classList.remove('hidden');

});


assistanTab.addEventListener('click', function () {
   assistanTab.classList.add(
     'text-white',
     'bg-gradient-to-r',
     'from-blue-500',
     'to-purple-600'
  );
  historyTab.classList.remove(
    'text-white',
    'bg-gradient-to-r',
    'from-blue-500',
    'to-purple-600'
  );
  document.getElementById('expense-form').classList.remove('hidden');
   document.getElementById('history-list').classList.add('hidden');
})