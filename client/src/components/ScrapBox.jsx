var React = require('react');
var DisplayBox = require('./DisplayBox.jsx');
var OptionsBox = require('./OptionsBox.jsx');

var ScrapBox = React.createClass({
  getInitialState: function() {
    return {projects: [], focusProject: null, focusEntry: null}
  },

  componentDidMount: function() {
    var url = "http://localhost:3000/api/projects/";
    var request = new XMLHttpRequest();
    request.open( "GET", url );
    request.onload = function() {
      if( request.status === 200 ) {
        console.log("request had loaded");
        var data = JSON.parse(request.responseText);
        this.setState({projects: data});
      }
    }.bind(this);
    request.send(null);
  },

  setFocusProject: function(index) {
    var newProject = this.state.projects[index];
    this.setState({focusProject: newProject});
  },

  setFocusEntry: function(index) {
    var newEntry = this.state.focusProject.entries[index];
    this.setState({focusEntry: newEntry});
  },

  render: function() {
    return (
      <div>
        <div id="logoContainer">
          <div id="logo">
            <h1 id="title">scrappiii</h1>
            <h4 id="tagline">your digital scrapbook for creative projects</h4>
          </div>
        </div>
        <div id="container">
          <OptionsBox 
            projects={this.state.projects}
            selectProject={this.setFocusProject}>
          </OptionsBox>
          <DisplayBox 
            project={this.state.focusProject}
            entry={this.state.focusEntry}
            selectEntry={this.setFocusEntry}>
          </DisplayBox>
        </div>
      </div>
    )
  }
})

module.exports = ScrapBox;