/**
 * Created by KyleRuan on 2017/4/20.
 */
/* eslint react/no-danger :0 */
import React from 'react';
import PropTypes from 'prop-types';
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

  render() {
    const { onSave, onCancel } = this.props;
    const item = this.props.item || {
      title: '',
      content: ''
    };
    const saveText = item.id ? 'save' : 'New File';
    const save = () => {
      onSave({
        item,
        title: this.titleRef.value,
        content: this.contentRef.value
      });
    };

    return (
      <div className="col-md-8 item-editor-component">
        <div className="control-area">
          <button onClick={save}>{saveText}</button>
          <button onClick={onCancel}>取消</button>
        </div>
        <input
          placeholder="请填写标题"
          defaultValue={item.title}
          ref={(ref) => { this.titleRef = ref; }}
        />
        <textarea
          ref={(ref) => { this.contentRef = ref; }}
          placeholder="请填写内容"
          defaultValue={item.content}
        />
      </div>
    );
  }

}
ItemEditor.propTypes = propTypes;
