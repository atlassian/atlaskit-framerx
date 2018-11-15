import * as React from "react";
import { PropertyControls, ControlType } from "framer";
import { Radio } from "@atlaskit/radio";
import AKProps from "../AKProps";

// Define the properties of the component
interface Props extends AKProps {
  checkedValue: string;
}

export class AKRadioGroup extends React.Component<Props> {
  // The default properties of the component.
  static defaultProps = {
    label: "Radio",
    isChecked: false,
    isDisabled: false,
    isInvalid: false,
    width: 120,
    height: 28
  };

  // The property controls for the component.
  static propertyControls: PropertyControls = {
    label: {
      type: ControlType.String,
      title: "Label"
    },
    isChecked: {
      type: ControlType.Boolean,
      title: "Checked?"
    },
    isDisabled: {
      type: ControlType.Boolean,
      title: "Disabled?"
    },
    isInvalid: {
      type: ControlType.Boolean,
      title: "Invalid?"
    }
  };

  render() {
    return <Radio {...this.props} />;
  }
}
