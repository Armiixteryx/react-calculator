import React from 'react';
import { ArrowLeftIcon, Flex } from '@fluentui/react-northstar';
import CalcButton from './CalcButton';

const Keyboard = (props) => {
  return (
    <Flex hAlign="center" vAlign="center" wrap>
    
      <CalcButton content="(" actionHandler={props.actionHandler} />
      <CalcButton content=")" actionHandler={props.actionHandler} />
      <CalcButton content="C" actionHandler={props.actionHandler} />
      <CalcButton icon={<ArrowLeftIcon />} iconOnly title="Delete" actionHandler={props.actionHandler} />
      
      
      <CalcButton content="7" actionHandler={props.actionHandler} />
      <CalcButton content="8" actionHandler={props.actionHandler} />
      <CalcButton content="9" actionHandler={props.actionHandler} />
      <CalcButton content="÷" actionHandler={props.actionHandler} />
      
      <CalcButton content="4" actionHandler={props.actionHandler} />
      <CalcButton content="5" actionHandler={props.actionHandler} />
      <CalcButton content="6" actionHandler={props.actionHandler} />
      <CalcButton content="x" actionHandler={props.actionHandler} />
      
      <CalcButton content="1" actionHandler={props.actionHandler} />
      <CalcButton content="2" actionHandler={props.actionHandler} />
      <CalcButton content="3" actionHandler={props.actionHandler} />
      <CalcButton content="-" actionHandler={props.actionHandler} />
      
      <CalcButton content="." actionHandler={props.actionHandler} />
      <CalcButton content="0" actionHandler={props.actionHandler} />
      <CalcButton content="=" actionHandler={props.actionHandler} />
      <CalcButton content="+" actionHandler={props.actionHandler} />
    </Flex>
  );
}

export default Keyboard;
