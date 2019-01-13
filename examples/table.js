/* eslint-disable no-console,func-names,react/no-multi-comp */
import React from 'react';
import ReactDOM from 'react-dom';
import { Table } from 'antd';
import ReactDragListView from 'react-drag-listview/src/index.js';
import './index.less';

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [
        {
          key: '1',
          name: '1111',
          age: 32,
          address: '10 Downing Street'
        },
        {
          key: '2',
          name: '2222',
          age: 42,
          address: '10 Downing Street'
        },
        {
          key: '3',
          name: '3333',
          age: 42,
          address: '10 Downing Street'
        },
        {
          key: '4',
          name: '4444',
          age: 42,
          address: '10 Downing Street'
        },
      ],
    };
  }

  render() {
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
      },
      {
        key: '__drag__',
        render: () => (
          <a>drag</a>
        ),
      },
    ];
    const dragProps = {
      onDragEnd: (fromIndex, toIndex) => {
        const { dataSource } = this.state;
        const item = dataSource.splice(fromIndex, 1)[0];
        dataSource.splice(toIndex, 0, item);
        this.setState({ dataSource });
      },
      handleSelector: 'a',
      ignoreSelector: 'tr.ant-table-expanded-row',
    };

    return (
      <div className="simple simple1">
        <h2>Table</h2>
        <div className="simple-inner">
          <ReactDragListView {...dragProps}>
            <Table
              columns={columns}
              pagination={false}
              dataSource={this.state.dataSource}
              expandedRowRender={s => s.address}
            />
          </ReactDragListView>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, document.getElementById('__react-content'));
