let balance = 0;
const summary = document.getElementById("summary");
const history = document.getElementById("history");
const budgetForm = document.getElementById("budgetForm");
const adviceButton = document.getElementById("adviceButton");
const logout = document.getElementById("logout");

if(budgetForm){
  budgetForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const desc = document.getElementById("description").value;
    const amt = parseFloat(document.getElementById("amount").value);
    const type = document.getElementById("type").value;

    if(type === "income") {
      balance += amt;
      history.innerHTML += `<li>💰 ${desc}: +$${amt}</li>`;
    } else {
      balance -= amt;
      history.innerHTML += `<li>🛒 ${desc}: -$${amt}</li>`;
    }

    summary.textContent = `Balance: $${balance}`;
    budgetForm.reset();
  });
}

if(adviceButton){
  adviceButton.addEventListener("click", () => {
    if(balance < 0){
      alert("Advice: Try to cut down on expenses!");
    } else if(balance < 100){
      alert("Advice: Save more this month!");
    } else {
      alert("Advice: Great! You’re managing your budget well!");
    }
  });
}

if(logout){
  logout.addEventListener("click", () => {
    window.location.href = "login.html";
  });
}