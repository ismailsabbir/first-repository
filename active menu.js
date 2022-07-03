const sections=document.querySelectorAll("section");
const navli=document.querySelectorAll(".container ul li");
window.addEventListener("scroll",()=>{
    let current="";
    sections.forEach(section=>{
        const sectiontop=section.offsetTop;
        const sectionheight=section.clientHeight;
        if(pageYOffset>=sectiontop-(sectionheight)/3){
            current=section.getAttribute("id");
        }
    })
 
    })
    navli.forEach(li=>{
        li.classList.remove("active");
        if(li.classList.contains(current)){
            li.classList.add("active");
        }
    })

