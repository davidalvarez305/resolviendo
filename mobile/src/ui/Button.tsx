import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../theme';

interface Props {
  onPress: () => void;
  text: string;
  variant: 'solid' | 'outlined';
  size: 'xl' | 'lg' | 'md' | 'sm' | 'xs';
  rightIcon?: React.ReactElement;
  disabled?: boolean;
  isLoading?: boolean;
  width?: number;
  buttonLetterSpacing?: number;
  fontFamily?: string;
  fontSize?: number;
  buttonBackgroundColor?: string;
  outlinedBorderWidth?: number;
}

const Button: React.FC<Props> = ({
  onPress,
  text,
  variant,
  size,
  rightIcon,
  disabled,
  isLoading,
  width,
  buttonLetterSpacing,
  fontFamily,
  fontSize,
  buttonBackgroundColor,
  outlinedBorderWidth
}) => {
  let height = {
    xl: 54,
    lg: 50,
    md: 42,
    sm: 34,
    xs: 26,
  };

  let colorVariant = {
    solid: COLORS.primary.black,
    outlined: buttonBackgroundColor ? buttonBackgroundColor : COLORS.textColor.white,
  };

  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 30,
      width: width ? width : 169,
      height: height[size],
      flexDirection: 'row',
      backgroundColor: colorVariant[variant]
    },
    text: {
      color:
        variant === 'solid' || disabled === true
          ? COLORS.textColor.white
          : COLORS.primary.black,
      fontSize: fontSize ? fontSize : FONTS.sizes.h4,
      fontFamily: fontFamily ? fontFamily : FONTS.family.primary,
      letterSpacing: buttonLetterSpacing ? buttonLetterSpacing : undefined,
    },
  });

  let disabledContainerStyles = {
    ...styles.container,
    backgroundColor: COLORS.primary.grey,
  };

  let outlinedContainerStyles = {
    ...styles.container,
    borderWidth: outlinedBorderWidth ? outlinedBorderWidth : 2,
    borderColor: COLORS.primary.black,
    backgroundColor: colorVariant[variant],
  };

  let renderedStyles = {};

  switch (true) {
    case isLoading || disabled:
      renderedStyles = disabledContainerStyles;
    case variant === 'outlined':
      renderedStyles = outlinedContainerStyles;
      break;
    case variant === 'solid':
      renderedStyles = styles.container;
      break;
    default:
      renderedStyles = styles.container;
      break;
  }

  return (
    <View>
      <TouchableOpacity style={renderedStyles} onPress={onPress}>
        <Text style={styles.text}>{!isLoading && text}</Text>
        {rightIcon && !disabled && !isLoading && rightIcon}
        {isLoading && (
          <ActivityIndicator size="large" color={COLORS.textColor.white} />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Button;
