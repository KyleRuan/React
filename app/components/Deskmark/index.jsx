/**
 * Created by KyleRuan on 2017/4/21.
 */
import React from 'react';
// import PropTypes from 'prop-types';
import List from '../List';
import CreateBar from '../CreateBar';

export default class Deskmark extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      selectedId: null,
      editing: false
    };

    this.selectItem = this.selectItem.bind(this);
    this.saveItem = this.saveItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.createItem = this.createItem.bind(this);
    this.editItem = this.editItem.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
  }
  selectItem(id) {
    if (id === this.state.selectedId) {
      return;
    }

    this.setState({
      selectedId: id,
      editing: false
    });
  }

  saveItem(item) {
    let items = this.state.items;

    // new item
    if (!item.id) {
      items = [...items, {
        time: new Date().getTime()
      }];
      // existed item
    } else {
      items = items.map(
        exist => (
          exist.id === item.id
            ? {}
            : exist
        )
      );
    }

    this.setState({
      items,
      selectedId: item.id,
      editing: false
    });
  }

  deleteItem(id) {
    if (!id) {
      return;
    }

    this.setState({
      items: this.state.items.filter(
        result => result.id !== id
      )
    });
  }

  createItem() {
    this.setState({
      selectedId: null,
      editing: true
    });
  }

  editItem(id) {
    this.setState({
      selectedId: id,
      editing: true
    });
  }

  cancelEdit() {
    this.setState({ editing: false });
  }

  render() {
    const items = [
      {
        id: '6c89132-8dw2w1201s',
        title: 'Hello world',
        content: '## testing markdown',
        time: 1458030208280
      },
      {
        id: '6c89132-8dw22rce201s',
        title: 'Hello',
        content: '# testing markdown',
        time: 1458030208359
      }
    ];
    return (
      <section className="deskmark-component">
        <div className="container">
          <div className="row">
            <CreateBar />
            <List items={items} />
          </div>
        </div>
      </section>
    );
  }

}

