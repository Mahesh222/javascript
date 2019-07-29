const elements={
    html:document.documentElement,
    container:document.createElement("div")
    };
Alert=()=>{
const elements={
    html:document.documentElement,
    container:document.createElement("div")
};
const inner_elements={
    header:document.createElement("header"),
    article:document.createElement("article"),
    cancel:document.createElement("p"),
    ok:document.createElement("p")
};
const container=elements.html.appendChild(elements.container),     header=container.appendChild(inner_elements.header),
article=container.appendChild(inner_elements.article),
cancel=container.appendChild(inner_elements.cancel),
ok=container.appendChild(inner_elements.ok);
container.style="z-index:1000;font:22px sans-serif;font-weight:485;width:calc(100vw - 35%);margin:auto;position:fixed;top:0;left:0;bottom:0;right:0;height:calc(100vh - 55%);background:whitesmoke;padding:16px;border-radius:14px;text-align:center;box-shadow:2px 2px 6px -1px rgba(0,0,0,.4);trasnition:all ease .4s;";
header.style="position:relative;top:5px;height:calc(100% - 85%);width:100%;margin-bottom:12px;background:white;color:rgba(255,0,0,.7);box-shadow:1px 2px 5px -1px rgba(0,0,0,.3);border-radius:7px";
article.style="position:relative;height:calc(100% - 40%);width:100%;background:grey;color:rgba(0,255,0,.7);box-shadow:2px 4px 5px -1px whitesmoke;border-radius:7px;"
cancel.style="color:#494008;position:absolute;top:70%;left:45%;background:linear-gradient(45deg,red,coral,tomato);padding:2px 8px;border-radius:7px;border:1px solid #222"
ok.style="color:#404908;position:absolute;top:70%;left:20%;background:linear-gradient(-45deg,forestgreen,lime,green);padding:2px 8px;border-radius:7px;border:1px solid #222"
cancel.onclick=()=>{
    elements.container.style.opacity="0";
    elements.container.style.transition="all ease-in .33s";
    elements.container.style.transform="scale(0)";
}
ok.onclick=()=>{
    elements.container.style.opacity="0";
    elements.container.style.transition="all ease-in .33s";
    elements.container.style.transform="scale(0)rotate(360deg)";
}
cancel.innerHTML="CANCEL";
ok.innerHTML="OK"
header.innerHTML="Alert!";
article.innerHTML="Hi everyone!";
}
scale=()=>{
    requestAnimationFrame(Alert)
}
onload=()=>{
    btn=document.querySelector("span");
    btn.addEventListener("click",scale);
}
/*
elements.html.onmouseover=()=>{
    elements.container.style.opacity="0";
    elements.container.style.transition="all ease-in .33s";
    elements.container.style.transform="scale(0)";
}
elements.html.onclick=()=>{
    elements.container.style.opacity="0";
    elements.container.style.transition="all ease-in .33s";
    elements.container.style.transform="scale(0)";
}
*/
