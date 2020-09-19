import { StyleSheet, Dimensions } from 'react-native'

const {width, height} = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonRegister: {
    borderRadius: 25.5,
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    width: width - (width*0.26),
    height: height - (height*0.95),
    left: width - (width*0.85),
    top: height - (height*0.273)
  },
  buttonLogin: {
    borderRadius: 25.5,
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    width: width - (width*0.26),
    height: height - (height*0.95),
    left: width - (width*0.85),
    top: height - (height*0.1785)
  },
  registerText: {
    position: 'absolute',
    width: width - (width*0.26),
    height: height - (height*0.95),
    left: width - (width*0.99),
    top: height - (height*0.99),
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: width*0.046,
    lineHeight: 19,
    textAlign: 'center',
    color: '#000000'
  },
  loginText: {
    position: 'absolute',
    width: width - (width*0.26),
    height: height - (height*0.95),
    left: width - (width*0.99),
    top: height - (height*0.99),
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: width*0.046,
    lineHeight: 19,
    textAlign: 'center',
    color: '#000000'
  },
  linearGradient: {
    position: 'absolute',
    width: width,
    height: height,
    left: 0,
    top: 0,
  },
})
