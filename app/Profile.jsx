/**
 * Created by KyleRuan on 2017/4/10.
 */
import React from 'react';
import PropTypes from 'prop-types';
import Hobby from './Hobby';

const propTypes = {
  // isRequired 表示是必须的
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
};
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      like: 1,
      hobbies: ['game', 'basketball']
    };
    this.hobbyRef = null;
    this.likeCallback = this.likeCallback.bind(this);
    this.addHobby = this.addHobby.bind(this);
  }
  // component 的生命周期
  // 在render之后，并且组件组装完成之后,只调用一次
  componentDidMount() {
    console.log(this.hobbyRef);
    setTimeout(() => {
      this.likeCallback();
    }, 1000);
  }

  componentWillReceiveProps(nextProps) {

  }
  likeCallback() {
    let like = this.state.like;
    like++;
    this.setState({
      like
    });
  }
  addHobby() {
    // const hobby = this.hobbyRef;
    console.log(this.hobby.value);
    if (this.hobby.value) {
      const hobbies = [...this.state.hobbies, this.hobby.value];
      this.setState({
        hobbies
      }, () => {
        this.hobby.value = '';
      });
    }
  }
  render() {
    console.log('render');
    return (
      <div className="profile-component">
        <h1>我的名字叫{this.props.name}</h1>
        <h2>我今年{this.props.age}</h2>
        <button onClick={this.likeCallback}>赞</button>
        <h3>liked : {this.state.like}</h3>
        <h2>Hobbies</h2>
        {this.state.hobbies.map(hobby => (<Hobby key={hobby} hobby={hobby} />))}
        <input type="text" ref={(ref) => { this.hobby = ref; }} />
        <button onClick={this.addHobby}>添加hobby</button>
      </div>
    );
  }
}
Profile.propTypes = propTypes;
export default Profile;
