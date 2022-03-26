import {TouchableOpacity} from 'react-native';
import React from 'react';
import {SvgXml} from 'react-native-svg';
import {
  DISABLED_RADIO_ICON,
  FILLED_RADIO_ICON,
  UNFILLED_RADIO_ICON,
} from '../../assets/icons/General';

interface Props {
  isChecked: boolean;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
  isDisabled?: boolean;
}

const RadioButton: React.FC<Props> = ({isChecked, setChecked, isDisabled}) => {
  return (
    <>
      {isDisabled ? (
        <SvgXml xml={DISABLED_RADIO_ICON} />
      ) : (
        <TouchableOpacity onPress={() => setChecked(!isChecked)}>
          {!isChecked ? <SvgXml xml={UNFILLED_RADIO_ICON} /> : <SvgXml xml={FILLED_RADIO_ICON} />}
        </TouchableOpacity>
      )}
    </>
  );
};

export default RadioButton;
