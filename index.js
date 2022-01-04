const loader = document.getElementById("bf-loader");
window.onload = () => {
  loader.classList.add("loaded");

  setTimeout(() => {
    const incon = document.querySelector(".container");
    incon.classList.add("in");
  }, 4000);
};
const push = document.getElementById("ball");
const push_second = document.getElementById("second-ball");
push.addEventListener("click", () => {
  const target = document.querySelector(".menu");
  const targe = document.querySelectorAll(".second-ball");
  const ta = document.querySelectorAll(".fb");

  // const len =ta.length;
  for (let i = 0; i < ta.length; i++) {
    setTimeout(() => {
      ta[i].style.display = "block";
      console.log(targe[i]);
    }, 1000);
  }
  console.log(ta);
  const target2 = document.querySelector(".container");
  target.style.display = "flex";
  // ta.style.display="block";
  target2.style.display = "none";
});
push_second.addEventListener("click", () => {
  const ww =document.getElementById("char");
  const yy =document.getElementById("about-container");

  const aboutContainer = document.querySelector(".about-text");
  ww.classList.add('inview');
  yy.style.display="block";
  aboutContainer.style.display = "block";
  const dd=aboutContainer.textContent;
  const len =dd.length;
  
  for(let u=0 ;u<len;u++){
    const i =dd[u].substr(0,1);
     const dcd =document.createElement("span")
      dcd.classList.toggle("txt");
    ;
    // setTimeout(()=>{
     
    // }

    // ,1000)
    
    
    dcd.innerText=i;
     const hk =[];
     hk.push(i);
     console.log(hk);
     ww.appendChild(dcd);
  }
  
  // const ne = [];
  // ne.push(aboutContainer.textContent);
  // console.log(ne);
  // const p=ne[0].slice(0,1);
  // console.log(p)

  // nn.map((e, index) => {
    
  //   // console.log(e)
  //   // hh[index].push(e);
  // });
  // console.log(ne);
});
