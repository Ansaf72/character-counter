

function countwords() {

	let noc = document.getElementById('words').value.length;
	document.getElementById('showdata').innerHTML =noc;

	var remain= noc-288;
	document.getElementById('remaindata').innerHTML =remain;

}

function myFunction() {
  /* Get the text field */
  var copyText = document.getElementById("words");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);
  
  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
}

function ClearFields() {

     document.getElementById("words").value = "";
     
}



