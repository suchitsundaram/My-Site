
jQuery(document).ready(function() {
	onload();
 	
   	$('#l1').click(function(){
        $('#data1').show();
		$('#data2').hide();
		$('#data3').hide();
		$('#data4').hide();
	});
	
	
   	$('#l2').click(function(){
        $('#data1').hide();
		$('#data2').show();
		$('#data3').hide();
		$('#data4').hide();
	});


   	$('#l3').click(function(){
        $('#data1').hide();
        $('#data2').hide();
		$('#data3').show();
		$('#data4').hide();
	});

	$('#l4').click(function(){
        $('#data1').hide();
        $('#data2').hide();
		$('#data3').hide();
		$('#data4').show();
	});

	 
	$('footer').click(function(){
		$('#p1').show(500);
	}); 
	
	$('footer').mouseleave(function(){
		$('#p1').hide(500);
	});

	
});
 
 
 function onload()
 {
 	$('#data2').hide();
 	$('#data3').hide();
 	$('#data4').hide();
 	$('#p1').hide();
 }