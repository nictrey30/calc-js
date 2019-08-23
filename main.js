let zeroBtn = document.getElementById('calc-0');
let oneBtn = document.getElementById('calc-1');
let twoBtn = document.getElementById('calc-2');
let threeBtn = document.getElementById('calc-3');
let fourBtn = document.getElementById('calc-4');
let fiveBtn = document.getElementById('calc-5');
let sixBtn = document.getElementById('calc-6');
let sevenBtn = document.getElementById('calc-7');
let eightBtn = document.getElementById('calc-8');
let nineBtn = document.getElementById('calc-9');

let decimalBtn = document.getElementById('calc-decimal');
let clearBtn = document.getElementById('calc-clear');
let backspaceBtn = document.getElementById('calc-backspace');
let displayValElement = document.getElementById('calc-display-val');

let displayVal = '0';
let pendingVal;
let evalStringArray = [];

let calcNumBtns = document.getElementsByClassName('calc-btn-num');
let calcOperatorBtns = document.getElementsByClassName('calc-btn-operator');

let updateDisplayVal = e => {
  let btnText = e.target.innerText;
  if (displayVal === '0') {
    displayVal = '';
  }
  displayVal += btnText;
  displayValElement.innerText = displayVal;
};

for (let i = 0; i < calcNumBtns.length; i++) {
  calcNumBtns[i].addEventListener('click', updateDisplayVal, false);
}

for (let i = 0; i < calcOperatorBtns.length; i++) {
  calcOperatorBtns[i].addEventListener('click', performOperation, false);
}

clearBtn.onclick = e => {
  displayVal = '0';
  pendingVal = undefined;
  evalStringArray = [];
  displayValElement.innerHTML = displayVal;

  //fancy wait 2sec between changing AC nutton to other text and back
  // e.target.innerText = 'cleared';
  // setTimeout(() => (e.target.innerText = 'AC'), 2000);
};
backspaceBtn.onclick = () => {
  let lengthOfDisplayVal = displayVal.length;
};
