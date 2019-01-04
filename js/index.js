var AT = AT || {};

// $(document).ready(function(){
	
// });

window.onload = function() {
	var box = document.getElementById("box"),
		pasteBox = document.getElementById("paste"),
		name = document.getElementById("name"),
		texts = Array.from(document.getElementsByClassName("copy")),
		charsArr,
		countIdx = 0;

	texts.forEach(function(eachText, outerIdx) {
		charsArr = Array.from(eachText.innerText);
		charsArr.forEach(function(char, innerIdx) {
			countIdx++;
			setTimeout(function() {
				pasteBox.contains(box) && pasteBox.removeChild(box);
				pasteBox.innerHTML = pasteBox.innerHTML + char;
				pasteBox.appendChild(box);
				if (innerIdx === texts[outerIdx].innerHTML.length - 1) {
					pasteBox.contains(box) && pasteBox.removeChild(box);
					pasteBox.innerHTML = pasteBox.innerHTML + '</br>';
					if(outerIdx == texts.length - 1) {
						name.classList.remove("hide");
						pasteBox.appendChild(name);
						pasteBox.appendChild(box);
						box.classList.add("blink");
						acceptInputFromUser();
					}
				}
			}, countIdx * 100);
		});
	});


	function acceptInputFromUser() {
		//append input to read user data
	}

};