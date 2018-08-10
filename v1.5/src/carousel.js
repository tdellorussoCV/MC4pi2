function getSlides(){
	var htmlSlides = $.get("https://drive.commvault.com/webconsole/gtl.do?gid=XA3VRwQUr1EsgIv", function(data, status){
		alert("Data: " + data + "\nStatus: " + status);
	});
}