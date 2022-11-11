import React from "react";
function Sagar(props){
   // const arr=["bat","ball","wicket"];
    return(
        <div>
            <div>{props.name.join(",")}</div>
        </div>
    );
}
export default Sagar;