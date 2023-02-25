import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Input from '../components/Input'
import AppButton from '../components/AppButton'
import getGrowattData from '../services/getGrowattData'

const Home = ({
  navigation,
  growattData,
  setGrowattData,
  colorScheme: { lite, dark },
  colorScheme,
  setIsLoading,
}) => {
  const [login, setLogin] = useState('')
  const [pass, setPass] = useState('')

  const backgroundColor = { backgroundColor: lite }
  const color = { color: dark }

  const requestData = async (login, pass) => {
    setIsLoading(true)
    const growattDataFromRequest = await getGrowattData(login, pass)    
    setGrowattData((prev) => ({ ...prev, ...growattDataFromRequest, login, pass }))
    setIsLoading(false)
  }

  const handleLogin = (login) => {
    setLogin(login)
  }

  const handlePass = (pass) => {
    setPass(pass)
  }

  const handleClick = () => {
    navigation.navigate('Solardata')
    requestData(login, pass)
    setLogin('')
    setPass('')
  }

  return (
    <View style={[styles.container, backgroundColor]}>
      <View style={styles.wrapper}>
        <View style={styles.textContainer}>
          <Text style={[styles.text, color]}>Please, enter your regdata!</Text>
        </View>
        <Input
          handleLoginPass={handleLogin}
          loginPass={login}
          inputName="login"
          colorScheme={colorScheme}
        />
        <Input
          handleLoginPass={handlePass}
          loginPass={pass}
          inputName="pass"
          colorScheme={colorScheme}
        />
        <AppButton handleClick={handleClick} title="Login" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    height: 25,
  },
  text: {
    fontFamily: 'Orbitron',
  },
})

export default Home
