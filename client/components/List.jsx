const React = require('react'),
      ListItem = require('./ListItem.jsx');

var List = React.createClass({
  render(){
    var createItem = function(text,index){
      return <ListItem key={index+text} text={text} />;
    };

    return (<ul>{this.props.items.map(createItem)}</ul>);
  }
});

module.exports = List;
