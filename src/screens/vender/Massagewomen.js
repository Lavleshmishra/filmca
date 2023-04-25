import React, { useRef, useState, useEffect } from 'react';
import { Text, Image, View, ImageBackground,FlatList,TouchableOpacity, Dimensions,ScrollView, Alert, StatusBar, KeyboardAvoidingView, Platform,Keyboard} from 'react-native';
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
 const deviceWidth = Dimensions.get('window').width; 
const deviceHeight = Dimensions.get('window').height; 

const Massagewomen = (props) => {

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
    
     const DATA = [
       { 
        text1:"Save 15% on every order",
        text2:"Get Plus now",
        text3:"Organization Actions",
       },
       { 
         text1:"Save 15% on every order",
        text2:"Get Plus now",
        text3:"Organization Actions",
       },
       { 
        text1:"Save 15% on every order",
        text2:"Get Plus now",
        text3:"Organization Actions",
       },
       ];

  const DATA1 = [
       { 
       
        text2:"Bestsellers",
        
       },
       { 
        
        text2:"Add-ons",
        
       },
      
       ];


      const images = [
   {
    image:'data:image/jpeg;base64,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',
    desc: 'Silent Waters in the mountains in midst of Himilayas',
   },
   {
    image:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgVFRYYGRgaGhgYHBgYGhwYGBgYGhgaGRgYGBocIS4lHB4rIRgYJjgmKzAxNjU1GiQ7QDszPy40NTEBDAwMEA8QHhISHzQrJCQ0NDQ0NDU0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAM4A9QMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQIDBgEAB//EAEAQAAIBAgQDBgMFBgQGAwAAAAECEQADBBIhMQVBUQYiYXGBkRMyoRRCUrHBYnKCktHwFSMzokNUstLh8RZjo//EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACgRAAICAgIBBAEEAwAAAAAAAAABAhEDIRIxUQQiQWETcaGx4TNCkf/aAAwDAQACEQMRAD8AQYfvuA21bfhmATTQVhrmHdCHAOmtPsBx4qAIafKsuSGtGsfhqcqAxXDkAOgoE8XeCxVgBuYMDzpkmBxVxAyW9G1GYgadYo7KMrjrGVu7ofCmuAR2XWnGG7JX3bM5VR71pMNwBEEZqXFsVmTwxZDFX43FHKRtWqHB7SsHOvhRT2LUQUWDvIqlBhZ8dcyx+tGWbxAgGvo2I4BhH3tgTzGhrHcZ7J3Lb57ILodo1ZfPrUSjJIEwF8KXWGJpZd4C4Pd1FPMKcndfukddKdYVA21REdWYpeE3I6VGzgHzgGvoNzB6UnxWBIMjea0baCgnhPCgBqJplc4Op+7VfDMVGhp4mIBFNSAxuO4COQpd/hpG4reYkKRS17ANEtoVGNxOHyiKRuhDgV9Bx/DgRpWevYQK3eFZONA0W4BSF3qGKukHerbBy0NjULaipk7QizCuW3piBpSbBXYMGm8kitI0oggHFPEil6wTXuKXCppZbxwmsZbY7H1pK8LOY60Ph8VIpjw2GM040xjDB4aBR1u3rV9hBlqt2itm+MdBFWwlbINeodcaK9XN+VmvBBWF7JWkAzsXjlsKZ2OG4ZPltpO8wCaFuY0nQ1S10mvQUEukc43e4hUhlUqdIga1BccBoNhypfYtk7gt4VZbwLn7sedVQBTY+aHfGa6VenDjzMVJ+HwZBEc6NADXCWEz41EZus0xGHSNWqLYtE0EUWAKlljvNF4cldCZFB3eNqpA315VeeJIQCREnSedFMCeKwFq4O+gPjGtLzwMJqh06U1W4p5j0qwL0NQ4pjsRG2RodKrNledPL+HDjWsZxzFPYbYx1qJe0aZ7HnJqKUWu0ZQwdqFx/G8w51mLgLMfGsXJWDZu7naAEaH60Twni2domsEmFIFNuDko00+djR9IJBFZXtCoAJG9HYfiUCDS7HvnmqkrQmZzDY8s4UnnWiCiKyt7AsHkU/wjvlE1kosmwbHDKyx1p9gklaSYu0WMnlRmBxoAgmqSaGgftBhRlJrIqmtari+LBUisqlzWssn0DGVl4WmGAx2Q60nz6VfgbWc+FOC0Fn0HAY5WWrsQJE1nOFpkMTpWiW6CK2X2NMU3G1r1TxagNXqdRHbNwuEtrvr51PJbH3RSI4ma6uJYaiuriyBuMUifKKjc4lApG7knU1Tdfxo4gMr3FG2mh73EmK5emvn4Usu3AINUviRO9OkAY+OfXU0BiMTJ1ND3MV40Fcv+NDaChgbw3rmI4iW5zGg8KSnERzmofEBO9S5pDo0PDeLOGMmRFavh+OZxrpWFwAjWK1fByGPeaB+dQpWNo0C4iBSztDhBetMFGsUxN62uggxvXkxttjlEdI502rRJ8TxKlWKkagwaoUxX1/F8Awl12zIA55gxWW4r2DZQWtPmA1g7+9crwyT0NMyQxA50ywF1aUPwszpvXBmQRUuGx2aHGOToKPwdjTes1gcYSe8a0uGuQs1vHUaGWPhxExUMoiBVL4ozrtXbbztSRLA8UxANJLl0g71o8RZkVmsaneIFZSYUQvXJFLR81FXAQKCd9alOwYzRaJwGICNBoWw8ipixmYVCnxdAxy+Ly6zRGH44rDeD0pda4fO9UXsEJOldEdoKoZXuLrOrV6sy9vU16gLPqi4S+2yEeelW2OE4mTIWPPatTexCqJke8UnvdoEggAz5/rXXybJoHbgN4j50HXc6UJd7O4gnu3EI6aiuJ2gdQRpudTrXcJ2gKAhhJM8/pRbHQi4jgsUgYvaJVQSWUgiOvWs2eJsK+mYLjisD8Q+I5j1rP8fs2cQMyoqnUFgoG+s+dKpNh0ZB+JjrQ78Qnao4/g5QypzL1PKqbVqs5ck6ZSouW47noKcYKxFC4OwJp1bQAU4wsGySGKsXiWUERv7+lL8VfyneoYdGaCa0qtIQw+3ONcxqQxRnNmM9aDvjlQK4rK2VjrQ412NGit4p5zZqYYPjTJOaTWcS7Os1fbuzSpho2aWMPiE+QSd2Agg1j+0HBDZbXVTsf0o3CY10MqfStAuKTEobbABiNPOs5RTDo+WCyQ2nWtLgrJyiaK4hwF7LAsAQdiKssLArOWgQHibMVXZaDRWJaaAumkMJvvpSG8gJJo12NDlKiSsAHEWtKTX0g08xIpPfqEnZLLMI1OsEOdI8LTJcRAqZRpjQ8N8KJpRi8edYoS/j9ImgbmJgV0Q6CTLHxB6V6hVv16rIPqOKxbO3daQdY6Hp41W1gqRn2MH086HuX1TQHUCfXwpZieKO5JbUmurS7GaDEuiZflOmsGfGfrVl/FWyFGVNdSRqV5elZFc/lO9XB2UZQd96nl9BRrzhLGUAMczagnl4HwpdxLBi2kFhM6Qd/wD1SW3jCojUtymdPGqruKZoJMnQCjkFF0A91hM9dqWXbAQ6bHamTE5Zqq7DqNIpySYHMAKNxVwBTrQ3DwIrmKTMaaVIAfBWy7Zm25UyuNkGletIFWl5LO2+nOjpB2XtcLGB71E8NQnMZmrFIWrShMTpRV9gD3MKQJU+lQw2KMlToaInqdKHxlgRnX5vzpNVtDTD0fxo/BYgI4Y8ulI8DeDCjg9S1asPo1pvJiEKyZGq+dZq7cKkqeWlFcKxQRxOg61HtDZVXzKdGE+tZzj8gQwyBtaKfDAjUUmw2KymmP8AiII2rCTZcQW7hRO1VHDCr7l8Go/EFCbE6FONw9IrtvXWtPi9qzePmdKTixHLaVK4KFTEEb1amIBqZIQPctHehXWmNxxQjEVUWSweu1JmFerSwNVimzNofMjlU7aKvnXFTSee9Qw4LuST3do8RXTXyUXLdJOgkflXMMHBOYAydI5CiUYDTapPeEwN6deRWQe1NKsZKlZ0135U1uHWQfDwoPieGL2yB4GhxCwuw3dHSKhbuasI0FV8IfudasxBytpT+AOYfcxVz7wKGtOM5j1q52ggCmmBLFtA3qFpYFQxA161DGvlSaTAvQyZ3ivYq4dANBzrmBPcEVTxC7lUk+lP4ANTYCu76EULw5iVnnV7TNC6EL0fJcygQDTQmBrS/E2xnWN6YuumppJdjZKy9NuIuj2FP3l0rPWHk07w5U2XDHWNPOs5biAkirVND/ErxvVjRVhOavB6DN6o/Gp0TYZdMil97CzVoumui9FFBYqxGC0pS9hlNaa/eBoFkGtTKICRyYqg3oGtNcSgpLcFSkBFr9eqoivVpQWfQr1smAvr4eVEWUCrpQj3mQ5cpIOxH61e1tjziupIQHfxUEk/Sp4Z5MmleOwbo+YSwPPoelMuHYUnekk2xh4XTTeuKIWSZNX3BAgVSYVes06oVleCSBIqvEtL0Thvl89aBjvk0MDpbK+nMVcTrNLL1/8AzNDtTIHNB6UkxnMY+VZ513D3A42qYYNMirLGHjwppWInZsBRpQHELDOQANAZNM2t+NeZgtU15FZDC2sq9Kq3avNicxMaAc6hmk71La+BnnQZwanfcmotA1bYcq5cxQbuqJofQHcMg1JYfnRwUFSuaJ8KDs2THSjrWHWNRm8xWTaqkMgnCbRSTdbPPy5dMsHWes1QOFr+P6U5w3D2hmW1oBBIU6A1RdtZNIPpNZbDQtPDP2h7GuDBKPvL7x+dMRcA3zfWpG4h0afYGl7h6AlwgjTXyg/lSzH4Z11Cn2NMcRwm22qXGQ/u6fSgsRhcTbEpdDjwkH2NNCM7fvsDzqgYtp8KdHiT/Lftqw6ssH3FeucKt3UL2TlP4GOk9AapoBDexJNCOKM+DUGs1A6AHr1GfZq9TCjcB433qC3p3rzoG20qAta6H+ldVskITveVdtKF51SyEiP7FdVNIqkxUWNDHfSvN3hlG1RzRoKsQBZJO59KYztxwi60sc5pYaVPEXTcbIiljOkan0pja4BiWiLeXxcgD21rKckgSM2nDbmfMgZp30J+tO8NhLoGqN7a0Xe7MXssu/kAS351yxYxFgj4d0wJzK+iafstMz4a6VyP1PF7VF8bBGQieR6H9a9bvNGtM73EUxCtmQI6biehglCdSOo5fWlL4gA94jz6iunHljPomUWjzYgncGvJnY66CoDGJzIqq5xPWFE+Va/qxEA5Gg1E8tx/WjMMJMM6oD1BDfWlD3CpDbNqcrCVOv0oyxxUx3kHoBH0qOVBQ7bAWAJZ3fy2qtMXhkMLaZiPxMR+VLTxC0d0UHqDkP0IqKYiTox8i4f85qXNfQcWbDAcWUju4W0B1bU/lTW3x912tWx5Aisjg8Rpq+v7p/pTKzcnYlv4aweTZXE0idp2gyizygmPWqLnaJz9xPYn8zQVhBBJtkkbTIn2YVC6GOgtBY8W193NJZA4hL8UJ3RD6ULex452UPlpVRtv+H+/rQ96xc5fkNP9tUsguJG9irZ3w7D901FLuHbQG4p6MhP1AqH2VvvO386r+QFVuUXdk0/E5cj3JH0q+SJoniLCbF0YdN2j90a0te7bsBvhrq8A5vDXury86vuY5V+Xv8wFGnqYig7wa66yACSO6uvuenlRfgdeTMF5JJ5kmpCK2D8NUfdB9jUDw9fwCPIVPEuzKCK9Wnbh1s/c+hr1HELK2RuX0rksNAPWjDHvVbOBofWuviZ2UpmPKDUxaMd4gE125eiAv1oLF49Z13FGkMOe4q6Deg0xLXLgtpEmRLGFHPWlty4znQwOXlWk7E4VTcZ3TOqj5jBCt4g76flUTnrQJGy4HwpMKgEKznVnAOvgJJgUxGLJmVAHUnX2/wDNLsTisoJgRy8KAuYtzBDAg7CuKWSi1Gx+zowkaUh4tglcHKmc/tTH1qa44sZOkbr1q2/fd1kZVHXelamqHVGKx2EcybjJbyfKBJO22w3pLjHR3IAKjQhTJ1jvQem9aTiaIrZnPxGUkxtvy0MxSLirOxCKmQEh8kROkAidfCuWMpQnS/k0q0ds4BelMrGFVeVFYfhd/IpNptvAnwkb7VHEq6AlkcR1VgPyr2oSg1aZztMD4nbVkiNdwfGkOFQlcwYqJiT3h+hH1oniHGQBDDXkOdLMDea4GyaHNqPBtjWOaSXuKivgcJbOzZH/AIgD7NFdGDEyLTecEj3GlC2UYggrmgxIIkEeMirU7hkSK4JepxvVmqg0NsKGURkA9P6CmWGvMDIUD2/WlGH4jOzkeuhpzg+IuB8xPmf/ABXJOcH26LSY+4dmYR8cICdRmif9wFA48FWMOWHms/8AUaYcNxt9kISS06iEjLG8sN/Cl+KxbqSHAB/dSs04X/kDfgWXbzf2Qf1oO7dY/cB/gB/KmVziZH31HoB+Qod+L9XJ8ia6Izgv9iWn4FTYZye6jN/CR+lcGEujU2wo6uyr+Zn6VLE8YUkksT4E6ew1pZc4ipPcWT1P6Dl7V1Rzx8/sRwfgYXlczmddOSCf9xgfQ01wFpUWY7x1k6t5TQPZnh74h8zzkQyRyJ5Ct19ht/hFbpt7IarRnmfQHrU36Dan32JBplFeawkRAqhGdtJp/f6V6nRwCHwrlAjEPigWjNAoZ+IQZIncday9zizMflMTO9V/4g/JR+dbuYUaF77PPLXTWoMwU97UmT/Ws++Jut96B0A2rqYV7raksT19qixjPG8XRTC94x93aeU097A452a6WuKmi6EbjWMs7Qdz4ileG7G3z9wDzI18taZ8N7OX7LhjaV1G8Zc23Impk7Q0al8Ys91s8b6yOm1V/aDMzHhQ11+Q0/Sqw3XU15+V0zaKCmxAncmf75Vy3itCpYx0oVzzqo9YHrUwlsGijF4qCcix+0aU4m4zal8xHPpJ2o7FROp09h5TQiYPO0KInkNhrznaonJXbGkds426u1xx5Ow/Wj7XH8Sm15/U5v8AqmmNrsPiCsqVnpmE0FjOz2JtfNaaOoEj3FZrMu7r/o6OPx7Ppfs2bo/aQK38y/0qvCrgC4dQ+Hbn9+2fDTUD0pbdtkbgjzoVhXTDM67tEOKHy9nbgLPZdLyGdbbAsOkrvNBNYI7rhlboQVPsaX2browZGKnqpIPuKe2u012At0JeXpcUE+jDWfescmOMna0ylJoSWcLlfKfMH8qPCOumUMOq91v6U2+14O7GdblhhzQh0Hoe9R9vhyv/AKN61c8M2R/5Wrny48naSZcWhDh8Q67PcTzkj6VVcxDH/iKf3pH61pG4fcT50YeMSPcaUHcsA7qPUCuNz4y90TRbWmI87c2t+5rqRqxZTAju+dNvgKPur/KKhddWGULmjwIHvVflT6QUZjEGWJ2k0TwnBfGuKgYLrqzGAB/XwpqvBUc97MCeQYGPpSxLgWVEQCfXxr0vRyhklXgwyycUfVsBg0toETYc+p5k0Rlr53wvE31g22MdJkexrW8O4uXYW7gyudjybw8DXquNdHPY1YVEipkVEikBGK9XYrtAHw37ENufM/lFTGFGvQT6kb1pk7P3DmKlSq6sZGYQIgLuTpP9xVicAATOzhkJCKyd4L0LjfcjQe+ta8ok7Mr8MLqY8jsK03CAAv8Alplc5W75UqynUQ6x3dD0M6Gix2ZthkS6zHPqHSMsxtDcpIBPl1pPxHgl3D3ZtgnaU3zLJhhMhgY5T47Gpk09IFo0eD4lctkh7SlAYL27gKprpmRjK7wa0mExKuJUSNpBVhOx1UmsfwjjCPmV27pzEqypIGhykDf97nroKL4TxK2CxtMRAg2zkQPlA2JXkIGhjSs2i7G3FcA3zoonYjQeVIy8EhtW8Dz/AFpbxjtQ1+Ame2okFA0FvFoj21FKrXESnLYRrWWXE2ioyNRnG5oG5cLtA0HM/wDqkdzizmuHGuwguR0iNPQg1y/jkujTkmO7tsE5RLNPdA1ZvICtH2a7OsrC9iNGGqJ+E8mfxHIct96wOE4jiLDF7V5td9tfNTIrT8P7b3Yi5aVz1UlPfQj8q1xYUtt2yZSfwfQYoPjAvmy32d2VxDDKYzQdV6ais4vbNv8Al/8A9R/2VYvbQ/8ALn0uD/t1rf2/RFMXWuOZyUxltXGxcIEuKfHLE+01Xd7PW7vewt1W55GMMPTf3Aphi+P4a9/q4a5m/GmTN6mRPrS58PhX+S+U6LdRh/vQEfSsn6fE9rT+iuTXYpxPB79v50YDrGnuNKCArY4ZMUo/yrocdFuJdEdMrEkewofEqTPx8Mo6sqtbafWV+lYTw5F1T/ktST7M6izUskUzXhqN/pv/AAv3D6N8p96pxGEe2YdCPMb+I6+lcrbi6aotLwSwnF79v5LjgdJkex0pkvaYn/VtW38cuRv5l/pSNjVbCrU3XehNI0S8Vwj/ADLdtn9kq6j3g1cluw3yYlPJwUP1EVkSK8abhjl3FBb8msxnCLzrltFCp3KOCzDpPIeVKV7N30/4TfnScGKLw2NvKQEuOPJ2/rW+J48apKjOScux/huGugzOIA1ygEn1gH6A0K2KN28qIe8WHeIgiDOg+6BE+lE/bsXbUPeUuh+8wE+9Lb13OS6EK8GGgHQ76EEV0Y/VRl0TLG0b67xBFOXPLdF1PmenrVF3iiLvHuK+RNxhyxX4b55ynKzLqp1iDA9NKHuY+9qcgjq0sfrW6RJ9Sv8AaVMxCANGhOaBPhAM16vmSYjFgaQs8gAPKRXqqhH00Oxcsv8Al4iJYMcqXJECNN9vc7mI8CAxKLkYx8Sy+iOIE5C2mzaj0Gp1XG93QpAZNFCXpIUjL3UvJsefLUe17XSqgNLKfuXlzopWNFuJ4ieQ23pUKjsjJ8JR3Y1sXGyOhEsxRuoB0G+oioO/3GIfKykJdX4dwAQIS5oD7jTQzNe+OrwFY6aEZRiLakQSVywwkjcQNNqibRIFtGD6DuIwuKM0SBbuQ8bTliIFFBQm43wZG76F0uT8r9x2GwYN8j6htdJC0mfHPaHwHGRRuVBRmOkZo0OkajetplyuVBKhi8LOXMU2It3QyPqPusIjXes7jeHXLkuyFgZJZU0y76/DzLzPL2qovyFUKmtg6gjPyDGJ86jYzMQGVZJABUggyYAEGZ9KhlNtsjd5J1WFZl8gYIjyFaLhuKDqiYa1bBAzOXAZ1YGJG0MT+lEhoWXOD3R/wn/kb+lWYTs7fcwLbDxcZB9f0pxe4pjS2S3ausRzYrHqEVQPImaiMLxN9Xui0v7w/JdzWdFh2G7FIFm7dYHnlyqo9WBnzplhuzeDA+8/jnY/9ECs+nDbKa3bl2+w5vcFu2DpMZnBblsSNKhi+1a21CIllP4pI8dDDHzNLjYrNgvA8INDaE9C7sfMwxihMTheHq2QhS/4ENx3/kQlvpWCTtUU2dSxMyAzr5wTGbxqFztfeIjOzDplRV/PWj8Ycjb3uB2H0S3eSdmLgD1Viz/QVn+KcFu2DmkOn4hJIH7SnUee3lSC5xzEt8oIHWSR7LpVIwWJvAtHnkWCR6xPkKPxIOQecWVOkE9ZiPbU+lM8P2tu2wFF546EKY6xnn61nRwC/Ev8QDlKsJ9gah/gIE5nHq2v1ApqMV8hY74h2lsuJcOX5HMiLPLMEQSPPN4Uqtdq3QZbRyLPygZlPiyMMpPpV2G4PhlJz52HLKQCTp0DAc6YYfhOFcznZOvxBJICye9KDwjU6aTScYSVPaHbBbXamy+l7Dsv/wBljT1NtjB9GFNcPhEv64e8lw/g+S7/ACNBb+GartcJwzsAjpoCZdXVYGwLZcomN8/PrpR+B4DYfQXUzROhQmBvABdtCd4E+lc0/SQ7i6/dFrI/lCnEYV0JDAgjkRB9qGz6xW7s4ciVd/iW15OgiDyW5dcNtrC0Piuzlm4CbT5SCJBDsgnUH4hUQPSsJY5x7Vr6HaZj8k1bhi2oUQxkB+a9MoOk+Jo2/wAIu2+9kzJ+JTmU+TDSo2boHKD0NZc1+o6rsNx/G8S9rJegx3cwXKDppmgZc0a6ewpJZYqVbqYpjjL7XAAx7o2GgE9dOdV4PDfEdUE5QQWIBaBPIDcnkKqPFyrGqsN1seYHhlool101AJY6gfMSHI22I1MCPxGj3waGLjoC8gK7jMTM8tDm31I05A71avcIQhRl0Vnhm0Md22m0DqR4zU1twQe6rEx/mCWYCM2S2CCJEQum21eolo52jl2yDHdQnXV1LacoWRl5nUkmQTFeqrFW1hc2Q7632yty+VRoF20nedBXqdCoVi5GZVgudP8AKIQlRuGtXTGvMCo3WIAIVEaJcZXwzGZUKPmTp0mp5QLgR2cCFgArcUejrPrNEYGxnZsmitmmGa2QB4AspOnQUxgV60GG2adMz2w5Zo2N2w0qBpEjcVfdRSgCliRMhmV+YgAXArhRrznWl4vKxIUZWmZKgkx1ZSs+1GnOwUZiQCT3mzfR1agCaWjbIKA5X+YL8RUO4MAB0Xfpz3rudSSncJIAzH4UkAgqsIUMaHbXX0ocFFdcoAEajIBvHNGXWi8zqFG6yYGd5ncTmzR6UgKnwwebbIxBka/EbvAQMjMHyjwO9ZfG8BdH/wAuekEhTMSQZyhvStO4MHRcw1khWPh3sgPLnNdtY896ZzgZhBYL6wwn2pptAYg8JxJaAWB3gEHxmATFE4fs9irjBWd1kgd/PB6fKh0+lav/ABNLqs8NI23gGdwC5HKjVvAgF1Dkx3iNf5duvvQ2Mxrdi3DQ9xSRvmzkbwBOTemCdjbSxmdpI2CtAMxBgH8qf37sZcwVlJgHKARz226e1Sv31BEqDvHdXSAORHnS5MBceyuHAEZ82wHxNCds0fCMjwijl4Xh1QkIoMEDN+eZrO+3Ll0q53kBSiQDIIABkz4V21iVgwndCy3eIJjXYb+4otgewWEtyYyafLkChmI1JOUIRtzkeNX2LUGWRyoUaBbjENzLd9wR3Ty5HXWhLuLA1C6NOhZyQB45qNS4zaAJBA+YSYJ115b1IznwG7uayWGu9sscx1zR8MGNTqTGh32rn2ZACMkrmOmUJnXvT8zqoju6x70QlpmLJlT8OsHXLMzknlHrQrSrZdBCgEgAkiNBsNBNOgsCbh1gKB8IPpmLZ5B7xDQSXIUaAkVBuzNnKMhYzJV5IAA1YyqqDGmh3mi3x8GCS0ZSMwJgE7AF4+lFYaw7CQ0AZW0CqRmYHu90kbdaXELM2/ZpCDlcZgSIOSZkgDLmdtdPeof/ABm+ik7coLOBJ2XvBFj++dauzbkwWMEZmBkye6AJzAHzI9K99jJKsAuUguBCgiMgXZOQPWlxCzDfYbtoSjFJ0ZUdQ0Aa5ggJIMnSapK3FOcPcX9rLEcvndtPSK3L21tsSRsP2mliAJgsADpv9KsTBZWuaJBATRVUyQpMkLqNKXF+QswGGxV+22e1eeYIkln0PIj5Kc2uOKMv2ixauk7lTkf+VMwP0rQXLYIuZgGDRCnMRAgHV2aCfAVT/h1m3Fv4SalCdJB2OWBAy+lYz9NHI7f9lqbj0IMdxvDv3EsfCUayW1b1Mke1R4dxt7ataRAyse4FBtkz+M6s48ojrT+7ZthoNtAmhhVAPMwIAEajedqrTAW7ZzBQJBPdAB1G0iI+tVi9PHG7RMptjHDOwQZgqOcgIAKmWXvDN3nfXnA/pxbkQCpLZQSRJ1BKjO3zn5gQQFjqedbQkcwTmymI0nQxAO3MHeohjIVTEpoDqonvERtG/LeugkusXSgMBjJOtrKoMADvd6SfE16iHwz7Z8q7qFLaAgafMP7NeosR/9k=',
    desc:
      'Red fort in India New Delhi is a magnificient masterpeiece of humans',
  },
 
  ];

  const hairdata=[
     {
        text1:"Stress Relief Swedish", 
     },
      {
        text1:"Stress Relief Swedish", 
     },
      {
        text1:"Pain Relief Therapy + Face", 
     },
     ];

     const haircutdata=[
     {
        text1:"Haircut + Massage", 
     },
      {
        text1:"Haircut + Beard Care", 
     },
      {
        text1:"Anti-Tan Ess", 
     },
     ]

     const Therapydata=[
     {
        text1:"Holistic De-stress Theraoy", 
     },
      {
        text1:"Top to Toe Therapy", 
     },
      {
        text1:"20 Min Face Massage", 
     },
     ]




     const renderItem = ({ item ,index }) => {
     return(
    <View >
            <View style={{borderRadius:5,borderColor:"#bbbdbb",marginHorizontal:10,marginVertical:20,backgroundColor:"#e8eded",elevation:2}}>
             <View style={{flexDirection:'row',marginHorizontal:8}}>
                <View> 
                <Image source={ImageIcons.secure} style={styles.imageslogo} />
                </View>
                <View style={{marginHorizontal:5,marginVertical:2}}>
                 <Text>{item.text1}</Text>
                </View>
            </View>
            <View style={{marginLeft:30,marginBottom:3}}>
            <Text style={{color:"#8a8a8a"}}>{item.text2}</Text>
            </View>
            </View>
      </View>
  );
}



 const renderItem1 = ({ item ,index }) => {
     return(
    <View >
            <View style={{flexDirection:'row',justifyContent:'space-around',marginHorizontal:18,marginVertical:20}}>
                                    <View  style={{alignItems:'center',}}> 
                                    <Image source={ImageIcons.man} style={styles.images1} />
                                    <Text>{item.text2}</Text>
                                    </View>
                                    <View style={{alignItems:'center',width:150}}> 
                                    <Image source={ImageIcons.man} style={styles.images1} />
                                    <Text>{item.text2}</Text>
                                    </View>
                                     <View  style={{alignItems:'center',}}> 
                                    <Image source={ImageIcons.man} style={styles.images1} />
                                    <Text >{item.text2}</Text>
                                    </View>
           </View>
      </View>
  );
}

 const renderItem2 = ({ item ,index }) => {
     return(
    <View >
             <View style={{marginHorizontal:'3%'}}>
            
             <View><Text style={{fontSize:14,color:'#48b5ac'}}>Packages</Text></View>

              <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                            
                                            <View style={{marginVertical:2}}>
                                             <Text style={{fontSize:16,fontWeight:'bold'}}>{item.text1}</Text>
                                            </View>
                                            <View style={{marginTop:"1%",marginHorizontal:"2%"}}>
                                                <RnIncrementDecrementBtn
                                                    minVal={0} 
                                                    minreq={1} 
                                                    max={10}

                                                    //val={Incval}
                                                    styleBtn={{width:30.6,height:26,backgroundColor:'#ffffff',borderColor:"#330066"}}
                                                    styleTextInput={{width:38.25,height:26,backgroundColor:'#ffffff',borderColor:"#330066"}}
                                                    labelStyle={{fontSize:15,marginTop:'1%',color:'#330066',fontFamily:'SourceSansPro-Regular'}}
                                                   //handleClick={()=> setIncval(Incval)}
                                                    />
                                             </View>
             </View>
                               <View style={{flexDirection:'row'}}>
                                    <View> 
                                    <Image source={ImageIcons.star} style={styles.imageslogo} />
                                    </View>
                                    <View style={{marginHorizontal:5,marginVertical:2}}>
                                     <Text>4.75 (974k)</Text>
                                    </View>
                                 </View>

                                 <View>
                                <Text>Rs299  -  40 min</Text>
                                </View>
                                <View>
                                <Text>Rs100 off above Rs1597</Text>
                                </View>
                                <View style={{ padding: '3%'}}>
                                <DashedLine dashLength={4} dashColor='#dedede' dashThickness={1}/>
                                </View>
                                <View style={{marginHorizontal:5,marginVertical:2}}>
                                     <Text>Face Massage</Text>
                                     <Text>10 min </Text>
                                </View>
                               
                                 <View style={{borderBottomWidth:1,marginTop:'5%',borderColor:'#dedede',marginBottom:'2%'}} />


             </View>
      </View>
  );
}

const renderItem3 = ({ item ,index }) => {
     return(
    <View >
             <View style={{marginHorizontal:'3%',marginTop:"5%"}}>
             
             <View><Text style={{fontSize:14,color:'#48b5ac'}}>Packages</Text></View>

              <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                            
                                            <View style={{marginVertical:2}}>
                                             <Text style={{fontSize:16,fontWeight:'bold'}}>{item.text1}</Text>
                                            </View>
                                            <View style={{marginTop:"1%",marginHorizontal:"2%"}}>
                                            <View style={{marginBottom:45,marginLeft:18}}><Image source={ImageIcons.man} style={styles.images2} /></View>
                                                <RnIncrementDecrementBtn
                                                    minVal={0} 
                                                    minreq={1} 
                                                    max={10}

                                                    //val={Incval}
                                                    styleBtn={{width:30.6,height:26,backgroundColor:'#ffffff',borderColor:"#330066"}}
                                                    styleTextInput={{width:38.25,height:26,backgroundColor:'#ffffff',borderColor:"#330066"}}
                                                    labelStyle={{fontSize:15,marginTop:'1%',color:'#330066',fontFamily:'SourceSansPro-Regular'}}
                                                   //handleClick={()=> setIncval(Incval)}
                                                    />
                                             </View>
             </View>
                               <View style={{flexDirection:'row'}}>
                                    <View> 
                                    <Image source={ImageIcons.star} style={styles.imageslogo} />
                                    </View>
                                    <View style={{marginHorizontal:5,marginVertical:2}}>
                                     <Text>4.75 (974k)</Text>
                                    </View>
                                 </View>

                                 <View>
                                <Text>Rs299  -  40 min</Text>
                                </View>
                                <View style={{ padding: '3%'}}>
                                <DashedLine dashLength={4} dashColor='#dedede' dashThickness={1}/>
                                </View>
                                <View style={{marginHorizontal:5,marginVertical:2}}>
                                     <Text>Men's Haircut</Text>
                                     <Text>10 min Head Message</Text>
                                </View>
                                
                                <Text style={{fontSize:14,fontWeight:'bold',color:'#330066',marginVertical:'3%'}}>View details</Text>
                                 <View style={{borderBottomWidth:1,marginTop:'5%',borderColor:'#dedede',marginBottom:'2%'}} />


             </View>
      </View>
  );
}
 
const renderItem4 = ({ item ,index }) => {
     return(
    <View >
             <View style={{marginHorizontal:'3%',marginTop:"5%"}}>
             <Image source={ImageIcons.womenmassa} style={{height:200, width:deviceWidth/1.07,borderRadius:10}} />
             <View><Text style={{fontSize:14,color:'#48b5ac'}}>Packages</Text></View>

              <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                            
                                            <View style={{marginVertical:2}}>
                                             <Text style={{fontSize:16,fontWeight:'bold'}}>{item.text1}</Text>
                                            </View>
                                            <View style={{marginTop:"1%",marginHorizontal:"2%"}}>
                                                <RnIncrementDecrementBtn
                                                    minVal={0} 
                                                    minreq={1} 
                                                    max={10}

                                                    //val={Incval}
                                                    styleBtn={{width:30.6,height:26,backgroundColor:'#ffffff',borderColor:"#330066"}}
                                                    styleTextInput={{width:38.25,height:26,backgroundColor:'#ffffff',borderColor:"#330066"}}
                                                    labelStyle={{fontSize:15,marginTop:'1%',color:'#330066',fontFamily:'SourceSansPro-Regular'}}
                                                   //handleClick={()=> setIncval(Incval)}
                                                    />
                                             </View>
             </View>
                               <View style={{flexDirection:'row'}}>
                                    <View> 
                                    <Image source={ImageIcons.star} style={styles.imageslogo} />
                                    </View>
                                    <View style={{marginHorizontal:5,marginVertical:2}}>
                                     <Text>4.75 (974k)</Text>
                                    </View>
                                 </View>

                                 <View>
                                <Text>Rs299  -  40 min</Text>
                                </View>
                                <View style={{ padding: '3%'}}>
                                <DashedLine dashLength={4} dashColor='#dedede' dashThickness={1}/>
                                </View>
                                <View style={{marginHorizontal:5,marginVertical:2}}>
                                     <Text>Medium Pressure Full Body Massage</Text>
                                     <Text>Relieves Stress, muscle pain & tension</Text>
                                </View>
                               
                                 <Text style={{fontSize:14,fontWeight:'bold',color:'#330066',marginVertical:"3%"}}>View details</Text>
                                 <View style={{borderBottomWidth:1,marginTop:'5%',borderColor:'#dedede',marginBottom:'2%'}} />


             </View>
      </View>
  );
} 

    return (
        <KeyboardAvoidingView>
            <StatusBar backgroundColor={Colors.BLACK} barStyle="light-content" translucent={true} />
                    <ScrollView  keyboardShouldPersistTaps="handled" persistentScrollbar={true}  style={styles.root}>
                     <View style={{backgroundColor:'white'}}>
                     <View>
                     <FlatListSlider
                            data={images}
                            height={230}
                            timer={5000}
                            onPress={item => alert(JSON.stringify(item))}
                            indicatorContainerStyle={{position:'absolute', bottom: 20}}
                            indicatorActiveColor={'#8e44ad'}
                            indicatorInActiveColor={'#ffffff'}
                            indicatorActiveWidth={30}
                            animation
                          />
                     </View>
                         <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:"3%",marginVertical:20}}>
                                <View style={{width:"65%"}}>
                                <Text style={{fontSize:25,fontWeight:'bold'}}>Massage Therapy for Women</Text>
                                </View>
                                <TouchableOpacity onPress={() => props.navigation.navigate("Massagemen")} style={{flexDirection:'row',borderWidth:1,borderRadius:5,borderColor:"#bbbdbb",alignSelf:'center',marginHorizontal:2}}>
                                    <View> 
                                    <Image source={ImageIcons.secure} style={styles.imageslogo} />
                                    </View>
                                    <View style={{marginHorizontal:3,marginVertical:2}}>
                                     <Text>UC Safe</Text>
                                    </View>
                                </TouchableOpacity>
                         </View>
                         <View style={{flexDirection:'row',marginHorizontal:"5%"}}>
                                    <View> 
                                    <Image source={ImageIcons.star} style={styles.imageslogo} />
                                    </View>
                                    <View style={{marginHorizontal:5,marginVertical:2}}>
                                     <Text>4.75 (974k)</Text>
                                    </View>
                         </View>
                          <View style={{flexDirection:'row',marginHorizontal:"5%"}}>
                                    <View> 
                                    <Image source={ImageIcons.rightadd} style={styles.imageslogo} />
                                    </View>
                                    <View style={{marginHorizontal:5,marginVertical:2}}>
                                     <Text>15,804 booking in Chandigarh Tricity this year</Text>
                                    </View>
                         </View>
                          <View style={{marginBottom:10}}> 
                            <FlatList
                                data={DATA}
                                horizontal={true}
                                renderItem={renderItem}
                                keyExtractor={item => item.id}
                                showsHorizontalScrollIndicator={false}  
                             />           
                        </View>
                     </View> 
                      
                           
                          <View style={{backgroundColor:'white',marginVertical:"2%"}}> 
                            <FlatList
                                data={DATA1}
                              
                                renderItem={renderItem1}
                                keyExtractor={item => item.id}
                                showsHorizontalScrollIndicator={false}  
                             />           
                        </View> 

                           <View style={{backgroundColor:'white',marginVertical:"2%"}}> 
                           <Text style={{fontSize:20,fontWeight:'bold',marginHorizontal:"3%",marginVertical:"2%"}}>Bestsellers</Text>
                            <FlatList
                                data={Therapydata}
                              
                                renderItem={renderItem4}
                                keyExtractor={item => item.id}
                                showsHorizontalScrollIndicator={false}  
                             />           
                        </View>
                         <View style={{backgroundColor:'white',marginVertical:"2%"}}> 
                           <Text style={{fontSize:20,fontWeight:'bold',marginHorizontal:"3%",marginVertical:"2%"}}>Stress Relief Therapies</Text>
                            <FlatList
                                data={Therapydata}
                              
                                renderItem={renderItem4}
                                keyExtractor={item => item.id}
                                showsHorizontalScrollIndicator={false}  
                             />           
                        </View>
                          <View style={{backgroundColor:'white',marginVertical:"2%"}}> 
                           <View><Text style={{fontSize:20,fontWeight:'bold',marginHorizontal:"3%",marginVertical:"2%"}}>Ultimate Saving</Text></View>
                            <FlatList
                                data={hairdata}
                              
                                renderItem={renderItem2}
                                keyExtractor={item => item.id}
                                showsHorizontalScrollIndicator={false}  
                             />           
                        </View> 
                        
                        
                       
                        

                      
                    </ScrollView>
               
            {props?.vendorRequestLoader && <Loader isVisible={props?.vendorRequestLoader} />}
        </KeyboardAvoidingView>
    )
}


export default Massagewomen;