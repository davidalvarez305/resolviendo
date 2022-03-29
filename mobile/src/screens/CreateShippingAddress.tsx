import {FlatList, StyleSheet, View} from 'react-native';
import React, {useContext, useState} from 'react';
import SettingsLayout from '../layouts/SettingsLayout';
import {LanguageContext} from '../context/LanguageContext';
import {COLORS, FONTS} from '../theme';
import InputField from '../ui/InputField';
import Label from '../ui/Label';
import Button from '../ui/Button';

interface Props {
  setCreateNewAddress: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreateShippingAddress: React.FC<Props> = ({setCreateNewAddress}) => {
  const {language} = useContext(LanguageContext);
  const isSpanish = language === 'Spanish';
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [zipCode, setZipCode] = useState('');

  const fields = [
    {
      label: isSpanish ? 'Nombre Completo' : 'Full Name',
      placeholder: isSpanish
        ? 'Ingrese Su Nombre Completo'
        : 'Enter Your Full Name',
      value: fullName,
      changeValue: setFullName,
    },
    {
      label: isSpanish ? 'Dirección de Envío' : 'Shipping Address',
      placeholder: isSpanish
        ? 'Ingrese Su Dirección de Envío'
        : 'Enter Your Shipping Address',
      value: address,
      changeValue: setAddress,
    },
    {
      label: isSpanish ? 'País' : 'Country',
      placeholder: isSpanish ? 'Seleccione País' : 'Select Country',
      value: country,
      changeValue: setCountry,
    },
    {
      label: isSpanish ? 'Municipio' : 'City',
      placeholder: isSpanish ? 'Seleccione Municipio' : 'Select City',
      value: city,
      changeValue: setCity,
    },
    {
      label: isSpanish ? 'Provincia' : 'State',
      placeholder: isSpanish ? 'Seleccione Provincia' : 'Select State',
      value: province,
      changeValue: setProvince,
    },
    {
      label: isSpanish ? 'Código Postal' : 'Zip Code',
      placeholder: isSpanish ? 'Ingrese su Código Postal' : 'Enter Zip Code',
      value: zipCode,
      changeValue: setZipCode,
    },
  ];

  return (
    <View>
      <SettingsLayout
        pageName={isSpanish ? 'Añadir Nueva Dirección' : 'Create New Address'}
        onPress={setCreateNewAddress}>
        <FlatList
          data={fields}
          renderItem={({item}) => (
            <View>
              <View style={styles.inputContainer}>
                <View style={styles.inputViewStyles}>
                  <Label label={item.label} />
                </View>
                <View style={{width: '100%'}}>
                  <InputField
                    placeholder={item.placeholder}
                    keywordType="default"
                    value={item.value}
                    onChange={input => item.changeValue(input)}
                    fontFamily={FONTS.family.primary}
                    fontSize={FONTS.sizes.h4}
                    borderWidth={1}
                    width={320}
                    letterSpacing={-0.5}
                  />
                </View>
              </View>
            </View>
          )}
        />
        <View style={styles.buttonContainer}>
          <Button
            variant="solid"
            text={isSpanish ? 'Crear Dirección' : 'Save Address'}
            onPress={() => console.log('pressed')}
            size="lg"
            width={240}
            buttonLetterSpacing={-0.5}
          />
        </View>
      </SettingsLayout>
    </View>
  );
};

export default CreateShippingAddress;

const styles = StyleSheet.create({
  welcomeText: {
    fontFamily: FONTS.family.title,
    fontSize: FONTS.sizes.title,
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
    marginBottom: 20,
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
});
