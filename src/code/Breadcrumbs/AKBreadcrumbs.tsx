import * as React from "react";
import { PropertyControls, ControlType } from "framer";
import { AtlassianIcon } from '@atlaskit/logo';
import { BreadcrumbsStateless, BreadcrumbsItem } from '@atlaskit/breadcrumbs';

const style: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
};

// Define type of property
interface Props {
    isExpanded: boolean,
    breadCrumbs: string,
    maxItems: number,
}

export class AkFormHeader extends React.Component<Props> {

    // Set default properties
    static defaultProps = {
        isExpanded: false,
        breadCrumbs: 'Pages|Home|Item|Item2',
        maxItems: 2,
    }

    // Items shown in property panel
    static propertyControls: PropertyControls = {
        isExpanded: { 
            type: ControlType.Boolean,
            title: "isExpanded",
        },
        breadCrumbs: {
            type: ControlType.String,
            title: 'breadCrumbs'
        },
        maxItems: {
            type: ControlType.Number,
            title: 'maxItems'
        }
    }

    render() {
        const { isExpanded, breadCrumbs, maxItems } = this.props;
        const items = (breadCrumbs === '' ? [] : breadCrumbs.split('|')).map(v => (
            <BreadcrumbsItem href={`/${v.toLocaleLowerCase()}`} text={v} />
        ))
        return ( <div style={style}>
            <BreadcrumbsStateless
                maxItems={maxItems}
                isExpanded={isExpanded}
            >
                {items}
            </BreadcrumbsStateless>
        </div>)
    }
}
