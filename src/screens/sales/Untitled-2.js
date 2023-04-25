/*
Contains functionality to manage drawer navigation before and after login based on login auth redux variable
Created By: Ashish Swami
Created Date: 01/06/2022
*/

import React, { useEffect, useState } from 'react';
import { Image, Text, View, SafeAreaView, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { connect, useDispatch } from 'react-redux';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import VendorStack from './VendorStack';
import SalesStack from './SalesStack';
import { ImageIcons, Colors, Fonts } from '../common';
import { logout } from '../redux/actions/Auth'
import { StackActions } from '@react-navigation/native';
import tw from 'twrnc'; 

const Drawer = createDrawerNavigator();

/*
Custom Drawer left side bar
Created By: Ashish Swami
Created Date: 01/06/2022
*/

const CustomDrawer = (props) => {
  console.log('props?.loginCredentials:', props?.loginCredentials)
  //Local states
  const [currentItem, setCurrentItem] = useState("Vendor");

  const onItemSelection = (routeName) => {
    setCurrentItem(routeName);
  }
  useEffect(() => {
    props?.navigation?.closeDrawer();
  }, [])

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: 'transparent',
          width: 300,
          flex: 1
        },
      }}
      openByDefault={false}
      initialRouteName={"Saleslisting"}
      drawerContentOptions={{
        activeTintColor: Colors.GREEN,
        inactiveTintColor: Colors.WHITE,
        activeBackgroundColor: Colors.WHITE,
      }}
      drawerContent={prop => <CustomDrawerContent prop={prop} rootProps={props} currentItem={currentItem} onItemSelection={onItemSelection} />}
    >
      <Drawer.Screen
        name="Vendor"
        component={VendorStack}
        options={({ navigation }) => ({
          //drawerIcon: ({ focused }) => <DrawerLeftIcon focused={focused} icon={ImageIcons.venderIcon}  />,
          drawerLabel: ({ focused }) => <DrawerItemLabel focused={focused} label='Logs' />,
        })}
      />

      <Drawer.Screen
        name="Saleslisting"
        component={SalesStack}
        options={({ navigation }) => ({
          //drawerIcon: ({ focused }) => <DrawerLeftIcon focused={focused} icon={ImageIcons.venderIcon}  />,
          drawerLabel: ({ focused }) => <DrawerItemLabel focused={focused} label='Saleslisting' />,

        })}
      />
    </Drawer.Navigator >
  );
};


/*
Custom Drwaer Content
Created By: Ashish Swami
Created Date: "01/06/2022"
*/

