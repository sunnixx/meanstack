const React = require('react'),
      List = require('./List.jsx'),
      divStyle = require('./style');

var ListManager = React.createClass({
  getInitialState: function(){ //This will be called to handle Initial State before any other thing will be called
    return {items: [], newItemText: ''};
  },
  onChange: function(e){
    this.setState({newItemText:e.target.value});
  },
  handleSubmit: function(e){ //This will be called when Submit button will be pressed
    e.preventDefault();
    var currentItems = this.state.items; //States are temporary variables, and store information that keeps changing
    currentItems.push(this.state.newItemText);
    this.setState({items: currentItems, newItemText:''}); //Calls when change the state i.e. add new data in the state variable.
  },
  render(){
    if(this.props.headingColor){
      divStyle.headingStyle.background = this.props.headingColor;
    }
    return (
        <div style={divStyle.panelSpace} className="col-sm-4">
          <div className='panel panel-primary'>
            <div style={divStyle.headingStyle} className='panel-heading'>
              <h3>{this.props.title}</h3>
            </div>
            <div className='row panel-body'>
              <form onSubmit={this.handleSubmit}>
                <div className='col-sm-9'>
                  <input className='form-control' onChange={this.onChange} value={this.state.newItemText}/>
                </div>
                <div className='col-sm-3'>
                  <button className='btn btn-primary'>Add</button>
                </div>
              </form>
            </div>
            <List items={this.state.items} />
          </div>
        </div>
    )
  }
});

module.exports = ListManager;
