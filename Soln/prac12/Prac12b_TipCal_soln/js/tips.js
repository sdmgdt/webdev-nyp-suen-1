function writeCopy() {
  let d = new Date();
  let el = document.querySelector("#copy");
  el.innerHTML = 'Copyright © ' + d.getFullYear();
}

document.addEventListener('DOMContentLoaded', writeCopy);


// fields
const bill = document.querySelector("#bill");
const numPeople = document.querySelector("#numPeople");
const tip = document.querySelector("#tip");

// elements
const amt = document.querySelector("#amt");
const ttp = document.querySelector("#ttp");
const app = document.querySelector("#app");

// listeners when fields change
const inputColl = document.querySelectorAll("#left input");
for (let item of inputColl) { // loop each item
  item.addEventListener("change", doCalculate);
}

// 
function doCalculate() {
  let billAmt = 1* bill.value ; // make sure number
  let tipAmt = Math.ceil(billAmt * tip.value) * .01;
  let tAmt = billAmt + tipAmt;
  let pp = tAmt / numPeople.value;
  
  ttp.innerHTML =  tipAmt;
  amt.innerHTML = tAmt;
  app.innerHTML = pp;
}