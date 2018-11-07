import * as React from 'react';
import { PropertyControls, ControlType } from 'framer';
import Toggle from '@atlaskit/toggle';

type Sizes = 'regular' | 'large';

const style: React.CSSProperties = {
  height: '100%',
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center'
  
}

// Define the properties of the component
interface Props {
  disabled: boolean;
  size: Sizes;
  label: string;
  isChecked: boolean;
}

// Unstable, don't use yet
export class AKToggle extends React.Component<Props> {
  // The default properties of the component.
  static defaultProps = {
    disabled: false,
    size: 'regular',
    label: '',
    isChecked: true
  }

  // The property controls for the component.
  static propertyControls: PropertyControls = {
    disabled: {
      type: ControlType.Boolean,
      title: ''
    },
    size: {
      type: ControlType.Enum,
      title: 'Size',
      optionTitles: ['🔘 Regular', '⚪️ Large'],
      options: ['regular', 'large']
    },
    label: {
      type: ControlType.String,
      title: 'Label'
    },
    isChecked: {
      type: ControlType.Boolean,
      title: 'Checked?'
    }
  }

  render() {
    return(
      <div style={style}>
        <Toggle {...this.props} />
      </div>
    )
  }
}