//가장 최근에 저장된 날짜 불러와 설정하기 [초기]
var Load_latestTime = localStorage.getItem("lastestTime");
var Today = document.getElementById("TodayDate_val");
if(Load_latestTime != null){
    Today.setAttribute("value", Load_latestTime);
} else {
	var times = new Date();
	var year = times.getFullYear();
	var month = times.getMonth() + 1;
	var day = times.getDate();
	Today.setAttribute("value", year + "-" + month + "-" + day);
}
//설정된 날짜의 데이터 조회 [초기]
var current_Time = document.getElementById("TodayDate_val").value;
var Loaded_Today_SessionData = localStorage.getItem(eval("'"+ current_Time +"_SessionData'"));
var Loaded_Today_HistoryData = localStorage.getItem(eval("'"+ current_Time +"_HistoryData'"));
if(Loaded_Today_SessionData != null){
    //if 설정된 날짜의 저장된 정보가 있을때

    
    //1. 이미 배차명령서를 통해 세션을 생성했으므로 배차명령서 추가 버튼만 활성화
    Disabled_btn();
    //2. 설정된 날짜의 세션 데이터를 불러와서 세팅
    //   세션 데이터 : 입퇴영버튼 시간값 / 선탑자,운행종류,차량정보,목적지,용무,비고 / Div 배경색깔
    //3. 설정된 날짜의 히스토리 데이터 불러와서 초기 세팅
    //   히스토리 데이터 : 입퇴영, 출입시간, 선탑자, 운행종류, 차량정보, 목적지, 용무 / Div 배경색깔

} else {
    //else 설정된 날짜의 이전 정보가 없을때 [초기]
    //새로운 날짜 저장
    
    //1. 배차명령서 입력 버튼 활성화
    //2. 그 이외에는 아무값도 없음
    var saving_time = document.getElementById("TodayDate_val").value;
    localStorage.setItem(eval("'"+saving_time+"List_data'"), saving_time);
    //var loading_time = localStorage.getItem(eval("'"+saving_time+"List_data'"));
}







//저장 > 특정이벤트를 감지할때마다 저장
//불러오기 > 페이지가 로드될때(초기값)
//세션 데이터 저장       > 세션값이 변할때마다 날짜값과 함께 저장 
//해당 날짜 :히스토리 데이터 저장   > 히스토리값이 변할때마다 날짜값과 함께 저장

function autoSave_ViewBox(){//자동저장 - 입퇴영현황 세션
	var MaxCount = document.getElementById('view_box').childElementCount - 1;
	if(SessionDiv_arr != 0){
		SessionDiv_arr = new Array();
	}
	for(var count=0; count < MaxCount;count++){
		var Session_obj = new Object();
		//%%Session_obj.div_color = document.getElementById(eval("'officerList"+count+"'")).value;
		Session_obj.coming_btn = document.getElementById(eval("'coming_"+count+"'")).value;
		Session_obj.going_btn = document.getElementById(eval("'going_"+count+"'")).value;
		Session_obj.name_inp = document.getElementById(eval("'ofc_name_"+count+"'")).value;
		Session_obj.type_inp = document.getElementById(eval("'ofc_type_"+count+"'")).value;
		Session_obj.carInfo_inp = document.getElementById(eval("'ofc_carInfo_"+count+"'")).value;
		Session_obj.destination_inp = document.getElementById(eval("'ofc_destination_"+count+"'")).value;
		Session_obj.business_inp = document.getElementById(eval("'ofc_business_"+count+"'")).value;
		Session_obj.remark_inp = document.getElementById(eval("'ofc_remark_"+count+"'")).value;
		console.log(count + "번째 세션 :");
		console.log(Session_obj);
		SessionDiv_arr.push(Session_obj);
	}
	localStorage.setItem("SessionDiv_data", JSON.stringify(SessionDiv_arr));
	console.log("현재 세션 데이터가 저장되었습니다");
}

function loadData_ViewBox(){//초기값 불러오기 - 입퇴영현황 세션 
	var Session_data = localStorage.getItem("SessionDiv_data");
	if(Session_data != null){
		SessionDiv_arr = JSON.parse(Session_data);
		console.log("세션 데이터 불러오기");
		console.log(SessionDiv_arr);
		make_officerList(SessionDiv_arr);
	}
}

function autoSave_HistoryList(){//자동저장 - 히스토리 데이터
	localStorage.setItem("HistoryList_data", JSON.stringify(TodayOfficeList_arr));
	console.log("입퇴영기록 데이터가 저장되었습니다");
}
function loadData_HistoryList(){//초기값 불러오기 - 히스토리 데이터  
	var History_data = localStorage.getItem("HistoryList_data");
	if(History_data != null){
		TodayOfficeList_arr = JSON.parse(History_data);
		console.log("입퇴영기록 데이터 불러오기");
		console.log(TodayOfficeList_arr);
		make_historyList();
	}
}