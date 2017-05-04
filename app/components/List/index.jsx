/**
 * Created by KyleRuan on 2017/4/20.
 */
import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '../ListItem';
import './style.scss';

const proptypes = {
  items: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired
};

function List({ items, onSelect }) {
  const itemsContent = items.map(
    item => (
      <ListItem
        item={item}
        key={item.id}
        onClick={() => onSelect(item.id)}
      />
    ));
  return (
    <div className="list-component">
      {itemsContent}
    </div>
  );
}

List.propTypes = proptypes;
export default List;
