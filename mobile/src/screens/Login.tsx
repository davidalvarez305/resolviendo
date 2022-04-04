import {StyleSheet, Text, View} from 'react-native';
import React, {useContext, useState} from 'react';
import {FONTS, COLORS} from '../theme';
import InputField from '../ui/InputField';
import Label from '../ui/Label';
import {LanguageContext} from '../context/LanguageContext';
import Button from '../ui/Button';
import Checkbox from '../ui/Checkbox';
import useRequest from '../hooks/useRequest';
import {API} from '../utils/constants';
import * as SecureStore from 'expo-secure-store';

const Login = () => {
  const {language} = useContext(LanguageContext);
  const isSpanish = language === 'Spanish';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const {isLoading, error, makeRequest} = useRequest();
  const [feedback, setFeedback] = useState('');

  async function saveCredentials(id: string) {
    await SecureStore.setItemAsync('cub_id', id);
  }

  function handleLogin() {
    makeRequest(
      {
        url: `${API}/user/login`,
        method: 'POST',
        data: {
          email,
          password,
        },
      },
      res => {
        if (res.data.error.includes('Incorrect e-mail')) {
          if (isSpanish) {
            setFeedback('Usuario incorrecto.');
          } else {
            setFeedback(res.data.error);
          }
        }
        if (res.data.error.includes('Incorrect password')) {
          if (isSpanish) {
            setFeedback('Contraseña incorrecta.');
          } else {
            setFeedback(res.data.error);
          }
        } else {
          saveCredentials(res.data.data);
        }
      },
    );
  }

  return (
    <View style={{alignItems: 'center'}}>
      <View>
        <Text style={styles.welcomeText}>
          {isSpanish ? 'Hola, Bienvenido! 👋' : 'Hi, Welcome Back! 👋'}
        </Text>
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
            value={email}
            onChange={input => setEmail(input)}
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
      <View style={styles.loginOptions}>
        <View style={{flexDirection: 'row', width: '50%'}}>
          <View style={styles.checkboxButton}>
            <Checkbox
              isChecked={rememberMe}
              setChecked={setRememberMe}
              variant="outline"
            />
          </View>
          <View>
            <Text style={styles.rememberMeText}>
              {isSpanish ? 'Recuérdame' : 'Remember Me'}
            </Text>
          </View>
        </View>
        <View style={{width: '50%', alignItems: 'flex-end', paddingRight: 20}}>
          <Text style={styles.forgotPasswordText}>
            {isSpanish ? 'Olvidé mi contraseña' : 'Forgot Password'}
          </Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          variant="solid"
          text={isSpanish ? 'Ingresar' : 'Login'}
          onPress={() => handleLogin()}
          size="lg"
          width={340}
          buttonLetterSpacing={-0.5}
          isLoading={isLoading}
        />
      </View>
      {feedback.length > 0 && (
        <View
          style={{
            ...styles.bottomText,
            backgroundColor: COLORS.primary.softPink,
            width: '50%',
            height: 30,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 12,
            marginBottom: 15,
          }}>
          <Text style={styles.noAccountText}>{feedback}</Text>
        </View>
      )}
      <View style={styles.bottomText}>
        <Text style={styles.noAccountText}>
          {isSpanish ? 'No estas registrado?' : "Don't have an account?"}
        </Text>
        <Text style={styles.signUpText}>
          {isSpanish ? ' Crea una cuenta' : ' Sign up'}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  welcomeText: {
    fontFamily: FONTS.family.title,
    fontSize: FONTS.sizes.title,
    color: COLORS.textColor.black,
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
  loginOptions: {
    marginHorizontal: 5,
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  forgotPasswordText: {
    color: COLORS.textColor.black,
    textDecorationLine: 'underline',
  },
  rememberMeText: {
    fontFamily: FONTS.family.primary,
    color: COLORS.textColor.black,
    fontWeight: '600',
    marginLeft: 15,
    fontSize: FONTS.sizes.h5,
    letterSpacing: -0.5,
    textAlignVertical: 'top',
    lineHeight: 18,
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
  bottomText: {
    flexDirection: 'row',
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Login;
