'use strict';

const React = require('react'),
      ReactDOM = require('react-dom'),
      ListManager = require('./components/ListManager.jsx');
//
ReactDOM.render(<ListManager title='Ingredients' headingColor='#b31217' />,document.getElementById('root'));
ReactDOM.render(<ListManager title='Groceries' headingColor='#34495e' />,document.getElementById('container1'));
ReactDOM.render(<ListManager title='Office' headingColor='#d35400' />,document.getElementById('container2'));
