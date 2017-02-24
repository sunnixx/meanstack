var React = require('react');

var ListItem = React.createClass({
  render(){
    //This return will give us HTML
    return (
      <li><h4>{this.props.text}</h4></li>
    );
  }
});

module.exports = ListItem;
