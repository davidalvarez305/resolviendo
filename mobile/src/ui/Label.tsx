import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../theme';
import {SvgXml} from 'react-native-svg';
import {REQUIRED_ASTERISK} from '../../assets/icons/General';

interface Props {
  label: string;
  isRequired?: boolean;
  isOptional?: boolean;
  isLink?: boolean;
}

const Label: React.FC<Props> = ({label, isRequired, isOptional, isLink}) => {
  const styles = StyleSheet.create({
    text: {
      color: isLink ? COLORS.primary.softPink : COLORS.primary.black,
      fontFamily: FONTS.family.input,
      fontSize: FONTS.sizes.h4,
      fontWeight: 'bold',
    },
    optionalText: {
      color: COLORS.primary.grey,
      fontFamily: FONTS.family.input,
      fontSize: FONTS.sizes.h4,
      fontWeight: 'bold',
    },
  });
  return (
    <View style={{flexDirection: 'row'}}>
      <Text style={styles.text}>{label}</Text>
      {isRequired && <SvgXml xml={REQUIRED_ASTERISK} />}
      {isOptional && <Text style={styles.optionalText}>{' (Optional)'}</Text>}
    </View>
  );
};

export default Label;
