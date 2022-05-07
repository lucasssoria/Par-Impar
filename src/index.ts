let number = document.getElementById("data");
let btnSend = document.getElementById("btnSend");

btnSend.addEventListener("click", () => {
  if (Number(number.value) === 0) {
    console.log("Su numero es 0.");
  } else if (Number(number.value) % 2 == 0) {
    console.log("Su numero es par.");
  } else {
    console.log("Su numero es impar.");
  }
});

// incio
// solicitud de su numero
// verifico el valor de su numero
// en caso de ser 0 se informa
// de lo contrario se realiza una operacion matematica para ver si es par o impar
// se informa
// fin
