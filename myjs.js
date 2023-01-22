$(document).ready(function(){

$('#tour').on("click", function(e){
//	alert("hi")
	$('#ssh').hide();
	$('#jsh').hide();
	$('#sjh').hide();
	$('#sjhj').hide();
});

$('#ss').on("click", function(e){
//	alert("hi")
	$('#sjh').hide()
	$('#jsh').hide()
	$('#sjhj').hide();

});

$('#sj').on("click", function(e){
	$('#ssh').hide()
	$('#jsh').hide()
	$('#sjhj').hide();
	//alert("sj")
});
$('#js').on("click", function(e){
	$('#sjh').hide()
	$('#ssh').hide()
	$('#sjhj').hide();
	//alert("sj")
});
$('#sjj').on("click", function(e){
	$('#sjh').hide()
	$('#ssh').hide()
	$('#jsh').hide()
	//alert("sj")
});

$('#tour1').on("click", function(e){
//	alert("hi")
	$('#ssh1').hide();
	$('#ssh2').hide();
	$('#jsh1').hide();
	$('#jsh2').hide();
});

$('#ss1').on("click", function(e){
//	alert("hi")
	$('#jsh1').hide()
	$('#jsh2').hide()

});

$('#js1').on("click", function(e){
//	alert("hi")
	$('#ssh1').hide()
	$('#ssh2').hide()

});





});