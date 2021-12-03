var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#txt-output");

var serverURL = "https://api.funtranslations.com/translate/morse.json";

function getTranslationURL(text) {
	return serverURL + "?text=" + text;
}
function errorHandler(error) {
	console.log("Error occurred,", error);
	alert("Something wrong with server: try again after some time");
}
function clickEventHandler() {
	let inputText = txtInput.value;
	fetch(getTranslationURL(inputText))
		.then((response) => response.json())
		.then((jsonString) => (outputDiv.value = jsonString.contents.translated))
		.catch(errorHandler);
}

btnTranslate.addEventListener("click", clickEventHandler);
