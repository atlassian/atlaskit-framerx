import * as React from "react";
import { PropertyControls, ControlType } from "framer";
import { FormHeader } from '@atlaskit/form';

const style: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
};

// Define type of property
interface Props {
    title?: string,
    description?: string,
    fixed: boolean
}

export class AkSelect extends React.Component<Props> {

    // Set default properties
    static defaultProps = {
        title: "",
        description: '',
        fixed: false,
    }

    // Items shown in property panel
    static propertyControls: PropertyControls = {
    title: { 
        type: ControlType.String, 
        title: "Title",
    },
    description: {
        type: ControlType.String,
        title: 'Description'
    },
    fixed: {
        type: ControlType.Boolean,
        title: 'Fixed'
    }
    }

    render() {
        return <FormHeader {...this.props} />;
    }
}
