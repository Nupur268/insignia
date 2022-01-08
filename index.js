function myFunction(){
    var x = document.getElementById("myInput");
if (x.type === "password") {
x.type = "text";

} else {
x.type = "password";
}
}
function mFunction(){
    var x = document.getElementById("pass-hidden");
if (x.type === "password") {
x.type = "text";

} else {
x.type = "password";
}
}

var x=document.getElementById('login');
var y=document.getElementById('register');
var z=document.getElementById('btn');

function register()
{
    x.style.left='-400px';
    y.style.left='50px';
    z.style.left='110px';

}
function login()
{
    x.style.left='50px';
    y.style.left='450px';
    z.style.left='0px';
}



// learn more
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var mbtn = document.getElementById("mBtn");
mbtn.onclick = function() {
    modal.style.display = "block";
  }

  var myybtn = document.getElementById("myyBtn");
  myybtn.onclick = function() {
    modal.style.display = "block";
  }
  var myyybtn = document.getElementById("myyyBtn");
  myyybtn.onclick = function() {
    modal.style.display = "block";
  }
  var myyyybtn = document.getElementById("myyyyBtn");
  myyyybtn.onclick = function() {
    modal.style.display = "block";
  }
  var myyyyybtn = document.getElementById("myyyyyBtn");
  myyyyybtn.onclick = function() {
    modal.style.display = "block";
  }


//   download
var n=document.getElementById("down_load").addEventListener("click",handleclick)
function handleclick(){
    alert("Download started")
}
// var x=document.getElementById("join_us").addEventListener("click",handleclick1)
// function handleclick1(){
//     alert("Successfully Joined!!")
// }

