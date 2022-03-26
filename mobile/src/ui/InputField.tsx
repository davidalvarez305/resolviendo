import {
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
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
import {AMERICAN_FLAG} from '../../assets/icons/Flags';

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
  phoneInput?: boolean;
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
  phoneInput,
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
      paddingLeft: leftIconXml ? 54 : phoneInput ? 84 : 16,
      paddingRight: rightIconXml ? 54 : 12,
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
      left: rightIconXml ? 195 : undefined,
      right: leftIconXml ? 25 : undefined,
    },
    phoneInput: {
      borderTopLeftRadius: 15,
      borderBottomLeftRadius: 15,
      width: '20%',
      height: 60,
      marginHorizontal: 10,
      paddingBottom: 12,
      paddingLeft: 16,
      paddingRight: 12,
      paddingTop: 16,
      margin: 10,
      justifyContent: 'center',
      borderRightWidth: 2,
      borderRightColor: COLORS.textColor.mediumGrey,
      flexDirection: 'row',
    },
    phoneInputText: {
      fontSize: FONTS.sizes.h3,
      fontFamily: FONTS.family.input,
    },
    areaCodeIcon: {
      position: 'relative',
      borderRadius: 100,
      overflow: 'hidden',
      width: '50%',
      height: '50%',
      margin: 5,
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
      {phoneInput && (
        <View style={styles.phoneInput}>
          <View style={styles.areaCodeIcon}>
            <SvgXml xml={AMERICAN_FLAG} height={'100%'} width={'100%'} />
          </View>
          <Text style={styles.phoneInputText}>+1</Text>
        </View>
      )}
    </>
  );
};

export default InputField;
