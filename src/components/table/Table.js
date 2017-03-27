import React from 'react';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';
import {SortableContainer, SortableElement, SortableHandle, arrayMove} from 'react-sortable-hoc';
import styles from './styles.css';
import {removeItem, toggleRequired, editItem, addError, restoreFields} from '../../actions/index';
import {getFields} from '../../selectors/index';
import {EditableField} from '../editable-field/EditableField';
import {INPUT, TEXTAREA, CHECKBOX, RADIO, SELECT, UPLOAD } from '../../constants/index';
import Textarea from "../fields/Textarea";
import Checkbox from "../fields/Checkbox";
import Radio from "../fields/Radio";
import Input from "../fields/Input";
import Select from "../fields/Select";
import Upload from "../fields/Upload";

let cx = classNames.bind(styles);

const DragHandle = SortableHandle(() => <span className={cx('table-drag__icon')}/>);

const SortableItem = SortableElement(({removeItem, toggleRequired, mapType, onError, onSaveTitle, field}) => {
  return (
    <tr>
      <td className={cx('table-cell','table-cell--main')}><DragHandle /><EditableField field={field} onError={onError.bind(this)} onSave={(newValue) => onSaveTitle(newValue, field.id)}/></td>
      <td className={cx('table-cell', 'table-cell--preview')}>{mapType(field.type, field)}</td>
      <td className={cx('table-cell', 'table-cell--option')}>
        <input type="checkbox" checked={field.required}/>
        <label onClick={toggleRequired.bind(this, field.id)}/>
      </td>
      <td className={cx('table-action--remove', 'table-cell', 'table-cell--actions')} onClick={removeItem.bind(this, field.id)}>Remove</td>
    </tr>
  )
});

const SortableList = SortableContainer(({items, removeItem, toggleRequired, mapType, onError, onSaveTitle}) => {
  return (
    <div>
      <table className={cx('table')}>
        <thead>
        <tr>
          <th className={cx('table-header', 'table-cell--main')}>Question Title</th>
          <th className={cx('table-header', 'table-cell--preview')}>Preview</th>
          <th className={cx('table-header', 'table-cell--option')}>Required?</th>
          <th className={cx('table-header', 'table-cell--actions')}/>
        </tr>
        </thead>
        <tbody>
        {items && items.map((field, index) => {
            return (
              <SortableItem
                key={`item-${index}`}
                index={index}
                field={field}
                onError={() => onError()}
                onSaveTitle={(title, id) => onSaveTitle(title, id)}
                toggleRequired={(id) => toggleRequired(id)}
                removeItem={(id) => removeItem(id)}
                mapType={(type, field) => mapType(type, field)}
              />
            )
          }
        )}
        </tbody>
      </table>
    </div>
  );
});

@connect(state => ({
  items: getFields(state),
}),
  {
  removeItem,
  toggleRequired,
  editItem,
  addError,
  restoreFields
})
export class SortableTable extends React.Component {

  removeItem(id) {
    this.props.removeItem(id);
  }

  toggleRequired(id) {
    this.props.toggleRequired(id);
  }

  mapType(type, field) {
    switch(type) {
      case INPUT:
        return <Input field={field}/>;
      case TEXTAREA:
        return <Textarea field={field}/>;
      case CHECKBOX:
        return <Checkbox field={field}/>;
      case RADIO:
        return <Radio field={field}/>;
      case SELECT:
        return <Select field={field}/>;
      case UPLOAD:
        return <Upload field={field}/>;
      default:
        return <Input field={field}/>;
    }
  }

  onSaveTitle(newTitle, id) {
    this.props.editItem(id, newTitle, 'title');
  }

  onError() {
    this.props.addError();
  }

  onSortEnd = ({oldIndex, newIndex}) => {
    let {items, restoreFields} = this.props;
    restoreFields({fields: arrayMove(items, oldIndex, newIndex)});
  };

  render() {
    let {items} = this.props;

    return (
      <SortableList
        items={items}
        onSortEnd={this.onSortEnd.bind(this)}
        onError={() => this.onError()}
        onSaveTitle={(title, id) => this.onSaveTitle(title, id)}
        toggleRequired={(id) => this.toggleRequired(id)}
        removeItem={(id) => this.removeItem(id)}
        mapType={(type, field) => this.mapType(type, field)}
        useDragHandle={true} />
    )
  }
}
