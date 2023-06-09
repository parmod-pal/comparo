import "../style.css";
import { useState } from "react";

const API_URL = "https://api.github.com";

export default function GithubUserSearch() {
  const [query,setQuery] = useState("");
  const [results, setResults] = useState([]);

  async function fetchResults(query){
    try{
      const response = await fetch(`${API_URL}/search/users?q=${query}`);
      const json = await response.json();
      return json.items || []

    }catch(e){
      throw new Error(e);

    }

  }
  function onSearchChange(event) {
    setQuery(event.target.value);
  } 
  
  async function onSearchSubmit(event){
    event.preventDefault();
    const data = await fetchResults(query);
    setResults(data);
  }
  return (
    <div>
      <h1>Project 5 : Git Hub User Search</h1>
      <form className="search-form" onSubmit={onSearchSubmit}>
        <input
        type="text"
        id="search"
        value = { query }
        onChange = { onSearchChange }
        placeholder = "Enter username or email"/>
        <button type = "submit">Search</button>
      </form>
      <h3>Results</h3>
      <div>{results.map((user)=>(
        <User 
        key = {user.login}
        avatar = {user.avatar_url}
        url = {user.html_url}
        username = {user.login}
        />
      ))}</div>
    </div>
  )
};

function User({avatar,url,username}){
  return(
    <div className="user">
      <img src={avatar} alt="Profile" width="50" height="50" />
      <a href={url} target="_blank" rel="noopener noreferrer">
        {username}
      </a>
    </div>
  )

}

