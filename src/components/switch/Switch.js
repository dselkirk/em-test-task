import React from 'react';
import classNames from 'classnames/bind';
import ui from 'redux-ui';
import styles from './styles.css';

let cx = classNames.bind(styles);


class SwitchContent extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const {tab: {contentDescription, contentTitle}} = this.props;
    return (
      <div className={cx('switch-content')}>
        <div className={cx('switch-content-description')}>{contentDescription}</div>
        <div className={cx('switch-content-title')}>{contentTitle}</div>
        {this.props.children}
      </div>
    );
  }
}

@ui({
  state: {
    selectedTab: {}
  }
})
class Switch extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {updateUI, tabs} = this.props;

    updateUI({selectedTab: tabs[0]});
  }

  selectTab(tab) {
    this.props.updateUI({selectedTab: tab});
  }

  renderTabs(tabs) {
    const {ui: {selectedTab}} = this.props;
    return tabs.map(tab => (<div className={cx('switch', {'switch--selected': tab.key === selectedTab.key})} onClick={this.selectTab.bind(this, tab)}>{tab.title}</div>))
  }

  render() {
    const {tabs, ui: {selectedTab}} = this.props;

    return (
      <div className={cx('switch-group')}>
        {this.renderTabs(tabs)}
        <SwitchContent tab={selectedTab}>
          {selectedTab.content}
        </SwitchContent>
      </div>
    );
  }
}

export default Switch;
