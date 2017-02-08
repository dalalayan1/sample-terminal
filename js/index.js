var AT = AT || {};

$(document).ready(function(){
	$('.box').each(function() {
	    var _this = $(this);
	    setInterval(function() {
	        if (_this.css('visibility') == 'hidden') {
	            _this.css('visibility', 'visible');
	        } else {
	            _this.css('visibility', 'hidden');
	        }    
	    }, 500);
	});
});

