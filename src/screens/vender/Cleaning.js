import React, { useRef, useState, useEffect } from 'react';
import { Text, Image, View, ImageBackground,FlatList, ScrollView, Alert, StatusBar, KeyboardAvoidingView, Platform,Keyboard} from 'react-native';
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
import RnIncrementDecrementBtn  from 
'react-native-increment-decrement-button';
 import {FlatListSlider} from 'react-native-flatlist-slider';
 import DashedLine from 'react-native-dashed-line';

const Cleaning = (props) => {

    const {
        navigation,
        values,
        errors,
        handleChange,
        handleSubmit,
    } = props;


    useEffect(() => {
        props.businessList();        
    },[])
    
   

  
      const ucsafedata = [
   {
    image:'https://mcmscache.epapr.in/post_images/website_350/post_17373155/full.jpg',
    desc: 'Bathroom and Kitchen Cleaning',
   },
  {
    image:'https://menglish.sakshi.com/sites/default/files/styles/storypage_main/public/gallery_images/2021/12/2/urbancompany9-1638419777.jpg?itok=YtfUC3D3',
    desc:
      'Full Home Cleaning',
  },
  {
    image:'https://static.bangkokpost.com/media/content/20200421/c1_1904000_200421091756.jpg',
    desc:
      'Sofa and carpet Cleaning',
  },
  {
    image:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBIVFRgREhUYGBIYERESEhIYGBISEhESGBgZGRgYGBgcIS4lHB4rIRgYJjgmKzAxNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHzQsJCw0NDQxNDQ0NDU0NDQxNDQ0NTQ0NDQ0NDQ0MTQ0MTcxNDQ0NjQ0NDQxMTQ0MTQ0NTQ0NP/AABEIALcBEwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAACAAEDBAUGB//EAEUQAAIBAgMEBgUJBgQHAQAAAAECAAMRBBIhBTFBURMiYXGBkQYyUqGxFCMzQmKCksHRFXJzorLwU5PC0kNjg6PT4fEW/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAECBAMFBv/EAC0RAAICAQMDAwEIAwAAAAAAAAABAhEDEiExBEFRBSJhgRMUMkJxkaHRI1LB/9oADAMBAAIRAxEAPwDoMNUuAQQRzGo0lxHmcuIWTJXEzuBu1GzhtputgTmXkSb+Db5pLtSkwGpB9nK7EfhBnNLUEkTv1kxlKPyikscZfDN/5dRHP/Lqf7IvltA7x/2qn+yZ+G2i66OM689M48ePjNjDYmm/qWv7JADDw/SdozjIzSxyjyFRxtM2AJ4ADI4/0ywY1opcoPHEaKAFEI0cQBR414rwBGMYorwCMyrtL1PESyTKm0z1PvCAZoMkQyFTDUwC5gD84P4b/wBSTXExNnn50fwn/qSbIgBRRooA8UaKCLHiBjQXW/PwJEEjsTfS3jeDmbs8z+kiah9pvxGMKP2m84BZLQS7brDzP6SFqbcHb+X9IHRt7Z8l/SAT5pHz7zGUEbzfyEHN8TAFeKDmigHlLVydxh0sYRvj43YmKp6shZfbT5xfIajxEz1e8oadVm/Qxw4y/SxIO4zlkeWkrEagyNNk6jp1rSwjg9/DnOepYs980dnYi7E8Ftx4ns7rzjnksWNzfYtF26Otw7MFCsxY8bm/hflLCVSJj0MQectdMZ86uunq1NuzpLEuDVRwYYmbTq3lhK5G/Wet0/qUZbT/AHM08LXBajwEYHdCnqRlGSuLtHBquR4oo15YDmCTETBJgASptU9T7yy3eUtqnqfeWSDMUyRTIVkgMAtbOPzw/gv/AFpNoTE2b9N/0T/WJtCAHFGjyAKIxooAoiYxjGAK8YmMTBJgCJglozNI2aASZo+UQUiLTzM/Uty9r2R3jDbcbou33RQekinH75k8lvs0VAZUxmy6FX6SmpPt+q/4hYy2IQnsmc5jFehynWlUI+y4zD8S2t5GZGI9HcWmvR5xzQh/5fW909AEIGRpLKTR5XUrFCRUBBA9VgVYeBm3ggyoL6MesRobE93ZbynY7SVGpv0iK6hGOV1Dru5WM5AVBPJ9Tm6UPqaMLu2XKWKYb5q4fGgiYCNJUqkDSeHOCfBoTOiWvaTpiBOdp4s/3uj1Ma3dKRjJPYl0zp1qjfmtLVLEg8Qe0TjMOlRzckgeOs3MHRdd3/qasXVTwy2Zzlji1ubquDuMcmUA3G4B46jSTpV5m89nB6hGW01XyZZYWuCUmCTFOWwnprhahsq1A1yMpUB7jf1b7+yekt+Di2o8nTgyltU9T7whYTH06nqNcjehBV153U6yLa56n3hLEXaMxTJAZEphKYJL2y/pj/B/1zbEwtlN8638Ffe7fpNsOOYgEkUDOOY84s68x5iQA40DpF5jzEY1F5jzEAMmCTI2rL7Q84DVl9oeckEjNI2eRmsvtDzkT119oecEIkZ4LGZWP2wiHKLFuOugh7E2ia2cEDqFNRxzX3+Uz9TKUcTaLwcXKjYBsJTqY5ASt9ZYr1Qi5iD4C85rGV6bktTJupswO8GeIlqNZsfKY0w+lPONGgWdCA/JPxN/tjgVPsebH8pMBCAn0RiK+WpzT+Yx8r+0v4W/WWLRWgFZ6TMCrFSCLEFLgjuzTOrbAptqGKn7INvIk+602rRZZznihP8AErLRk48M5etsGquqMrjl6jeR098oVqdRPpEZRzIIHgdxnbBY7MBvmKfpuOX4W0dFna5OIp1BeT0qQJzObCb+Jw9Fv+ApPP6M+JXWZWL2M7+qcncWf+smZZelZPytFvvcFyV8bt/D4dbuwHsji1uQ3mYX/wClxOJ+i6lK9g312/Ie+ba+jOG/4mGp1WJuXZqoq3G7rlmIX7IsOzSZNbYGMQWpmmRyGenbsHrfGXXpWiNxVv57ELq4ye7pFnBrl9ZiSbZjfUzZw2IoqNQ1/wB4gTia7Y5GyHDsF41AVqDwAN/OWMY2Kp0+l6O65C79ezhQLnSxG68zS9PzN8HVdRDyek4PGK4st7dpN55V6U0Go46sEBQM9OvTI+2AWYH98P5TW9FduV6p+bWmhvbKxZ6g3a20vvG4cZrenGGWphvlOQirSKXuMrGmzBWU34dbN908zOvSZZ4MqxTez2rwcs0VOGqJkbP2oHF82SuoLabqhA3jkea8eGs65cYtbDZ8oDh8lReTg2PhPKKNbcQbEa9oPZOv2BtG9wdz5UccBUXVT2XUEfc7Z7z3RgjKmdIjjio+EkUJyI8jK6mTIZBoHWpUR89Lo2ugQrUDruJIsy3tv5Sz+2ayjrYUP/Cq0mPlVCSvHvALY9JKQt0lHEJfnh6lRR3tSDqPOTUvSPBM2QYikH9hnSm/4XsZngx3OYWazDkwDDyMA6FHVhdSCOYsR7oiROR/ZGFuWGHpqx3siCi5+8lj74SYLKPm62JTur1Ktu4Vs490A6ktBJnOXxa2y4oN/FoU6hPijJ8Ify/GL9TDuONnq0W/CUce+QDccyljsUERnOtlLW03CUf21UGlTC1QPaRqFVT3AOG/lmH6Q7VpurEdIhsoC1adSgBY9brOAD5yk3KtvKC+Sjs+s71GcnWzsTodToN/aRFs1HfEno3y5Qz5bkZwGG4DS4zX1HOVdl4oIrOtnzBVshWp9YN9U81Eb0ddhiHqFSCigagg2e9xr3CU6p/4X+hXAnrR3W1sU6USyAu+gVAdWPjOa9Htm4kBnqALnYk3YEm+pNlvNxMVTdwCTm3AcNdZf0GgEx9FhhLHTe/j4O2bJKMuNij+z14kxpeymKbvsIf6o5favyXhDWAIYnQkICOBGEKANaMdIRMqu+Y9nCSlZWUqDapfdukdo8UskcHK+RosxjxjJKtg9JzAizod+nfEwkPRM24QFbBxNNbE6TOp1abhqdQkAXAsAdCOO/nulKrjXd2p0+pYsoL/AFmGnDcP7tMl6zrV6U3Aa1OqhOiFc1nXz15juE8rreqaejG9+7/4bsGH80kU9l7KGHrVMK/XBYV8PUHVzJ6pykG4YdQEdo7J0W1RXq4atTvmd8PUWkgsWL5TlF+Za0p1qTllZFLW3ZdSQRbS02MDhqqOrMhsAWVbrmd7Eqg10Nxx3WnnJTnkjkkvFvtsafaouKMo+hdEItLpCMX0SVKlmz01a1mstrlC19dN3hKWx/RLFuxRlCBHFqjMrL25QNT9Ujdu4Td2VgsQMQa9cjpHRjUVSWRFAACqeQsvfvm5icaaK5wASSBYkgd5nu4cqyxclxdGKeJJ0zLxeGakxRjcgCzWtnBG+3DjGQyHEY56jZ3Nzaw0sAOQEJGnYksoCTYangBqT4SKtiUQkOwUj1gfWGl9RvkZw6E5iupBBNyLjjexmYj01xHRkKA+HDC4WwqB3VrX0FxbykA1kxtIjMKiWtcEEtfW1uqDr2R8Nile5W+hsb6TPxCk07neBRcbtBl6NhpzdHbxgbFezMvNQ3kbfnCdqyHybQMIGBeODJJE/DxjWjvw7vzjQBRZyNx+MUjcwCDE4SlU+kpI/wC+iP8AESq2xsMdyMlt2SpVpgfdVgvumjGAkAzf2QQc1PE1lI3BujcDxKBv5pLRTGJotSi68nSpTY97KzfCaIgESFCKdpbkN2qZU+X4z/Aof59T/wAcUs2iltyNK8G8IQiVltqNY+Ze2QWEDE7G2kG8e8kh8ENR23HcYgJNX1CmR2l0ZnyMI8UUFRo0KMYAFTdJqZsAOzXvkLxF5WTO2KPLK+M2dTds/q1OLDj3jjIH2LRIswJN7sbkZj2jy8pezwTUnCWDHKWppWaVOSVJhYekqKEQBVHAfHvlTE4llqXKkrkAWwJs1zm8Tp5CT9JG6SUz4Flx6LpfAjJp2Bhs2rvozW09lRuHvJlbbr/Nj95ZZZ5zOKx1Zs6Mi1AjEFAbMtl0zBCGvmse1Z0xwjigox4RWUnKVhI8tUWkB2RXaxpogUga56hAPHc57JMvo/iOPQ+dczqQWVcDiB3kCcntfFKMWLsBT6NVYhlDAFizNbfYWB7dec6xdiV+dEdyFv6gZCfRlmfM5pX164p02ccdOqLechgjo1qT0mpq7MRnYOFYjKzXs17WIOtu0ylgnyVQNCCCoYcb7uOm7j/86h9mpky5iagW6gknqjkOE5AnKwPssDbluNoqkR3OiDSQNKwaSqZIZKx3d35mIRjw7o8EjGRCSNBEARaNuih2gAZoJMlywSsAiuY8e0UA27xZosp5RZDykAfNFnjdGeXwi6JuzzEANWuCPGK0AIQb3ElMsjjOO9gx4opY4jRoVoSJfU7vjIssot7FSq+tpCXmumGTkPwg/GSrh14AeSiVbNMVpVGHmjZWO5SfAmb/AEf93j9GP7JkEnPijU9hvIwhhqnsn3CbZQf3eMVWAYvyOpyHmJUxGxTcumQMxBe4IJ36hlXMCb662nSZRwMjqJpAMTDYOoN9YjdYBVBOmtyNN9+A04S62HrAXpvmPJzYHxAPwlnII6iSDFxGPxCfSKyD2tCn4hp5yxhccxAAOYdupHjxE1Q8qVsLTF3RAr6XI0vqN4GnjAK71OuGJuQdeGnLynOekNDLVbkwDe63xBm/XXWUfSaldUf7p8RcfA+cEMhwzBlVuaqfdLaiZuzanUA5Fh77/nNFGgkkAjxr/AQjAI6kikjQAIA6jWFeIR7QBEwTCgmANFFFAOn6IQhQWCGhrUmWPVQly6LuDQLUgIsokoYGCVmhNNWjm1RVq05Cht1T4S6yytUpSxElaBJA3kQGqKOPlrBbDkxvk0mznoGNe+gFpMhPOAKMlRbSDokkSoTLKNIkW8mCwWCiMEG0MNIBGwkTiWCJA4kgrMDCSqRv1jlYDCCESWQ7tD7oLUyO6RGOtUiQSERI6h0PcZISG36d0XyLNuN/GSRZm1NQCNd3jJdpYQshpnQsgAvuDixU91wJPS2dUQ6FSO24I9xlnFUmex6oNtdTv8oJOX9HtnK4qLUDpUR1FwbEXGoINwd3vmm+x6yeqQ4/A/kdD5zUwtFlJzEHSwAv8ZaDSAcs5KnK4KnTRgR5X3wg06Z8rDKyhhxBAI8jKFbY9NtaZKHkOsv4T+REAxGjAS1idnV01Ch15p634Tr5XlNawvlOjDeCLEd4MkEqCFGDxXgCMa0eNAGtFFFAOga4gNiQNIAqkiQuvGeC4msvI4OohioRM+lVtLSteFOcd06FJ8k3ygcYQKtulXJcw72neHXyi/crX8lJYU+Cc04BWSU6l+/4yS09SGSM1qi9jO4tOmVsscLJiIx0lioKC0nEhBHOGpiywRg2hRWgDgyN1hmRuYBGRIyIRitAImkdpIRBaSQypicaiaG5IXMQOX5n9Zco1tAym4IDA8wdQZ47jMVXrbUqOpY9Ga1NVF7LTVWpAablLuDc8W7J65gktTQf8tezhygk0ExIPrCTKFO6Z9oSORIBeKQSkjp4nnLAZTugERWNaSlYBgDAyOvRpuLOgYcLgG3cd48IZjQDLr7BTfScp9k9dffqPMzOr4GunrJmHtJd/dv906WOGMkHHrXB0vrxHEGSB502JwlKp9IgJ9rcw7mGsy8R6P8AGk5H2X6w/ENR74Bn5oof7KxX+HftDpY+cUA0FNpOACJljFsN4B90sUMcnHTvnlzxM0qSHq0ypvwh0q8s5lcaEGUcRhiuo3TO12ZZGlTYHUSRhMNMQ6bj4SVtoO2mg7pxlFkplvFV8osN8DD13ysS1yJAnWMjw5IqOl9GW47CJy1Tjel0XpPk2KFZrAk+cq4ipZiztf2V3AeEqbU2slEZBrUtYKNfOZuDwdSqekq313CWlmyOFSboqoRu6NZMY2bW1peR76gykcLppwh0AV0I0mdZZx4bLuKZaznnEKrDjGJgiX+8ZE7Tf7kaF4JXxwUXewFwL3tqZImKRuNj2zNqVVYlRqVN+BFxM1NrozkdHoDbN2jsnePqWaL3poo8MWdLmXmPOOReYb4qll1UW5CSU8Y+UGmPunfYcpqh6tG/eqXwUfTvszVIkZF4BrN2QkrAmx0M3Y+tw5HSe/zscZYpLdozBsdM7sERc7K1V1HzlbLoFY23dtzpfde41isNVjkTUUIisVpJaNaABHUmPaOBBFkqVjJc4MrhTHCGCSUiDEI14A8UQ7o+U8oA0fNEVPZBKji0kB9LHkeZPaikDY5l7SBrSxVpESuytOLgy6aBGm4kd2kmTF1B9a45HWVme2+CMVT4sB4zPOHwXUi6cXf1l8owqJ2iVDjKXtr5wDjKXtr5iZpY34LqRqJUA1DCZu0sURovrtoLcpEzqxAUg3PA30krPTQ5j1m4chOLhpe50uyTZOydekqanfrrOguqzk32nWc2Q25Ko1mrs9ao61dgF4LvczLlT5k/oWT8Go2LUbgTGXF3+rDwvR1L5QQQba8YddMgva44kcJycXV9ibV0RNW7LQa9aym2+xtKmJxO4rYjnFRrA6Gc5Jlirg30XLvBJJ7eMDHbPSoSUdqbniLFCe0Snt+rWoFalO3Q7qi26yn2r8pHg9sA62BlowlWpBtXRCwrYe5xTDohqKii6+7cZSremdxagoHAOdTbunSptHMMrAFTvUi4MH9jYN9eiUX326vwk6oR3nG/0/oinwmc3hvSDGb84YciJt4T0lpkfOKVfmNVg4r0QpsL0ajoeROdT4GYGN9HMWlyAHHNN/lLqWGfev4I9yO8wG2EO9rqdx5TZWoDqP1nkOz8JimcIFdLnVmBAUc56nhAFUC+gAF+dhvmiPV5MclHVaOcscWroukRBOyZVP0iwwqdCrhn13AlQeWbdeaZxvKe10+ZZY2vqZpx0skFP7MMUz2CU2xZkTYlppOdmjlHFoJZBxmW1U84JcwLNJsQg4QGxq8BM4mRkwRZoPjzImxrSleODAsnbENzgNUMC8FmggLOeceQ5o0AlxNPWVWTjFFILmrQw4dbkDdIquyaZ3qPIRRQCB9hUT9RfISB/RmgfqCKKARL6M0kOZCVJ0NuMD9gqD12bzuI8Ux9VBaXI642zRwuygmq2ta9rWLHhcxjSxBa5yBOWpIEeKeDkir+hpTKdbatOkSqDW92NiATIKnpOoFrX84opEY7Fmc9Q2morEaimxuBvynsE38ttRHinTJFKqCFUxq2KOLqwsQRcETj9q7NfCt0lI3oMbhSesnYIopXE2ppLuJcEuA2tm3b+2bGF2hrFFOmeCTIi2bWGxt5oJXBGkUU8nL7ZbHZbokRAeEw/SDFtf5NTNr6u26y8hFFOuNLSpdyvcp7JwKhhlA6p1PMzphFFPq+jgo4o133PPzNuTsRMYmKKbDiNGvFFAAYwLxRQBXj3iigDkyF2iigEWaKKKAf/9k=',
    desc:
      'Car Cleaning ',
  },
   {
    image:'https://mcmscache.epapr.in/post_images/website_350/post_17373155/full.jpg',
    desc: 'Disinfection Services',
   },
 
  ];





     const renderItem = ({ item ,index }) => {
     return(
    <View >
                  <View style={{marginVertical:6,marginHorizontal:16,flexDirection:'row'}}>
                     <View>
                     <Image source={item.image  ? { uri:item.image } : ImageIcons.profi} style={styles.images1} />
                     </View>
                     <View style={{paddingTop:15,paddingLeft:20}}>
                      <Text  style={{fontSize:14,color:'black'}}>{item.desc}</Text> 
                     </View>
                  </View>

           
      </View>
  );
}  



 

    return (
        <KeyboardAvoidingView>
            <StatusBar backgroundColor={Colors.BLACK} barStyle="light-content" translucent={true} />
                    <ScrollView  keyboardShouldPersistTaps="handled" persistentScrollbar={true}  >
                    
                    <View>
                      <FlatList
                                data={ucsafedata}
                           
                                renderItem={renderItem}
                                keyExtractor={item => item.id}
                                showsHorizontalScrollIndicator={false}  
                             />     
                    </View>
                     
                     


                    

                 </ScrollView>
               
            {props?.vendorRequestLoader && <Loader isVisible={props?.vendorRequestLoader} />}
        </KeyboardAvoidingView>
    )
}


export default Cleaning;