import React from 'react';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';
import styles from './styles.css';
import {SortableTable} from "../../components/table/Table";
import {getFields, getFormDescription, getErrors} from '../../selectors/index';
let cx = classNames.bind(styles);

@connect(state => ({
  appState: state,
  errors: getErrors(state),
  fields: getFields(state),
  description: getFormDescription(state)
}))
class FormPreview extends React.Component {
  saveForm() {
    const {fields, form} = this.props.appState;
    localStorage.setItem("appstate", JSON.stringify({fields, form}));
  }

  render() {
    const {description, errors} = this.props;
    return (
      <div className={cx('form-preview')}>
        <span className={cx('form-preview-title')}>San Francisco Driver Form</span>
        <span className={cx('form-preview__save-button')} onClick={this.saveForm.bind(this)}>Save form</span>
        {errors ? (
          <div className={cx('form-preview-error')}>Titles and choices must not be empty</div>
        ) : (
          <div className={cx('form-preview-description')}>Description: <span className={cx('form-preview-description-text')}>{description}</span></div>
        )}
        <SortableTable/>
      </div>
    );
  }
}

export default FormPreview;
