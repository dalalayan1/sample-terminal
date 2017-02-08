var AT = AT || {};

$(document).ready(function(){
	var copyArray = $('.copy');
	var copyText = '';
	var paste = $('.paste');
	var box = $('.box');
	var count = 0;
	var lengthArray = [];

	for(var i=0;i<copyArray.length;i++){
		if(i==copyArray.length-1){
			copyText = copyText + $($(copyArray)[i]).text();
		}
		else{
			copyText = copyText + $($(copyArray)[i]).text() + '\n';
		}
		
	}
	
	console.log(copyText);
	
	var copyTextLength = copyText.length;

	var	a = setInterval(function() {
	    	if(count<=copyTextLength){
	    			paste.append(copyText[count]);
	    	}
	    	else{
	    		return;
	    	}
	    	count++;
	    },100);


	var b = setInterval(function() {
	    	
    			if (box.css('visibility') == 'hidden') {
	            	box.css('visibility', 'visible');
	        	} 
		        else {
		            box.css('visibility', 'hidden');
		        } 
	          
	    }, 500);
	

});

