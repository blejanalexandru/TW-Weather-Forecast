let namesapi = {
    apiKey: "7d2RsjBFAbCCRtxt0MsxUqXi3QDHc3xL",

}
let names = ["Bucharest", "Craiova", "Constanta", "London", "Washington", "Ottawa", "Abu Dhabi", "Miami", "Alger", "Atena", "Berlin",
"Bern", "Hanoi", "Madrid", "Paris", "Oslo"];

let sortedNames = names.sort();
let input = document.getElementById("input");
input.addEventListener("keyup", (e) => {
  removeElements();
  for (let i of sortedNames) {
    //Convert input to lowercase and compare with each string
    if (i.toLowerCase().startsWith(input.value.toLowerCase()) && input.value != "")
    {
      let listItem = document.createElement("li");
      listItem.classList.add("list-items");
      listItem.style.cursor = "pointer";
      listItem.setAttribute("onclick", "displayNames('" + i + "')");
      let word = "<b>" + i.substr(0, input.value.length) + "</b>";//Display matched part in bold
      word += i.substr(input.value.length);
      listItem.innerHTML = word;
      if(input.value.length >= 3) //When is typed atleast 3 letters
        document.querySelector(".list").appendChild(listItem);//Display the value in array
    }
  }
});
function displayNames(value) {
  input.value = value;
  removeElements();
}
function removeElements() {//Clear all the item
  let items = document.querySelectorAll(".list-items");
  items.forEach((item) => {
    item.remove();
  });
}