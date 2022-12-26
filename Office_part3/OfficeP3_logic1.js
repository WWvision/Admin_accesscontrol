function toggleInputOfficeP3(){
    let con = document.getElementById("OfficeP3_Input_Area");
    if(con.style.display == "none"){  
        con.style.display = "block";
    } else
        con.style.display = "none";
}

function addOfficeP3(){

}
var Today = document.getElementById("TodayDate_val");
var times = new Date();
var year = times.getFullYear();
var month = times.getMonth() + 1;
var day = times.getDate();
Today.setAttribute("value", year + "-" + month + "-" + day);


function toggleAddList(){//배차명령서 추가 토글 버튼
	let con = document.getElementById("input_add_content");
	if(con.style.display == "none"){
		con.style.display = "block";
		start_AddcarList_div();
	} else {
		con.style.display = "none" ;
		finish_AddcarList_div();
	}
}

function Add_data(){
	save_AddcarList_div();
	finish_AddcarList_div();
	start_AddcarList_div();
}
start_AddcarList_div();
function start_AddcarList_div(){//배차명령서 추가 페이지 생성
	let add_box_Area = document.getElementById("input_add_content");
	let Content_div = document.createElement('div');
	Content_div.setAttribute("id", "Add_Content_div");
	Content_div.setAttribute("class", "Add_carList");

        let input0 = document.createElement('input');//시간
        input0.setAttribute('type', 'time');
        input0.setAttribute('id', 'OfficeP3_Content_time');
        Content_div.appendChild(input0);

		let input1 = document.createElement('input');//이름
		input1.setAttribute('type', 'text');
		input1.setAttribute('id', 'OfficeP3_Content_name');
		input1.setAttribute('class', 'div_input');
		input1.setAttribute('style', 'width: 70px;');
		input1.setAttribute('placeholder', '이름');
		Content_div.appendChild(input1);

		let input2 = document.createElement('input');//소속
		input2.setAttribute('type', 'text');
		input2.setAttribute('id', 'OfficeP3_Content_company');
		input2.setAttribute('class', 'div_input');
		input2.setAttribute('style', 'width: 100px;');
		input2.setAttribute('placeholder', '소속');
		Content_div.appendChild(input2);

		let input3 = document.createElement('input');//차량정보
		input3.setAttribute('type', 'text');
		input3.setAttribute('id', 'OfficeP3_Content_carInfo');
		input3.setAttribute('class', 'div_input');
		input3.setAttribute('style', 'width: 180px;');
		input3.setAttribute('placeholder', '차종/차색/번호');
		Content_div.appendChild(input3);

		let input4 = document.createElement('input');//용무
		input4.setAttribute('type', 'text');
		input4.setAttribute('id', 'OfficeP3_Content_business');
		input4.setAttribute('class', 'div_input');
		input4.setAttribute('style', 'width: 140px;');
		input4.setAttribute('placeholder', '용무');
		Content_div.appendChild(input4);

		let input5 = document.createElement('input');//비고
		input5.setAttribute('type', 'text');
		input5.setAttribute('id', 'OfficeP3_Content_remark');
		input5.setAttribute('class', 'div_input');
		input5.setAttribute('style', 'width: 75px;');
		input5.setAttribute('placeholder', '비고');
		Content_div.appendChild(input5);

	add_box_Area.appendChild(Content_div);
}

function save_AddcarList_div(){
	Session_obj = new Object();
	Session_obj.time = document.getElementById("OfficeP3_Content_time").value;
	Session_obj.name = document.getElementById("OfficeP3_Content_name").value;
	Session_obj.company  = document.getElementById("OfficeP3_Content_company").value;
	Session_obj.carInfo = document.getElementById("OfficeP3_Content_carInfo").value;
	Session_obj.business = document.getElementById("OfficeP3_Content_business").value;
	Session_obj.remark = document.getElementById("OfficeP3_Content_remark").value;

	//final_arr.push(Session_obj);
	//create_officerList(final_arr.length-1);
}

function finish_AddcarList_div(){//배차명령서 삭제
	let parent = document.getElementById("input_add_content");
	let child = document.getElementById("Add_Content_div");
	parent.removeChild(child);
}
