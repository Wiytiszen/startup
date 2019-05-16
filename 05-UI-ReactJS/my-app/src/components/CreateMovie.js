import React from 'react';

export default class CreateMovie extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      title:"",
      duration:"",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  handleSubmit(event){
    event.preventDefault();
    this.props.createMovie(this.state);
    this.setState({title:"",duration:""});
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit} >
        
        <label>Title:</label> <br/>
        <input 
          type="text" 
          name="title" 
          value={this.state.title }
          onChange={this.handleChange}/>
        
        <br/>  
        
        <label>Duration:</label> <br/>
        <input 
        type="text" 
        name="duration" 
        value={this.state.duration } 
        onChange ={this.handleChange}/>
        
        <input type="submit"/>
      </form>
    );
  }
}