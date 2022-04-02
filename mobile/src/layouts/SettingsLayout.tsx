import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS} from '../theme';
import {SvgXml} from 'react-native-svg';
import {BACK_ARROW_ICON} from '../../assets/icons/General';
import AddressList from '../screens/AddressList';

interface Props {
  pageName: string;
  onPress: React.Dispatch<React.SetStateAction<boolean>>;
  rightIcon?: React.ReactElement;
}

const SettingsLayout: React.FC<Props> = ({
  pageName,
  onPress,
  children,
  rightIcon,
}) => {
  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <TouchableOpacity
          style={{position: 'absolute', left: 0.5, top: '45%'}}
          onPress={() => onPress(prev => !prev)}>
          <SvgXml xml={BACK_ARROW_ICON} />
        </TouchableOpacity>
        <View style={{alignItems: 'center', width: '100%'}}>
          <Text style={styles.headerText}>{pageName}</Text>
        </View>
        {rightIcon}
      </View>
      <View>{children}</View>
    </View>
  );
};

export default SettingsLayout;

const styles = StyleSheet.create({
  main: {
    height: '100%',
    width: '100%',
    paddingHorizontal: 10,
  },
  header: {
    height: '20%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  headerText: {
    fontFamily: FONTS.family.title,
    fontSize: FONTS.sizes.h1,
    color: COLORS.primary.black,
  },
});