const CustomDrawerContent = ({ prop, rootProps, currentItem, onItemSelection }) => {

  const dispatch = useDispatch()

  const { logoutIcon, logo, search, calendar_icon, notification_icon, accountIcon } = ImageIcons;
  const { loginCredentials, storeAutofilInfo, verificationStatus, verificationSteps } = rootProps;
  const completedVerification = (verificationStatus?.isStore && verificationStatus?.isStoreImage && verificationStatus?.isUtilityBill) ? true : false;



  useEffect(() => {
    if (verificationStatus?.isStore && verificationStatus?.isStoreImage && verificationStatus?.isUtilityBill) {
      setTimeout(() => {
        if (verificationSteps === 3 && completedVerification) {
          prop.navigation.dispatch(
            StackActions.replace('CouponsStack')
          );
        }
      }, 1000);
    }
  }, [verificationStatus])

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#000000', marginTop: '10%',  marginLeft: '10%', borderRadius: 10, justifyContent: 'center', }} >
      {/* <View style={styles.drawerHeader}>
        <Image source={logo} style={styles.logo} />        
      </View> */}

      <DrawerContentScrollView {...prop} >
        <View style={styles.drawerItemsContainer}>
          <View style={{ flexDirection: 'row', marginTop: '10%',}}>
            <TouchableOpacity style={{ borderWidth: 1, borderColor: '#ccc', width: '50%', alignItems: 'center', justifyContent: 'center', padding: '2%' }}>
              
              <DrawerItem
                key="Saleslisting"
                label={({ focused, color }) => <DrawerItemLabel label='Notifications' />}
                style={{ opacity: 1, width: 100, }}
                // icon={({ focused }) => <DrawerLeftIcon focused={currentItem === "Saleslisting" ? true : false} icon={ImageIcons.viewIcon
                // } />}
                onPress={() => {
                  prop.navigation.toggleDrawer();
                  prop.navigation.reset({
                    index: 0,
                    routes: [{ name: 'Saleslisting' }],
                  });
                  onItemSelection("Saleslisting");
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity style={{ borderWidth: 1, borderColor: '#ccc', width: '50%', alignItems: 'center', justifyContent: 'center', padding: '2%' }}>
            <View style={{ width: '100%', marginTop: '30%', marginLeft: '35%'}}>
              <Image style={tw`w-17 h-15`}source={ImageIcons.msgs} />
              </View>
              <DrawerItem
                key="Saleslisting"
                label={({ focused, color }) => <DrawerItemLabel label='Messages' />}
                style={{ opacity: 1, width: 100, }}
                // icon={({ focused }) => <DrawerLeftIcon focused={currentItem === "Saleslisting" ? true : false} icon={ImageIcons.viewIcon
                // } />}
                onPress={() => {
                  prop.navigation.toggleDrawer();
                  prop.navigation.reset({
                    index: 0,
                    routes: [{ name: 'Saleslisting' }],
                  });
                  onItemSelection("Saleslisting");
                }}
              />
            </TouchableOpacity>

          </View>
          <View style={{ flexDirection: 'row', height: '24%', }}>
            <TouchableOpacity style={{ borderWidth: 1, borderColor: '#ccc', width: '50%', alignItems: 'center', justifyContent: 'center', padding: '2%' }}>
              
            <View style={{ width: '100%', marginTop: '30%', marginLeft: '35%'}}>
              <Image style={tw`w-17 h-15`} source={ImageIcons.social} />
              </View>

              <DrawerItem
                key="Saleslisting"
                label={({ focused, color }) => <DrawerItemLabel label='Social Feed' />}
                style={{ opacity: 1, width: 100, }}
                // icon={({ focused }) => <DrawerLeftIcon focused={currentItem === "Saleslisting" ? true : false} icon={ImageIcons.viewIcon
                // } />}
                onPress={() => {
                  prop.navigation.toggleDrawer();
                  prop.navigation.reset({
                    index: 0,
                    routes: [{ name: 'Saleslisting' }],
                  });
                  onItemSelection("Saleslisting");
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity style={{ borderWidth: 1, borderColor: '#ccc', width: '50%', alignItems: 'center', justifyContent: 'center', padding: '2%' }}
              onPress={() => {
                prop.navigation.toggleDrawer();
                prop.navigation.reset({
                  index: 0,
                  routes: [{ name: 'EventScreen' }],
                });
                onItemSelection("Saleslisting");
              }}>
              <View style={{ width: '100%', marginTop: '30%', marginLeft: '35%'}}>
              <Image style={tw`w-17 h-15`} source={ImageIcons.event} />
              </View>
              <DrawerItem
                key="Saleslisting"
                label={({ focused, color }) => <DrawerItemLabel label='Events' />}
                style={{ opacity: 1, width: 100, }}
                // icon={({ focused }) => <DrawerLeftIcon focused={currentItem === "Saleslisting" ? true : false} icon={ImageIcons.viewIcon
                // } />}
                onPress={() => {
                  prop.navigation.toggleDrawer();
                  prop.navigation.reset({
                    index: 0,
                    routes: [{ name: 'Saleslisting' }],
                  });
                  onItemSelection("Saleslisting");
                }}
              />
            </TouchableOpacity>

          </View>
          <View style={{ flexDirection: 'row', height: '24%', }}>
            <TouchableOpacity style={{ borderWidth: 1, borderColor: '#ccc', width: '50%', alignItems: 'center', justifyContent: 'center', padding: '2%' }}>
            <View style={{ width: '100%', marginTop: '30%', marginLeft: '35%'}}>
              <Image style={tw`w-17 h-15`} source={ImageIcons.cru}  />
              </View>
              <DrawerItem
                key="Saleslisting"
                label={({ focused, color }) => <DrawerItemLabel label='My Cru' />}
                style={{ opacity: 1, width: 100, }}
                // icon={({ focused }) => <DrawerLeftIcon focused={currentItem === "Saleslisting" ? true : false} icon={ImageIcons.viewIcon
                // } />}
                onPress={() => {
                  prop.navigation.toggleDrawer();
                  prop.navigation.reset({
                    index: 0,
                    routes: [{ name: 'Saleslisting' }],
                  });
                  onItemSelection("Saleslisting");
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity style={{ borderWidth: 1, borderColor: '#ccc', width: '50%', alignItems: 'center', justifyContent: 'center', padding: '2%' }}>
            <View style={{ width: '100%', marginTop: '30%', marginLeft: '35%'}}>
              <Image style={tw`w-17 h-15`} source={ImageIcons.project}  />
              </View>
              <DrawerItem
                key="Saleslisting"
                label={({ focused, color }) => <DrawerItemLabel label='Projects' />}
                style={{ opacity: 1, width: 100, }}
                // icon={({ focused }) => <DrawerLeftIcon focused={currentItem === "Saleslisting" ? true : false} icon={ImageIcons.viewIcon
                // } />}
                onPress={() => {
                  prop.navigation.toggleDrawer();
                  prop.navigation.reset({
                    index: 0,
                    routes: [{ name: 'Saleslisting' }],
                  });
                  onItemSelection("Saleslisting");
                }}
              />
            </TouchableOpacity>

          </View>
          <View style={{ flexDirection: 'row', height: '24%', }}>
            <TouchableOpacity style={{ borderWidth: 1, borderColor: '#ccc', width: '50%', alignItems: 'center', justifyContent: 'center', padding: '2%' }}>
            <View style={{ width: '100%', marginTop: '30%', marginLeft: '35%'}}>
              <Image  style={tw`w-17 h-15`}source={ImageIcons.job} />
              </View>
              <DrawerItem
                key="Saleslisting"
                label={({ focused, color }) => <DrawerItemLabel label='Job Match' />}
                style={{ opacity: 1, width: 100, }}
                // icon={({ focused }) => <DrawerLeftIcon focused={currentItem === "Saleslisting" ? true : false} icon={ImageIcons.viewIcon
                // } />}
                onPress={() => {
                  prop.navigation.toggleDrawer();
                  prop.navigation.reset({
                    index: 0,
                    routes: [{ name: 'Saleslisting' }],
                  });
                  onItemSelection("Saleslisting");
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity style={{ borderWidth: 1, borderColor: '#ccc', width: '50%', alignItems: 'center', justifyContent: 'center', padding: '2%' }}>
              <Image source={search} style={styles.search_icon} />
              <DrawerItem
                key="Saleslisting"
                label={({ focused, color }) => <DrawerItemLabel label='Search Jobs' />}
                style={{ opacity: 1, width: 100, }}
                // icon={({ focused }) => <DrawerLeftIcon focused={currentItem === "Saleslisting" ? true : false} icon={ImageIcons.viewIcon
                // } />}
                onPress={() => {
                  prop.navigation.toggleDrawer();
                  prop.navigation.reset({
                    index: 0,
                    routes: [{ name: 'Saleslisting' }],
                  });
                  onItemSelection("Saleslisting");
                }}
              />
            </TouchableOpacity>

          </View>
          <View style={{ flexDirection: 'row', height: '20%',}}>
            <TouchableOpacity style={{ borderWidth: 1, borderColor: '#ccc', width: '50%', alignItems: 'center', justifyContent: 'center', padding: '2%' }}>
              <Image style={tw`w-17 h-15`} source={logo}  />
              <DrawerItem
                key="Saleslisting"
                label={({ focused, color }) => <DrawerItemLabel label='Locator' />}
                style={{ opacity: 1, width: 100, }}
                // icon={({ focused }) => <DrawerLeftIcon focused={currentItem === "Saleslisting" ? true : false} icon={ImageIcons.viewIcon
                // } />}
                onPress={() => {
                  prop.navigation.toggleDrawer();
                  prop.navigation.reset({
                    index: 0,
                    routes: [{ name: 'Saleslisting' }],
                  });
                  onItemSelection("Saleslisting");
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity style={{ borderWidth: 1, borderColor: '#ccc', width: '50%', alignItems: 'center', justifyContent: 'center', padding: '2%' }}>
              <Image style={tw`w-17 h-15`} source={logo}  />
              <DrawerItem
                key="Saleslisting"
                label={({ focused, color }) => <DrawerItemLabel label='Settings' />}
                style={{ opacity: 1, width: 100, }}
                // icon={({ focused }) => <DrawerLeftIcon focused={currentItem === "Saleslisting" ? true : false} icon={ImageIcons.viewIcon
                // } />}
                onPress={() => {
                  prop.navigation.toggleDrawer();
                  prop.navigation.reset({
                    index: 0,
                    routes: [{ name: 'Saleslisting' }],
                  });
                  onItemSelection("Saleslisting");
                }}
              />
            </TouchableOpacity>

          </View>
          {/* <DrawerItem
            key="Saleslisting"
            label={({ focused, color }) => <DrawerItemLabel label='Sales listing' />}
            style={{ opacity: 1, }}
            icon={({ focused }) => <DrawerLeftIcon focused={currentItem === "Saleslisting" ? true : false} icon={ImageIcons.viewIcon
            } />}
            onPress={() => {
              prop.navigation.toggleDrawer();
              onItemSelection("Saleslisting");
              prop.navigation.navigate('Saleslisting');
            }}
          /> */}

          {/* <DrawerItem
            label={({ focused }) => <DrawerItemLabel label='Logout' />}
            style={{ height: 50, width: '100%', padding: 15, marginBottom: '5%' }}
            icon={({ focused }) => <DrawerLeftIcon icon={ImageIcons.logoutIcon} />}
            onPress={() => { prop.navigation.closeDrawer(); rootProps.logout(); }}
          /> */}
        </View>
      </DrawerContentScrollView>
    </SafeAreaView >
  )
}

const DrawerLeftIcon = ({ focused, icon }) => {
  return (
    <Image
      resizeMode="contain"
      source={icon}
      style={{
        width: wp('8%'),
        height: wp('8%'),
        tintColor: focused ? Colors.BLACK : Colors.BLACK
      }}
    />
  )
}

const DrawerItemLabel = ({ focused, label }) => {
  return (
    <Text style={focused ? styles.activeLabel : styles.label}> {label}</Text>
  )
}

const styles = StyleSheet.create({
  label: {
    fontSize: 15,
    fontWeight: 'bold',
    color: Colors.BLACK,
    marginLeft: -20,
    width: 120,

    textAlign: 'center', marginTop: '-5%'
  },
  activeLabel: {
    fontSize: 16,
    color: Colors.GREEN,
    marginLeft: -20, marginTop: '-5%'
  },
  drawerHeader: {
    height: hp('18%'),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '30%',
    flexDirection: 'row',
    paddingTop: Platform.OS === "ios" ? hp('2%') : hp('10%'),
  },
  logo: {
    width: '140%',
    resizeMode: 'contain'
  },
  notification_icon: {
    width: 70, height: 70, resizeMode: 'contain',
  },
  search_icon: {
    width: 50, height: 50, resizeMode: 'contain', tintColor: '#5fafcf'
  },
  calendar_icon: {
    width: 50, height: 50, resizeMode: 'contain', tintColor: '#5fafcf'
  },
  logoutItem: {
    flexDirection: 'row',
    alignItems: 'center',
    //paddingHorizontal: 10,
    backgroundColor: 'white'
  },
  leftIcon: {
    width: wp('5%'),
    height: wp('5%'),
    //marginLeft: 15,
    tintColor: Colors.WHITE
  },
  icon: {
    width: wp('8%'),
    height: wp('8%'),
  },
  info: {
    width: wp('3%'),
    height: wp('3%'),
    resizeMode: 'contain'
  },
  drawerItemsContainer: {
    height: Platform.OS === "ios" ? hp('68%') : hp('75%'),
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: Platform.OS === "ios" ? hp('-5%') : hp('-6%'),

  }
});

const mapStateToProps = (state) => ({
  loginCredentials: state.auth.loginCredentials,
  // isStore: state.vendor.isStore,
  verificationStatus: state.vendor.verificationStatus,
  verificationSteps: state.vendor.verificationSteps,
  storeAutofilInfo: state.vendor.storeAutofilInfo,
  storeImageUploadInfo: state.vendor.storeImageUploadInfo,
});

const mapDispatchToProps = {
  logout
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomDrawer);
