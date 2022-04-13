import React from 'react'
import ListHeroes from './page/ListHeroes';
import './assets/sass/App.scss';
/* pagina principal Aqui iran todas las vistas  */
 const App = () => {

    return (
        <div>
     <h1 className='title'>Superheroes</h1>
     
            <ListHeroes/>
        </div>
    )
}
export default App;