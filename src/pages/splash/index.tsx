import { Image } from "react-native-animatable"
import {useNavigation} from '@react-navigation/native';
import { SplashBg } from "./styles"
import { useEffect } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage";

const Splash = ()=>{

    const navigation = useNavigation();

    useEffect(()=>{
        setTimeout(()=>{
            handleGetToken()
        }, 3000)
    })

    const handleGetToken = async ()=>{
        const dataToken = await AsyncStorage.getItem('AccessToken')
        if(!dataToken){
            navigation.navigate('Welcome')
        } else {
            navigation.reset({
                index:0,
                routes:[{
                  name:'App'
                }]
            })
        }
    }

    return (
        <SplashBg>
            <Image
                animation="fadeInLeft"
                duration={1000}
                source={require('../../../assets/rubbank_dash.png')}
                style={{
                    resizeMode:"contain",
                    width:140,
                    height:40
                }}
            />
        </SplashBg>
    )
}

export default Splash