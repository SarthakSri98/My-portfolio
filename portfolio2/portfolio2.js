
window.onload = function(){
// for animation effect of images on hovering
$(document).ready(function(){
  $('img').on({
    mouseover:function(){
     $(this).addClass('animated tada');
    }
  });
  $('img').on({
    mouseout:function(){
     $(this).removeClass('animated tada');
    }
  });
});
// for the home page my pic animation
var arr = ["url('bio%20page.jpg')","url('bio%20page1.jpg')",];

	function trans()

	{
       var x = document.getElementById('bg');

       var y = Math.floor(Math.random()*4);
       x.style.backgroundImage = arr[y];
	}

 function rep()
 {
   var x = setInterval(trans,30);
   setTimeout(function(){
             clearInterval(x);
   },40);
}
rep();
setInterval(rep,800);   
}


