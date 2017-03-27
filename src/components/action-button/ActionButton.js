import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.css';
import { connect } from 'react-redux';
import {addItem} from '../../actions/index';
import {IDGenerator} from '../../utils/id-generator';
let cx = classNames.bind(styles);
let generator = new IDGenerator();

const field = {
  title: 'Default Title',
  required: false
};

@connect(null, {
  addItem
})
class ActionButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {title, type} = this.props;
    return (
      <span className={cx('action-button')} onClick={() => this.props.addItem(Object.assign({}, field, {type, id: generator.generate()}))}>
        {title}
      </span>
    );
  }
}

export default ActionButton;
