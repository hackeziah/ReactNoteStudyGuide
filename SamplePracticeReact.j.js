

import React from 'react';
import ReactDOM from 'react-dom';

class Car extends React.Component {
	render(){
		return <h1>Hi i am a {this.props.brand.model}</h2>
	}
}

class Garage extends React.Component {
	const cars = {
		          name: "Ford",
		          model: "Mustang"
		   }
 	render(){
 		return 
 		 <div>
	 		 <h1>This is a new Component</h1>
	 		 <Car brand={cars}> // is use cars component to with another component 
 		 </div>

 		;	
 	}
}


----------------------------------------------------------------------------------------------------------------------------------------------------


import React from 'react';
import ReactDOM from 'react-dom';

class Car extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return <h1>I am not okay </h1>;
	}

}

ReactDOM.render(<Car model="Mustang">,document.getElementById('root'));

----------------------------------------------------------------------------------------------------------------------------------------------------

import React from 'react';
import ReactDOM from 'react-dom';

class Car extends React.Component{
	constructor(props){
		super(props);
	}
	this.state = {
		brand: "Ford",
		model: "Mustang",
		color: "Green",
		year: "1964",		
	}; // This is for state 

	changeColor = () = {
		this.setState(color : "blue")
	}

	render(){
		return(
			<div>
				<h1>My brand is {this.state.brand}</h1>
		
			<p>
				It is a {this.state.color} with a model of {this.state.model} from {this.state.brand}
					
			</p>
		
			<button type="button" onClick = {this.changeColor}>
			</div>Change Color</button>

			);
			}
		}
	}
}


----------------------------------------------------------------------------------------------------------------------------------------------------

import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
	constructor(props){
		super(props);
		this.state = {favorite : "red"};
	}

	changeColor = () = > {
		this.setState({favorite:"blue"})		
	}

	render(){
		return (

			<div> 
				<h1>My favorite color is {this.state.favorite} </h1>
		
				<button type="button" onClick={this.changeColor}> Change New Color </button>
			</div>
		
		);
	}
}

ReactDOM.render(<Header/>,document.getElementById('root'));

----------------------------------------------------------------------------------------------------------------------------------------------------
import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
	constructor(props){
		super(props);
		this.state = {fovorite: "red"}
	}
	componentDidMount(){
		setTimeout(()=>{
			this.setState({favoritecolor:"color"})
		},1000)
	}

	getSnapshotBeforeUpdate(preProps,preState){
		document.getElementById("div1").innerHTML = "The updated favorite is "+ this.state.favoritecolor; 

	}

	componentDidUpdate(){
		document.getElementById("div2").innerHTML = "The updated favorite is " + this.state.favoritecolor;

	}

	render (){
		return(
		<div>
			<h1> My Favorite Color is {this.state.favoritecolor}</h1>
			<div id="div1"></div>
			<div id="div2"></div>
		</div>
		);
	}

}

ReactDOM.render(<Header/>,document.getElementById('root'));

----------------------------------------------------------------------------------------------------------------------------------------------------
import React from 'react';
import ReactDOM from 'react-dom';

class Container extends React.Component{
	constructor(props){
		super(props);
		this.state = {favoritecolor : "red"}
	}
    
    delHeader = () => {
    	this.setState({show:false});
    }

    render(){
    	let myHeader;
    	if(this.state.show){
    		myHeader = <Child/>;
    	} 
    return(
    	<div>
    		{myHeader}
    		<button type="button" onClick = {this.delHeader}>Delte Header</div>
    	</div>
    );

    }
    
}

class Child extends React.Component{
	componentWillUnmount(){
		alert('This component named Header is about to be unmounted');
	}

	render(){
		return(

			<h1>Hello World</h1>
		);
	}
}
//
----------------------------------------------------------------------------------------------------------------------------------------------------


Events in React
Using "onClick"

import React from 'react';
import ReactDOM from 'react-dom';
class Football extends React.Component{
	shoot(){
		alert("Great alert ko to");
	}

	render(){
		return(<button type="button" onClick={this.shoot}>Alert ko<button/>);
	}
}

ReactDom.render(<Football>,getElementById('root'));

------------------------------------------------------------------------

class Football extends React.Component {
  shoot = (a, b) => {
    alert(b.type);
    /*
    'b' represents the React event that triggered the function,
    in this case the 'click' event
    */
  }
  render() {
    return (
      <button onClick={this.shoot.bind(this, "Goal")}>Take the shot!</button>
    );
  }
}
//
ReactDOM.render(<Football />, document.getElementById('root'));
------------------------------------------------------------------
Forms in React  using "onChange"

import React from 'react';
import ReactDOM from 'react-dom';

class MyForm extends React.Component{
	constructor(props){
		super(props);
		this.state = {username:''}
	}

	changeHanlder = (event) => {
		this.setState({username:event.target.value})		
	}
	render(){
		return(
			<form>
				<h1>Hi {this.state.username}</h1>
				<p>Enter a name :</p>
				<input type='text' onChange ={this.changeHanlder} />
			</form>
		);

	}
}

ReactDOM.render(<MyForm />, document.getElementById('root'));
/
------------------------------------------------------------------
import React from 'react'
import ReactDOM from 'react-dom'

class MyForm extends React.Component {
	constructor(props){
		super(props);
		this.state =  {username: ''}
	}
	// myChangeHadler =(event) => {
	// 	this.setState({username:event.target.value})
	// }

	render(){
		let  header = '';
		if(this.state.username){
			header = <h1>Hi {this.state.username}</h1>

		}else{
			header = ""; 
		}
		return(
			<form>
				<h1> Hello {header}</h1>
				<input type="text" onChange={this.myChangeHadler}>
			</form>
		);
	}

}
//
ReactDOM.render(<MyForm/>,getElementById('root'));
//
---------------------------------------------------------------------------------
import React from 'react';

class MyForm extends React.Component{
	constructor(){
		super(props);
		this.state = {
			username: '',
			age:null 
		}
	}

	myChangeHadler = (event) =>{
		let nam = event.target.name;
		let value = event.target.value;	
		this.setState({[nam]:value });
	}

	render(){
		return(
			<form>
			 <h1> Hello {this.state.}</h1>
			</form>
		);
	}
}	
---------------------------------------------------------------------------------------
import React from 'react';
import ReactDOM from 'react-dom';

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      age: null,
      errormessage: ''
    };
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    let err = '';
    if (nam === "age") {
      if (val !="" && !Number(val)) {
        err = <strong>Your age must be a number</strong>;
      }
    }
    this.setState({errormessage: err});
    this.setState({[nam]: val});
  }
  render() {
    return (
      <form>
      <h1>Hello {this.state.username} {this.state.age}</h1>
      <p>Enter your name:</p>
      <input
        type='text'
        name='username'
        onChange={this.myChangeHandler}
      />
      <p>Enter your age:</p>
      <input
        type='text'
        name='age'
        onChange={this.myChangeHandler}
      />
      {this.state.errormessage}
      </form>
    );
  }
}

ReactDOM.render(<MyForm />, document.getElementById('root'));
