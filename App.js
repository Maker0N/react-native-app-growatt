import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, Image } from 'react-native'
import { useFonts } from 'expo-font'
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './screens/Home'
import SolarData from './screens/SolarData'
import Settings from './screens/Settings'
import Footer from './components/Footer'
import Loader from './components/Loader'

const colorSchemes = {
  scheme1: {
    lite: '#EDEFE2',
    average: '#dbea8d',
    dark: '#7D825B',
  },
  scheme2: {
    lite: '#fff8db',
    average: '#fecd07',
    dark: '#4f4f5b',
  },
  scheme3: {
    lite: '#d2c0bc',
    average: '#d7a375',
    dark: '#73523c',
  },
}

function App() {
  const [growattData, setGrowattData] = useState({
    login: '',
    pass: '',
    generate: 0,
    consumption: 0,
    powerCraft: 0,
    total: 0,
    voltage: 0,
    amperage: 0,
    temperature: 0,
  })
  const [isLoading, setIsLoading] = useState(false)
  const [colorScheme, setColorScheme] = useState(colorSchemes.scheme2)

  const [fontsLoaded] = useFonts({
    Orbitron: require('./assets/fonts/Orbitron-Regular.ttf'),
  })

  const Stack = createNativeStackNavigator()
  const navigationRef = useNavigationContainerRef()

  const handleScheme = (colorScheme) => {
    setColorScheme(colorScheme)
  }

  if (fontsLoaded) {
    return (
      <NavigationContainer style={styles.container} ref={navigationRef}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            options={{
              headerStyle: {
                backgroundColor: colorScheme.dark,
              },
              headerTintColor: colorScheme.average,
              headerTitleStyle: {
                fontFamily: 'Orbitron',
              },
            }}
          >
            {(props) => (
              <Home
                {...props}
                growattData={growattData}
                setGrowattData={setGrowattData}
                colorScheme={colorScheme}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
              />
            )}
          </Stack.Screen>
          <Stack.Screen
            name="Solardata"
            options={{
              headerBackVisible: false,
              headerStyle: {
                backgroundColor: colorScheme.dark,
              },
              headerTintColor: colorScheme.average,
              headerTitleStyle: {
                fontFamily: 'Orbitron',
              },
            }}
          >
            {(props) => (
              <SolarData
                {...props}
                growattData={growattData}
                setGrowattData={setGrowattData}
                colorScheme={colorScheme}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
              />
            )}
          </Stack.Screen>
          <Stack.Screen
            name="Settings"
            options={{
              headerBackVisible: false,
              headerStyle: {
                backgroundColor: colorScheme.dark,
              },
              headerTintColor: colorScheme.average,
              headerTitleStyle: {
                fontFamily: 'Orbitron',
              },
            }}
          >
            {(props) => (
              <Settings
                {...props}
                colorScheme={colorScheme}
                colorSchemes={colorSchemes}
                handleScheme={handleScheme}
              />
            )}
          </Stack.Screen>
        </Stack.Navigator>
        <Footer navigationRef={navigationRef} colorScheme={colorScheme} />
        <StatusBar style="auto" />
      </NavigationContainer>
    )
  }
  return (
    <View style={styles.containerLoading}>
      <Loader />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDEFE2',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  containerLoading: {
    flex: 1,
    backgroundColor: '#EDEFE2',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default App
