/**
 * Created by KyleRuan on 2017/4/21.
 */
import React from 'react';
// import PropTypes from 'prop-types';
import List from '../List';
import CreateBar from '../CreateBar';
import ItemEditor from '../ItemEditor';
import ItemShowLayer from '../ItemShowLayer';
import './style.scss';

export default class Deskmark extends React.Component {

  componentDidMount() {
    this.props.actions.fetchEntryList();
  }

  render() {
    const { state, actions } = this.props;
    const { isEditing, selectedId } = state.editor;
    const items = state.items;
    const item = items.find(it => it.id === selectedId);
    const mainPart = isEditing ? (
      <ItemEditor
        item={item}
        onSave={actions.saveEntry}
        onCancel={actions.cancelEdit}
      />
    ) : (
      <ItemShowLayer
        item={item}
        onEdit={actions.editEntry}
        onDelete={actions.deleteEntry}
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
              <CreateBar onClick={actions.createNewEntry} />
              <List items={items} onSelect={actions.selectEntry} />
            </div>
            {mainPart}
          </div>
        </div>
      </section>
    );
  }

}

