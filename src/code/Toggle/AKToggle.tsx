import * as React from 'react';
import { PropertyControls, ControlType } from 'framer';
import Toggle from '@atlaskit/toggle';
import { md, Example, Props, code } from '@atlaskit/docs';

type Sizes = 'regular' | 'large';

// Define the properties of the component
interface Props {
  isDisabled: boolean;
  size: Sizes;
  label: string;
  isDefaultChecked: boolean;
}

// Unstable, don't use yet
export class AKToggle extends React.Component<Props> {
  // The default properties of the component.
  static defaultProps = {
    isDisabled: false,
    size: 'regular',
    label: '',
    isDefaultChecked: true
  }

  // The property controls for the component.
  static propertyControls: PropertyControls = {
    isDisabled: {
      type: ControlType.Boolean,
      title: ''
    },
    size: {
      type: ControlType.Enum,
      title: 'Size',
      optionTitles: ['Regular', 'Large'],
      options: ['regular', 'large']
    },
    label: {
      type: ControlType.String,
      title: 'Label'
    },
    isDefaultChecked: {
      type: ControlType.Boolean,
      title: 'Checked?'
    }
  }

  render() {
    return(
        <Toggle {...this.props} />
    )
  }
}