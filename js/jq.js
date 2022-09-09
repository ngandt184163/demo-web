 $(function(){
 	var docao = $(window).height();
	 $('.container-1').css({'height': docao});
	 console.log('ngan1');

	 $(window).resize(function(){
	 	console.log('ngan2');
	 	var docao = $(window).height();
	 	$('.container-1').css({'height': docao});
	 });

	 // khi click thi hien menu an
	 $('.menu-phai').click(function(){
	 	console.log('ngan');
	 	$('.menu-an').addClass('ra');
	 	return false;
	 });
	 // click vao an menu di
	 $('.nut-x').click(function(){
	 	console.log('ngan');
	 	$('.menu-an').removeClass('ra');
	 	return false;
	 });

	 // hieu ung truot body
	 $('a.btn.btn-default').click(function(){
	 	$('body').animate({
	 		scrollTop:$('.container-2').offset().top
	 	})
	 })
})  