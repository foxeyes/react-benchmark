// @ts-ignore
export class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.text,
    };
  }
  render() {
    // @ts-ignore
    return React.createElement('div', {}, this.state.text);
  }
  componentWillReceiveProps(props) {
    // @ts-ignore
    this.setState({
      text: props.text,
    });
  }
}
