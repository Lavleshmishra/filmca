/*
Vendor stack
Created By: Ashish Swami
Created Date: 01/06/2022
*/

import React, { Fragment, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, Text, View, Image, StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Vendor, Ucsafe, Safeservice, Massagewomen, Massagemen, Hairwomen, Cleankitbath, Plumber, waterpurifier, Cleaning, Homerepair, Pestcontrol, Editprofile, Search, Help, Commentlist, EventScreen, Searchloc, Reportlisting, Eventdetail, Gysercondition, Profile, Washing, Water, Appliances, Aircondition, Waterpurifier, Likelist, Gyser, Matthew, Notifications, Cru, Camera, Viewall, Projects, Searchjobs, Lighting, Jobdetails1, Locator, Projectdetails,Newproject, Glynden, Messages, Glyndenprofile,Usersearch,Manageprofile } from '../container'
import { Colors, Fonts, ImageIcons, Api } from '../common';
import { connect, useSelector } from 'react-redux';



const Stack = createStackNavigator();

const VendorStack = (props) => {
  const { navigation } = props;
  const profilename = useSelector(state => state.vendor);
  //console.log("profilename===>>",profilename)
  return (
    <>
      <Stack.Navigator
      >
        <Stack.Screen
          name="Vendor"
          component={Vendor}
          options={({ navigation }) => ({
            headerShown: true,
            headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={true} />,
            headerRight: () => (
              <View >
                {profilename?.getprofilelist?.profileImage != null ?
                  <TouchableOpacity onPress={() => props.navigation.navigate("Matthew")}>
                    <Image source={{ uri: `${Api.imageUri}${profilename?.getprofilelist?.profileImage}` }} style={{ width: 35, height: 35, right: 20, borderRadius: 100 }} />
                  </TouchableOpacity>
                  :
                  <TouchableOpacity onPress={() => props.navigation.navigate("Matthew")}>
                    <Image source={ImageIcons.womanclap} style={{ width: 35, height: 35, right: 20, borderRadius: 100 }} />
                  </TouchableOpacity>
                }
              </View>
            ),
            headerTitle: "Social Feed",
            headerTitleAlign: "center",
            headerTitleStyle: { color: Colors.BLACK,fontSize:18 },
            headerStyle: { backgroundColor: "#fff", shadowOpacity: 0 },
          })}
        />
        <Stack.Screen
          name="Matthew"
          component={Matthew}
          options={({ navigation }) => ({
            headerRight: () => (
              <View >
                {profilename?.getprofilelist?.profileImage != null ?
                  <TouchableOpacity onPress={() => props.navigation.navigate("Matthew")}>
                    <Image source={{ uri: `${Api.imageUri}${profilename?.getprofilelist?.profileImage}` }} style={{ width: 35, height: 35, right: 20, borderRadius: 100 }} />
                  </TouchableOpacity>
                  :
                  <TouchableOpacity onPress={() => props.navigation.navigate("Matthew")}>
                    <Image source={ImageIcons.womanclap} style={{ width: 35, height: 35, right: 20, borderRadius: 100 }} />
                  </TouchableOpacity>
                }
              </View>
            ),
            headerShown: true,
            headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={true} />,
            headerTitle: profilename?.getprofilelist?.fullName,
            headerTitleAlign: "center",
            headerTitleStyle: { color: Colors.BLACK,fontSize:18 },
            headerStyle: { backgroundColor: "#dedede", shadowOpacity: 0 },
          })}
        />
        <Stack.Screen
          name="Notifications"
          component={Notifications}
          options={({ navigation }) => ({
            headerRight: () => (
              <View >
                {profilename?.getprofilelist?.profileImage != null ?
                  <TouchableOpacity onPress={() => props.navigation.navigate("Matthew")}>
                    <Image source={{ uri: `${Api.imageUri}${profilename?.getprofilelist?.profileImage}` }} style={{ width: 35, height: 35, right: 20, borderRadius: 100 }} />
                  </TouchableOpacity>
                  :
                  <TouchableOpacity onPress={() => props.navigation.navigate("Matthew")}>
                    <Image source={ImageIcons.womanclap} style={{ width: 35, height: 35, right: 20, borderRadius: 100 }} />
                  </TouchableOpacity>
                }
              </View>
            ),
            headerShown: true,
            headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={true} />,
            headerTitle: "Notifications",
            headerTitleAlign: "center",
            headerTitleStyle: { color: Colors.BLACK,fontSize:18},
            headerStyle: { backgroundColor: "#dedede", shadowOpacity: 0 },
          })}
        />
        <Stack.Screen
          name="Messages"
          component={Messages}
          options={({ navigation }) => ({
            headerRight: () => (
              <View >
                {profilename?.getprofilelist?.profileImage != null ?
                  <TouchableOpacity onPress={() => props.navigation.navigate("Matthew")}>
                    <Image source={{ uri: `${Api.imageUri}${profilename?.getprofilelist?.profileImage}` }} style={{ width: 35, height: 35, right: 20, borderRadius: 100 }} />
                  </TouchableOpacity>
                  :
                  <TouchableOpacity onPress={() => props.navigation.navigate("Matthew")}>
                    <Image source={ImageIcons.womanclap} style={{ width: 35, height: 35, right: 20, borderRadius: 100 }} />
                  </TouchableOpacity>
                }
              </View>
            ),
            headerShown: true,
            headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={true} />,
            headerTitle: "Messages",
            headerTitleAlign: "center",
            headerTitleStyle: { color: Colors.BLACK,fontSize:18 },
            headerStyle: { backgroundColor: "#dedede", shadowOpacity: 0 },
          })}
        />
        <Stack.Screen
          name="Cru"
          component={Cru}
          options={({ navigation }) => ({
            headerRight: () => (
              <View >
                {profilename?.getprofilelist?.profileImage != null ?
                  <TouchableOpacity onPress={() => props.navigation.navigate("Matthew")}>
                    <Image source={{ uri: `${Api.imageUri}${profilename?.getprofilelist?.profileImage}` }} style={{ width: 35, height: 35, right: 20, borderRadius: 100 }} />
                  </TouchableOpacity>
                  :
                  <TouchableOpacity onPress={() => props.navigation.navigate("Matthew")}>
                    <Image source={ImageIcons.womanclap} style={{ width: 35, height: 35, right: 20, borderRadius: 100 }} />
                  </TouchableOpacity>
                }
              </View>
            ),
            headerShown: true,
            headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={true} />,
            headerTitle: "My Cru",
            headerTitleAlign: "center",
            headerTitleStyle: { color: Colors.BLACK,fontSize:18 },
            headerStyle: { backgroundColor: "#dedede", shadowOpacity: 0 },
          })}
        />
        <Stack.Screen
          name="Camera"
          component={Camera}
          options={({ navigation }) => ({
            headerRight: () => (
              <View >
                {profilename?.getprofilelist?.profileImage != null ?
                  <TouchableOpacity onPress={() => props.navigation.navigate("Matthew")}>
                    <Image source={{ uri: `${Api.imageUri}${profilename?.getprofilelist?.profileImage}` }} style={{ width: 35, height: 35, right: 20, borderRadius: 100 }} />
                  </TouchableOpacity>
                  :
                  <TouchableOpacity onPress={() => props.navigation.navigate("Matthew")}>
                    <Image source={ImageIcons.womanclap} style={{ width: 35, height: 35, right: 20, borderRadius: 100 }} />
                  </TouchableOpacity>
                }
              </View>
            ),
            headerShown: false,
            headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={true} />,
            headerTitle: "Camera",
            headerTitleAlign: "center",
            headerTitleStyle: { color: Colors.BLACK, fontSize:18},
            headerStyle: { backgroundColor: "#dedede", shadowOpacity: 0 },
          })}
        />
        <Stack.Screen
          name="Viewall"
          component={Viewall}
          options={({ navigation }) => ({
            headerRight: () => (
              <View >
                {profilename?.getprofilelist?.profileImage != null ?
                  <TouchableOpacity onPress={() => props.navigation.navigate("Matthew")}>
                    <Image source={{ uri: `${Api.imageUri}${profilename?.getprofilelist?.profileImage}` }} style={{ width: 35, height: 35, right: 20, borderRadius: 100 }} />
                  </TouchableOpacity>
                  :
                  <TouchableOpacity onPress={() => props.navigation.navigate("Matthew")}>
                    <Image source={ImageIcons.womanclap} style={{ width: 35, height: 35, right: 20, borderRadius: 100 }} />
                  </TouchableOpacity>
                }
              </View>
            ),
            headerShown: true,
            headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={false} />,
            headerTitle: "View All",
            headerTitleAlign: "center",
            headerTitleStyle: { color: Colors.BLACK,fontSize:18 },
            headerStyle: { backgroundColor: "#dedede", shadowOpacity: 0 },
          })}
        />
        <Stack.Screen
          name="Projects"
          component={Projects}
          options={({ navigation }) => ({
            headerRight: () => (
              <View >
                {profilename?.getprofilelist?.profileImage != null ?
                  <TouchableOpacity onPress={() => props.navigation.navigate("Matthew")}>
                    <Image source={{ uri: `${Api.imageUri}${profilename?.getprofilelist?.profileImage}` }} style={{ width: 35, height: 35, right: 20, borderRadius: 100 }} />
                  </TouchableOpacity>
                  :
                  <TouchableOpacity onPress={() => props.navigation.navigate("Matthew")}>
                    <Image source={ImageIcons.womanclap} style={{ width: 35, height: 35, right: 20, borderRadius: 100 }} />
                  </TouchableOpacity>
                }
              </View>
            ),
            headerShown: true,
            headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={true} />,
            headerTitle: "Projects",
            headerTitleAlign: "center",
            headerTitleStyle: { color: Colors.BLACK,fontSize:18 },
            headerStyle: { backgroundColor: "#dedede", shadowOpacity: 0 },
          })}
        />
        <Stack.Screen
          name="Newproject"
          component={Newproject}
          options={({ navigation }) => ({
            headerRight: () => (
              <View >
                {profilename?.getprofilelist?.profileImage != null ?
                  <TouchableOpacity onPress={() => props.navigation.navigate("Matthew")}>
                    <Image source={{ uri: `${Api.imageUri}${profilename?.getprofilelist?.profileImage}` }} style={{ width: 35, height: 35, right: 20, borderRadius: 100 }} />
                  </TouchableOpacity>
                  :
                  <TouchableOpacity onPress={() => props.navigation.navigate("Matthew")}>
                    <Image source={ImageIcons.womanclap} style={{ width: 35, height: 35, right: 20, borderRadius: 100 }} />
                  </TouchableOpacity>
                }
              </View>
            ),
            headerShown: true,
            headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={true} />,
            headerTitle: "Step",
            headerTitleAlign: "center",
            headerTitleStyle: { color: Colors.BLACK,fontSize:18 },
            headerStyle: { backgroundColor: "#dedede", shadowOpacity: 0 },
          })}
        />
        <Stack.Screen
          name="Searchjobs"
          component={Searchjobs}
          options={({ navigation }) => ({
            headerRight: () => (
              <View >
                {profilename?.getprofilelist?.profileImage != null ?
                  <TouchableOpacity onPress={() => props.navigation.navigate("Matthew")}>
                    <Image source={{ uri: `${Api.imageUri}${profilename?.getprofilelist?.profileImage}` }} style={{ width: 35, height: 35, right: 20, borderRadius: 100 }} />
                  </TouchableOpacity>
                  :
                  <TouchableOpacity onPress={() => props.navigation.navigate("Matthew")}>
                    <Image source={ImageIcons.womanclap} style={{ width: 35, height: 35, right: 20, borderRadius: 100 }} />
                  </TouchableOpacity>
                }
              </View>
            ),
            headerShown: true,
            headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={true} />,
            headerTitle: "Search Jobs",
            headerTitleAlign: "center",
            headerTitleStyle: { color: Colors.BLACK,fontSize:18 },
            headerStyle: { backgroundColor: "#dedede", shadowOpacity: 0 },
          })}
        />

        <Stack.Screen
          name="Lighting"
          component={Lighting}
          options={({ navigation }) => ({
            headerRight: () => (
              <View >
                {profilename?.getprofilelist?.profileImage != null ?
                  <TouchableOpacity onPress={() => props.navigation.navigate("Matthew")}>
                    <Image source={{ uri: `${Api.imageUri}${profilename?.getprofilelist?.profileImage}` }} style={{ width: 35, height: 35, right: 20, borderRadius: 100 }} />
                  </TouchableOpacity>
                  :
                  <TouchableOpacity onPress={() => props.navigation.navigate("Matthew")}>
                    <Image source={ImageIcons.womanclap} style={{ width: 35, height: 35, right: 20, borderRadius: 100 }} />
                  </TouchableOpacity>
                }
              </View>
            ),
            headerShown: true,
            headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={true} />,
            headerTitle: "Search Jobs",
            headerTitleAlign: "center",
            headerTitleStyle: { color: Colors.BLACK, fontSize:18 },
            headerStyle: { backgroundColor: "#dedede", shadowOpacity: 0 },
          })}
        />
        <Stack.Screen
          name="Jobdetails1"
          component={Jobdetails1}
          options={({ navigation }) => ({
            headerRight: () => (
              <View >
                {profilename?.getprofilelist?.profileImage != null ?
                  <TouchableOpacity onPress={() => props.navigation.navigate("Matthew")}>
                    <Image source={{ uri: `${Api.imageUri}${profilename?.getprofilelist?.profileImage}` }} style={{ width: 35, height: 35, right: 20, borderRadius: 100 }} />
                  </TouchableOpacity>
                  :
                  <TouchableOpacity onPress={() => props.navigation.navigate("Matthew")}>
                    <Image source={ImageIcons.womanclap} style={{ width: 35, height: 35, right: 20, borderRadius: 100 }} />
                  </TouchableOpacity>
                }
              </View>
            ),
            headerShown: true,
            headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={true} />,
            headerTitle: "Search Jobs",
            headerTitleAlign: "center",
            headerTitleStyle: { color: Colors.BLACK,fontSize:18 },
            headerStyle: { backgroundColor: "#dedede", shadowOpacity: 0 },
          })}
        />
        <Stack.Screen
          name="Locator"
          component={Locator}
          options={({ navigation }) => ({
            headerRight: () => (
              <View >
                {profilename?.getprofilelist?.profileImage != null ?
                  <TouchableOpacity onPress={() => props.navigation.navigate("Matthew")}>
                    <Image source={{ uri: `${Api.imageUri}${profilename?.getprofilelist?.profileImage}` }} style={{ width: 35, height: 35, right: 20, borderRadius: 100 }} />
                  </TouchableOpacity>
                  :
                  <TouchableOpacity onPress={() => props.navigation.navigate("Matthew")}>
                    <Image source={ImageIcons.womanclap} style={{ width: 35, height: 35, right: 20, borderRadius: 100 }} />
                  </TouchableOpacity>
                }
              </View>
            ),
            headerShown: true,
            headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={true} />,
            headerTitle: "Locator",
            headerTitleAlign: "center",
            headerTitleStyle: { color: Colors.BLACK, fontSize:18},
            headerStyle: { backgroundColor: "#dedede", shadowOpacity: 0 },
          })}
        />
        <Stack.Screen
          name="Projectdetails"
          component={Projectdetails}
          options={({ navigation }) => ({
            headerRight: () => (
              <View >
                {profilename?.getprofilelist?.profileImage != null ?
                  <TouchableOpacity onPress={() => props.navigation.navigate("Matthew")}>
                    <Image source={{ uri: `${Api.imageUri}${profilename?.getprofilelist?.profileImage}` }} style={{ width: 35, height: 35, right: 20, borderRadius: 100 }} />
                  </TouchableOpacity>
                  :
                  <TouchableOpacity onPress={() => props.navigation.navigate("Matthew")}>
                    <Image source={ImageIcons.womanclap} style={{ width: 35, height: 35, right: 20, borderRadius: 100 }} />
                  </TouchableOpacity>
                }
              </View>
            ),
            headerShown: true,
            headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={false} />,
            headerTitle: "Project Details",
            headerTitleAlign: "center",
            headerTitleStyle: { color: Colors.BLACK, fontSize:18},
            headerStyle: { backgroundColor: "#dedede", shadowOpacity: 0 },
          })}
        />
        <Stack.Screen
          name="Glyndenprofile"
          component={Glyndenprofile}
          options={({ navigation }) => ({
            headerRight: () => (
              <View >
                {profilename?.getprofilelist?.profileImage != null ?
                  <TouchableOpacity onPress={() => props.navigation.navigate("Matthew")}>
                    <Image source={{ uri: `${Api.imageUri}${profilename?.getprofilelist?.profileImage}` }} style={{ width: 35, height: 35, right: 20, borderRadius: 100 }} />
                  </TouchableOpacity>
                  :
                  <TouchableOpacity onPress={() => props.navigation.navigate("Matthew")}>
                    <Image source={ImageIcons.womanclap} style={{ width: 35, height: 35, right: 20, borderRadius: 100 }} />
                  </TouchableOpacity>
                }
              </View>
            ),
            headerShown: true,
            headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={true} />,
            headerTitle: profilename?.grtpostdetail?.fullName,
            headerTitleAlign: "center",
            headerTitleStyle: { color: Colors.BLACK, fontSize:18 },
            headerStyle: { backgroundColor: "#dedede", shadowOpacity: 0 },
          })}
        />
        <Stack.Screen
          name="Glynden"
          component={Glynden}
          options={({ navigation }) => ({
            headerRight: () => (
              <View >
                
              </View>
            ),
            headerShown: false,
            headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={false} />,
            headerTitle: "",
            headerTitleAlign: "center",
            headerTitleStyle: { color: Colors.BLACK,fontSize:18 },
            headerStyle: { backgroundColor: "#dedede", shadowOpacity: 0 },
          })}
        />


        <Stack.Screen
          name="Searchloc"
          component={Searchloc}
          options={({ navigation }) => ({
            headerRight: () => (
              <View >
                {profilename?.getprofilelist?.profileImage != null ?
                  <TouchableOpacity onPress={() => props.navigation.navigate("Matthew")}>
                    <Image source={{ uri: `${Api.imageUri}${profilename?.getprofilelist?.profileImage}` }} style={{ width: 35, height: 35, right: 20, borderRadius: 100 }} />
                  </TouchableOpacity>
                  :
                  <TouchableOpacity onPress={() => props.navigation.navigate("Matthew")}>
                    <Image source={ImageIcons.womanclap} style={{ width: 35, height: 35, right: 20, borderRadius: 100 }} />
                  </TouchableOpacity>
                }
              </View>
            ),
            headerShown: false,
            //headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={true} />,
            headerTitle: "Searchloc",
            //headerTitleAlign: "center",
            headerTitleStyle: { color: Colors.BLACK, fontWeight: 'bold' },
            headerStyle: { backgroundColor: "#ccccb3", elevation: 0, shadowOpacity: 0 },
          })}
        />

        <Stack.Screen
          name="Water"
          component={Water}
          options={({ navigation }) => ({
            //  headerRight: () => (
            //    <View style={{flexDirection:'row'}}>
            //   <Image source={ImageIcons.mor} style={{width:20,height:21,right:20}}  />
            //   <Image source={ImageIcons.moreoption1} style={{width:22,height:20,right:10}}  />
            //   <Image source={ImageIcons.threedot} style={{width:22,height:20,right:5}}  />
            //   </View>
            // ),
            headerShown: true,
            //headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={true} />,
            headerTitle: "Water Purifier",
            //headerTitleAlign: "center",
            headerTitleStyle: { color: Colors.BLACK, },
            headerStyle: { backgroundColor: "#dedede", elevation: 4, shadowOpacity: 0, },
          })}
        />
        <Stack.Screen
          name="Usersearch"
          component={Usersearch}
          options={({ navigation }) => ({
             headerRight: () => (
               <View style={{flexDirection:'row'}}>
              {/* <Image source={ImageIcons.mor} style={{width:20,height:21,right:20}}  />
              <Image source={ImageIcons.moreoption1} style={{width:22,height:20,right:10}}  />
              <Image source={ImageIcons.threedot} style={{width:22,height:20,right:5}} /> */}
              </View>
            ),
            headerShown: true,
            headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={true} />,
            headerTitle: "Social Feed",
            headerTitleAlign: "center",
            headerTitleStyle: { color: Colors.BLACK, },
            headerStyle: { backgroundColor: "#ffffff", elevation: 4, shadowOpacity: 0, },
          })}
        />
         <Stack.Screen
          name="Manageprofile"
          component={Manageprofile}
          options={({ navigation }) => ({
             headerRight: () => (
               <View style={{flexDirection:'row'}}>
              {/* <Image source={ImageIcons.mor} style={{width:20,height:21,right:20}}  />
              <Image source={ImageIcons.moreoption1} style={{width:22,height:20,right:10}}  />
              <Image source={ImageIcons.threedot} style={{width:22,height:20,right:5}} /> */}
              </View>
            ),
            headerShown: true,
            headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={true} />,
            headerTitle: "Social Feed",
            headerTitleAlign: "center",
            headerTitleStyle: { color: Colors.BLACK, },
            headerStyle: { backgroundColor: "#ffffff", elevation: 4, shadowOpacity: 0, },
          })}
        />

        <Stack.Screen
          name="EventScreen"
          component={EventScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <View >
                {profilename?.getprofilelist?.profileImage != null ?
                  <TouchableOpacity onPress={() => props.navigation.navigate("Matthew")}>
                    <Image source={{ uri: `${Api.imageUri}${profilename?.getprofilelist?.profileImage}` }} style={{ width: 35, height: 35, right: 20, borderRadius: 100 }} />
                  </TouchableOpacity>
                  :
                  <TouchableOpacity onPress={() => props.navigation.navigate("Matthew")}>
                    <Image source={ImageIcons.womanclap} style={{ width: 35, height: 35, right: 20, borderRadius: 100 }} />
                  </TouchableOpacity>
                }
              </View>
            ),
            headerShown: true,
            headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={true} />,
            headerTitle: "Events",
            headerTitleAlign: "center",
            headerTitleStyle: { color: Colors.BLACK, fontSize:18},
            headerStyle: { backgroundColor: "#FFFFFF", elevation: 4, shadowOpacity: 0, },
          })}
        />

        <Stack.Screen
          name="Eventdetail"
          component={Eventdetail}
          options={({ navigation }) => ({
            headerRight: () => (
              <View >
                {profilename?.getprofilelist?.profileImage != null ?
                  <TouchableOpacity onPress={() => props.navigation.navigate("Matthew")}>
                    <Image source={{ uri: `${Api.imageUri}${profilename?.getprofilelist?.profileImage}` }} style={{ width: 35, height: 35, right: 20, borderRadius: 100 }} />
                  </TouchableOpacity>
                  :
                  <TouchableOpacity onPress={() => props.navigation.navigate("Matthew")}>
                    <Image source={ImageIcons.womanclap} style={{ width: 35, height: 35, right: 20, borderRadius: 100 }} />
                  </TouchableOpacity>
                }
              </View>
            ),
            headerShown: true,
            headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={false} />,
            headerTitle: "Event Detail",
            headerTitleAlign: "center",
            headerTitleStyle: { color: Colors.BLACK,  },
            headerStyle: { backgroundColor: "#fff", elevation: 4, shadowOpacity: 0, },
          })}
        />

        <Stack.Screen
          name="Likelist"
          component={Likelist}
          options={({ navigation }) => ({
            headerRight: () => (
              <View >
                {profilename?.getprofilelist?.profileImage != null ?
                  <TouchableOpacity onPress={() => props.navigation.navigate("Matthew")}>
                    <Image source={{ uri: `${Api.imageUri}${profilename?.getprofilelist?.profileImage}` }} style={{ width: 35, height: 35, right: 20, borderRadius: 100 }} />
                  </TouchableOpacity>
                  :
                  <TouchableOpacity onPress={() => props.navigation.navigate("Matthew")}>
                    <Image source={ImageIcons.womanclap} style={{ width: 35, height: 35, right: 20, borderRadius: 100 }} />
                  </TouchableOpacity>
                }
              </View>
            ),
            headerShown: true,
            headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={false} />,
            headerTitle: " Like",  
            headerTitleAlign: "center",
            headerTitleStyle: { color: Colors.BLACK, },
            headerStyle: { backgroundColor: "#fff", elevation: 4, shadowOpacity: 0, },
          })}
        />

        <Stack.Screen
          name="Gyser"
          component={Gyser}
          options={({ navigation }) => ({
            //  headerRight: () => (
            //    <View style={{flexDirection:'row'}}>
            //   <Image source={ImageIcons.mor} style={{width:20,height:21,right:20}}  />
            //   <Image source={ImageIcons.moreoption1} style={{width:22,height:20,right:10}}  />
            //   <Image source={ImageIcons.threedot} style={{width:22,height:20,right:5}}  />
            //   </View>
            // ),
            headerShown: false,
            //headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={true} />,
            headerTitle: "Geyser",
            //headerTitleAlign: "center",
            headerTitleStyle: { color: Colors.BLACK, },
            headerStyle: { backgroundColor: "#ccccb3", elevation: 4, shadowOpacity: 0, },
          })}
        />

        <Stack.Screen
          name="Washing"
          component={Washing}
          options={({ navigation }) => ({
            //  headerRight: () => (
            //    <View style={{flexDirection:'row'}}>
            //   <Image source={ImageIcons.mor} style={{width:20,height:21,right:20}}  />
            //   <Image source={ImageIcons.moreoption1} style={{width:22,height:20,right:10}}  />
            //   <Image source={ImageIcons.threedot} style={{width:22,height:20,right:5}}  />
            //   </View>
            // ),
            headerShown: true,
            //headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={true} />,
            headerTitle: "About",
            //headerTitleAlign: "center",
            headerTitleStyle: { color: Colors.BLACK, },
            headerStyle: { backgroundColor: "#dedede", elevation: 4, shadowOpacity: 0, },
          })}
        />

        <Stack.Screen
          name="Appliances"
          component={Appliances}
          options={({ navigation }) => ({
            //  headerRight: () => (
            //    <View style={{flexDirection:'row'}}>
            //   <Image source={ImageIcons.mor} style={{width:20,height:21,right:20}}  />
            //   <Image source={ImageIcons.moreoption1} style={{width:22,height:20,right:10}}  />
            //   <Image source={ImageIcons.threedot} style={{width:22,height:20,right:5}}  />
            //   </View>
            // ),
            headerShown: true,
            //headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={true} />,
            headerTitle: "Appliances",
            //headerTitleAlign: "center",
            headerTitleStyle: { color: Colors.BLACK, },
            headerStyle: { backgroundColor: "#dedede", elevation: 4, shadowOpacity: 0, },
          })}
        />

        <Stack.Screen
          name="Commentlist"
          component={Commentlist}
          options={({ navigation }) => ({
            headerRight: () => (
              <View >
                {profilename?.getprofilelist?.profileImage != null ?
                  <TouchableOpacity onPress={() => props.navigation.navigate("Matthew")}>
                    <Image source={{ uri: `${Api.imageUri}${profilename?.getprofilelist?.profileImage}` }} style={{ width: 35, height: 35, right: 20, borderRadius: 100 }} />
                  </TouchableOpacity>
                  :
                  <TouchableOpacity onPress={() => props.navigation.navigate("Matthew")}>
                    <Image source={ImageIcons.womanclap} style={{ width: 35, height: 35, right: 20, borderRadius: 100 }} />
                  </TouchableOpacity>
                }
              </View>
            ),
            headerShown: true,
            headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={false} />,
            headerTitle: "Comment",
            headerTitleAlign: "center",
            headerTitleStyle: { color: Colors.BLACK, },
            headerStyle: { backgroundColor: "#fff", elevation: 4, shadowOpacity: 0, },
          })}
        />

        <Stack.Screen
          name="Aircondition"
          component={Aircondition}
          options={({ navigation }) => ({
            //  headerRight: () => (
            //    <View style={{flexDirection:'row'}}>
            //   <Image source={ImageIcons.mor} style={{width:20,height:21,right:20}}  />
            //   <Image source={ImageIcons.moreoption1} style={{width:22,height:20,right:10}}  />
            //   <Image source={ImageIcons.threedot} style={{width:22,height:20,right:5}}  />
            //   </View>
            // ),
            headerShown: true,
            //headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={true} />,
            headerTitle: "Air Conditioner",
            //headerTitleAlign: "center",
            headerTitleStyle: { color: Colors.BLACK, },
            headerStyle: { backgroundColor: "#f2f2f2", elevation: 4, shadowOpacity: 0, },
          })}
        />

        <Stack.Screen
          name="Gysercondition"
          component={Gysercondition}
          options={({ navigation }) => ({
            //  headerRight: () => (
            //    <View style={{flexDirection:'row'}}>
            //   <Image source={ImageIcons.mor} style={{width:20,height:21,right:20}}  />
            //   <Image source={ImageIcons.moreoption1} style={{width:22,height:20,right:10}}  />
            //   <Image source={ImageIcons.threedot} style={{width:22,height:20,right:5}}  />
            //   </View>
            // ),
            headerShown: true,
            //headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={true} />,
            headerTitle: "Geyser",
            //headerTitleAlign: "center",
            headerTitleStyle: { color: Colors.BLACK, },
            headerStyle: { backgroundColor: "#f2f2f2", elevation: 4, shadowOpacity: 0, },
          })}
        />

        <Stack.Screen
          name="Waterpurifier"
          component={Waterpurifier}
          options={({ navigation }) => ({
            //  headerRight: () => (
            //    <View style={{flexDirection:'row'}}>
            //   <Image source={ImageIcons.mor} style={{width:20,height:21,right:20}}  />
            //   <Image source={ImageIcons.moreoption1} style={{width:22,height:20,right:10}}  />
            //   <Image source={ImageIcons.threedot} style={{width:22,height:20,right:5}}  />
            //   </View>
            // ),
            headerShown: true,
            //headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={true} />,
            headerTitle: "Water Purifier",
            //headerTitleAlign: "center",
            headerTitleStyle: { color: Colors.BLACK, },
            headerStyle: { backgroundColor: "#f2f2f2", elevation: 4, shadowOpacity: 0, },
          })}
        />

        <Stack.Screen
          name="Search"
          component={Search}
          options={({ navigation }) => ({
            //  headerRight: () => (
            //    <View style={{flexDirection:'row'}}>
            //   <Image source={ImageIcons.mor} style={{width:20,height:21,right:20}}  />
            //   <Image source={ImageIcons.moreoption1} style={{width:22,height:20,right:10}}  />
            //   <Image source={ImageIcons.threedot} style={{width:22,height:20,right:5}}  />
            //   </View>
            // ),
            headerShown: false,
            //headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={true} />,
            headerTitle: "Search",
            //headerTitleAlign: "center",
            headerTitleStyle: { color: Colors.BLACK, },
            headerStyle: { backgroundColor: "#f2f2f2", elevation: 4, shadowOpacity: 0, },
          })}
        />

        <Stack.Screen
          name="Editprofile"
          component={Editprofile}
          options={({ navigation }) => ({
            headerRight: () => (
              <View >
                {profilename?.getprofilelist?.profileImage != null ?
                  <TouchableOpacity onPress={() => props.navigation.navigate("Matthew")}>
                    <Image source={{ uri: `${Api.imageUri}${profilename?.getprofilelist?.profileImage}` }} style={{ width: 35, height: 35, right: 20, borderRadius: 100 }} />
                  </TouchableOpacity>
                  :
                  <TouchableOpacity onPress={() => props.navigation.navigate("Matthew")}>
                    <Image source={ImageIcons.womanclap} style={{ width: 35, height: 35, right: 20, borderRadius: 100 }} />
                  </TouchableOpacity>
                }
              </View>
            ),
            headerShown: true,
            //headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={true} />,
            headerTitle: "Editprofile",
            //headerTitleAlign: "center",
            headerTitleStyle: { color: Colors.BLACK, fontWeight: 'bold' },
            headerStyle: { backgroundColor: "#ccccb3", elevation: 0, shadowOpacity: 0 },
          })}
        />

        <Stack.Screen
          name="Reportlisting"
          component={Reportlisting}
          options={({ navigation }) => ({
            headerRight: () => (
              <View style={{ flexDirection: 'row' }}>
                <Image source={ImageIcons.mor} style={{ width: 20, height: 21, right: 20 }} />
                <Image source={ImageIcons.moreoption1} style={{ width: 22, height: 20, right: 10 }} />
                <Image source={ImageIcons.threedot} style={{ width: 22, height: 20, right: 5 }} />
              </View>
            ),
            headerShown: false,
            //headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={true} />,
            headerTitle: "Actions",
            //headerTitleAlign: "center",
            headerTitleStyle: { color: Colors.BLACK, fontWeight: 'bold' },
            headerStyle: { backgroundColor: "#ccccb3", elevation: 0, shadowOpacity: 0 },
          })}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={({ navigation }) => ({
            //  headerRight: () => (
            //    <View style={{flexDirection:'row'}}>
            //   <Image source={ImageIcons.mor} style={{width:20,height:21,right:20}}  />
            //   <Image source={ImageIcons.moreoption1} style={{width:22,height:20,right:10}}  />
            //   <Image source={ImageIcons.threedot} style={{width:22,height:20,right:5}}  />
            //   </View>
            // ),
            headerShown: true,
            headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={false} />,
            headerTitle: "My Profile",
            //headerTitleAlign: "center",
            headerTitleStyle: { color: Colors.WHITE, fontWeight: 'bold', left: '-20%' },
            headerStyle: { backgroundColor: "#000000", elevation: 0, shadowOpacity: 0 },
          })}
        />

        <Stack.Screen
          name="Help"
          component={Help}
          options={({ navigation }) => ({
            //  headerRight: () => (
            //    <View style={{flexDirection:'row'}}>
            //   <Image source={ImageIcons.mor} style={{width:20,height:21,right:20}}  />
            //   <Image source={ImageIcons.moreoption1} style={{width:22,height:20,right:10}}  />
            //   <Image source={ImageIcons.threedot} style={{width:22,height:20,right:5}}  />
            //   </View>
            // ),
            headerShown: false,
            headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={false} />,
            headerTitle: "Help",
            //headerTitleAlign: "center",
            headerTitleStyle: { color: Colors.WHITE, fontWeight: 'bold', left: '-20%' },
            headerStyle: { backgroundColor: "#000000", elevation: 0, shadowOpacity: 0 },
          })}
        />
        <Stack.Screen
          name="Ucsafe"
          component={Ucsafe}
          options={({ navigation }) => ({
            headerShown: true,
            //headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={true} />,
            headerTitle: "UC Safe",
            headerTitleAlign: "center",
            headerTitleStyle: { color: Colors.BLACK, },
            headerStyle: { backgroundColor: "#dedede", elevation: 0, shadowOpacity: 0 },
          })}
        />
        <Stack.Screen
          name="Safeservice"
          component={Safeservice}
          options={({ navigation }) => ({
            headerShown: true,
            //headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={false} />,
            headerTitle: "UC Safe Services",
            headerTitleAlign: "center",
            headerTitleStyle: { color: Colors.BLACK, },
            headerStyle: { backgroundColor: "#dedede", elevation: 0, shadowOpacity: 0 },
          })}
        />
        <Stack.Screen
          name="Massagewomen"
          component={Massagewomen}
          options={({ navigation }) => ({
            headerShown: true,
            //headerLeft: () => <LeftMenuItem1 navigation={navigation}  isMenu={true}/>,
            headerTitle: "Massage Therapy for Women",
            headerTitleAlign: "center",
            headerTitleStyle: { color: Colors.BLACK, },
            headerStyle: { backgroundColor: "#dedede", elevation: 0, shadowOpacity: 0 },
          })}
        />

        <Stack.Screen
          name="Massagemen"
          component={Massagemen}
          options={({ navigation }) => ({
            headerShown: true,
            //headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={false} />,
            headerTitle: "Massage Therapy for Men",
            headerTitleAlign: "center",
            headerTitleStyle: { color: Colors.BLACK, },
            headerStyle: { backgroundColor: "#dedede", elevation: 0, shadowOpacity: 0 },
          })}
        />
        <Stack.Screen
          name="Hairwomen"
          component={Hairwomen}
          options={({ navigation }) => ({
            headerShown: true,
            //headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={false} />,
            headerTitle: "Hair Service for Women",
            headerTitleAlign: "center",
            headerTitleStyle: { color: Colors.BLACK, },
            headerStyle: { backgroundColor: "#dedede", elevation: 0, shadowOpacity: 0 },
          })}
        />
        <Stack.Screen
          name="Cleankitbath"
          component={Cleankitbath}
          options={({ navigation }) => ({
            headerShown: true,
            //headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={false} />,
            headerTitle: "Bathroom and Kitchen Cleaning",
            headerTitleAlign: "center",
            headerTitleStyle: { color: Colors.BLACK, },
            headerStyle: { backgroundColor: "#dedede", elevation: 0, shadowOpacity: 0 },
          })}
        />
        <Stack.Screen
          name="Plumber"
          component={Plumber}
          options={({ navigation }) => ({
            headerShown: true,
            //headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={false} />,
            headerTitle: "Plumbers",
            headerTitleAlign: "center",
            headerTitleStyle: { color: Colors.BLACK, },
            headerStyle: { backgroundColor: "#dedede", elevation: 0, shadowOpacity: 0 },
          })}
        />
        <Stack.Screen
          name="waterpurifier"
          component={waterpurifier}
          options={({ navigation }) => ({
            headerShown: true,
            //headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={false} />,
            headerTitle: "Water Purifier",
            headerTitleAlign: "center",
            headerTitleStyle: { color: Colors.BLACK, },
            headerStyle: { backgroundColor: "#dedede", elevation: 0, shadowOpacity: 0 },
          })}
        />
        <Stack.Screen
          name="Cleaning"
          component={Cleaning}
          options={({ navigation }) => ({
            headerShown: true,
            //headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={false} />,
            headerTitle: "Cleaning",
            headerTitleAlign: "center",
            headerTitleStyle: { color: Colors.BLACK, },
            headerStyle: { backgroundColor: "#dedede", elevation: 0, shadowOpacity: 0 },
          })}
        />
        <Stack.Screen
          name="Homerepair"
          component={Homerepair}
          options={({ navigation }) => ({
            headerShown: true,
            //headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={false} />,
            headerTitle: "Home Repair",
            headerTitleAlign: "center",
            headerTitleStyle: { color: Colors.BLACK, },
            headerStyle: { backgroundColor: "#dedede", elevation: 0, shadowOpacity: 0 },
          })}
        />
        <Stack.Screen
          name="Pestcontrol"
          component={Pestcontrol}
          options={({ navigation }) => ({
            headerShown: true,
            //headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={false} />,
            headerTitle: "Pest Control",
            headerTitleAlign: "center",
            headerTitleStyle: { color: Colors.BLACK, },
            headerStyle: { backgroundColor: "#dedede", elevation: 0, shadowOpacity: 0 },
          })}
        />
      </Stack.Navigator>
    </>
  );
};

