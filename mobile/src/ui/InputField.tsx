import {
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  StyleSheet,
  TextInput,
  TextInputChangeEventData,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS} from '../theme';
import {SvgXml} from 'react-native-svg';
import {GREY_EYE_ICON, HIDE_EYE_ICON} from '../../assets/icons/General';
import {TextContentType} from '../utils/types';

interface Props {
  value: string;
  onChange: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  placeholder?: string;
  disabled?: boolean;
  password?: boolean;
  keywordType?: KeyboardTypeOptions;
  textContentType?: TextContentType;
  rightIconXml?: string;
  leftIconXml?: string;
}

const InputField: React.FC<Props> = ({
  value,
  onChange,
  placeholder,
  disabled,
  password,
  keywordType,
  rightIconXml,
  textContentType,
  leftIconXml,
}) => {
  const [hidePassword, setHidePassword] = useState(password);

  const styles = StyleSheet.create({
    container: {
      position: 'absolute',
    },
    input: {
      borderRadius: 15,
      borderColor: COLORS.textColor.mediumGrey,
      borderWidth: 2,
      width: 276,
      height: 60,
      marginHorizontal: 10,
      fontSize: FONTS.sizes.h3,
      fontFamily: FONTS.family.input,
      lineHeight: 24,
      letterSpacing: 0.12,
      paddingBottom: 12,
      paddingLeft: leftIconXml ? 54 : 16,
      paddingRight: rightIconXml ? 60 : 12,
      paddingTop: 16,
      textAlign: 'left',
      textAlignVertical: 'top',
      margin: 10,
    },
    disabledInput: {
      backgroundColor: COLORS.textColor.grey,
      borderRadius: 15,
      width: 276,
      height: 60,
      marginHorizontal: 10,
      fontSize: FONTS.sizes.h3,
      fontFamily: FONTS.family.input,
      lineHeight: 24,
      letterSpacing: 0.12,
      paddingBottom: 12,
      paddingLeft: 16,
      paddingRight: 12,
      paddingTop: 16,
      textAlign: 'left',
      textAlignVertical: 'top',
      margin: 10,
    },
    icon: {
      borderRadius: 15,
      width: '25%',
      height: 60,
      marginHorizontal: 10,
      paddingBottom: 12,
      paddingLeft: 16,
      paddingRight: 12,
      paddingTop: 16,
      margin: 10,
      justifyContent: 'center',
      left: rightIconXml ? 180 : undefined,
      right: leftIconXml ? 25 : undefined,
    },
  });
  return (
    <>
      <View style={styles.container}>
        <TextInput
          value={value}
          onChange={onChange}
          placeholder={placeholder ? placeholder : 'Placeholder'}
          style={disabled ? styles.disabledInput : styles.input}
          editable={!disabled}
          selectTextOnFocus={!disabled}
          keyboardType={keywordType}
          textContentType={textContentType}
          secureTextEntry={password && !hidePassword}
        />
      </View>
      {password && (
        <TouchableOpacity
          style={styles.icon}
          onPress={() => setHidePassword(!hidePassword)}>
          {hidePassword && (
            <SvgXml xml={HIDE_EYE_ICON} height={'100%'} width={'100%'} />
          )}
          {!hidePassword && (
            <SvgXml xml={GREY_EYE_ICON} height={'100%'} width={'100%'} />
          )}
        </TouchableOpacity>
      )}
      {rightIconXml && (
        <View style={styles.icon}>
          <SvgXml xml={rightIconXml} height={'100%'} width={'100%'} />
        </View>
      )}
      {leftIconXml && (
        <View style={styles.icon}>
          <SvgXml xml={leftIconXml} height={'100%'} width={'100%'} />
        </View>
      )}
    </>
  );
};

export default InputField;
