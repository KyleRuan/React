/**
 * Created by KyleRuan on 2017/4/15.
 */
import React from 'react';
import PropTypes from 'prop-types';
const propTypes = {
  // isRequired 表示是必须的
  name: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired
};
// 如果没有state则定义为函数，只是根据输入生成组件
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