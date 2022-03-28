import {StyleSheet, Text, View} from 'react-native';
import React, {useContext, useState} from 'react';
import SettingsLayout from '../layouts/SettingsLayout';
import {LanguageContext} from '../context/LanguageContext';
import {COLORS, FONTS} from '../theme';
import Checkbox from '../ui/Checkbox';
import Button from '../ui/Button';

interface Props {
  setShowAddress: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddressList: React.FC<Props> = ({setShowAddress}) => {
  const [defaultAddress, setDefaultAddress] = useState(false);
  const {language} = useContext(LanguageContext);
  const isSpanish = language === 'Spanish';
  const addressList = [
    {
      fullName: 'Jose Marti',
      streetAddress: 'Calle Leonor Pérez nº 314',
      city: 'Ciudad de La Habana',
      province: 'La Habana',
      country: 'Cuba',
    },
    {
      fullName: 'Estadio Latinoamericano',
      streetAddress: '4J9F+FJ6',
      city: 'El Cerro',
      province: 'La Habana',
      country: 'Cuba',
    },
  ];
  return (
    <SettingsLayout
      onPress={setShowAddress}
      pageName={isSpanish ? 'Direcciones de Envío' : 'Shipping Address'}>
      {addressList.map((address, index) => (
        <React.Fragment key={index}>
          <View
            style={{
              height: '25%',
              width: '100%',
              marginVertical: 15,
            }}>
            <View style={{flexDirection: 'row', marginVertical: 10}}>
              <View style={{alignItems: 'flex-start', width: '75%'}}>
                <Text style={styles.fullName}>{address.fullName}</Text>
              </View>
              <View style={{alignItems: 'flex-end', width: '25%'}}>
                <Button
                  variant="outlined"
                  text={isSpanish ? 'Editar' : 'Edit'}
                  onPress={() => console.log('pressed')}
                  size="xs"
                  width={50}
                  buttonLetterSpacing={-0.5}
                  fontFamily={FONTS.family.primary}
                  fontSize={13}
                />
              </View>
            </View>
            <Text
              style={
                styles.address
              }>{`${address.streetAddress}, ${address.city}, ${address.province}`}</Text>
            <Text style={styles.address}>{`${address.country}`}</Text>
            <View
              style={{
                marginVertical: 10,
                borderBottomColor: COLORS.textColor.mediumGrey,
                borderBottomWidth:
                  index < addressList.length - 1 ? 0.5 : undefined,
                flexDirection: 'row',
              }}>
              <View style={{height: 40, width: '10%'}}>
                <Checkbox
                  isChecked={defaultAddress}
                  setChecked={setDefaultAddress}
                  variant="outline"
                />
              </View>
              <View
                style={{height: 20, width: '90%', justifyContent: 'center'}}>
                <Text style={styles.shippingAdressCheck}>
                  {isSpanish
                    ? 'Marcar como dirección principal.'
                    : 'Select as default address.'}
                </Text>
              </View>
            </View>
          </View>
        </React.Fragment>
      ))}
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <View style={styles.buttonContainer}>
          <Button
            variant="outlined"
            text={isSpanish ? 'Agregar Nuevo' : 'Add New'}
            onPress={() => console.log('pressed')}
            size="lg"
            width={120}
            buttonLetterSpacing={-0.5}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            variant="solid"
            text={isSpanish ? 'Guardar Cambios' : 'Save Changes'}
            onPress={() => console.log('pressed')}
            size="lg"
            width={120}
            buttonLetterSpacing={-0.5}
          />
        </View>
      </View>
    </SettingsLayout>
  );
};

export default AddressList;

const styles = StyleSheet.create({
  fullName: {
    fontFamily: FONTS.family.primaryMedium,
    fontSize: FONTS.sizes.h3,
    color: COLORS.primary.black,
    fontWeight: '600',
    letterSpacing: -0.5,
  },
  address: {
    fontFamily: FONTS.family.primary,
    fontSize: FONTS.sizes.h5,
    color: COLORS.primary.black,
    fontWeight: '400',
    letterSpacing: -0.5,
  },
  shippingAdressCheck: {
    fontFamily: FONTS.family.primary,
    fontSize: FONTS.sizes.h5,
    color: COLORS.textColor.grey,
    fontWeight: '500',
    letterSpacing: -0.5,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    margin: 10,
  },
});
