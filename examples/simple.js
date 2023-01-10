/* eslint-disable no-console,func-names,react/no-multi-comp */
import React from 'react';
import ReactDOM from 'react-dom';
import ReactDragListView from 'react-drag-listview/src/index.js';

import './index.less';

// Import only if you need to support touch screen devices
// https://bernardo-castilho.github.io/DragDropTouch/DragDropTouch.js
import '../plugins/DragDropTouch.js';

class Demo extends React.Component {
  constructor(props) {
    super(props);
    const data = [];
    for (let i = 1, len = 21; i < len; i += 1) {
      data.push({
        title: `rows${i}`
      });
    }
    this.state = {
      data
    };
  }

  render() {
    const that = this;
    const dragProps = {
      onDragEnd(fromIndex, toIndex) {
        const data = [...that.state.data];
        const item = data.splice(fromIndex, 1)[0];
        data.splice(toIndex, 0, item);
        that.setState({ data });
      },
      nodeSelector: 'li',
      handleSelector: 'a'
    };

    return (
      <div className="simple simple1">
        <h2>Dragging handle</h2>
        <div className="simple-inner">
          <ReactDragListView {...dragProps}>
            <ol>
              {this.state.data.map((item, index) => (
                <li key={index}>
                  {item.title}
                  <a>Start Drag</a>
                </li>
            ))}
            </ol>
          </ReactDragListView>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, document.getElementById('__react-content'));
