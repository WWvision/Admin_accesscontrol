//탭메뉴바 관련 코드
const tabItem = document.querySelectorAll(".TestTab");
const tabContent = document.querySelectorAll(".TestContent");

tabItem.forEach((item)=>{
    item.addEventListener("click", tabHandler);
}
);

function tabHandler(item) {
    const tabTarget = item.currentTarget;
    const target = tabTarget.dataset.tab;
    tabItem.forEach((title)=>{
        title.classList.remove("active");
    }
    );
    tabContent.forEach((target)=>{
        target.classList.remove("target");
    }
    );
    document.querySelector("#" + target).classList.add("target");
    tabTarget.classList.add("active");
}

//새 탭에서 URL여는 함수 
function openVisitor(){
    let link1 = window.open('./Visitor_part/Visitor_part.html', '_blank');
    link1.focus();
}
function openOfficeP1(){
    let link2 = window.open('./Office_part1/Office_part1.html', '_blank');
    link2.focus();
}
function openOfficeP2(){
    let link3 = window.open('./Office_part2/Office_part2.html', '_blank');
    link3.focus();
}
function openOfficeP3(){
    let link4 = window.open('./Office_part3/Office_part3.html', '_blank');
    link4.focus();
}