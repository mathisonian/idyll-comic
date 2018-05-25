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
    const { width = 1, height = 1, row = 1, alt=false, column = 1, color = '#fff', svg = 'small-dog', style= {} } = props;
    const styles = Object.assign({
      gridColumn: this.state.isMobile ? `1` : `${column} / span ${width}`,
      gridRow: this.state.isMobile ? `span 1` : `${row} / span ${height}`,
      // backgroundColor: color,
    }, style);
    const svgStyles = {
      // opacity: this.state.revealed ? 1 : 0.25,
      // filter: this.state.revealed ? `blur(0)` : `blur(0.25rem)`
    }
    return (
      <div className={`caption ${alt ? 'alt' : ''}`} style={styles} onClick={() => this.setState({ revealed: true })}>
        { children }
      </div>
    );
  }
}

module.exports = CustomComponent;
