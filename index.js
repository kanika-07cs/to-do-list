const input=document.getElementsByClassName("enter");
const list=document.getElementsByClassName("list");
function addTask(){
    if(input===''){
        alert("Please enter something");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=input.value;
        list.appendChild(li);
    }
}