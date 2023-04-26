const spans = document.querySelectorAll(".section-1 span");
const rating = document.querySelector(".rating");
const submitBtn = document.querySelector(".submit");
const section1 = document.querySelector(".section-1");
const section2 = document.querySelector(".section-2");
console.dir(submitBtn.disabled)

console.log(spans);


spans.forEach((span) => {
  let spanValue = ""
  span.className = "span";
  span.addEventListener("click", () => {
    spans.forEach(span => span.className = "span");
    span.className = "span active";
    spanValue = span.innerText;
    rating.innerText = spanValue;
    if (spanValue) {
      submitBtn.disabled = false;
    }
  });
});

submitBtn.addEventListener("click", () => {
  section1.className = "section-1 none";
  section2.className = "section-2 block";
})