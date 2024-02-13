const searchBox = document.getElementById("search-box");
const results = document.getElementById("results");

// Sample data
const data = [
  { id: 1, name: "Sword", type: "Weapon" },
  { id: 2, name: "Shield", type: "Armor" },
  { id: 3, name: "Helmet", type: "Armor" },
  { id: 4, name: "Boots", type: "Armor" },
  { id: 5, name: "Ring", type: "Accessory" },
  { id: 6, name: "Amulet", type: "Accessory" },
];

// Search function
function search(query) {
  const results = data.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );
  return results;
}

// Update results function
function updateResults(results) {
  results.forEach((item) => {
    const li = document.createElement("li");
    li.id = item.id;
    li.textContent = `${item.name} (${item.type})`;
    results.appendChild(li);
  });
}

// Search box input event listener
searchBox.addEventListener("input", () => {
  const query = searchBox.value;
  const resultsList = search(query);
  results.innerHTML = "";
  updateResults(resultsList);
});

// Initial results
updateResults(search(""));
