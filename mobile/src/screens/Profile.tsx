import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {COLORS, FONTS} from '../theme';
import {LanguageContext} from '../context/LanguageContext';
import {BELL_ICON, LOCK_ICON, PROFILE_ICON, SETTINGS_ICON} from '../../assets/icons/General';
import ProfileSettingCard from '../ui/ProfileSettingCard';

const Profile = () => {
  const {language} = useContext(LanguageContext);
  const isSpanish = language === 'Spanish';
  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerText}>
            {isSpanish ? 'Perfil' : 'Profile'}
          </Text>
        </View>
        <View style={styles.profileImageContainer}>
          <Image
            source={{
              uri: 'https://cdn2.southfloridaathleticclub.com/media/misc/logo.webp',
              height: 100,
              width: 100,
            }}
          />
        </View>
        <View style={{marginTop: 10, alignItems: 'center'}}>
          <Text style={styles.storeName}>
            {isSpanish ? 'Nombre de Tienda' : 'Store Name'}
          </Text>
          <Text style={styles.storeName}>
            {isSpanish ? '@tienda' : '@store'}
          </Text>
        </View>
      </View>
      <View style={styles.profileOptions}>
        <Text style={styles.profileOptionsHeaderText}>
          {isSpanish ? 'Configuraciones de Cuenta' : 'Account Settings'}
        </Text>
      </View>
      <View style={{marginTop: 30}}>
        <ProfileSettingCard
          text={isSpanish ? 'Su Perfil' : 'Your Profile'}
          iconXmlString={PROFILE_ICON}
        />
        <ProfileSettingCard
          text={isSpanish ? 'Cambiar Contraseña' : 'Change Password'}
          iconXmlString={LOCK_ICON}
        />
      </View>

      <View style={styles.profileOptions}>
        <Text style={styles.profileOptionsHeaderText}>{'General'}</Text>
      </View>
      <View style={{marginTop: 30}}>
        <ProfileSettingCard
          text={isSpanish ? 'Notificaciones' : 'Notifications'}
          iconXmlString={BELL_ICON}
        />
        <ProfileSettingCard
          text={isSpanish ? 'Configuraciones' : 'Settings'}
          iconXmlString={SETTINGS_ICON}
        />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  main: {
    height: '100%',
    width: '100%',
    paddingHorizontal: 10,
  },
  header: {
    height: '33%',
    width: '100%',
    alignItems: 'center',
    borderBottomColor: COLORS.textColor.mediumGrey,
    borderBottomWidth: 0.5,
  },
  headerText: {
    fontFamily: FONTS.family.title,
    fontSize: FONTS.sizes.title,
    fontColor: COLORS.primary.black,
  },
  profileImageContainer: {
    height: 100,
    width: 100,
    borderRadius: 100,
    marginTop: 10,
    borderColor: COLORS.textColor.lightGrey,
    borderWidth: 0.5,
  },
  storeName: {
    fontFamily: FONTS.family.primary,
    fontSize: FONTS.sizes.h3,
    letterSpacing: -1,
    color: COLORS.primary.black,
  },
  profileOptionsHeaderText: {
    fontFamily: FONTS.family.primary,
    fontSize: FONTS.sizes.h4,
    letterSpacing: -0.5,
    color: COLORS.primary.black,
    fontWeight: 'bold',
  },
  profileOptions: {
    marginTop: 20,
  },
});
