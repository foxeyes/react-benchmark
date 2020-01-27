// @ts-ignore
export class MyComponent extends React.Component {
  render() {
    // @ts-ignore
    return React.createElement('div', null, React.createElement('div', null, this.props.text));
  }
}
