function convertBinaryToDecimal() {
  const binaryInput = document.getElementById("binaryInput").value;
  const binaryRegex = /^[01]{1,8}$/;

  if (!binaryRegex.test(binaryInput)) {
    alert("Please enter a valid binary number (up to 8 digits: 0 or 1).");
    return;
  }

  const decimalOutput = parseInt(binaryInput, 2);
  document.getElementById("result").textContent = `Decimal Equivalent: ${decimalOutput}`;
}

const convert = document.getElementById("convert")
convert.addEventListener("click", () => {
  convertBinaryToDecimal()
})