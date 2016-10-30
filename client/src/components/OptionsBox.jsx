var React = require('react');
var ProjectSelector = require('./ProjectSelector.jsx');
var DisplayBox = require('./DisplayBox.jsx')

var OptionsBox = React.createClass({
  render: function() {
    console.log(this.props.selectProject)
    return(
      <div>
        <ProjectSelector 
          projects={this.props.projects}
          selectProject={this.props.selectProject}>
        </ProjectSelector>
      </div>
    )
  }
})

module.exports = OptionsBox;