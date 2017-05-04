/**
 * Created by KyleRuan on 2017/4/21.
 */
import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const propTypes = {
  onClick: PropTypes.func.isRequired
};
function CreateBar({ onClick }) {
  return (
    <a href="#" onClick={onClick} className="list-group-item create-bar-component">
      + 创建新的文章
    </a>
  );
}
CreateBar.prototypes = propTypes;
export default CreateBar;
