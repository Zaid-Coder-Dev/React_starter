import {useState} from 'react';
export default function Rechercher(props){

    

    return(
        <div>
        <input type="text" onChange={(e)=>props.setValeur(e.target.value)}/>
        <button type="submit">Search</button>
        

        <p>{props.valeur}</p>
        </div>

        

    )
}