import React, { useState } from "react";
import Recipedata from "./Recipedata"; 
//Axois allows to communicate with the APIs 
import  Axios  from "axios";
import "./Recipe.css"

function Recipe() {
  
  const [query,setQuery]=useState(""); //create for store input value
  const [recipes,setRecipe]=useState([]); //create for store data about the recipe 
  
  const YOUR_APP_ID = `your app id`; //app id from edamam api
  const YOUR_APP_KEY = "your api key"; //api key

  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;
  
  
  const getRecipe = async () => {  //this function is create for fetch data from api and make it async for when data is fetched from api after that print ahead code ,axois is used for comunicate with api
    var result = await Axios.get(url);
    setRecipe(result.data.hits);  
    console.log(result.data.hits);
  };
  
  

  
  
  
  const onSubmit = (e) => {  //when form is submit at a time page will be not refreshing and call get reacipe function 
    e.preventDefault(); 
    getRecipe();
  };

  
  
  return <div> 
    <h2>Recipe App</h2>
   
   <form action="" onSubmit={onSubmit}>
    <input type="text"  placeholder="Enter Recipe Name Here..." value={query} onChange={(e)=>setQuery(e.target.value)}/> 
    <input type="submit" value="search"/>
   </form>
   
   <div className="app-recipe"> 
   {/* //call state and check if data is fetched than execute map method with recipe prop and print data on browser */}
   {recipes !== [] &&
          recipes.map((recipe) => {
            //here call recipedata component for fetched props from that and display name and image
            return <p> <Recipedata recipe={recipe}/></p>
          })}
          </div>
     </div>; 
}

export default Recipe;
