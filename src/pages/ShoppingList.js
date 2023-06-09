import { useState } from "react";
import "../style.css";



export default function ShoppingList() { 
    const[items,setItems]= useState([]);
    function onRemoveItem(itemToRemove) {
        const newItems = items.filter((item) => {
          return item !== itemToRemove;
        });
        setItems(newItems);
      }
    function onSubmit(event){
        event.preventDefault();
        const form = event.target;
        const input = form.item;
        const newItems = [...items,input.value];
        setItems(newItems);
        form.reset()
    }
    return (
        <>
        <h1>Project 4 : Shopping List</h1>
        <div className="shopping-list">
            <h2>Items to Buy</h2>
            <form onSubmit = {onSubmit}>
                <input type = "text"
                name = "item"
                placeholder="Add new Item"                
                required
                />
                <button>Add</button>
            </form>
            <ul>
                {items.map((item,index)=>(
                    <Item onRemoveItem = {onRemoveItem} key={item + index} item={item}></Item>
                ))}
            </ul>

        </div>
        </>
    ) 
  
};

function Item({ item,onRemoveItem}){
    return (
        <li >
            {item}
            <button className="delete" onClick={() => onRemoveItem(item)}>x</button>
        </li>
    )

}