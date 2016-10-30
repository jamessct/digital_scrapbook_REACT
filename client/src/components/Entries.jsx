var React = require('react');

var Entries = React.createClass({
  entryOnClick: function(event) {
    var newIndex = event.target.value;
    this.props.selectEntry(newIndex);
  },

  render: function() {
    var buttons = this.props.project.entries.map(function(entry, index) {
      console.log(entry.title)
      return <button key={index} value={index} id="entryButton" >{entry.title}</button>
    })
    return (
      <div id="entryButtonsContainer">
        {buttons}
      </div>
    )
  }
})

module.exports = Entries;