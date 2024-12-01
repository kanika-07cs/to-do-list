let userinput=document.getElementById("enter");
let additems=document.getElementById("additems");
let listitems=document.getElementById("list");
additems.addEventListener("click", addItems);

function addItems(){
    if(userinput.value===""){
        return null;
    }
    let li=document.createElement("li");
    li.innerText=userinput.value;
    listitems.appendChild(li);

    let deleteBtn =document.createElement("button");
    deleteBtn.innerText="Delete";

    let editBtn=document.createElement("button");
    editBtn.innerText="Edit";

    li.appendChild(deleteBtn);
    li.appendChild(editBtn);

    deleteBtn.addEventListener("click",function(){
        listitems.removeChild(li);
    });

    editBtn.addEventListener("click",function(){
        let editText=prompt();
        if(editText==null || editText==""){
            return null;
        }
        li.innerText=editText;
        li.appendChild(deleteBtn);
        li.appendChild(editBtn);
    })

    userinput.value="";
}
