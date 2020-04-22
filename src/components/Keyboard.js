import React from 'react';
import { ArrowLeftIcon, Flex } from '@fluentui/react-northstar';
import CalcButton from './CalcButton';

const Keyboard = () => {
  return (
    <Flex hAlign="center" vAlign="center" wrap debug>
    
      <CalcButton content="(" />
      <CalcButton content=")" />
      <CalcButton content="C" />
      <CalcButton icon={<ArrowLeftIcon />} iconOnly title="Delete" />
      
      
      <CalcButton content="7" />
      <CalcButton content="8" />
      <CalcButton content="9" />
      <CalcButton content="÷" />
      
      <CalcButton content="4" />
      <CalcButton content="5" />
      <CalcButton content="6" />
      <CalcButton content="x" />
      
      <CalcButton content="1" />
      <CalcButton content="2" />
      <CalcButton content="3" />
      <CalcButton content="-" />
      
      <CalcButton content="." />
      <CalcButton content="0" />
      <CalcButton content="=" />
      <CalcButton content="+" />
    </Flex>
  );
}

export default Keyboard;
