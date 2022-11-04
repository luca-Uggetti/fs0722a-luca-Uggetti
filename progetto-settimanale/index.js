//inizio condizioni per l'aggiunta di caratteri
function addChar(input, character) {
	if(input.value == null || input.value == "0"){
		input.value = character
    }else
		input.value += character
}//fine

//inizio dichiarazione dell'operazione coseno
function cos(form) {
	form.display.value = Math.cos(form.display.value);
}//fine

//inizio dichiarazione dell'operazione sin
function sin(form) {
	form.display.value = Math.sin(form.display.value);
}//fine

//inizio dichiarazione dell'operazione tangente
function tan(form) {
	form.display.value = Math.tan(form.display.value);
}//fine

//inizio dichiarazione dell'operazione "radice-quadrata"
function sqrt(form) {
	form.display.value = Math.sqrt(form.display.value);
}//fine

//logaritmo naturale
function ln(form) {
	form.display.value = Math.log(form.display.value);
}//fine

//funzione esponenziale
function exp(form) {
	form.display.value = Math.exp(form.display.value);
}//fine

//inizio dichiarazione condizioni al cliccare il tasto cancella
function deleteChar(input) {
	input.value = input.value.substring(0, input.value.length - 1)
}
//fine

//funzione percentuale
var val = 0.0;
function percent(input) {
  val = input.value;
  input.value = input.value + "%";
}//fine 

//inizio dichiarazioni per la quale mi vada a sovrasrivere più bottoni se li dovessi schiacciare consecutivamente
function changeSign(input) {
	if(input.value.substring(0, 1) == "-")
		input.value = input.value.substring(1, input.value.length)
	else
		input.value = "-" + input.value
}

//inizio dichiarazione di cosa mi deve fare il tasto uguale quando lo premo
function compute(form) {

    form.display.value = eval(form.display.value);
  }
  //fine


function square(form) {
	form.display.value = eval(form.display.value) * eval(form.display.value)
}

//inizio condizioni per il quale è accettato un numero
function checkNum(str) {
	for (var i = 0; i < str.length; i++) {
		var ch = str.charAt(i);
		if (ch < "0" || ch > "9") {
			if (ch != "/" && ch != "*" && ch != "+" && ch != "-" && ch != "."
				&& ch != "(" && ch!= ")" && ch != "%") {
				alert("invalid entry!")
				return false
				}
			}
		}
		return true
}
//fine
