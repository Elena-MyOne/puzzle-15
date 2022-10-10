export const donate = document.querySelector('.donate');

function changeActive(target, items) {
  if (target) {
    items.forEach(item => {
      item.classList.remove('_active');
    })
    target.classList.add('_active');
  }
}

function compareClasses(classToCompare, target, item) {
  if(target.classList.contains(classToCompare)) {
    item.forEach(elem => {
      if(elem.classList.contains(classToCompare))
      elem.classList.add('_active')
    })
  }
}

function changeActiveMoney(target) {
  const money = document.querySelectorAll('.money');
  money.forEach(item => {
    item.classList.remove('_active');
  })

  compareClasses(5000, target, money)
  compareClasses(2000, target, money)
  compareClasses(1000, target, money)
  compareClasses(500, target, money)
  compareClasses(250, target, money)
  compareClasses(100, target, money)
  compareClasses(50, target, money)
  compareClasses(25, target, money)
}

function changeActiveDotes(target) {
  const dotes = document.querySelectorAll('.dotes');
  changeActive(target, dotes)
}

function changeSingleAmount(amountToChange, target) {
  const donateForm = document.forms.donateForm;
  const donateInput = donateForm.elements.amount;
  if(target.classList.contains(amountToChange)) {
    donateInput.value = amountToChange
  }
}

function setAmount(target) {
  changeSingleAmount('5000', target)
  changeSingleAmount('2000', target)
  changeSingleAmount('1000', target)
  changeSingleAmount('500', target)
  changeSingleAmount('250', target)
  changeSingleAmount('100', target)
  changeSingleAmount('50', target)
  changeSingleAmount('25', target)
}

function changeDoteFromAmount(dote, targetTwo) {
  const dotes = document.querySelectorAll('.dotes');
  if(targetTwo.value === dote) {
    dotes.forEach(elem => {
      elem.classList.remove('_active');
      if(elem.classList.contains(dote)) {
        elem.classList.add('_active')
      }
    })
  }
}

function changeAllDotesFromAmount(targetTwo) {
  changeDoteFromAmount('5000', targetTwo)
  changeDoteFromAmount('2000', targetTwo)
  changeDoteFromAmount('1000', targetTwo)
  changeDoteFromAmount('500', targetTwo)
  changeDoteFromAmount('250', targetTwo)
  changeDoteFromAmount('100', targetTwo)
  changeDoteFromAmount('50', targetTwo)
  changeDoteFromAmount('25', targetTwo)
}

function changeMoneyFromAmount(moneyVal, targetTwo) {
  const money = document.querySelectorAll('.money');
  if(targetTwo.value === moneyVal) {
    money.forEach(elem => {
      elem.classList.remove('_active');
      if(elem.classList.contains(moneyVal)) {
        elem.classList.add('_active')
      }
    })
  }
}

function changeAllMoneyValFromAmount(targetTwo) {
  changeMoneyFromAmount('5000', targetTwo)
  changeMoneyFromAmount('2000', targetTwo)
  changeMoneyFromAmount('1000', targetTwo)
  changeMoneyFromAmount('500', targetTwo)
  changeMoneyFromAmount('250', targetTwo)
  changeMoneyFromAmount('100', targetTwo)
  changeMoneyFromAmount('50', targetTwo)
  changeMoneyFromAmount('25', targetTwo)
}

function removeActiveFromAmount(targetTwo) {
  const money = document.querySelectorAll('.money');
  const dotes = document.querySelectorAll('.dotes');
  if(targetTwo.value !== '100') {
    dotes.forEach(item => {
      item.classList.remove('_active');
    })
    money.forEach(elem => {
      elem.classList.remove('_active');
    })
  }
}

donate.addEventListener('click', (e) => {
  let target = e.target.closest('.dotes');

  if (target) {
    changeActiveDotes(target);
    changeActiveMoney(target);
    setAmount(target);
  }
})

donate.addEventListener('input', (e) => {
  let target = e.target.closest('.dotes');
  let targetTwo = e.target.closest('.donate-form__input');
  const error = document.querySelector('.donate-form__error');

  error.innerHTML = '';
  targetTwo.style.borderColor = '#929699'

  const min = +targetTwo.min;
  const max = +targetTwo.max;
  const value = +targetTwo.value;
    if(value > max) {
      targetTwo.value = 100;
      error.innerHTML = 'The minimum amount is 1, the maximum is 9999. Please enter a sum in between.'
      targetTwo.style.borderColor = '#D31414'
    } else if(value < min) {
      targetTwo.value = min
    }

    removeActiveFromAmount(targetTwo)

    changeAllDotesFromAmount(targetTwo)
    changeAllMoneyValFromAmount(targetTwo)
})