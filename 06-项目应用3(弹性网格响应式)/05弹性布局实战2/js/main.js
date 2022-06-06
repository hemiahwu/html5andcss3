// ********** nav toggle ************
// 获取dom对象
const navBtn = document.getElementById("nav-toggle");
const links = document.getElementById("nav-links");
// 添加事件
navBtn.addEventListener("click", () => {
    links.classList.toggle("show-links");
});


