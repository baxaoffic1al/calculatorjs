let $toggler = document.getElementById('toggler'),
    $calculator = document.querySelector('.calculator');

if($calculator.classList.contains('dark')) {
  $toggler.querySelector('#light').style.display = 'block';
  $toggler.querySelector('#dark').style.display = 'none';
} else {
  $toggler.querySelector('#light').style.display = 'none';
  $toggler.querySelector('#dark').style.display = 'block';
}

$toggler.addEventListener('click', function() {
  $calculator.classList.toggle('dark');
  
  if($calculator.classList.contains('dark')) {
    $toggler.querySelector('#light').style.display = 'block';
    $toggler.querySelector('#dark').style.display = 'none';
  } else {
    $toggler.querySelector('#light').style.display = 'none';
    $toggler.querySelector('#dark').style.display = 'block';
  }
})


const calcScreen = document.querySelector('.calculator-operation-result'),
      calcBtns = Array.from(document.querySelectorAll('.calculator-button'));




calcBtns.map((btn)=> {
  btn.addEventListener(`click` ,function (e) {
    let javob = e.target.innerHTML
    numSize()
    console.log(javob);
 if (javob == 'C') {
      clear()
    }else if(javob == '+/-') {
      
    }else if(javob == 'Ocir') {
      qayt()
    }else if(javob == '=') {
      square()
      numSize()
    }else {
      numLength(javob)
    }
  })
})





function qayt() {
  calcScreen.innerHTML = calcScreen.innerHTML.slice(0, -1)
}


function square() {
  calcScreen.innerHTML = eval(calcScreen.innerHTML)
}


function clear() {
  calcScreen.innerHTML = ''
}


function numLength(javob) {
  calcScreen.innerHTML.length >= 20 ? calcScreen.innerHTML = calcScreen.innerHTML : calcScreen.innerHTML = calcScreen.innerHTML + javob
}

function numSize() {
  if (calcScreen.innerHTML.length >= 9) {
    calcScreen.style.fontSize = '30px'
  }
  if(calcScreen.innerHTML.length >= 12){
    calcScreen.style.fontSize = '20px'
  }else if(calcScreen.innerHTML.length < 9) {
    calcScreen.style.fontSize = '40px'
  }
}


