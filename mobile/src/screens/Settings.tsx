import {View} from 'react-native';
import React, {useContext, useState} from 'react';
import {
  HELP_ICON,
  INFORMATION_ICON,
  LOCATION_ICON,
  SECURITY_ICON,
  SHOPPING_CART_ICON,
  WALLET_ICON,
} from '../../assets/icons/General';
import {LanguageContext} from '../context/LanguageContext';
import ProfileSettingCard from '../ui/ProfileSettingCard';
import SettingsLayout from '../layouts/SettingsLayout';
import AddressList from './AddressList';
import Orders from './Orders';

interface Props {
  setShowSettings: React.Dispatch<React.SetStateAction<boolean>>;
}

const Settings: React.FC<Props> = ({setShowSettings}) => {
  const {language} = useContext(LanguageContext);
  const isSpanish = language === 'Spanish';
  const [showAddress, setShowAddress] = useState(false);
  const [showOrders, setShowOrders] = useState(false);

  if (showOrders) {
    return <Orders setShowOrders={setShowOrders} />;
  }

  if (showAddress) {
    return <AddressList setShowAddress={setShowAddress} />;
  }

  const options = [
    {
      iconXmlString: SHOPPING_CART_ICON,
      text: isSpanish ? 'Pedidos de Compras' : 'Orders',
    },
    {
      iconXmlString: LOCATION_ICON,
      text: isSpanish ? 'Dirección' : 'Address',
    },
    {
      iconXmlString: WALLET_ICON,
      text: isSpanish ? 'Formas de Pago' : 'Payment',
    },
    {
      iconXmlString: INFORMATION_ICON,
      text: isSpanish ? 'Sobre Nosotros' : 'About',
    },
    {
      iconXmlString: SECURITY_ICON,
      text: isSpanish ? 'Asuntos Legales y Políticas' : 'Legal and Policies',
    },
    {
      iconXmlString: HELP_ICON,
      text: isSpanish ? 'Ayuda' : 'Help',
    },
  ];
  return (
    <SettingsLayout
      pageName={isSpanish ? 'Configuraciones' : 'Settings'}
      onPress={setShowSettings}>
      <View>
        {options.map((opt, index) => (
          <React.Fragment key={index}>
            <ProfileSettingCard
              {...opt}
              onPress={() => {
                if (index === 0) {
                  setShowOrders(true);
                }
                if (index === 1) {
                  setShowAddress(true);
                }
              }}
            />
          </React.Fragment>
        ))}
      </View>
    </SettingsLayout>
  );
};

export default Settings;
