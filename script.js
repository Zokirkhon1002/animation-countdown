let nums = document.querySelectorAll(".out"),
  counter = document.querySelector(".counter"),
  finalMessage = document.querySelector(".final"),
  reply = document.getElementById("reply");

runAnimation();

function resetDom() {
  counter.classList.remove("hide");
  finalMessage.classList.remove("show");

  nums.forEach((num) => {
    num.classList.value = "";
  });

  nums[0].classList.add("in");
}

function runAnimation() {
  nums.forEach((num, index) => {
    let nextToLast = nums.length - 1;

    num.addEventListener("animationend", (e) => {
      if ((e.animationName === "goIn" && index !== nextToLast)) {
        num.classList.remove("in");
        num.classList.add("out");
      } else if (e.animationName === "goOut" && num.nextElementSibling) {
        num.nextElementSibling.classList.add("in");
      } else {
        counter.classList.add("hide");
        finalMessage.classList.add("show");
      }
    });
  });
}

reply.addEventListener("click", () => {
  resetDom();
  runAnimation();
});
