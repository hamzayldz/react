import React from 'react';
import { Button } from './Button';


class ColorPicker extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      color:[145,88,15]
    }              
  }


  componentDidMount() {
    console.log('i invoked immediately after component is mounted, just one time at the beginning; after render method')
    this.chooseColor()
  }
  
  componentDidUpdate(prevProps, prevState) {
    console.log('i invoked immediately after updating occurs, upon every change.')
    
  }

  isLight(colorArr) {
    if((colorArr[0]+colorArr[1]+colorArr[2])>=381)
    {return true}
    else
    return false 
  }

  formatColor(colorArr) {
    return 'rgb(' + colorArr.join(', ') + ')';
  }

  
 chooseColor=()=>{
let randomNumber=[]
for (let i = 0; i < 3; i++) {
  let sayi =Math.floor(Math.random()*256);
  randomNumber.push(sayi)
  randomNumber[i]=sayi
   console.log(randomNumber)
    this.setState({color:randomNumber})

}
   //it creates an array, consist of randomized numbers (between 0 and 256). And sets the state of color.
}
  
applyColor(){
  document.body.style.backgroundColor = this.formatColor(this.state.color);
}
 


  render() {
    this.applyColor()
    // this.chooseColor()
    return (
      <div>
        <h1 className={this.isLight(this.state.color )? 'black' : 'white'}>
        Your color is :{this.formatColor(this.state.color)}
        </h1>
        <h3>{this.isLight(this.state.color)}</h3>
        <Button chooseColor={this.chooseColor}>
          <p>Hi, im color picker</p>
        </Button>
      </div> 
    );
  }
}

export default ColorPicker;
