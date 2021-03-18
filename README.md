# react-drag-listview

React drag list component.

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![npm download][download-image]][download-url]

[npm-image]: http://img.shields.io/npm/v/react-drag-listview.svg?style=flat-square
[npm-url]: http://npmjs.org/package/react-drag-listview
[travis-image]: https://img.shields.io/travis/raisezhang/react-drag-listview.svg?style=flat-square
[travis-url]: https://travis-ci.org/raisezhang/react-drag-listview
[download-image]: https://img.shields.io/npm/dm/react-drag-listview.svg?style=flat-square
[download-url]: https://npmjs.org/package/react-drag-listview

## install

[![rc-table](https://nodei.co/npm/react-drag-listview.png)](https://npmjs.org/package/react-drag-listview)

## Example

* ###### Drag Rows
    * [Simple dragging demo](https://raisezhang.github.io/react-drag-listview/examples/simple.html)
    * [Dragging Ant-Design table](https://codepen.io/raisezhang/pen/MmjypX)
    * [Dragging Ant-Design table width expanded rows](https://codepen.io/raisezhang/pen/OrrGJL)
    * [Dragging Ant-Design transfer items](https://codepen.io/opaulochaves/pen/qgeVLR)
    * [Dragging Ant-Design Nested List Items](https://codesandbox.io/s/react-drag-listview-nested-drag-example-mdrbh?file=/src/questions.js)

* ###### Drag Columns
    * [Simple dragging columns demo](https://raisezhang.github.io/react-drag-listview/examples/dragColumn.html)
    * [Dragging Ant-Design table columns](https://codepen.io/raisezhang/pen/MoMoyz)

## Development

```bash
npm install
npm start
```

## Usage

```javascript
const ReactDragListView = require('react-drag-listview');

class Demo extends React.Component {
  constructor(props) {
    super(props);

    const data = [];
    for (let i = 1, len = 7; i < len; i++) {
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
      <ReactDragListView {...dragProps}>
        <ol>
          {this.state.data.map((item, index) => (
            <li key={index}>
              {item.title}
              <a href="#">Drag</a>
            </li>
          ))}
        </ol>
      </ReactDragListView>
    );
  }
}

```

## API

### Properties

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th style="width: 100px;">Name</th>
      <th style="width: 50px;">Type</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>onDragEnd</td>
      <td>Function(fromIndex, toIndex)</td>
      <td></td>
      <td>on drag end callback, required</td>
    </tr>
    <tr>
      <td>nodeSelector</td>
      <td>String</td>
      <td>tr</td>
      <td>get drag item cssQuery</td>
    </tr>
    <tr>
      <td>handleSelector</td>
      <td>String</td>
      <td><b>nodeSelector</b></td>
      <td>get drag handle cssQuery</td>
    </tr>
    <tr>
      <td>ignoreSelector</td>
      <td>String</td>
      <td></td>
      <td>ignore node list</td>
    </tr>
    <tr>
      <td>enableScroll</td>
      <td>Boolean</td>
      <td>true</td>
      <td>whether use auto scroll for dragging</td>
    </tr>
    <tr>
      <td>scrollSpeed</td>
      <td>Number</td>
      <td>10</td>
      <td>scroll speed</td>
    </tr>
    <tr>
      <td>lineClassName</td>
      <td>String</td>
      <td></td>
      <td>get dragLine's className, css properties must be use <b>!important</b></td>
    </tr>
  </tbody>
</table>

## License

react-drag-listview is released under the MIT license.
