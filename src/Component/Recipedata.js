import React from 'react'

function Recipedata({recipe}) { //here passed prop for pass data one component to another component in app
  return (
   
       
          <div className='recipe'
           
          //when click on image or that div it will open new url and display recipe 
            onClick={() => window.open(recipe["recipe"]["url"])}
          >
           
           {/* //it will display image of recipe */}
            <img src={recipe["recipe"]["image"]} className='recipe-img'/>
            <p className='recipe-name'> 
            {/* //it will display name of recipe */}
              {recipe["recipe"]["label"]}
            </p>
          </div>
      
      )
 
}

export default Recipedata