const LeftMenuItem = ({ navigation, isMenu }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        if (isMenu) {
          navigation?.toggleDrawer()
        } else {
          navigation?.goBack();
        }
      }}
      style={styles.leftButton}
    >
      <Image source={isMenu ? ImageIcons.menuIcon : ImageIcons.backarrow} style={[styles.leftIcon, { tintColor: isMenu ? '#5fafcf' : '#5fafcf' },{width: isMenu ? wp('5%') : wp('3%')}]} />
    </TouchableOpacity>
  )
}

const LeftMenuItem1 = ({ navigation, isMenu }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        if (isMenu) {
          navigation?.toggleDrawer()
        } else {
          navigation?.navigate("Saleslisting");
        }
      }}
      style={styles.leftButton}
    >
      <Image source={isMenu ? ImageIcons.menuIcon : ImageIcons.backarrow} style={[styles.leftIcon, { tintColor: isMenu ? Colors.BLACK : '#5fafcf' },{width: isMenu ? wp('5%') : wp('3%')}]} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  leftButton: {
    height: wp('6%'),
    marginLeft: 15,
    paddingHorizontal: 8,
    justifyContent: 'center'
  },
  leftIcon: {
    
    height: wp('5%'),
    marginLeft: 15,
    tintColor: '#5fafcf'
  }
});

export default VendorStack;
