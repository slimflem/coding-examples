'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var ExampleApplication = React.createClass({
  render: function() {
    var elapsed = Math.random().toString();
    return <p>{elapsed}</p>;
  }
});

setInterval(function() {
  ReactDOM.render(
    <ExampleApplication />,
    document.getElementById('container')
  );
}, 800);