import React, {useState, useEffect} from 'react';
import comp from '../assets/comp.png'
import styles from './styles/Main.style'
import { Text, View, TouchableOpacity,Image,AsyncStorage } from 'react-native';

const Main = () => {
  const [title, setTitle] = useState('')


  //Example for getting data from server using authentication (accessToken)
  useEffect(()=>{
    getData()
  },[])

  const localIP = '192.168.1.89'
  const getData = async () => {
    const accessToken = await AsyncStorage.getItem('accessToken')
    fetch(`http://${localIP}:3000/`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        token: accessToken
      }
    })
    .then((response) => response.json())
    .then(async (res)=>{
      setTitle(res.message)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  return (
    <View style={styles.container}>
    <Image
        style={styles.image}
        source={comp}
    />
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas scelerisque porttitor turpis viverra lobortis convallis. Libero tristique donec turpis elit adipiscing sit faucibus tincidunt. Erat porttitor amet, nibh id lorem. Volutpat quam vestibulum egestas ut odio odio. Nunc non, feugiat a diam at lacus augue. Sit lacus pharetra eget feugiat aliquam enim adipiscing. Purus nec tortor tellus, neque montes. Gravida ornare eu viverra libero. Vulputate massa turpis posuere nibh dolor pulvinar bibendum. Viverra scelerisque ut dignissim at sit s</Text>
    </View>
  )
}

export default Main
