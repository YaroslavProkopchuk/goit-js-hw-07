const itemNumber = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemNumber.length}`);
itemNumber.forEach(function (item) {
  const title = item.querySelector("h2").textContent;
  const liNumber = item.querySelectorAll("ul li").length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${liNumber}`);
});
