import React, {useState, useRef} from 'react';
import AdvancedTranslation from './advanced-translation';





const SearchBar = (props) => {
    const button = useState("bijour");

    let SalutationMessage = button[0]
const translate = button[1];
    return (
        <div> <p>{SalutationMessage}</p>
        <button className="btn btn-primary"  onClick = {()=>translate(SalutationMessage = translateMessage(SalutationMessage))} > Cliquez</button>

        <AdvancedTranslation SalutationMessage/>
         </div>
    )
}

function translateMessage(message){
    if (message === "bijour"){
        message = "bonjourte";
    } else {
        message = "bijour";
    }
    return message;
}

export default SearchBar ;