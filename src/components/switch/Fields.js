import React from 'react';
import ActionButton from '../action-button/ActionButton';
import {INPUT, TEXTAREA, CHECKBOX, RADIO, SELECT, UPLOAD } from '../../constants/index';

class Fields extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ActionButton title="Single-line text" type={INPUT}/>
        <ActionButton title="Textarea" type={TEXTAREA}/>
        <ActionButton title="Checkbox" type={CHECKBOX}/>
        <ActionButton title="Radio buttons" type={RADIO}/>
        <ActionButton title="Select" type={SELECT}/>
        <ActionButton title="File upload" type={UPLOAD}/>
      </div>
    );
  }
}

export default Fields;
