var AT = AT || {};

$(document).ready(function(){
	var copyArray = $('.copy');
	var copyText = '';
	var name = $('.name');
	var paste = $('.paste');
	var box = $('.box');
	var count = 0;
	var lengthArray = [];
	var begin = 0;

	function showmsg(text,i=1){
			setTimeout(function() {
					paste.append('<div>' + text + '</div><br>');
				
			}, 300*i);
	}

	function showchars(char,ind,length){
		if(ind == 0){
			paste.append('<span>'+char);
		}
		else if(ind==length-1){
			paste.append(char+'</span>');
		}
		else{
			paste.append();
		}
		
	}

	showmsg($(name).text());
	var command = 'intro';
	for(var i =0;i<command.length;i++){
		showchars(command[i],i+1,command.length)
	}
	for(var i =0;i<copyArray.length;i++){
		showmsg($(copyArray[i]).text(),i+2);
	}

	setInterval(function() {
	    	
    			if (box.css('visibility') == 'hidden') {
	            	box.css('visibility', 'visible');
	        	} 
		        else {
		            box.css('visibility', 'hidden');
		        } 
	          
	    }, 500);
	

});

