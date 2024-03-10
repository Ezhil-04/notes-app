const textnote=document.getElementById("textnote")
const addbtn=document.getElementById("add")
const box2=document.querySelector(".box2")
addbtn.addEventListener("click",addnote)
getItem()
function addnote()
{
  
    const note=document.createElement("div")
    note.classList.add("boxes")
    note.style.overflow="auto"
box2.appendChild(note)
    let text=textnote.value;
    note.textContent=text;
    textnote.value=""
    savedata();

}

function savedata()
{
    localStorage.setItem("data",box2.innerHTML);
}

function getItem()
{
    box2.value=localStorage.getItem("data")
}