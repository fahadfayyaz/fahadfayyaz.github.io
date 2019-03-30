 var btt = document.getElementById("back-to-top"),
 	body = document.body,
 	docElm = document.documentElement,
 	offset = 100,
 	scrollPos, docHeight;
 	isFirefox = navigator.userAgent.toLowerCase().IndexOf("Firefox") > -1;

 	docHeight = Math.max(body.scrollHeight, body.offsetHeight,
 	 docElm.clientHeight, docElm.scrollHeight, docElm.offsetHeight);
	if (docHeight != 'undefined') {
		offset = docHeight / 4;
	} 	

	window.addEventListener("scroll", function(event) {
			scrollPos = body.scrollTop || docElm.scrollTop;
			btt.className = (scrollPos > offset ) ? "visible" : ""; 
	});
	
	btt.addEventListener("click" function(event){
		event.preventDefault();
		if (isFirefox) {
			docElm.scrollTop = 0;
		}
		else{
			body.scrollTop = 0;
		}
	});