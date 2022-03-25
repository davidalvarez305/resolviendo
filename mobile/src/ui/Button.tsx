import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../theme';

interface Props {
  onPress: () => void;
  text: string;
  variant: 'solid' | 'outlined';
  size: 'xl' | 'lg' | 'md' | 'sm' | 'xs';
  rightIcon?: React.ReactElement;
}

const Button: React.FC<Props> = ({
  onPress,
  text,
  variant,
  size,
  rightIcon
}) => {
  let height = {
    xl: 54,
    lg: 50,
    md: 42,
    sm: 34,
    xs: 26,
  };
  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 30,
      width: 169,
      height: height[size],
      backgroundColor:
        variant === 'solid' ? COLORS.primary.black : COLORS.textColor.white,
      borderWidth: variant === 'outlined' ? 2 : undefined,
      borderColor: variant === 'outlined' ? COLORS.primary.black : undefined,
      flexDirection: 'row',
    },
    text: {
      color:
        variant === 'solid' ? COLORS.textColor.white : COLORS.primary.black,
      fontSize: FONTS.sizes.h4,
      fontFamily: FONTS.family.primary,
    },
  });
  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
        {rightIcon ? rightIcon : undefined}
      </TouchableOpacity>
    </View>
  );
};

export default Button;
