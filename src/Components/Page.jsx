import {useState} from 'react';
import Rechercher from './Rechercher';
import Cards from './Cards';
import Select from'./Select';

export default function Page(){
    const list = [
      { nom: "banane", type: "fruit" },
      { nom: "orange", type: "fruit" },
      { nom: "pomme", type: "fruit" },
      { nom: "raisins", type: "fruit" },
      { nom: "kiwi", type: "fruit" },
      { nom: "tomate", type: "legume" },
      { nom: "carotte", type: "legume" },
      { nom: "pomme de terre", type: "legume" },
      { nom: "navet", type: "legume" },
      { nom: "poivron", type: "legume" },
    ];

    const[valeur,setValeur]=useState('');
    const[choix,setChoix]=useState('');
    const[resNom,setResNom]=useState([]);
    const[resType,setResType]=useState([]);

    function filtrer_Nom(valeur){
        setResNom(list.filter((produit) => produit.nom.includes(valeur)));
    }

      function filtrer_tpye(choix){
        setResNom(list.filter((choix) => produit.type.includes(choix)));
    }


    

    return(

              
    <div>
      <Select choix={choix} setChoix={setChoix} list={list}/>        
      <Rechercher valeur={valeur} setValeur={setValeur}/>
     < Cards list={list} resNom={valeur} resType={choix}/>
    </div>
    )
}