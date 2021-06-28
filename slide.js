var mybutton = document.getElementById("goTop");
document.body.onscroll= function() { 
	scrollFunction()};
function scrollFunction() {
  if(document.body.scrollTop>20 || document.documentElement.scrollTop>20){
    mybutton.style.display= "block";
  } 
  else{
    mybutton.style.display= "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}

function showNav(){
	var nav = document.getElementById('navigation');
	var close_btn = document.getElementById('close');
	var show_btn = document.getElementById('show');
	show_btn.style.display="none";
	nav.style.width="150px";
	close_btn.style.display="block";
}
function closeNav(){
	var nav = document.getElementById('navigation');
	var show_btn = document.getElementById('show');
	var close_btn = document.getElementById('close');
	close_btn.style.display="none";
	show_btn.style.display="block";
	nav.style.width="0px";
}