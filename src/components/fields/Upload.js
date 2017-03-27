import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.css';

let cx = classNames.bind(styles);

class Upload extends React.Component {

  render() {
    return (
      <div className={cx('field')}>
        <input type="file"/>
      </div>
    );
  }

}

export default Upload;
