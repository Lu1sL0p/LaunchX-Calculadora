let n;
let m;
let exp;
let c = document.getElementById("help");

function raiz() {
    n = document.getElementById("xd").value;
    exp = Math.sqrt(n);
    document.calculator.salida.value = exp;
}

function potencia() {
  n = document.getElementById("xd").value;
  document.calculator.salida.value = "";
  c.click;

  setTimeout(() => {
    m = document.getElementById("xd").value;
    exp = Math.pow(n, m);
    document.calculator.salida.value = exp;
  }, 3000);
}
