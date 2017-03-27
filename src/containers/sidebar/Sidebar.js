import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.css';
import Switch from "../../components/switch/Switch";
import Description from "../../components/switch/Description";
import Fields from "../../components/switch/Fields";

let cx = classNames.bind(styles);
const tabs = [{
  key: 'fields',
  title: 'Custom fields',
  contentTitle: 'Add Custom Field',
  contentDescription: 'Selected fields will be added to the form',
  content: <Fields/>
}, {
  key: 'description',
  title: 'Description (Optional)',
  contentTitle: 'Form Description',
  contentDescription: 'Optional form description',
  content: <Description/>
}];

class Sidebar extends React.Component {

  render() {
    return (
      <div className={cx('sidebar')}>
        <div className={cx('sidebar-title')}>San Francisco Driver Form</div>
        <Switch tabs={tabs}/>
      </div>
    );
  }

}

export default Sidebar;
