import {
  DrawerContentScrollView,
  DrawerItemList
} from '@react-navigation/drawer';
import React from 'react';
import {StyleSheet, Switch, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import ToggleButton from 'react-native-toggle-element';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {onUpdateTheme} from '../../redux';
import {useTheme} from '@react-navigation/native';
import {hitSlop} from '../../theme/constants';

const CustomDrawerContent = props => {
  const {themeReducer, onUpdateTheme} = props;
  const {colors} = useTheme();

  return (
    <DrawerContentScrollView {...props}>
      {__DEV__ && (
        <TouchableOpacity
          style={{marginLeft: 5}}
          onPress={() => props.navigation.toggleDrawer()}
          hitSlop={hitSlop}>
          <MaterialIcons size={30} name="menu" color={colors.text} />
        </TouchableOpacity>
      )}
      {/* <DrawerItemList {...props} /> */}
      <View style={styles.toggleContainer}>
        <ToggleButton
          value={themeReducer.selectedTheme === 'light' ? true : false}
          onPress={newState =>
            newState === true ? onUpdateTheme('light') : onUpdateTheme('dark')
          }
          thumbActiveComponent={
            <MaterialIcons name="wb-sunny" size={40} color={'#3BD2B5'} />
          }
          thumbInActiveComponent={
            <MaterialIcons
              name="nightlight-round"
              size={40}
              color={'#03452C'}
            />
          }
          trackBar={{
            activeBackgroundColor: '#9ee3fb',
            inActiveBackgroundColor: '#3c4145',
            borderActiveColor: '#86c3d7',
            borderInActiveColor: '#1c1c1c',
            borderWidth: 5,
            width: 100
          }}
        />
      </View>
    </DrawerContentScrollView>
  );
};

const mapToStateProps = state => ({
  themeReducer: state.themeReducer
});

export default connect(mapToStateProps, {onUpdateTheme})(CustomDrawerContent);

const styles = StyleSheet.create({
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    marginVertical: 10
  },
  poweredText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    marginTop: 10
  },
  menuButton: {
    marginRight: 5,
    position: 'absolute',
    left: 10,
    top: 20
  },
  toggleContainer: {
    alignItems: 'center',
    marginTop: 35
  }
});
