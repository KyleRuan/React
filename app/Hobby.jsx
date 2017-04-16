/**
 * Created by KyleRuan on 2017/4/16.
 */
import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  hobby: PropTypes.string.isRequired
};
export default function Hobby(props) {
  return <li>{props.hobby}</li>;
}
Hobby.propTypes = propTypes;
