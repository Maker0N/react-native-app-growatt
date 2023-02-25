import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

const Input = ({ handleLoginPass, loginPass, inputName, colorScheme: { average, dark } }) => {
  const backgroundColor = { backgroundColor: average }
  const color = { color: dark }

  return (
  <TextInput
    style={[styles.input, backgroundColor, color]}
    name={inputName}
    placeholder={inputName}
    onChangeText={handleLoginPass}
    value={loginPass}
    type={inputName === 'pass' ? 'password' : 'login'}
  />
)}

const styles = StyleSheet.create({
  input: {
    width: 160,
    height: 25,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 7,
    padding: 5,
    marginBottom: 5,
    fontSize: 10,
    letterSpacing: 2,
    fontFamily: 'Orbitron',
  },
})

export default Input
