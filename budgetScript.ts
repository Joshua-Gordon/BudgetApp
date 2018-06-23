function addinput(name : string) : void {
  var element : HTMLElement = document.getElementById(name);
  var numChildren = element.children.length;
  var newName = name + numChildren.toString();
  var newIn = document.createElement("input");
  newIn.setAttribute("type","text");
  newIn.setAttribute("id",newName);
  element.appendChild(newIn);
  console.log(newName);
}

function calc() : void {
  var expenses : HTMLElement = document.getElementById("expense");
  var incomes : HTMLElement = document.getElementById("income");
  var numExpenses = expenses.children.length;
  var numIncomes = incomes.children.length;
  var sumExpense = 0;
  for(var i = 0; i < numExpenses; ++i) {
    var expense = document.getElementById("expense" + i.toString()) as HTMLInputElement;
    var num = parseExpense(expense.value);
    if(num)
      sumExpense += num;
  }
  console.log(sumExpense);
  var sumIncome = 0;
  for(var i = 0; i < numIncomes; ++i) {
    var income = document.getElementById("income" + i.toString()) as HTMLInputElement;
    var num = parseIncome(income.value);
    if(num)
      sumIncome += num;
  }
  console.log(sumIncome);
  var resultDiv = document.getElementById("result");
  resultDiv.innerText = "Total funds:\nExpenses -> " + sumExpense + "\nIncomes -> " + sumIncome + "\nTotal ->" + (sumIncome-sumExpense);
}

function parseExpense(expense : string) : number {
  var numString = expense.split(":")[1].trim();
  return +numString;
}

function parseIncome(income : string) : number {
  var split = income.split(":");
  var rateString = split[1].trim();
  var hoursString = split[2].trim();
  var rate = +rateString;
  var hours = +hoursString;
  return rate * hours;
}
