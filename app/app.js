import {MyComponent} from './component.js';

const START_TIME = Date.now();
const TOTAL = 1000;

let data = {};
for (let i = 0; i < TOTAL; i++) {
  data['entry' + i] = 'TEXT ' + i;
}

// @ts-ignore
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
    };
  }

  render() {
    // @ts-ignore
    return [
      // @ts-ignore
      React.createElement('button', {
        key: 1,
        onClick: () => {
          let startTime = Date.now();
          for (let key in data) {
            data[key] = 'TEXT ' + startTime;
          }
          // @ts-ignore
          this.setState({
            data: {...data},
          });
          // @ts-ignore
          window.requestIdleCallback(() => {
            console.log(Date.now() - startTime);
          });
        },
      }, 'UPDATE ALL'),
      // @ts-ignore
      React.createElement('div', {
        key: 2,
        style: {
          padding: '10px',
        },
    }, Object.keys(data).map(key => {
      // @ts-ignore
        return React.createElement(MyComponent, {
          key: key,
          text: this.state.data[key],
        });
      })),
    ];
  }
}

const appContainer = document.querySelector('#app');
// @ts-ignore
ReactDOM.render(React.createElement(App), appContainer);

// @ts-ignore
window.requestIdleCallback(() => {
  console.log(Date.now() - START_TIME);
});
