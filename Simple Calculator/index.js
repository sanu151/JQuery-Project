let resultField = $("#result");

function insertNumber(number) {
  let displayElement = resultField.val();
  resultField.val(displayElement + number);
}

function clearResult() {
  resultField.val("");
}

function persentage() {
  let result = eval(resultField.val());
  resultField.val(result / 100);
}

function plusMinus() {
  let presentValue = resultField.val();
  if (presentValue != "") {
    resultField.val(eval(resultField.val()) * -1);
  }
}

function calculte() {
  let result = eval(resultField.val());
  resultField.val(result);
}

function deleteNumber() {
  let presentValue = resultField.val();
  if (presentValue != "") {
    resultField.val(presentValue.slice(0, -1));
  }
}
