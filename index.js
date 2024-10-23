const input=document.getElementById("enter");
const list=document.getElementById("list");

function addTask(){
    if(input.value===''){
        alert("Please enter something");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=input.value;
        list.appendChild(li);
        let cross=document.createElement("cross");
        cross.innerHTML="\u00d7";
        li.appendChild(cross);
    }
    input.value="";
}
list.addEventListener("click",function(on){
    if(on.target.tagName=="LI"){
        on.target.classList.toggle("checked");
    }
    else if(on.target.tagName=="CROSS"){
        on.target.parentElement.remove();
    }
},false)