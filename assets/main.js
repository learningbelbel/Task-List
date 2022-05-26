const boton = document.getElementById("boton")
const list  = document.getElementById("list")
const add = document.getElementById("add-new")
const form = document.getElementById("form")


const motivation = document.getElementById("motivation")
const closemotivation = document.getElementById("close-motivation")
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let li = document.createElement("li");
    li.className = "li"
    let checbox = document.createElement("input")
    checbox.type = "checkbox"
    checbox.className = "check"
    let content =  document.createTextNode(add.value)

    let ul =  document.createElement("ul");

    

    if(add.value == ""){
        add.placeholder = "Ingresa una tarea Valida";
        add.classList.replace("new-add","error");

    } else{

        li.appendChild(checbox)
        li.appendChild(content);

        ul.appendChild(li);
        list.appendChild(ul);
    }
})
boton.addEventListener("click",()=>{
    motivation.style.display ="block"
})
closemotivation.addEventListener("click",()=>{
    motivation.style.display = "none"
})