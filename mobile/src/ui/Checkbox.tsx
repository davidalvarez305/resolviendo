import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import {SvgXml} from 'react-native-svg';
import {
  DISABLED_CHECKBOX,
  FILLED_CHECKBOX,
  FILLED_CHECKMARK,
  UNFILLED_CHECKBOX,
  UNFILLED_CHECKMARK,
} from '../../assets/icons/General';

interface Props {
  isChecked: boolean;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
  isDisabled?: boolean;
  variant?: "solid" | "outline"
}

const Checkbox: React.FC<Props> = ({isChecked, setChecked, isDisabled, variant}) => {
  return (
    <>
      {isDisabled ? (
        <SvgXml xml={DISABLED_CHECKBOX} />
      ) : (
        <TouchableOpacity onPress={() => setChecked(!isChecked)}>
          {!isChecked ? (
            <SvgXml xml={UNFILLED_CHECKBOX} />
          ) : (
            <View style={{position: 'relative'}}>
              <View style={{position: 'absolute'}}>
                <SvgXml xml={variant === "outline" ? UNFILLED_CHECKBOX : FILLED_CHECKBOX} />
              </View>
              <View
                style={{
                  position: 'absolute',
                  top: 5,
                  left: 4,
                }}>
                <SvgXml xml={variant === "outline" ? FILLED_CHECKMARK : UNFILLED_CHECKMARK} />
              </View>
            </View>
          )}
        </TouchableOpacity>
      )}
    </>
  );
};

export default Checkbox;
