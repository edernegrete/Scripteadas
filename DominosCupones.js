var cuponLetter = ['A', 'B', 'C', 'D']
var trigger =  $('.ui-btn.ui-input-btn.ui-btn-c.ui-corner-all.ui-shadow.ui-btn-inline.ui-mini.ui-icon-check.ui-btn-icon-left > input');

function submitCode (letter) {
	for (var i = 0; i<=100; i++){	
		$('#couponCode_a').val(letter+i)
	 	$(trigger).click();
	}
}

cuponLetter.forEach(function(letter){
   submitCode(letter);
});
