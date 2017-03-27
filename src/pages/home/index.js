/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';
import styles from './styles.css';
import FormPreview from '../../containers/form-preview/FormPreview';
import Sidebar from '../../containers/sidebar/Sidebar';
import {restoreForm, restoreFields} from '../../actions/index';

let cx = classNames.bind(styles);

@connect(null, {
  restoreForm,
  restoreFields
})
class HomePage extends React.Component {
  componentDidMount() {
    const appState = JSON.parse(localStorage.getItem('appstate'));
    const {fields, form} = appState;
    if (appState) {
      this.props.restoreForm(form);
      this.props.restoreFields(fields);
    }
  }

  render() {
    return (
      <div className={cx('container')}>
        <Sidebar />
        <FormPreview />
      </div>
    );
  }

}

export default HomePage;
