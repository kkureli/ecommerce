import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import TabNavigator from '../TabNavigator';
import {FC} from 'react';
import {useTheme} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Typography from '../../components/common/Typography';
import CustomDrawerContent from './CustomDrawerContent';

const Drawer = createDrawerNavigator();

const DrawerNavigator: FC = () => {
  const {colors} = useTheme();

  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      drawerContentOptions={{style: {backgroundColor: colors.background}}}>
      <Drawer.Screen
        options={{
          drawerIcon: ({focused, size}) => (
            <MaterialIcons size={30} name="home" color={colors.text} />
          ),
          title: () => <Typography>Home</Typography>
        }}
        name="Home"
        component={TabNavigator}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
