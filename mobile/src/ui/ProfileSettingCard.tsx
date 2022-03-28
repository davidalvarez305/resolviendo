import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {SvgXml} from 'react-native-svg';
import {COLORS, FONTS} from '../theme';

interface Props {
  text: string;
  iconXmlString: string;
  onPress: () => void;
}

const ProfileSettingCard: React.FC<Props> = ({text, iconXmlString, onPress}) => {
  return (
    <TouchableOpacity style={styles.main} onPress={onPress}>
      <View>
        <SvgXml xml={iconXmlString} />
      </View>
      <View style={{marginHorizontal: 20}}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProfileSettingCard;

const styles = StyleSheet.create({
  main: {
    height: 40,
    width: '100%',
    flexDirection: 'row',
    marginBottom: 20,
    borderBottomColor: COLORS.textColor.mediumGrey,
    borderBottomWidth: 0.75,
  },
  text: {
    fontFamily: FONTS.family.primary,
    fontSize: FONTS.sizes.h4,
    letterSpacing: -0.5,
    color: COLORS.primary.black,
  },
});
