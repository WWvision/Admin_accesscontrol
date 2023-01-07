function toggleAddVisitor(){
    let con = document.getElementById("Visitor_Input_Area");
    if(con.style.display == "none"){
        con.style.display = "block";
    }else{
        con.style.display = "none";
    }
}
function Visitor(NameStr){
    localStorage.setItem('VisitorInfo', NameStr);
    let link1 = window.open('./test.html', '_blank');
    link1.focus();
}