import React from "react";
import  Perimetre1  from  "./Cls2.js";
class Perimeter extends React.Component{
    render(){
        var l=67;
        var b=4;
        var aa=8;
        return(
            <div>
                 <h1>perimeters of shapes</h1>
            <p>Perimeter of sqaure  is {4*aa}</p>
            <p>Perimeter of rectangle  is {2*(l+b)}</p>
            < Perimetre1/>
            </div>
        )
    }
}
export default Perimeter;