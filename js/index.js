var AT = AT || {};

// $(document).ready(function(){
	
// });

window.onload = function() {
	var box = document.getElementById("box"),
		pasteBox = document.getElementById("paste"),
		name = document.getElementById("name"),
		userInput = document.getElementById("takeInput"),
		userInputForm = document.getElementById("userInputForm"),
		texts = Array.from(document.getElementsByClassName("copy")),
		userInputVal,
		charsArr,
		countIdx = 0,
		latestInput = '';

	texts.forEach(function(eachText, outerIdx) {
		charsArr = Array.from(eachText.innerText);
		charsArr.forEach(function(char, innerIdx) {
			countIdx++;
			setTimeout(function() {
				pasteBox.contains(box) && pasteBox.removeChild(box);
				pasteBox.innerHTML = pasteBox.innerHTML + char;
				pasteBox.appendChild(box);
				if (innerIdx === texts[outerIdx].innerHTML.length - 1) {
					if(outerIdx == texts.length - 1) {
						resetCommandLine();
					}
					else {
						pasteBox.contains(box) && pasteBox.removeChild(box);
						pasteBox.innerHTML = pasteBox.innerHTML + '</br>';
					}
				}
			}, countIdx * 100);
		});
	});

	function resetCommandLine() {
		pasteBox.contains(box) && pasteBox.removeChild(box);
		pasteBox.innerHTML = pasteBox.innerHTML + '</br>';
		userInputVal = document.createElement("span");
		userInputVal.id = "userInputVal";
		name.classList.remove("hide");
		pasteBox.appendChild(name);
		pasteBox.appendChild(userInputVal);
		pasteBox.appendChild(box);
		box.classList.add("blink");
		acceptInputFromUser();
	}

	function acceptInputFromUser() {
		//append input to read user data
		userInput.focus();
	}

	userInput.addEventListener("keyup", function(evt) {
		userInputVal.innerHTML = userInputVal.innerHTML + evt.target.value;
		latestInput = userInputVal.innerHTML;
		evt.target.value = '';
	});

	userInputForm.addEventListener("submit", function(evt) {
		evt.preventDefault();
		console.log(latestInput);
		latestInput = '';
		resetCommandLine();
	});

};