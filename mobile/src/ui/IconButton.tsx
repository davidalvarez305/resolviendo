import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

interface IconButtonProps {
  onPress: () => void;
  icon: React.ReactElement;
}

const IconButton: React.FC<IconButtonProps> = ({onPress, icon}) => (
  <TouchableOpacity onPress={onPress}>
    {icon}
  </TouchableOpacity>
);

export default IconButton;
