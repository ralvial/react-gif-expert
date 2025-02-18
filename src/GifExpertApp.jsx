import { useState } from 'react';
import {GifGrid, AddCategory} from './components';




const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);
    
    const onAddCategory=(category)=>{
      if (categories.includes( category )) return;

        setCategories([category, ...categories ]);
    }

  return (
    <>    
    {/* Titulo */}
    <h1>GifExpertApp</h1>

    {/*Input  */}
    <AddCategory
      //setCategories={ setCategories }
      onNewCategory={(value)=>{ onAddCategory(value) }}
    />
    
    {/* Listado de Gif */}
    
        { categories.map( category=>(
            <GifGrid key={category} category={ category }/>
          )) 
        }
    {/* Gif Item */}
    </>
  )
}

export default GifExpertApp