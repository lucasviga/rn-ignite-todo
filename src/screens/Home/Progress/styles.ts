import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  headerProgress: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  progress: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  created: {
    color: '#1E6F9F',
    fontWeight: 'bold',
  },
  done: {
    color: '#8284FA',
    fontWeight: 'bold',
  },
  counter: {
    marginLeft: 8,
    backgroundColor: '#333333',
    width: 25,
    height: 19,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  counterText: {
    color: '#D9D9D9',
    fontSize: 12,
    fontWeight: 'bold',
  },
})
