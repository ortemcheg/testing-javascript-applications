const { addItem, data } = require("./inventoryController");

const updateItemList = inventory => {
  const inventoryList = window.document.getElementById("item-list");

  // Clears the list
  inventoryList.innerHTML = "";

  Object.entries(inventory).forEach(([itemName, quantity]) => {
    const listItem = window.document.createElement("li");
    listItem.innerHTML = `${itemName} - Quantity: ${quantity}`;
    inventoryList.appendChild(listItem);
  });

  const inventoryContents = JSON.stringify(inventory);
  const p = window.document.createElement("p");
  p.innerHTML = `The inventory has been updated - ${inventoryContents}`;
  window.document.body.appendChild(p);
};

const handleAddItem = e => {
  e.preventDefault();
  const { name, quantity } = e.target.elements;
  addItem(name.value, parseInt(quantity.value, 10));
  updateItemList(data.inventory);
};

module.exports = { updateItemList, handleAddItem };
