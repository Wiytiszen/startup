import React from 'react';

class Form extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      id: 0,
      name: '',
      year: '',
      duration: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e){
    this.setState({[e.target.id]: e.target.value});
  }

  handleClick(){
    const {name,year,duration} = this.state;
    if(name && year && duration){
      const {isEditing} = this.props;
      const { id } = this.state;
      this.props.handleAddMovie(this.state);
      this.setState({ id: isEditing ? id : id + 1,
        name: '',
        year: '',
        duration: ''});
  
    }
  }

  componentDidUpdate(prevProps){
    if (prevProps.isEditing !== this.props.isEditing && this.props.isEditing){
      const {name, year, duration} = this.props.movieToEdit;
      this.setState({name, year, duration});
    }
  }

  render(){
    const { name, year, duration } = this.state;
    const { isEditing } = this.props;
    return(
      <div className="form">
        <input type="text" id="name" value={name} onChange={this.handleChange} placeholder="Enter movie name"/>
        <input type="text" id="year" value={year} onChange={this.handleChange} placeholder="Enter movie year"/>
        <input type="text" id="duration" value={duration} onChange={this.handleChange} placeholder="Enter movie duration"/>
        <button onClick={this.handleClick}>{isEditing ? 'Accept changes ' : 'Add'}</button>
      </div>
    )
  }

}

export default Form;