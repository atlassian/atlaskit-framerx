import * as React from 'react';
import { PropertyControls, ControlType } from 'framer';
import { Checkbox } from '@atlaskit/checkbox';
import AKProps from '../AKProps';

type Sizes = 'regular' | 'large';

const style: React.CSSProperties = {
  height: '100%',
  display: 'flex',
  width: '100%',
  justifyContent: 'left',
  alignItems: 'center'
  
}

// Define the properties of the component
interface Props extends AKProps {
  label: string;
  isChecked: boolean;
  isDisabled: boolean;
  isInvalid: boolean;
}

export class AKCheckbox extends React.Component<Props> {
  // The default properties of the component.
  static defaultProps = {
    label: 'Checkbox',
    isChecked: false,
    isDisabled: false,
    isInvalid: false,

    width: 120,
    height: 28
  }

  // The property controls for the component.
  static propertyControls: PropertyControls = {
    label: {
      type: ControlType.String,
      title: 'Label'
    },
    isChecked: {
      type: ControlType.Boolean,
      title: 'Checked?'
    },
    isDisabled: {
      type: ControlType.Boolean,
      title: 'Disabled?'
    },
    isInvalid: {
      type: ControlType.Boolean,
      title: 'Invalid?'
    }
  }

  render() {
    return (
      <div style={style}>
        <Checkbox {...this.props}/>
      </div>
    )
  }

}