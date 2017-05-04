/**
 * Created by KyleRuan on 2017/4/20.
 */

import React from 'react';
import PropTypes from 'prop-types';

const propType = {
  item: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
};
// item onClick 就是这component的properties
function ListItem({ item, onClick }) {
  let formatTime = '时间未知 hapde ';
  if (item.time) {
    formatTime = new Date(item.time).toISOString().match(/(\d{4}-\d{2}-\d{2})/)[1];
  }
  return (
    <a
      href="#"
      className="list-group-item item-component"
      onClick={onClick}
    >
      <span className="label label-default label-pill pull-xs-right">
        {formatTime}
      </span>
      <span className="list-title">{item.title}</span>
    </a>
  );
}

ListItem.propTypes = propType;
export default ListItem;
