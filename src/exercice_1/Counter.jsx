import {useState} from 'react';
import Valeur from './Valeur';
import PasPlus from './PasPlus';
import PasMoins from './PasMoins';
export default function Counter(){

    const[num,setNum]=useState(0);
    const[pas,setPas]=useState(0);
    function changer(n){
        setPas(n)
    }

    return(

    <div>
            
        <Valeur num={num} pas={pas}/>
        <div>
            <button onClick={e=>setNum(num-pas)}>decrementer</button>
            <button onClick={e=>setNum(0)}>Initializer</button>
            <button onClick={e=>setNum(num+pas)}>incrementer</button>
        </div>
        <div>
            <PasPlus changer={changer}/>
        </div>
        <div>
            <PasMoins changer={changer}/>
        </div>
    </div>
    )    

}