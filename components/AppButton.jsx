import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const AppButton = ({ handleClick, title, type }) => (
  <TouchableOpacity style={styles.button} activeOpacity={0.3} type={type} onPress={handleClick}>
    <Text style={styles.textbutton}>{title}</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#7D825B',
    borderRadius: 7,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    width: 160,
    height: 35,
    textAlign: 'center',
    justifyContent: 'center',
    color: '#dbea8d',
    margin: 5,
    paddingLeft: 3,
  },
  textbutton: {
    color: '#dbea8d',
    textAlign: 'center',
    fontFamily: 'Orbitron',
  },
})
 
export default AppButton
