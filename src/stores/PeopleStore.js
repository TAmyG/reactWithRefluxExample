import Reflux from 'reflux';
//import $ from 'jquery';
import io from 'socket.io-client';

import PeopleActions from '../actions/PeopleActions';

let PeopleStore = Reflux.createStore({
  listenables: [PeopleActions],
  fetchPeople: function() {
    this.socket = io('http://localhost:3000')
    this.socket.on('people', (data)=>{
      var people = JSON.parse(data);
      people = people.results;
      this.trigger(people);
    });
  },
  askForPeople: function(){
    var ask = 'ask';
    this.socket.emit('ask', ask);
  }
});

export default PeopleStore;
