import React from 'react';

import PeoplePhoto from './PeoplePhoto.js';
import PeopleTitle from './PeopleTitle.js';

export default class PeopleFrame extends React.Component{
  constructor() {
    super();
  }

  render(){
    return(
      <li>
        <PeoplePhoto photo = {this.props.people.picture.thumbnail}/>
        <PeopleTitle name = {this.props.people.name} />
      </li>
    );
  }
}
