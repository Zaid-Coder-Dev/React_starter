import {useState} from 'react';
export default function Rechercher(props){

    let types = [];
        props.list.forEach((produit) => {
                if (!types.includes(produit.type)) {
                        types.push(produit.type);
                    }
});            ;

    return(            

        <div>
    
        <select value={props.choix} onClick={(e)=>props.setChoix(e.target.value)}>
            <option  readonly selected >-- Type --</option>
            {types.map((type,index) => <option  key={index} value={type} >{type}</option> )}
        </select>
        

        <p>{props.choix}</p>
        </div>

        

    )
}