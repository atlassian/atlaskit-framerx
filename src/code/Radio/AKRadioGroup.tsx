import * as React from "react";
import { PropertyControls, ControlType } from "framer";
import { RadioGroup } from "@atlaskit/radio";
import AKProps from "../AKProps";

const options = [
  { name: "color", value: "red", label: "Red" },
  { name: "color", value: "blue", label: "Blue" },
  { name: "color", value: "yellow", label: "Yellow" },
  { name: "color", value: "green", label: "Green" }
];

// Define the properties of the component
interface Props extends AKProps {
  checkedValue: string;
}

export class AKRadioGroup extends React.Component<Props> {
  // The default properties of the component.
  static defaultProps = {
    checkedValue: "red",
    width: 120,
    height: 28
  };

  // The property controls for the component.
  static propertyControls: PropertyControls = {
    checkedValue: {
      type: ControlType.Enum,
      title: "Checked value",
      optionTitles: ["red", "blue", "yellow", "green", null],
      options: ["red", "blue", "yellow", "green", "none"]
    }
  };

  render() {
    return (
      <RadioGroup options={options} checkedValue={this.props.checkedValue} />
    );
  }
}
