import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {SvgXml} from 'react-native-svg';
import {
  DISABLED_HANDLE_ICON,
  DISABLED_PILL_ICON,
  SWITCH_GREY_HANDLE_ICON,
  SWITCH_GREY_PILL_ICON,
  SWITCH_HANDLE_ICON,
  SWITCH_PILL_ICON,
} from '../../assets/icons/General';

interface Props {
  isChecked: boolean;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
  isDisabled?: boolean;
}

const Switch: React.FC<Props> = ({isChecked, setChecked, isDisabled}) => {
  const styles = StyleSheet.create({
    container: {
      width: 48,
      height: 24,
    },
    pill: {
      position: 'relative',
    },
    handle: {
      position: 'absolute',
      alignItems: 'flex-end',
      left: isChecked ? undefined : 23,
      right: isChecked ? 23 : undefined,
    },
  });
  return (
    <>
      {isDisabled ? (
        <View style={styles.container}>
          <View style={styles.pill}>
            <SvgXml
              xml={DISABLED_PILL_ICON}
            />
          </View>
          <View style={styles.handle}>
            <SvgXml
              xml={DISABLED_HANDLE_ICON}
            />
          </View>
        </View>
      ) : (
        <TouchableOpacity
          style={styles.container}
          onPress={() => setChecked(!isChecked)}>
          <View style={styles.pill}>
            <SvgXml
              xml={isChecked ? SWITCH_GREY_PILL_ICON : SWITCH_PILL_ICON}
            />
          </View>
          <View style={styles.handle}>
            <SvgXml
              xml={isChecked ? SWITCH_GREY_HANDLE_ICON : SWITCH_HANDLE_ICON}
            />
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};

export default Switch;
