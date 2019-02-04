import * as React from "react";
import { PropertyControls, ControlType } from "framer";
import AvatarGroup from '@atlaskit/avatar-group';
import AKProps from "../AKProps";

export const avatarUrl: string =
  'https://pbs.twimg.com/profile_images/803832195970433027/aaoG6PJI_400x400.jpg';

const style: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  height: "100%"
};

// Define type of property
interface Props extends AKProps {
    appearance: string,
    maxCount: number,
    size: string,
    borderColor: string,
    numberOfAvatar: number,
    avatarAppearance: string,
}

export class AKAvatarGroup extends React.Component<Props> {
  // The default properties of the component.
  static defaultProps = {
    appearance: "grid",
    borderColor: '#FFFFFF',
    width: 120,
    avatarAppearance: 'circle',
    maxCount: 11,
    height: 38
  };

  // The property controls for the component.
  static propertyControls: PropertyControls = {
    borderColor: {
      type: ControlType.Color,
      title: "Border Color"
    },
    numberOfAvatar: {
        type: ControlType.Number,
        title: 'Number of Avatar'
    },

    size: {
        type: ControlType.Enum,
        title: 'Size',
        optionTitles: [
            "xsmall",
            "small",
            "medium",
            "large",
            "xlarge",
            "xxlarge"
          ],
          options: [
            "xsmall",
            "small",
            "medium",
            "large",
            "xlarge",
            "xxlarge"
          ]
    },
    appearance: {
      type: ControlType.Enum,
      title: "Appearance",
      optionTitles: [
        "grid",
        "stack"
      ],
      options: [
        "grid",
        "stack"
      ]
    },
    maxCount: {
      type: ControlType.Number,
      title: 'maxCount',
    },
    avatarAppearance: {
        type: ControlType.Enum,
        title: "avatarAppearance",
        optionTitles: [
          "square",
          "circle"
        ],
        options: [
          "square",
          "circle"
        ]
    }
  };

  render() {
    const {avatarAppearance, numberOfAvatar, ...rest} = this.props;
    return (
      <AvatarGroup {...rest} data={[...Array(numberOfAvatar)].map((_, i) => ({
        key: i,
        appearance: avatarAppearance,
        enableTooltip: true,
        name: `Grid Avatar ${i + 1}`,
        src: avatarUrl,
        size: this.props.size,
      }))}/>
    );
  }
}
