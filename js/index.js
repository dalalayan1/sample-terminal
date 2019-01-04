var AT = AT || {};

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

	function initializeAutoTyping() {
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
	}

	function init() {
		initializeAutoTyping();
	}

	function focusUserInput() {
		userInput.focus();
	}

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
		focusUserInput();
	}

	document.addEventListener("click", function(evt) {
		evt.preventDefault();
		focusUserInput();
	});

	userInput.addEventListener("keyup", function(evt) {
		userInputVal.innerHTML = userInputVal.innerHTML + evt.target.value;
		latestInput = userInputVal.innerHTML;
		evt.target.value = '';
	});

	userInputForm.addEventListener("submit", function(evt) {
		evt.preventDefault();
		console.log(latestInput);
		handleInput(latestInput);
		latestInput = '';
		resetCommandLine();
	});

	const contentsArr = ["Resume","Pic","Skills","About"]

	function handleInput(latestInput) {
		pasteBox.contains(box) && pasteBox.removeChild(box);
		pasteBox.innerHTML = pasteBox.innerHTML + '</br>';
		switch(latestInput) {
			case 'ls':
				contentsArr.forEach(content => pasteBox.innerHTML = pasteBox.innerHTML + content + " ");
				break;
			default:
				pasteBox.innerHTML = pasteBox.innerHTML + '-bash: ' + latestInput +': command not found';
		}
	}

	init();
};