import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
const [name, setItemName] = useState('');
const [category, setCategoryName] = useState('');

function handleNameChange(event) {
  setItemName(event.target.value);
}

function handleCategoryChange(event) {
  setCategoryName(event.target.value);
}

function addShoppingItem(e) {
  e.preventDefault();
  onItemFormSubmit({ 
    id: uuid(), // the `uuid` library can be used to generate a unique id
    name,
    category,
  });
}

  return (
    <form 
    className="NewItem"
    onSubmit={addShoppingItem}>
      <label>
        Name:
        <input 
        type="text" 
        name="name" 
        htmlFor="itemName" 
        id="itemName"
        value={name}
        onChange={handleNameChange}/>
      </label>

      <label>
      Category:
        <select 
        name="category" 
        htmlFor="itemCategory" 
        id="itemCategory"
        value={category}
        onChange={handleCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
