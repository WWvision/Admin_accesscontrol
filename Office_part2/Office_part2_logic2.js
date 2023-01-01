function toggleGoWork(){//배차명령서 추가 토글 버튼
	let con = document.getElementById("GoWork_Box");
	if(con.style.display == "none"){
		con.style.display = "block";
	} else {
		con.style.display = "none" ;
		}
}
function toggleOffWork(){//배차명령서 추가 토글 버튼
	let con = document.getElementById("OffWork_Box");
	if(con.style.display == "none"){
		con.style.display = "block";
	} else {
		con.style.display = "none" ;
		}
}


function copyClipBoard(txt){//해당 함수를 호출하면 원하는 텍스트를 복사
	const textarea = document.createElement('textarea');
	textarea.textContent = txt;
	document.body.append(textarea);
	textarea.select();
	document.execCommand('copy');
	textarea.remove();
}