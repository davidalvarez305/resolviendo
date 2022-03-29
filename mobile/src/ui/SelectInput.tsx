import {FlatList, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {Picker as SelectPicker} from '@react-native-picker/picker';
import {COLORS, FONTS} from '../theme';

interface Props {
  value: string;
  onChange: (text: string) => void;
  fontFamily?: string;
  fontSize?: number;
  borderWidth?: number;
  width?: number;
  height?: number;
  letterSpacing?: number;
  fontColor?: string;
}

const SelectInput: React.FC<Props> = ({
  value,
  onChange,
  fontFamily,
  fontSize,
  borderWidth,
  width,
  height,
  letterSpacing,
  fontColor,
}) => {
  const provinces = [
    {
      label: 'Pinar del Río',
      value: 'Pinar del Río',
    },
    {
      label: 'Artemisa',
      value: 'Artemisa',
    },
    {
      label: 'La Habana',
      value: 'La Habana',
    },
    {
      label: 'Mayabeque',
      value: 'Mayabeque',
    },
    {
      label: 'Matanzas',
      value: 'Matanzas',
    },
    {
      label: 'Cienfuegos',
      value: 'Cienfuegos',
    },
    {
      label: 'Villa Clara',
      value: 'Villa Clara',
    },
    {
      label: 'Sancti Spíritus',
      value: 'Sancti Spíritus',
    },
  ];

  const styles = StyleSheet.create({
    input: {
      borderRadius: 15,
      borderColor: COLORS.textColor.mediumGrey,
      borderWidth: borderWidth ? borderWidth : 1,
      width: width ? width : 276,
      height: height ? height : 60,
      marginHorizontal: 10,
      lineHeight: 24,
      letterSpacing: letterSpacing ? letterSpacing : 0.12,
      paddingBottom: 12,
      paddingTop: 16,
      textAlign: 'left',
      margin: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    itemStyles: {
      fontSize: fontSize ? fontSize : FONTS.sizes.h5,
    },
  });

  return (
    <View style={styles.input}>
      <SelectPicker
        selectedValue={value}
        style={{
          height: '100%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        itemStyle={styles.itemStyles}
        onValueChange={(itemValue, itemIndex) => onChange(itemValue)}>
        {provinces.map(p => (
          <SelectPicker.Item
            color={fontColor ? fontColor : COLORS.textColor.black}
            fontFamily={fontFamily ? fontFamily : FONTS.family.primary}
            key={p.label}
            label={p.label}
            value={p.value}
          />
        ))}
      </SelectPicker>
    </View>
  );
};

export default SelectInput;
