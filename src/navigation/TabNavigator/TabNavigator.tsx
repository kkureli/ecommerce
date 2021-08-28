import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import DealsScreen from '../../screens/DealsScreen/DealsScreen';
import BasketScreen from '../../screens/BasketScreen/BasketScreen';
import ProfileScreen from '../../screens/ProfileScreen/ProfileScreen';
import {FC} from 'react';
import TabBarGenerator from './TabBarGenerator';
import {useTheme} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const TabNavigator: FC = () => {
  const {colors} = useTheme();
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: colors.background
        }
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => (
          <TabBarGenerator route={route} focused={focused} />
        ),
        tabBarLabel: () => null
      })}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="DealsScreen" component={DealsScreen} />
      <Tab.Screen name="BasketScreen" component={BasketScreen} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
