const React = require('react');
const utils = require('./utils');


class CustomComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      revealed: false,
      isMobile: false
    };
  }

  componentDidMount() {
    this.setState({
      isMobile: utils.isMobile()
    })
  }

  render() {
    const { idyll, hasError, updateProps, children, ...props } = this.props;
    const { width = 1, height = 1, row = 1, column = 1, color = '#fff', svg = 'small-dog' } = props;
    const styles = {
      gridColumn: this.state.isMobile ? `1` : `${column} / span ${width}`,
      gridRow: this.state.isMobile ? `span 1` : `${row} / span ${height}`,
      backgroundColor: color,
    }
    const svgStyles = {
      // opacity: this.state.revealed ? 1 : 0.25,
      // filter: this.state.revealed ? `blur(0)` : `blur(0.25rem)`
    }

    return (
      <div className={(this.props.className || '') + ' ' + (this.state.revealed ? 'panel revealed' : 'panel')} style={styles} onClick={() => this.setState({ revealed: true })}>
        { children }
      </div>
    );
  }
}

module.exports = CustomComponent;
