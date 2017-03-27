import React from 'react';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';
import {editItem} from '../../actions/index';
import styles from './styles.css';

let cx = classNames.bind(styles);

@connect(null, {
  editItem
})
class Input extends React.Component {

  saveValue() {
    const {field: {id}}= this.props;
    this.props.editItem(id, this.refs.input.value, 'previewValue');
  }

  render() {
    return (
      <div className={cx('field')}>
        <input ref="input" type="text" value={this.props.field.previewValue} onChange={this.saveValue.bind(this)}/>
      </div>
    );
  }

}

export default Input;
