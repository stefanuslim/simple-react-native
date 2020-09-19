import { StyleSheet, Dimensions } from 'react-native'

const {width, height} = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    flex:1
  },
  boxStyle: {
    backgroundColor: '#ffffff',
    borderRadius: 51,
    position: 'absolute',
    width: width - (width * 0.001),
    height: height - (height*0.4),
    left: 0,
    top: height - (height*0.5)
  },
  loginTitleText: {
    position: 'absolute',
    width: width - (width * 0.001),
    height: height - (height*0.4),
    left: width - (width * 0.85),
    top: height - (height*0.95),
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: width*0.064,
    lineHeight: 27,
    color: '#000000',
  },
  emailInput: {
    position: 'absolute',
    width: width - (width * 0.25),
    left: width - (width * 0.85),
    top: height - (height*0.85),
    borderBottomColor:'#3549FB',
    borderStyle:'solid',
    borderBottomWidth:1
  },
  passwordInput: {
    position: 'absolute',
    width: width - (width * 0.25),
    left: width - (width * 0.85),
    top: height - (height*0.78),
    borderBottomColor:'#3549FB',
    borderStyle:'solid',
    borderBottomWidth:1
  },
  loginButton: {
    position: 'absolute',
    width: width - (width * 0.25),
    height: height- (height * 0.95),
    left: width - (width * 0.85),
    top: width - (width * 0.4),
    backgroundColor: '#3549FB',
    borderRadius: 25.5
  },
  loginButtonText: {
    textAlign:'center',
    position: 'absolute',
    width: width - (width * 0.68),
    height: height- (height * 0.95),
    left: width - (width * 0.79),
    top: width - (width * 0.98),
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: width*0.044,
    lineHeight: 19,
    color: '#FFFFFF',
  },
  linearGradient: {
    position: 'absolute',
    width: width,
    height: height,
    left: 0,
    top: 0,
  },
})
