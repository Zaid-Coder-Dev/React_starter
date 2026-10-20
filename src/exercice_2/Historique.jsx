import {useState} from 'react';


export default function Historique(props){
    
    let history=props.history;
    let card={padding: "25px",margin: "20px auto",borderRadius: "15px",boxShadow: "0 4px 12px rgba(0,0,0,0.15)",textAlign: "center",maxWidth: "350px",transition: "0.3s",border: "1px solid rgba(0,0,0,0.1)"}
    let p={fontSize: "20px",fontWeight: "bold",color: "#333",margin: "0"}
    return(
        props.history.map((mood,index)=>
        <div key={index} style={{...card,backgroundColor: mood.color}}>
                {<p style={p}>{mood.value} !</p>}
            </div>
            )
        )
}
