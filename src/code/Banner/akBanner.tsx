import * as React from "react";
import { PropertyControls, ControlType } from "framer";
import Banner from "@atlaskit/banner";
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
  text: string;
  appearance: string;
}

export class AKBanner extends React.Component<Props> {
  // The default properties of the component.
  static defaultProps = {
    text: "1",
    appearance: "primary",

    width: 120,
    height: 38
  };

  // The property controls for the component.
  static propertyControls: PropertyControls = {
    text: {
      type: ControlType.String,
      title: "Text"
    },
    appearance: {
      type: ControlType.Enum,
      title: "Appearance",
      optionTitles: [
        "added",
        "default",
        "important",
        "primary",
        "primaryInverted",
        "removed"
      ],
      options: [
        "added",
        "default",
        "important",
        "primary",
        "primaryInverted",
        "removed"
      ]
    }
  };

  render() {
    return (
      <Banner appearance="warning" isOpen {...this.props}>
        sdfsdjflkdsj
      </Banner>
    );
  }
}
