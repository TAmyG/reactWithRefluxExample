import Reflux from 'reflux';
import $ from 'jquery';

import PeopleActions from '../actions/PeopleActions';

let PeopleStore = Reflux.createStore({
  listenables: [PeopleActions],
  fetchPeople: function() {
    let self = this;
    $.ajax({
      url: 'https://randomuser.me/api/?results=50',
      dataType: 'json'

    })
    .done(function(data) {
      let people = data.results;
      self.trigger(people);
    });
  }
});

export default PeopleStore;
