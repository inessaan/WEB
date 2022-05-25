
var i = 0;
var imgarr = new Array();

imgarr[0] = "./images/img1.jpg";
imgarr[1] = "./images/img2.jpg";
imgarr[2] = "./images/img3.jpg";
imgarr[3] = "./images/img4.jpg";

function change()
{
	if (i > imgarr.length-1) {i = 0}
	document.getElementById("myImg").src=imgarr[i];
	i++;
}