var React = require('react');

const App = React.createClass({
  render: function () {
    return (
      <div>
        <div>{this.props.children}</div>
      </div>
    )
  }
})

export default App;
