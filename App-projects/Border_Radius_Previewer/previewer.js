// Inputs
const myInputElement = document.getElementById("myInput")
const unitsDivs = document.querySelectorAll('.units');
const inputTopRight = document.getElementById("myInput-TR")
const inputBottomRight = document.getElementById("myInput-BR")
const inputBottomLeft = document.getElementById("myInput-BL")
const inputTopLeft = document.getElementById("myInput-TL")


// Buttons
const allBordersBtn = document.getElementById("allBordersBtn")
const eachBorderBtn = document.getElementById("eachBorderBtn")

// Result
const boxStyle = document.getElementById("box").style
const allBordersShow = document.getElementById("allBorders")

console.log(unitsDivs);

let inputValue
let selectedUnit = unitsDivs[0][0].innerHTML
console.log(selectedUnit);

// Add event listener to each 'units' div
unitsDivs.forEach(function(div) {
  div.addEventListener('change', function() {
    selectedUnit = this.value; // Assuming you want the text content as the selected unit
    console.log("Selected value:", selectedUnit);
  });
});

allBordersBtn.addEventListener("click", () => {
  inputValue = myInputElement.value

  allBordersShow.innerHTML = ''
  allBordersShow.innerHTML = inputValue + selectedUnit
  applyBorderRadius()
})

eachBorderBtn.addEventListener("click", () => {
  let valueTR = inputTopRight.value
  let valueBR = inputBottomRight.value
  let valueBL = inputBottomLeft.value
  let valueTL = inputTopLeft.value

  allBordersShow.innerHTML = ''
  allBordersShow.innerHTML = `Top Right: ${valueTR + selectedUnit} Bottom Right: ${valueBR + selectedUnit} Bottom Left: ${valueBL + selectedUnit} Top left: ${valueTL + selectedUnit}`

  applyToTR(valueTR)
  applyToBR(valueBR)
  applyToBL(valueBL)
  applyToTL(valueTL)
})

// Functions
const applyBorderRadius = () => {
  boxStyle.borderRadius = inputValue + selectedUnit
}

const applyToTR = (valueTR) => {
  boxStyle.borderTopRightRadius = valueTR + selectedUnit
}

const applyToBR = (valueBR) => {
  boxStyle.borderBottomRightRadius = valueBR + selectedUnit
}

const applyToBL = (valueBL) => {
  boxStyle.borderBottomLeftRadius = valueBL + selectedUnit
}

const applyToTL = (valueTL) => {
  boxStyle.borderTopLeftRadius = valueTL + selectedUnit
}