var React = require('react');
var Entries = require('./Entries.jsx');
var Text = require('./Text.jsx')

var DisplayBox = React.createClass({
  render: function() {
    if(!this.props.project) 
      return <div id="display"></div>
    return (
      <div id="display">
        <h2 id="projectTitle">{this.props.project.title}</h2>
        <Entries 
          project={this.props.project}
          selectEntry={this.props.selectEntry}>
        </Entries>
      </div>
    )
  }
})

module.exports = DisplayBox;