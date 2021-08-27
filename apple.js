


let mou=document.querySelector(".circle");
let navlink=document.querySelectorAll(".link")
window.addEventListener('mousemove',gulgul);
function gulgul(e){
mou.style.top=e.pageY+'px';
mou.style.left=e.pageX+'px';
}
navlink.forEach(link=>{
link.addEventListener('mouseleave',()=>{
    mou.classList.remove('mouseeff')
})
link.addEventListener('mouseover',()=>{
    mou.classList.add('mouseeff')
})
})
let m=document.querySelector(".my-ele")
let job=document.querySelector(".job")
let b="Shashank"
let s="Web-developer"


for (let i = 0; i <s.length; i++){
    var node = document.createElement("SPAN"); 
    node.className=`ani`              // Create a <li> node
var textnode = document.createTextNode(s[i]);         // Create a text node
node.appendChild(textnode);                              // Append the text to <li>
document.getElementById("yo").appendChild(node);
}
for (let i = 0; i <b.length; i++){
   
    var node = document.createElement("SPAN"); 
    node.className=`job1`              // Create a <li> node
var textnode = document.createTextNode(b[i]);         // Create a text node
node.appendChild(textnode);                              // Append the text to <li>
document.getElementById("title").appendChild(node);
}

let anim=document.querySelectorAll(".ani")
let jobs=document.querySelectorAll(".job1")
jobs.forEach(spun=>{
    spun.addEventListener('mouseover',()=>{
        spun.classList.add("my-job")
    })
    spun.addEventListener('mouseleave',()=>{
        spun.classList.remove("my-job")
    })
})
anim.forEach(spun=>{
    spun.addEventListener('mouseover',()=>{
        spun.classList.add("my-element")
    })
    spun.addEventListener('mouseleave',()=>{
        spun.classList.remove("my-element")
    })
})
console.log(m)


