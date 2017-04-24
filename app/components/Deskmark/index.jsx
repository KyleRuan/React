/**
 * Created by KyleRuan on 2017/4/21.
 */
import React from 'react';
import uuid from 'uuid';
// import PropTypes from 'prop-types';
import List from '../List';
import CreateBar from '../CreateBar';
import ItemEditor from '../ItemEditor';
import ItemShowLayer from '../ItemShowLayer';
import './style.scss';

export default class Deskmark extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    // 需要存储的
    // 1. 保存所有文章的东西
    // 2. 当前选中的文章id
    // 3. 右边是编辑还是阅读状态
    const selected = this.props.items[0];
    const selectedID = selected.id ? selected.id : null;
    this.state = {
      items: this.props.items,
      selectedId: selectedID,
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
    console.log(item);
    let id = item.id;
    const { title, content } = item;
    if (!id) {
      id = uuid.v4();
      items = [...items, {
        time: new Date().getTime(),
        id,
        title,
        content
      }];
      // existed item
    } else {
      items = items.map(
        exist => (
          exist.id === item.id
            ? item
            : exist
        )
      );
    }
    console.log(items);
    this.setState({
      items,
      selectedId: id,
      editing: false
    });
  }

  deleteItem(id) {
    if (!id) {
      return;
    }
    const items = this.state.items.filter(
      result => result.id !== id
    );
    this.setState({
      items
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
    const { items, selectedId, editing } = this.state;
    const selected = selectedId && items.find(item => item.id === selectedId);
    const mainPart = editing ? (
      <ItemEditor
        item={selected}
        onSave={this.saveItem}
        onCancel={this.cancelEdit}
      />
    ) : (
      <ItemShowLayer
        item={selected}
        onEdit={this.editItem}
        onDelete={this.deleteItem}
      />
      );
    return (
      <section className="deskmark-component">
        <nav className="navbar navbar-fixed-top navbar-dark bg-inverse">
          <a className="navbar-brand" href="#">Deskmark App</a>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-md-4 list-group">
              <CreateBar onClick={this.createItem} />
              <List items={this.state.items} onSelect={this.selectItem} />
            </div>
            {mainPart}
          </div>
        </div>
      </section>
    );
  }

}

