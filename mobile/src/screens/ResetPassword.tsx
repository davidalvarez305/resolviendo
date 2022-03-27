import {StyleSheet, Text, View} from 'react-native';
import React, {useContext, useState} from 'react';
import {FONTS, COLORS} from '../theme';
import InputField from '../ui/InputField';
import Label from '../ui/Label';
import {LanguageContext} from '../context/LanguageContext';
import {SvgXml} from 'react-native-svg';
import {AMERICAN_FLAG, CUBAN_FLAG} from '../../assets/icons/Flags';
import IconButton from '../ui/IconButton';
import Button from '../ui/Button';

const ResetPassword = () => {
  const {language, changeLanguage} = useContext(LanguageContext);
  const isSpanish = language === 'Spanish';
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  return (
    <>
      <View style={styles.toggleLanguageButton}>
        <IconButton
          onPress={changeLanguage}
          icon={<SvgXml xml={isSpanish ? AMERICAN_FLAG : CUBAN_FLAG} />}
        />
      </View>
      <View>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.welcomeText}>
            {isSpanish ? 'Olvidé Mi Contraseña' : 'Forgot Password'}
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputViewStyles}>
            <Label label={isSpanish ? 'Nueva Contraseña' : 'New Password'} />
          </View>
          <View style={{width: '100%'}}>
            <InputField
              placeholder={
                isSpanish
                  ? 'Ingrese Su Nueva Contraseña'
                  : 'Enter Your New Password'
              }
              keywordType="visible-password"
              password
              value={newPassword}
              onChange={input => setNewPassword(input)}
              fontFamily={FONTS.family.primary}
              fontSize={FONTS.sizes.h4}
              borderWidth={1}
              width={360}
              letterSpacing={-0.5}
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputViewStyles}>
            <Label label={isSpanish ? 'Confirmación' : 'Confirm Password'} />
          </View>
          <View style={{width: '100%'}}>
            <InputField
              placeholder={
                isSpanish ? 'Confirme Su Contraseña' : 'Confirm Your Password'
              }
              keywordType="visible-password"
              password
              value={confirmPassword}
              onChange={input => setConfirmPassword(input)}
              fontFamily={FONTS.family.primary}
              fontSize={FONTS.sizes.h4}
              borderWidth={1}
              width={360}
              letterSpacing={-0.5}
            />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            variant="solid"
            text={isSpanish ? 'Resetear' : 'Reset'}
            onPress={() => console.log('pressed')}
            size="lg"
            width={340}
            buttonLetterSpacing={-0.5}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  welcomeText: {
    fontFamily: FONTS.family.secondary,
    fontWeight: '600',
    fontSize: FONTS.sizes.h1,
    color: COLORS.textColor.black,
  },
  toggleLanguageButton: {
    left: 340,
    width: '10%',
    height: '5%',
    borderRadius: 100,
    overflow: 'hidden',
  },
  inputContainer: {
    marginTop: 20,
    alignItems: 'center',
    width: '100%',
    height: 100,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
  inputViewStyles: {
    width: '100%',
    marginLeft: 20,
  },
});

export default ResetPassword;
