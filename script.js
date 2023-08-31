//your JS code here. If required.
//  const button = documnet.querySelector("form input[type ='button]'")
// const option = document.querySelector("#colorSelect");
// button.onclick()=>{
// 	const value = option.value;
// 	option.queryselectorAll("option").foreach(e=>{
// 		 if (e.textContent.trim()==value) {
// 		 	option.removeChild(e);
// 		 }
// 	} )
// }


const button = document.querySelector("form input[type='button']");
const options = document.querySelector("#colorSelect");

button.onclick = () => {
	// document.body.append(document.createTextNode(options.value));
	const value = options.value;
	document.querySelectorAll("option").forEach(e => {
		if (e.textContent.trim() == value) {
			options.removeChild(e);
		}
	})
}
