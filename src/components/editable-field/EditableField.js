import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.css';

let cx = classNames.bind(styles);

export class EditableField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editable: false,
      value: props.field.title
    }
  }

  makeStatic() {
    this.setState({
      editable: false,
      value: this.props.field.title
    })
  }

  makeEditable() {
    this.setState({
      editable: true
    })
  }

  setTitle() {
    this.setState({
      value: this.refs.input.value
    })
  }

  saveTitle() {
    const value = this.refs.input.value;
    if (value) {
      this.props.onSave(this.refs.input.value);
      this.setState({
        editable: false
      })
    } else {
      this.props.onError();
    }
  }

  render() {
    const {field: {required}, narrow} = this.props;
    return (
      <span>
        {this.state.editable ? (
          <span>
            <input className={cx('editable-field__input', {'editable-field__input--narrow': !!narrow})} ref='input' type="text" onChange={this.setTitle.bind(this)} value={this.state.value}/>
            <span className={cx('editable-field__icon', 'editable-field__icon--save')} onClick={this.saveTitle.bind(this)}/>
            <span className={cx('editable-field__icon', 'editable-field__icon--cancel')} onClick={this.makeStatic.bind(this)}/>
          </span>
        ) : (
          <span>
            <span title={this.state.value} className={cx('editable-field__title', {'editable-field__title--narrow': !!narrow})}>{this.state.value}</span>
            {required && <span className={cx('editable-field--required')}>*</span>}
            <span className={cx('editable-field__icon', 'editable-field__icon--edit')} onClick={this.makeEditable.bind(this)}/>
          </span>
        )}
      </span>
    );
  }
}
