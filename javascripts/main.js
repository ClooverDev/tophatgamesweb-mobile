const footer_text = "<span style='font-size: 16px'><a href='https://twitter.com/tophatgamesofc'><span style='color:#c7f2ff'>Twitter/X</span></a> | <a href='https://youtube.com/@tophatgamesofc'><span style='color:#ffc7c7'>YouTube</span></a> | <a href='https://discord.com/invite/7YhtNaN95R'><span style='color: #c7c9ff'>Discord Server</span></a><br><span style='color:gold'>support:</span> support@tophatgames.net<br><span style='color:gold'>business:</span> business@tophatgames.net<br><br>© TopHat Games, 2021-2024</span>";		
document.getElementById("__footer").innerHTML = footer_text;

function isMobile() {
  const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  return regex.test(navigator.userAgent);
}

if (isMobile()) {
	console.log("user is on mobile!");
	if (window.location.hostname  == "www.tophatgames.net") {
		window.location.replace("https://m.tophatgames.net");
	}
} else {
	console.log("user is on desktop!");
	if (window.location.hostname  == "m.tophatgames.net") {
		window.location.replace("https://tophatgames.net");
	}
}

if (window.location.href == "https://m.tophatgames.net/index" || window.location.href == "https://m.tophatgames.net/index.html") {
	window.top.location.replace("https://m.tophatgames.net");
}

let home = document.getElementsByClassName("__NAV_logo");

const dir_test = "";
const dir_public = "https://m.tophatgames.net/"

const current_dir = dir_public;

function moveToPage(__URL) {
	/*
	checkCurrentPage();
	
	const is_sub = current_page_is_a_sub;
	const sub_type = cp_sub_type;
	
	if (is_sub) {
		if (sub_type == 0) {
			window.location = "../"+__URL;
		} else if (sub_type == 1) {
			window.location = "../../"+__URL;
		}
	} else {
		window.location = __URL;
	}
	*/
	
	window.location = __URL;
}

function moveTo__home() {
	moveToPage("index.html");
}

for (var i = 0; i < home.length; i++) {
    home[i].addEventListener('click', moveTo__home, false);
}