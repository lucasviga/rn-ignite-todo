import { StyleSheet } from 'react-native'

const cond = true

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#262626',
    borderColor: '#262626',
    borderWidth: 1,
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  containerDoing: {
    borderColor: '#333333',
    borderWidth: 1,
  },
  radioBtn: {
    width: 24,
    height: 24,
    borderRadius: 100,
    marginRight: 8,
  },
  radioBtnDoing: {
    borderColor: '#4EA8DE',
    borderWidth: 2,
  },
  radioBtnDone: {
    backgroundColor: '#5E60CE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#F2F2F2',
    flex: 1,
  },
  textDone: {
    color: '#808080',
    flex: 1,
    textDecorationLine: 'line-through',
  },
})
