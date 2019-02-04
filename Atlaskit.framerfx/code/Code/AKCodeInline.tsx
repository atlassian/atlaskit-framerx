import * as React from 'react';
import { PropertyControls, ControlType } from 'framer';
import { AkCode } from '@atlaskit/code';
import { displayLanguages, languages, allowedFileTypes } from './Code';
import AKProps from '../AKProps';

// Define type of property
interface Props extends AKProps {
  usingFile: boolean;
  language: boolean;
  code: string;
  file: string;
}

interface State {
  code: string | undefined;
}

export class AKCodeInline extends React.Component<Props, State> {
  // The default properties of the component.
  static defaultProps = {
    usingFile: false,
    language: 'html',
    code: '<CoolCode />',

    width: 95,
    height: 22
  }

  // The property controls for the component.
  static propertyControls: PropertyControls = {
    language: {
      type: ControlType.Enum,
      title: 'Language',
      optionTitles: displayLanguages,
      options: languages
    },
    usingFile: {
      type: ControlType.Boolean,
      title: 'From File'
    },
    code: {
      type: ControlType.String,
      title: 'Code',
      hidden(props: Props) {
        return props.usingFile
      }
    },
    file: {
      type: ControlType.File,
      title: 'Code',
      allowedFileTypes: allowedFileTypes,
      hidden(props: Props) {
        return !props.usingFile
      }
    }
  }

  constructor(props) {
    super(props);
    this.state = {code: props.code}
    if (props.usingFile) {
      this.downloadCode(props.file);
    }
  }

  componentWillReceiveProps(nextProps: Props) {
    if (nextProps !== this.props) {
      if (nextProps.usingFile) {
        if (nextProps.file !== this.props.file){
          this.downloadCode(nextProps.file);
        }        
      }
      else if (nextProps.code !== this.props.code) {
        this.setState({code: nextProps.code})
      }
    }
  }

  downloadCode(path: string) {
    fetch(path)
      .then(response => response.text())
      .then(text => this.setState({code: text}));
  }

  render() {
    return (
        <AkCode text={this.state.code} language={this.props.language} />
    )
  }

}