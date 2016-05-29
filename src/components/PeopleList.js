import React from 'react';

import PeopleFrame from './PeopleFrame.js';

export default class PeopleList extends React.Component{
  constructor() {
    super();
  }

  render(){
    /*let peoples = [];
    this.props.peoples.forEach((people) =>{
      peoples.push(
        <li>
          <PeopleFrame key = {people.name.first} people = {people}/>
        </li>
      );
    });*/
    return(
      <ul>
        {this.props.peoples.map(function(people){
              return <PeopleFrame key = {people.login.username} people = {people}/>
        })}
      </ul>
    );
  }
}
