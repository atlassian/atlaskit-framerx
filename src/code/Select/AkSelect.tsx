import * as React from "react";
import { PropertyControls, ControlType } from "framer";
import { Field } from '@atlaskit/form';
import Select, {
    components,
    createFilter,
    mergeStyles,
    AsyncSelect,
    CheckboxSelect,
    CountrySelect,
    RadioSelect,
    CreatableSelect,
    AsyncCreatableSelect,
    PopupSelect,
  } from '@atlaskit/select';

const style: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
};

// Define type of property
interface Props {
    type: string;
    placeholder?: string;
    isInvalid?: string;
    invalidMessage?: string;
    helperText?: string;
    label?: string;
    isRequired?: string;
    options: string;
}

export class AkSelect extends React.Component<Props> {

    // Set default properties
    static defaultProps = {
        type: "default",
        placeholder: 'Select...',
        label: '',
        options: 'Atlassian|Sean Curtis|You'
    }

    // Items shown in property panel
    static propertyControls: PropertyControls = {
    type: { 
        type: ControlType.Enum, 
        title: "Select Type",
        optionTitles: ['😀 Default', '🔵 Async', 'Country', 'Creatable'],
        options: ['default', 'async', 'country', 'creatable']
    },
    placeholder: {
        type: ControlType.String,
        title: 'Placeholder'
    },
    isInvalid: {
        type: ControlType.SegmentedEnum,
        title: 'isInvalid?',
        options: ['none', 'true', 'false'],
        optionTitles: ['none', 'true', 'false']
    },
    invalidMessage: {
        type: ControlType.String,
        title: 'invalidMessage'
    },
    helperText: {
        type: ControlType.String,
        title: 'helperText'
    },
    label: {
        type: ControlType.String,
        title: 'label'
    },
    isRequired: {
        type: ControlType.Boolean,
        title: 'isRequired?'
    },
    options: {
        type: ControlType.String,
        title: 'Options'
    }
    }

    Outer = ({children}) => {
        const { label, isInvalid, invalidMessage, helperText, isRequired } = this.props;
        if (isInvalid === 'none' && label === '') return <React.Fragment>{children}</React.Fragment>;
        if (isInvalid === 'true') {
            return <Field label={label} invalidMessage={invalidMessage} isInvalid={isInvalid === 'true'} isRequired={isRequired}>
                {children}
            </Field>
        }
        return <Field label={label} helperText={helperText} isInvalid={isInvalid === 'false' ? false : undefined} isRequired={isRequired}>
            {children}
        </Field>
    }

    renderSelect() {
        const {type, isInvalid, invalidMessage, helperText, options, ...rest} = this.props;
        const selectOptions = options === '' ? [] : options.split('|').map(v => ({label: v, value: v}));
        switch(type){
            case 'async':
                return <AsyncSelect options={selectOptions} {...rest} />
            case 'creatable':
                return <CreatableSelect options={selectOptions} {...rest}/>
            case 'country':
                return <CountrySelect/>
            default:
                return <Select options={selectOptions} {...rest}/>
        }
    }

    render() {
        return <div>
            <this.Outer> 
                {
                    this.renderSelect()
                }
            </this.Outer>
        </div>;
    }
}
