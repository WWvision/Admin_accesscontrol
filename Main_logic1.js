function toggleNotion(){
    let Notion_con = document.getElementById("Notion_opened_div");
    if(Notion_con.style.display =="none"){
        Notion_con.style.display = "block";
    } else
        Notion_con.style.display = "none";
}
function toggleOfficeP3(){
    let OfficeP3_con = document.getElementById("OfficeP3_opened_div");
    if(OfficeP3_con.style.display =="none"){
        OfficeP3_con.style.display = "block";
    } else
        OfficeP3_con.style.display = "none";
}
function toggleReport(){
    let Report_con = document.getElementById("Report_opened_div");
    if(Report_con.style.display =="none"){
        Report_con.style.display = "block";
    } else
        Report_con.style.display = "none";
}
function toggleEtc(){
    let Etc_con = document.getElementById("Etc_opened_div");
    if(Etc_con.style.display =="none"){
        Etc_con.style.display = "block";
    } else
        Etc_con.style.display = "none";
}

function copyClipboard(msg){//msg에 해당하는 내용을 복사하는 함수
    let text = msg;
    const textarea = document.createElement('textarea');
    textarea.textContent = text;
    document.body.append(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert("복사되었습니다!");
}

function copy_Report1(){
    let Report1_msg = document.getElementById("Report1").value;
    copyClipboard(Report1_msg);
}
function copy_Report2(){
    let Report2_msg = document.getElementById("Report2").value;
    copyClipboard(Report2_msg);
}
function copy_Report3_1(){
    let Report3_1_msg = document.getElementById("Report3_1").value;
    copyClipboard(Report3_1_msg);
}
function copy_Report3_2(){
    let Report3_2_msg = document.getElementById("Report3_2").value;
    copyClipboard(Report3_2_msg);
}
function copy_Report3_3(){
    let Report3_3_msg = document.getElementById("Report3_3").value;
    copyClipboard(Report3_3_msg);
}
function copy_Report3_4(){
    let Report3_4_msg = document.getElementById("Report3_4").value;
    copyClipboard(Report3_4_msg);
}
function copy_Report4(){
    let Report4_msg = "이상없습니다.";
    copyClipboard(Report4_msg);
}
function activeAlarmCheck(){//인수인계 사항의 글쓰기 기능에서 알람 관련 함수
    let is_check = document.getElementById('Notion_posts_AlarmCheck').checked;
    let inp_cycle = document.getElementById('AlarmCheck_cycle');
	let inp_time = document.getElementById('AlarmCheck_time');
	if(is_check){//알람여부에 체크
		//체크 되어있다면 활성화
        inp_cycle.disabled = false;
        inp_time.disabled = false;
	} else {
		//체크가 안되어있다면 비활성화
		inp_cycle.disabled = true;
        inp_time.disabled = true;
	}
}
