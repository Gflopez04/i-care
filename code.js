var state=false;
function toggle(){
    if(state){
        document.getElementById("password").setAttribute("type","password");
        document.getElementById("eye").style.color='#d7ddd8';
        state=false;
    }
    else{
        document.getElementById("password").setAttribute("type","text");
        document.getElementById("eye").style.color='#88c999';
        state=true;
    }
}