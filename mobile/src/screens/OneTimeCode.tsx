import {Modal, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useContext, useState} from 'react';
import {SvgXml} from 'react-native-svg';
import {AMERICAN_FLAG, CUBAN_FLAG} from '../../assets/icons/Flags';
import IconButton from '../ui/IconButton';
import {LanguageContext} from '../context/LanguageContext';
import {COLORS, FONTS} from '../theme';
import Button from '../ui/Button';

const OneTimeCode = () => {
  const {language, changeLanguage} = useContext(LanguageContext);
  const isSpanish = language === 'Spanish';
  const [focused, setFocused] = useState(false);
  const [openModal, setOpenModal] = useState(true);
  const codeInputBoxFocused = {
    ...styles.codeInputBox,
    borderColor: COLORS.primary.softPink,
  };
  const containerStyles = {
    width: '100%',
    height: '100%',
    paddingHorizontal: 20,
    backgroundColor: openModal ? 'rgba(0,0,0,0.5)' : undefined,
  };
  return (
    <>
      <View style={containerStyles}>
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
              ? 'Recibió un código de cuatro dígitos en su correo electrónico.'
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
      <Modal animationType="fade" transparent={true} visible={openModal}>
        <View style={styles.modal}>
          <Text style={styles.modalTextStyles}>
            {isSpanish
              ? 'Acepto los Términos de servicio y las Condiciones de uso, incluso el consentimiento a las comunicaciones electrónicas y afirmo que la información proporcionada es mía.'
              : 'I agree to the Terms of Service and Conditions of Use including consent to electronic communications and I affirm that the information provided is my own.'}
          </Text>
          <View style={{marginTop: 20}}>
            <Button
              variant="solid"
              text={isSpanish ? 'Estoy de acuerdo' : 'Agree and continue'}
              onPress={() => console.log('pressed')}
              size="lg"
              width={270}
              buttonLetterSpacing={-0.5}
            />
          </View>
          <Text
            style={(styles.modalTextStyles, {color: '#EB5757', marginTop: 20})}>
            {isSpanish ? 'Desacuerdo' : 'Disagree'}
          </Text>
        </View>
      </Modal>
    </>
  );
};

export default OneTimeCode;

const styles = StyleSheet.create({
  toggleLanguageButton: {
    left: 300,
    width: '15%',
    height: '7%',
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
  modal: {
    position: 'absolute',
    top: '10%',
    height: '50%',
    width: '80%',
    margin: 45,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  backdrop: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 0,
    backgroundColor: 'black',
  },
  modalTextStyles: {
    fontFamily: FONTS.family.primary,
    letterSpacing: -0.5,
    fontSize: FONTS.sizes.h4,
    lineHeight: 24,
  },
});
