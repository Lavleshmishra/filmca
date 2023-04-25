import React, { useRef, useState, useEffect } from 'react';
import { Text, Image, View, ImageBackground, FlatList, TouchableOpacity, Dimensions, ScrollView, Alert, StatusBar, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import styles from './styles';
import { Colors, CommonStrings } from '../../common'
import ImageIcons from '../../common/ImageIcons'
import InputField from '../../components/forms/inputField';
import { RoundedButton } from '../../components/forms/button';
import { phoneRegExp } from '../../services/helper';
import DropdownField from '../../components/dropdown/DropDownMenu';
import Loader from '../../components/modals/Loader';
import RnIncrementDecrementBtn from
  'react-native-increment-decrement-button';
import { FlatListSlider } from 'react-native-flatlist-slider';
import DashedLine from 'react-native-dashed-line';
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const Hairwomen = (props) => {

  const {
    navigation,
    values,
    errors,
    handleChange,
    handleSubmit,
  } = props;


  useEffect(() => {
    props.businessList();
  }, [])

  const DATA = [
    {
      text1: "Save 15% on every order",
      text2: "Get Plus now",
      text3: "Organization Actions",
    },
    {
      text1: "Save 15% on every order",
      text2: "Get Plus now",
      text3: "Organization Actions",
    },
    {
      text1: "Save 15% on every order",
      text2: "Get Plus now",
      text3: "Organization Actions",
    },
  ];

  const DATA1 = [
    {

      text2: "Packages",

    },
    {

      text2: "Haircut",

    },

  ];


  const images = [
    {
      image: 'https://static.bangkokpost.com/media/content/20200421/c1_1904000_200421091756.jpg',
      desc: 'Silent Waters in the mountains in midst of Himilayas',
    },
    {
      image: 'https://cdn.abcotvs.com/dip/images/6213703_AP_20147585446920.jpg?w=1600',
      desc:
        'Red fort in India New Delhi is a magnificient masterpeiece of humans',
    },

  ];

  const hairdata = [
    {
      text1: "Haircut + Massage",
    },
    {
      text1: "Haircut + Beard Care",
    },
    {
      text1: "Anti-Tan Ess",
    },
  ];

  const haircutdata = [
    {
      text1: "Haircut + Massage",
    },
    {
      text1: "Haircut + Beard Care",
    },
    {
      text1: "Anti-Tan Ess",
    },
  ]

  const Therapydata = [
    {
      text1: "10 Min Neck & Sholder",
    },
    {
      text1: "20 Min Head Massa",
    },
    {
      text1: "20 Min Face Massage",
    },
  ]




  const renderItem = ({ item, index }) => {
    return (
      <View >
        <View style={{ borderRadius: 5, borderColor: "#bbbdbb", marginHorizontal: 10, marginVertical: 20, backgroundColor: "#e8eded", elevation: 2 }}>
          <View style={{ flexDirection: 'row', marginHorizontal: 8 }}>
            <View>
              <Image source={ImageIcons.secure} style={styles.imageslogo} />
            </View>
            <View style={{ marginHorizontal: 5, marginVertical: 2 }}>
              <Text>{item.text1}</Text>
            </View>
          </View>
          <View style={{ marginLeft: 30, marginBottom: 3 }}>
            <Text style={{ color: "#8a8a8a" }}>{item.text2}</Text>
          </View>
        </View>
      </View>
    );
  }



  const renderItem1 = ({ item, index }) => {
    return (
      <View >
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 18, marginVertical: 20 }}>
          <View style={{ alignItems: 'center', }}>
            <Image source={ImageIcons.man} style={styles.images1} />
            <Text>{item.text2}</Text>
          </View>
          <View style={{ alignItems: 'center', width: 150 }}>
            <Image source={ImageIcons.man} style={styles.images1} />
            <Text>{item.text2}</Text>
          </View>
          <View style={{ alignItems: 'center', }}>
            <Image source={ImageIcons.man} style={styles.images1} />
            <Text >{item.text2}</Text>
          </View>
        </View>
      </View>
    );
  }

  const renderItem2 = ({ item, index }) => {
    return (
      <View >
        <View style={{ marginHorizontal: '3%' }}>

          <View><Text style={{ fontSize: 14, color: '#48b5ac' }}>Packages</Text></View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

            <View style={{ marginVertical: 2 }}>
              <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.text1}</Text>
            </View>
            <View style={{ marginTop: "1%", marginHorizontal: "2%" }}>
              <RnIncrementDecrementBtn
                minVal={0}
                minreq={1}
                max={10}

                //val={Incval}
                styleBtn={{ width: 30.6, height: 26, backgroundColor: '#ffffff', borderColor: "#330066" }}
                styleTextInput={{ width: 38.25, height: 26, backgroundColor: '#ffffff', borderColor: "#330066" }}
                labelStyle={{ fontSize: 15, marginTop: '1%', color: '#330066', fontFamily: 'SourceSansPro-Regular' }}
              //handleClick={()=> setIncval(Incval)}
              />
            </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View>
              <Image source={ImageIcons.star} style={styles.imageslogo} />
            </View>
            <View style={{ marginHorizontal: 5, marginVertical: 2 }}>
              <Text>4.75 (974k)</Text>
            </View>
          </View>

          <View>
            <Text>Rs299  -  40 min</Text>
          </View>
          <View style={{ padding: '3%' }}>
            <DashedLine dashLength={4} dashColor='#dedede' dashThickness={1} />
          </View>
          <View style={{ marginHorizontal: 5, marginVertical: 2 }}>
            <Text>Men's Haircut</Text>
            <Text>10 min Head Message</Text>
          </View>
          <View style={{ borderWidth: 1, borderRadius: 5, borderColor: "#bbbdbb", marginTop: 5, width: "33%", padding: 2 }}>
            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Edit Your Packages</Text>
          </View>
          <View style={{ borderBottomWidth: 1, marginTop: '5%', borderColor: '#dedede', marginBottom: '2%' }} />


        </View>
      </View>
    );
  }

  const renderItem3 = ({ item, index }) => {
    return (
      <View >
        <View style={{ marginHorizontal: '3%', marginTop: "5%" }}>

          <View><Text style={{ fontSize: 14, color: '#48b5ac' }}>Packages</Text></View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

            <View style={{ marginVertical: 2 }}>
              <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.text1}</Text>
            </View>
            <View style={{ marginTop: "1%", marginHorizontal: "2%" }}>
              <View style={{ marginBottom: 45, marginLeft: 18 }}><Image source={ImageIcons.man} style={styles.images2} /></View>
              <RnIncrementDecrementBtn
                minVal={0}
                minreq={1}
                max={10}

                //val={Incval}
                styleBtn={{ width: 30.6, height: 26, backgroundColor: '#ffffff', borderColor: "#330066" }}
                styleTextInput={{ width: 38.25, height: 26, backgroundColor: '#ffffff', borderColor: "#330066" }}
                labelStyle={{ fontSize: 15, marginTop: '1%', color: '#330066', fontFamily: 'SourceSansPro-Regular' }}
              //handleClick={()=> setIncval(Incval)}
              />
            </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View>
              <Image source={ImageIcons.star} style={styles.imageslogo} />
            </View>
            <View style={{ marginHorizontal: 5, marginVertical: 2 }}>
              <Text>4.75 (974k)</Text>
            </View>
          </View>

          <View>
            <Text>Rs299  -  40 min</Text>
          </View>
          <View style={{ padding: '3%' }}>
            <DashedLine dashLength={4} dashColor='#dedede' dashThickness={1} />
          </View>
          <View style={{ marginHorizontal: 5, marginVertical: 2 }}>
            <Text>Men's Haircut</Text>
            <Text>10 min Head Message</Text>
          </View>
          <View style={{ borderWidth: 1, borderRadius: 5, borderColor: "#bbbdbb", marginTop: 5, width: "33%", padding: 2 }}>
            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Edit Your Packages</Text>
          </View>
          <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#330066', marginVertical: '3%' }}>View details</Text>
          <View style={{ borderBottomWidth: 1, marginTop: '5%', borderColor: '#dedede', marginBottom: '2%' }} />


        </View>
      </View>
    );
  }

  const renderItem4 = ({ item, index }) => {
    return (
      <View >
        <View style={{ marginHorizontal: '3%', marginTop: "5%" }}>
          <Image source={ImageIcons.massage} style={{ height: 200, width: deviceWidth / 1.07, borderRadius: 10 }} />
          <View><Text style={{ fontSize: 14, color: '#48b5ac' }}>Packages</Text></View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

            <View style={{ marginVertical: 2 }}>
              <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.text1}</Text>
            </View>
            <View style={{ marginTop: "1%", marginHorizontal: "2%" }}>
              <View style={{ marginBottom: 45, marginLeft: 18 }}><Image source={ImageIcons.man} style={styles.images2} /></View>
              <RnIncrementDecrementBtn
                minVal={0}
                minreq={1}
                max={10}

                //val={Incval}
                styleBtn={{ width: 30.6, height: 26, backgroundColor: '#ffffff', borderColor: "#330066" }}
                styleTextInput={{ width: 38.25, height: 26, backgroundColor: '#ffffff', borderColor: "#330066" }}
                labelStyle={{ fontSize: 15, marginTop: '1%', color: '#330066', fontFamily: 'SourceSansPro-Regular' }}
              //handleClick={()=> setIncval(Incval)}
              />
            </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View>
              <Image source={ImageIcons.star} style={styles.imageslogo} />
            </View>
            <View style={{ marginHorizontal: 5, marginVertical: 2 }}>
              <Text>4.75 (974k)</Text>
            </View>
          </View>

          <View>
            <Text>Rs299  -  40 min</Text>
          </View>
          <View style={{ padding: '3%' }}>
            <DashedLine dashLength={4} dashColor='#dedede' dashThickness={1} />
          </View>
          <View style={{ marginHorizontal: 5, marginVertical: 2 }}>
            <Text>Men's Haircut</Text>
            <Text>10 min Head Message</Text>
          </View>
          <View style={{ borderWidth: 1, borderRadius: 5, borderColor: "#bbbdbb", marginTop: 5, width: "33%", padding: 2 }}>
            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Edit Your Packages</Text>
          </View>
          <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#330066', marginVertical: "3%" }}>View details</Text>
          <View style={{ borderBottomWidth: 1, marginTop: '5%', borderColor: '#dedede', marginBottom: '2%' }} />


        </View>
      </View>
    );
  }

  return (
    <KeyboardAvoidingView>
      <StatusBar backgroundColor={Colors.BLACK} barStyle="light-content" translucent={true} />
      <ScrollView keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={styles.root}>
        <View style={{ backgroundColor: 'white' }}>
          <View>
            <FlatListSlider
              data={images}
              height={230}
              timer={5000}
              onPress={item => alert(JSON.stringify(item))}
              indicatorContainerStyle={{ position: 'absolute', bottom: 20 }}
              indicatorActiveColor={'#8e44ad'}
              indicatorInActiveColor={'#ffffff'}
              indicatorActiveWidth={30}
              animation
            />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: "3%", marginVertical: 20 }}>
            <View>
              <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Hair Service for Women</Text>
            </View>
            <TouchableOpacity onPress={() => props.navigation.navigate("Ucsafe")} style={{ flexDirection: 'row', borderWidth: 1, borderRadius: 5, borderColor: "#bbbdbb", alignSelf: 'center', marginHorizontal: 2 }}>
              <View>
                <Image source={ImageIcons.secure} style={styles.imageslogo} />
              </View>
              <View style={{ marginHorizontal: 3, marginVertical: 2 }}>
                <Text>UC Safe</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', marginHorizontal: "5%" }}>
            <View>
              <Image source={ImageIcons.star} style={styles.imageslogo} />
            </View>
            <View style={{ marginHorizontal: 5, marginVertical: 2 }}>
              <Text>4.75 (974k)</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', marginHorizontal: "5%" }}>
            <View>
              <Image source={ImageIcons.rightadd} style={styles.imageslogo} />
            </View>
            <View style={{ marginHorizontal: 5, marginVertical: 2 }}>
              <Text>44,804 booking in Chandigarh Tricity this year</Text>
            </View>
          </View>
          <View style={{ borderRadius: 5, borderColor: "#bbbdbb", marginHorizontal: 10, marginVertical: 20, borderWidth: 1 }}>
            <View style={{ flexDirection: 'row', marginHorizontal: 8 }}>
              <View>
                <Image source={ImageIcons.secure} style={styles.imageslogo} />
              </View>
              <View style={{ marginHorizontal: 5, marginVertical: 2 }}>
                <Text>Checkout our Hair guide</Text>
              </View>
              <View>
                <Image source={ImageIcons.rightarrow} style={styles.imageslogo} />
              </View>
            </View>

          </View>
          <View style={{ marginBottom: 10 }}>
            <FlatList
              data={DATA}
              horizontal={true}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>


        <View style={{ backgroundColor: 'white', marginVertical: "2%" }}>
          <FlatList
            data={DATA1}

            renderItem={renderItem1}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
          />
        </View>


        <View style={{ backgroundColor: 'white', marginVertical: "2%" }}>
          <View><Text style={{ fontSize: 20, fontWeight: 'bold', marginHorizontal: "3%", marginVertical: "2%" }}>Packages</Text></View>
          <FlatList
            data={hairdata}

            renderItem={renderItem2}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={{ backgroundColor: 'white', marginVertical: "2%" }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginHorizontal: "3%", marginVertical: "2%" }}>Haircut for Men</Text>
          <FlatList
            data={haircutdata}

            renderItem={renderItem3}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={{ backgroundColor: 'white', marginVertical: "2%" }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginHorizontal: "3%", marginVertical: "2%" }}>Massage Therapy</Text>
          <FlatList
            data={Therapydata}

            renderItem={renderItem4}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
          />
        </View>


      </ScrollView>

      {props?.vendorRequestLoader && <Loader isVisible={props?.vendorRequestLoader} />}
    </KeyboardAvoidingView>
  )
}


export default Hairwomen;