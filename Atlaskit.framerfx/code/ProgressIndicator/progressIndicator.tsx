import * as React from "react";
import { PropertyControls, ControlType } from "framer";
import { ProgressDots } from "@atlaskit/progress-indicator";
import AKProps from "../AKProps";

const style: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  height: "100%"
};

// Define type of property
interface Props extends AKProps {
  selectedIndex: number;
  values: Array<string>;
}

export class AKIndicator extends React.Component<Props> {
  // The default properties of the component.
  static defaultProps = {
    selectedIndex: 0,
    values: 3,
    width: 120,
    height: 38
  };

  // The property controls for the component.
  static propertyControls: PropertyControls = {
    selectedIndex: {
      type: ControlType.Number,
      title: "Selected Index"
    },
    values: {
      type: ControlType.Number,
      title: "Values"
    }
  };

  valuesToArray = () => {
    return [...Array(this.props.values)].map((_, i) => `${i + 1}`);
  };

  render() {
    return <ProgressDots {...this.props} values={this.valuesToArray()} />;
  }
}
