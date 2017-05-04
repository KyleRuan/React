/**
 * Created by KyleRuan on 2017/4/20.
 */
/* eslint react/no-danger :0 */
import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
//  let saveText = item.id ? '保存' : '创建';
//  <input ref="title" placeholder="请填写标题" defaultValue={item.title} />
// <textarea ref="content" placeholder="请填写内容" defaultValue={item.content} />

const propTypes = {
  item: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
};

export default class ItemEditor extends React.Component {
  constructor(props) {
    super(props);
    this.titleRef = null;
    this.contentRef = null;
  }

  /**
   *  id: '6c89132-8dw22rce201s',
   title: 'Hello',
   content: '# testing markdown',
   time: 1458030208359
   */
  render() {
    const { onSave, onCancel } = this.props;
    const item = this.props.item || {
      title: '',
      content: ''
    };
    const saveText = item.id ? 'save' : 'New File';
    const save = () => {
      item.title = this.titleRef.value;
      item.content = this.contentRef.value;
      onSave(
        item
      );
    };

    return (
      <div className="col-md-8 item-editor-component">
        <div className="control-area">
          <button onClick={save} className="btn btn-success" >{saveText}</button>
          <button onClick={onCancel} className="btn secondary" >取消</button>
        </div>
        <div className="edit-area">
          <input
            placeholder="请填写标题 "
            defaultValue={item.title}
            ref={(ref) => { this.titleRef = ref; }}
          />
          <textarea
            ref={(ref) => { this.contentRef = ref; }}
            placeholder="请填写内容"
            defaultValue={item.content}
          />
        </div>
      </div>
    );
  }

}
ItemEditor.propTypes = propTypes;
