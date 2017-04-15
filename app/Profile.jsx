/**
 * Created by KyleRuan on 2017/4/10.
 */
import React, { PropTypes } from 'react';

const propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired
};
function Profile(props) {
  return (
    <div className="profile-component">
      <h1>我的名字叫{props.name}</h1>
      <h2>我今年{props.age}</h2>
    </div>
  );
}
Profile.propTypes = propTypes;
export default Profile;
