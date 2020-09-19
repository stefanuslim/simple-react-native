import { StyleSheet, Dimensions } from 'react-native'

const {width, height} = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    position: 'absolute',
    width: width-(width*0.2),
    height: height-(height*0.7),
    left: width-(width*0.9),
    top: height-(height*0.79),
  },
  title: {
    position: 'absolute',
    width: width-(width*0.1),
    height: height-(height*0.5),
    left: width-(width*0.95),
    top: height-(height*0.45),
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: width*0.07,
    lineHeight: 29,
    textAlign: 'center',
    color: '#000000',
  },
  description: {
    position: 'absolute',
    width: width-(width*0.2),
    height: height-(height*0.5),
    left: width-(width*0.9),
    top: height-(height*0.35),
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: width*0.035,
    lineHeight: 14,
    textAlign: 'center',
    color: '#000000'
  },
})
