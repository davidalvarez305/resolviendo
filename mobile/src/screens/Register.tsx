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

const Register = () => {
  const {language, changeLanguage} = useContext(LanguageContext);
  const isSpanish = language === 'Spanish';
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
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
            {isSpanish ? 'Crear Una Cuenta' : 'Create Account'}
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputViewStyles}>
            <Label label={isSpanish ? 'Nombre' : 'Full Name'} />
          </View>
          <View style={{width: '100%'}}>
            <InputField
              placeholder={
                isSpanish
                  ? 'Ingrese Su Nombre Completo'
                  : 'Enter Your Full Name'
              }
              keywordType="default"
              value={fullName}
              onChange={input => setFullName(input)}
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
            <Label label={'Email'} />
          </View>
          <View style={{width: '100%'}}>
            <InputField
              placeholder={
                isSpanish
                  ? 'Ingrese Su Correo Electronico'
                  : 'Enter Your Email Address'
              }
              keywordType="email-address"
              value={username}
              onChange={input => setUsername(input)}
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
            <Label label={'Password'} />
          </View>
          <View style={{width: '100%'}}>
            <InputField
              placeholder={
                isSpanish ? 'Ingrese Su Contraseña' : 'Enter Your Password'
              }
              keywordType="visible-password"
              password
              value={password}
              onChange={input => setPassword(input)}
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
            text={isSpanish ? 'Registrarse' : 'Create an account'}
            onPress={() => console.log('pressed')}
            size="lg"
            width={340}
            buttonLetterSpacing={-0.5}
          />
        </View>
        <View style={{flexDirection: 'row', height: 20, justifyContent: 'center', alignItems: 'center', marginTop: 100}}>
          <Text style={styles.noAccountText}>
            {isSpanish ? 'Usted acepta al registrarse nuestros' : "When you sign up, you agree to our"}
          </Text>
          <Text style={styles.signUpText}>
            {isSpanish ? ' Términos y Condiciones.' : ' Terms & Conditions.'}
          </Text>
        </View>
      </View>
    </>
  );
}

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
  checkboxButton: {
    width: '15%',
    height: 30,
    alignItems: 'flex-start',
    paddingLeft: 10,
  },
  noAccountText: {
    fontFamily: FONTS.family.primary,
    letterSpacing: -0.5,
    fontSize: FONTS.sizes.h5,
    fontWeight: '500',
  },
  signUpText: {
    fontFamily: FONTS.family.primary,
    letterSpacing: -0.5,
    fontSize: FONTS.sizes.h5,
    fontWeight: '800',
  },
});

export default Register;