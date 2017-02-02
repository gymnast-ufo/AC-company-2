$(document).ready(function(){
  $(document).on('change', function(){
  	var $first = Number($('#s1').val()),
  	$second = Number($('#s2').val()),
  	$third = Number($('#s3').val()),
  	$result = $first + $second + $third;
  	$('#result').text($result);
  });
});