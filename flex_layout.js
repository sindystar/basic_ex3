const articles = document.querySelectorAll("article");

const aside = document.querySelector("aside");
const close = aside.querySelector("span")

for (let mini of articles) {
  mini.addEventListener("mouseenter", (e) => {
    e.currentTarget.querySelector("video").pause();
  });

  mini.addEventListener("click", (e) => {
    /*
    클릭한 아티클의 h2, p , video의 src를 가져와야 한다 
    */
  //  클릭한 아티클 안의 내용들을 변수에 저장 
    let tit = e.currentTarget.querySelector("h2").innerText;
    let txt = e.currentTarget.querySelector("p").innerText;
    let vidSrc = e.currentTarget.querySelector("video").getAttribute("src");

    //변수에 저장 된 값을 대체해서 넣어 준다 
    aside.querySelector("h2").innerText = tit;
    aside.querySelector("p").innerText = txt;
    aside.querySelector("video").setAttribute("src", vidSrc)

    // aside에 on을 추가 해서 활성화 
    aside.classList.add("on");
    // aside의 비디오를 찾아서 플레이
    aside.querySelector("video").play();
  })
}
close.addEventListener("click", () => {
  aside.classList.remove("on");
  aside.querySelector("video").pause();
})

//close.addEventListener("이벤트 이름", function(){})