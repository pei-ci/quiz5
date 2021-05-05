import Button from '@material-ui/core/Button';
import React from 'react';
import ReactDOM from 'react-dom';
const changeText=(event)=>{
  console.log(event.target)
  event.target.innerText=event.target.innerText+"被點了"
}

class CounterButton extends React.Component{
  constructor(props){
    super(props)
    this.state={
      counter: 0,
      name: props.name
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(event){
    this.setState({ counter: this.state.counter+1});
    console.log(this.state);
  }
  render(){
    var text = this.state.counter;
    var i=this.state.name;
    return(
      <Button variant="contained" color= "primary" onClick={this.handleClick}>第{i}個按鍵 你點了 {text} 次.</Button>
    );
  }
}

const MultiButton=(num)=>{
  var output=[];
  for(let i=1;i<num+1;i++){
    let str=""+i;
    output.push(<CounterButton name = {str} />)
  }
  return output;
}

export default MultiButton;