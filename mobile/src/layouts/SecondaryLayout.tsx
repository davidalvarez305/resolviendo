import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS} from '../theme';
import {SvgXml} from 'react-native-svg';
import {BACK_ARROW_ICON} from '../../assets/icons/General';
import AddressList from '../screens/AddressList';

interface Props {
  pageName: string;
  leftIcon: string;
}

const SecondaryLayout: React.FC<Props> = ({pageName, children, leftIcon}) => {
  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <View style={{position: 'absolute', right: 10, top: '30%' }}>
          <SvgXml xml={leftIcon} />
        </View>
        <View style={{alignItems: 'center', width: '100%'}}>
          <Text style={styles.headerText}>{pageName}</Text>
        </View>
      </View>
      <View>{children}</View>
    </View>
  );
};

export default SecondaryLayout;

const styles = StyleSheet.create({
  main: {
    height: '100%',
    width: '100%',
    paddingHorizontal: 10,
  },
  header: {
    height: '10%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: COLORS.textColor.lightGrey,
    marginBottom: 20,
  },
  headerText: {
    fontFamily: FONTS.family.title,
    fontSize: FONTS.sizes.h1,
    color: COLORS.primary.black,
  },
});
