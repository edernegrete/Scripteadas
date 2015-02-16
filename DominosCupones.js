var letraCupon = 'A'
var trigger =  $('.ui-btn.ui-input-btn.ui-btn-c.ui-corner-all.ui-shadow.ui-btn-inline.ui-mini.ui-icon-check.ui-btn-icon-left > input');

for (var i = 0; i<=100; i++){	
	$('#couponCode_a').val(letraCupon+i)
 	$(trigger).click();
}

