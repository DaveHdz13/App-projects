// Inputs
const myInputElement = document.getElementById("myInput")
const unitsDivs = document.querySelectorAll('.units');
const inputTopRight = document.getElementById("myInput-TR")
const inputBottomRight = document.getElementById("myInput-BR")
const inputBottomLeft = document.getElementById("myInput-BL")
const inputTopLeft = document.getElementById("myInput-TL")
// To CSS
const cssResult = document.getElementById("cssResult")


// Buttons
const allBordersBtn = document.getElementById("allBordersBtn")
const eachBorderBtn = document.getElementById("eachBorderBtn")

// Result
const boxStyle = document.getElementById("box").style
const copyCss = document.getElementById("copyCss")

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

  applyBorderRadius()

  cssResult.value = ''
  cssResult.value = `border-radius: ${boxStyle.borderRadius};`
})

eachBorderBtn.addEventListener("click", () => {
  let valueTR = inputTopRight.value
  let valueBR = inputBottomRight.value
  let valueBL = inputBottomLeft.value
  let valueTL = inputTopLeft.value

  applyToTR(valueTR)
  applyToBR(valueBR)
  applyToBL(valueBL)
  applyToTL(valueTL)
  
  cssResult.value = `border-radius: ${boxStyle.borderRadius};`
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

const copyClip = () => {
  copyCss.addEventListener("click", () => {
    cssResult.select();
    cssResult.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(cssResult.value);

    // Alert the copied text
    alert("Copied the text: " + cssResult.value);
  })
}

if (copyCss) {
  copyClip()
}