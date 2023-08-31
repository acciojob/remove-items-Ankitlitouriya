//your JS code here. If required.
 const button = documnet.querySelector("form input[type ='button]'")
const option = document.querySelector("#colorSelect");
button.onclick()=>{
	const value = option.value;
	option.queryselectorAll("option").foreach(e=>{
		 if (e.textContent.trim()==value) {
		 	option.removeChild(e);
		 }
	} )
}
