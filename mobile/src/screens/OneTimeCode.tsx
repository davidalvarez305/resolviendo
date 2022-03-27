import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useContext, useState} from 'react';
import {SvgXml} from 'react-native-svg';
import {AMERICAN_FLAG, CUBAN_FLAG} from '../../assets/icons/Flags';
import IconButton from '../ui/IconButton';
import {LanguageContext} from '../context/LanguageContext';
import {COLORS, FONTS} from '../theme';

const OneTimeCode = () => {
  const {language, changeLanguage} = useContext(LanguageContext);
  const isSpanish = language === 'Spanish';
  const [focused, setFocused] = useState(false);
  const codeInputBoxFocused = {
    ...styles.codeInputBox,
    borderColor: COLORS.primary.softPink,
  };
  return (
    <View style={{width: '90%', margin: 20}}>
      <View style={styles.toggleLanguageButton}>
        <IconButton
          onPress={changeLanguage}
          icon={<SvgXml xml={isSpanish ? AMERICAN_FLAG : CUBAN_FLAG} />}
        />
      </View>
      <View>
        <Text style={styles.heading}>
          {isSpanish ? 'Ingrese el Código' : 'Enter Passcode'}
        </Text>
        <Text style={styles.headingText}>
          {isSpanish
            ? 'Recibió un código de cuatro dígitos en su correo electrónico'
            : 'We have just sent you a 4-digit code via email.'}
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        {[1, 2, 3, 4].map((number, index) => (
          <React.Fragment key={index}>
            <View style={focused ? codeInputBoxFocused : styles.codeInputBox}>
              <TextInput
                onFocus={() => setFocused(!focused)}
                style={{fontFamily: FONTS.family.primary, fontSize: 54}}>
                {number}
              </TextInput>
            </View>
          </React.Fragment>
        ))}
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text>
          {isSpanish ? 'No recibió el codigo?' : "Didn't receive the code?"}
        </Text>
        <Text style={{fontWeight: 'bold', textDecorationLine: 'underline'}}>
          {isSpanish ? ' Reenvielo.' : ' Resend code.'}
        </Text>
      </View>
    </View>
  );
};

export default OneTimeCode;

const styles = StyleSheet.create({
  toggleLanguageButton: {
    left: 300,
    width: '10%',
    height: '20%',
    borderRadius: 100,
    overflow: 'hidden',
  },
  heading: {
    fontFamily: FONTS.family.title,
    fontSize: FONTS.sizes.title,
    color: COLORS.textColor.black,
  },
  headingText: {
    fontFamily: FONTS.family.primary,
    fontSize: FONTS.sizes.h4,
    color: COLORS.textColor.black,
  },
  codeInputBox: {
    width: 58,
    height: 84,
    borderRadius: 12,
    backgroundColor: COLORS.textColor.lightGrey,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: COLORS.textColor.mediumGrey,
    marginVertical: 40,
    marginRight: 20,
  },
});
