import React from 'react';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';
import styles from './styles.css';
import {editItem} from '../../actions/index';
import {EditableField} from "../editable-field/EditableField";

let cx = classNames.bind(styles);

@connect(null, {
  editItem
})
class Checkbox extends React.Component {
  constructor(props) {
    super(props);
  }

  addChoice() {
    const {field: {id, choices = []}} = this.props;
    this.props.editItem(id, [...choices, {title: 'Default Choice'}], 'choices');
  }

  saveChoice(value, key) {
    const {field: {id, choices = []}} = this.props;
    const updatedChoices = choices.map((choice, index) => {
      if (index === key) {
        choice = Object.assign({}, choice, {title: value});
      }
      return choice;
    });
    this.props.editItem(id, updatedChoices, 'choices');
  }

  removeChoice(key) {
    const {field: {id, choices = []}} = this.props;
    const updatedChoices = choices.filter((choice, index) => {
      if (index !== key) {
        return choice;
      }
    });
    this.props.editItem(id, updatedChoices, 'choices');
  }

  render() {
    const {field: {choices}} = this.props;
    return (
      <div className={cx('field')}>
        {choices && choices.map((choice, key) => (
          <div key={key}>
            <input type="checkbox"/>
            <label><EditableField field={choice} narrow={true} onSave={(value) => this.saveChoice(value, key)}/></label>
            <span className={cx('field__icon', 'field__icon--remove')} onClick={this.removeChoice.bind(this, key)}/>
          </div>
        ))}
        <p className={cx('field__add-item')} onClick={this.addChoice.bind(this)}>+ Add Choice</p>
      </div>
    );
  }

}

export default Checkbox;
