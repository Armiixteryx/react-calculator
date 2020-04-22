import React from 'react';
import { Button, ButtonContent, Flex, Text } from '@fluentui/react-northstar';

const btnStyle = {
  height: '3em',
}

const onTextClick = (e) => {
  console.log(e.target.textContent);
}

const onIconClick = (e) => {
  console.log(e.target.title);
}

const CalcButton = (props) => {
  const btnContent = () => (
    <ButtonContent content={<Text content={props.content} size="larger" weight="light" />} />
  );
  
  return (
    <Flex.Item size="size.quarter">
      {props.icon
        ? <Button icon={props.icon} iconOnly={props.iconOnly} title={props.title} style={btnStyle} onClick={onIconClick} />
        : <Button style={btnStyle} content={btnContent} onClick={onTextClick} />
      }
    </Flex.Item>
  );
}

export default CalcButton;
