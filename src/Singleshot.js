import React from "react";

// function Singleshot () {
//     return(
//     <div>
//     <h1>Singleshot was here!!!</h1>
//     </div>
//     );    
// }

// export default Singleshot;


function Singleshot (props) {

    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;
    
    if (hours < 12) {
        timeOfDay = "morning";
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon";
    } else {
        timeOfDay = "night";
    }

    return(
    <div>
    <h1>Good {timeOfDay},<br/>{props.name} was here!!!</h1>
    </div>
    );    
} export default Singleshot;