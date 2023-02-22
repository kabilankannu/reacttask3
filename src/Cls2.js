import React from "react";
class Perimetre1 extends React.Component{
    render(){
        var l=67;
        var b=4;
        var h=9;
        var r=8;
        return(
            <div>
            <p>Perimeter of circle  is {2*3.14*r}</p>
            <p>Perimeter of Triangle  is {l+b+h}</p>
            </div>
        )
    }
}
export default Perimetre1;