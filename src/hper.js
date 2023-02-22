import React from "react";
class Hper extends React.Component{
    constructor(props){
        super(props);
        this.state={
            a:30,
            b:20,
            c:10
        };
    }
    changeA=()=>{
        this.setState({a:"5"});

    }
    changeB=()=>{
        this.setState({b:"5"});

    }
    changeC=()=>{
        this.setState({c:"5"});
    }
    changeAll=()=>{
        this.setState({a:"5",b:"2",c:"6"});

    }

    render(){
        return(
       <>
       <button onClick={this.changeA}>Change A</button>
       <button onClick={this.changeB}>Change B</button>
       <button onClick={this.changeC}>Change c</button>
       <button onClick={this.changeAll}>Change All</button>
       <p>{ (((this.state.a)**3)+((this.state.b)**3)+((this.state.c)**3))
        +((this.state.a+this.state.b+this.state.c)*((this.state.a)*this.state.b+((this.state.a)*(this.state.c))+((this.state.b)*(this.state.c)))-((this.state.a)*(this.state.b)*(this.state.c)))
        } </p>
       </>
        );
    }
}
export default Hper;