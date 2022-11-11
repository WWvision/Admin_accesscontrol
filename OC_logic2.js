function toggleAddnewList(){
	var con = document.getElementById("test");
	if(con.style.display == "none"){
		con.style.display = "block";
	} else {
		con.style.display = "none" ;
		}
}

function make_officerList(){
	var OfficerList_Input_Area = document.getElementById('view_box');
	var OfficerList_div = document.createElement('div');
	var num = "1";
	
	OfficerList_div.setAttribute("id",eval("'officerList"+num+"'")); //officerList1
	OfficerList_div.setAttribute("class","view_officerList");
	//OfficerList_div.setAttribute('style',');
	OfficerList_Input_Area.appendChild(OfficerList_div);
	
	var access_button = document.createElement('div');
	access_button.setAttribute("id","div_access_button");
	
		var val1 = 'Coming("officerList' + num + '","coming_' + num + '")';
		var val2 = 'Going("officerList' + num + '","going_' + num + '")';
	
		var button1 = document.createElement('input');
		button1.setAttribute('type','button');
		button1.setAttribute('id', eval("'coming_"+num+"'"));//coming_1
		button1.setAttribute('onclick',eval("'"+ val1 +"'"));//Coming("officerList1","coming_1")
		button1.setAttribute('value','입영');
		button1.setAttribute('style','display :inline-block;');
		access_button.appendChild(button1);
		
		var enter = document.createElement('br');
		access_button.appendChild(enter);
		
		var button2 = document.createElement('input');
		button2.setAttribute('type','button');
		button2.setAttribute('id', eval("'going_"+num+"'"));//going_1
		button2.setAttribute('onclick',eval("'"+ val2 +"'"));//Going("officerList1","going_1")
		button2.setAttribute('value','퇴영');
		button2.setAttribute('style','display: inline-block;');
		access_button.appendChild(button2);
		
	OfficerList_div.appendChild(access_button);
	
	
	var cell1 =  document.createElement('div');//이름
	cell1.setAttribute('class','div_cells');
		var input1 = document.createElement('input');
		input1.setAttribute('type','text');
		input1.setAttribute('class','div_input');
		input1.setAttribute('size','6');
		input1.setAttribute('value','김승주');
		cell1.appendChild(input1);
	OfficerList_div.appendChild(cell1);
	
	
	var cell2 =  document.createElement('div');//운행종류
	cell2.setAttribute('class','div_cells');
		var input2 = document.createElement('input');
		input2.setAttribute('type','text');
		input2.setAttribute('class','div_input');
		input2.setAttribute('size','6');
		input2.setAttribute('value','선탑');
		cell2.appendChild(input2);
	OfficerList_div.appendChild(cell2);
	
	
	var cell3 =  document.createElement('div');//차량정보
	cell3.setAttribute('class','div_cells');
		var input3 = document.createElement('input');
		input3.setAttribute('type','text');
		input3.setAttribute('class','div_input');
		input3.setAttribute('size','6');
		input3.setAttribute('value','렉스턴, 1685-1');
		cell3.appendChild(input3);
	OfficerList_div.appendChild(cell3);
	
	
	var cell4 =  document.createElement('div');//목적지
	cell4.setAttribute('class','div_cells');
		var input4 = document.createElement('input');
		input4.setAttribute('type','text');
		input4.setAttribute('class','div_input');
		input4.setAttribute('size','6');
		input4.setAttribute('value','횡성시내');
		cell4.appendChild(input4);
	OfficerList_div.appendChild(cell4);


	var cell5 =  document.createElement('div');//용무
	cell5.setAttribute('class','div_cells');
		var input5 = document.createElement('input');
		input5.setAttribute('type','text');
		input5.setAttribute('class','div_input');
		input5.setAttribute('size','6');
		input5.setAttribute('value','물품구매');
		cell5.appendChild(input5);
	OfficerList_div.appendChild(cell5);
	
	
	var cell6 =  document.createElement('div');//비고
	cell6.setAttribute('class','div_cells');
		var input6 = document.createElement('input');
		input6.setAttribute('type','text');
		input6.setAttribute('class','div_input');
		input6.setAttribute('size','6');
		input6.setAttribute('value','없음');
		cell6.appendChild(input6);
	OfficerList_div.appendChild(cell6);
}
make_officerList();