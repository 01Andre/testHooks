import React , {useState} from 'react';

const SecondButton = (props) => {
const messagee = useState(props.SalutationMessage);
const metsletat = messagee[1]
let missive = props.SalutationMessage;



return (
<div>
    <p>{missive}</p>
    <button className="btn btn-success" onClick={()=> metsletat(missive="bajourke")}>Traduction avancée</button>
    </div>
)

}


export default SecondButton