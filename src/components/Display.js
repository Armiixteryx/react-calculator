import React from 'react';
import { TextArea } from '@fluentui/react-northstar';

const styles = {
    textAlign: 'right',
    fontSize: '26px',
    height: '50px',
}

const Display = (props) => (
    <TextArea fluid="true" value={props.textDisplay} styles={styles} />
);

export default Display;
