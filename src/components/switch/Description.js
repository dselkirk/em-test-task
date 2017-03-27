import React from 'react';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';
import styles from './styles.css';
import {updateFormDescription} from '../../actions/index';
import {getFormDescription} from '../../selectors/index';

let cx = classNames.bind(styles);

@connect(state => ({
  description: getFormDescription(state)
}),
  {
  updateFormDescription
})
class Description extends React.Component {
  constructor(props) {
    super(props);
  }
  updateFormDescription() {
    this.props.updateFormDescription(this.refs.textarea.value)
  }
  render() {
    return (
      <div className={cx('description')}>
       <textarea ref='textarea' className={cx('description-field')} value={this.props.description} onChange={this.updateFormDescription.bind(this)}/>
      </div>
    );
  }
}

export default Description;
