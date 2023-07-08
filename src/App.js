
import './App.css';
import { Component } from 'react';
import image1 from "./im1.png"

class App extends Component{

  constructor(props){
    console.log("constructor()");
    super(props);
    this.state={
      intervall:null,
      timer:0
    }

  }
  componentDidMount(){
    console.log("componentDidMount()");
    this.setState({
      intervall:setInterval(()=>{
        this.setState({timer:this.state.timer+1})
      },1000)
    });
  }
  componentDidUpdate(){
    console.log("componentDidUpdate()");
  }
  
  componentWillUnmount(){
    console.log("componentWillUnmount()")
    clearInterval(this.state.intervall);
  }

state={isVisible:false}
person=[
  'Fatma Ben Aissa',
  'i have no idea 4 bio',
  'PHD student',

]
showV=()=>{
  this.setState({
    isVisible:!this.state.isVisible,
    timer:null
  
  })
  
}

render(){
  return (
    <div>
    
<center>
{this.state.isVisible ? (
<>   <button onClick={this.showV}>Hide info</button>
    {this.person.map((p,i)=>(
      
      
      <h3 key={i}>{p}</h3>
     
    )

    )
    }
     <center>
     <img src={image1} style={{width:350,heigth:400, marginBottom:40}}/></center>
     <center><input type="text" value={this.state.timer} ></input></center>
    </>
    ) 
    :(<button onClick={this.showV}>Show info</button>
       
     
       )}

</center>


    </div>)
    
 
  
}
}



export default App;
