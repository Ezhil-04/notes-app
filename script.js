const textnote=document.getElementById("textnote")
const addbtn=document.getElementById("add")
const box2=document.querySelector(".box2")
addbtn.addEventListener("click",addnote)
getItem()
function addnote()
{

    if(textnote.value=="")
    { alert("write something to add")
   
    }
    else{  
 
        const paragraph=document.createElement("p");
        paragraph.setAttribute("contenteditable","true")
        paragraph.id="para"
        let text=textnote.value;
        let textnode=document.createTextNode(text)
        paragraph.appendChild(textnode)
    
      
        textnote.value=""
        paragraph.classList.add("boxes")
        paragraph.style.overflow="auto"
    box2.appendChild(paragraph)
    const del=document.createElement("img")
    del.src="pic/trash-bin.png"
    del.id="delete"
    paragraph.appendChild(del)
        
       
        savedata();
    }
     

}

box2.addEventListener("click",(e)=>{
    if(e.target.tagName==="IMG")
    {
        e.target.parentElement.remove();
        updatestorage()
    }
    if(e.target.tagName==="P"){
        let curbox=document.querySelectorAll(".boxes")
    curbox.forEach(l =>{
        l.onkeyup=function(){
            updatestorage()
        }

      })
      }})


function savedata()
{
    localStorage.setItem("data",box2.innerHTML);
}

function getItem()
{
    box2.innerHTML=localStorage.getItem("data")
}

function updatestorage(){
    localStorage.setItem("data",box2.innerHTML)
}
// localStorage.setItem("data",box2.innerHTML);
document.addEventListener("keydown",e=>{
    if(e.key==="Enter"){
        document.execCommand("insertLineBreak")
        e.preventDefault();
    }
})
