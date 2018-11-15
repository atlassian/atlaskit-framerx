
import * as React from 'react';
import { PropertyControls, ControlType } from 'framer';
import FieldText from '@atlaskit/field-text';

type AutoComplete = 'on' | 'off';

// Define the properties of the component
interface Props {
  autoComplete: AutoComplete;
  form: string;
  pattern: string;
  disabled: boolean;
  isReadOnly: boolean;
  required: boolean;
  isInvalid: boolean;
  label: string;
  name:string;
  min:number;
  max:number;
  isLabelHidden: boolean;
  isMonospaced: boolean;
  invalidMessage: boolean;
  shouldFitContainer: boolean;
  isSpellCheckEnabled: boolean;
  autoFocus: boolean;
  maxLength: number;
  isValidationHidden: boolean;
}

// Unstable, don't use yet
export class TextField extends React.Component<Props> {
  // The default properties of the component.
  static defaultProps = {
    autoComplete: 'off',
    form: 'regular',
    pattern: '',
    disabled: false,
    required: false,
    isInvalid: false,
    label: 'Field Name',
    name: 'html-field-name',
    min: '',
    max: '',
    placeholder: 'Placeholder text',
    isLabelHidden: false,
    isMonospaced: false,
    invalidMessage: false,
    shouldFitContainer: true,
    isSpellCheckEnabled: false,
    autoFocus: false,
    maxLength: '',
    isValidationHidden: false;
  }

  // The property controls for the component.
  static propertyControls: PropertyControls = {
    autoComplete: {
      type: ControlType.Enum,
      title: 'Autocomplete',
      optionTitles: ['On', 'Off'],
      options: ['on', 'off']
    },
    form: {
      type: ControlType.String,
      title: 'Form'
    },
    pattern: {
      type: ControlType.String,
      title: 'Regular expression pattern'
    },
    disabled: {
      type: ControlType.Boolean,
      title: 'Disabled?'
    },
    required: {
      type: ControlType.Boolean,
      title: 'Required?'
    },
    isInvalid: {
      type: ControlType.Boolean,
      title: 'Invalid?'
    },
    label: {
      type: ControlType.String,
      title: 'Label'
    },
    name: {
      type: ControlType.String,
      title: 'Name'
    },
    min: {
      type: ControlType.Number,
      title: 'Minimum Number'
    },
    max: {
      type: ControlType.Number,
      title: 'Maximum Number'
    },
    placeholder: {
      type: ControlType.String,
      title: 'Placeholder text'
    },
    isLabelHidden: {
      type: ControlType.Boolean,
      title: 'Hide label'
    },
    isMonospaced: {
      type: ControlType.Boolean,
      title: 'Monospace'
    },
    invalidMessage: {
      type: ControlType.Boolean,
      title: 'Invalid Message'
    },
    shouldFitContainer: {
      type: ControlType.Boolean,
      title: 'Should fit container?'
    },
    isSpellCheckEnabled: {
      type: ControlType.Boolean,
      title: 'Spell-checked?'
    },
    autoFocus: {
      type: ControlType.Boolean,
      title: 'Auto Focus?'
    },
    maxLength: {
      type: ControlType.Number,
      title: 'Max Character Length'
    },
    isValidationHidden: {
      type: ControlType.Boolean,
      title: 'Hide validation?'
    }
  }

  render() {
    return(
      <FieldText {...this.props} />
    )
  }
}


