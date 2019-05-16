import React from 'react';

export default class MovieItem extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const {id,title,duration} = this.props.movie;
    return (
      <div>
        <label><strong>Title: </strong>{title} </label>
        <label><strong>Duration: </strong> {duration} </label>
      </div>
    );
  }
}