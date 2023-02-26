import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import ParamString from '../components/ParamString'
import getGrowattData from '../services/getGrowattData'

const SolarData = ({
  growattData,
  setGrowattData,
  colorScheme: { lite, dark },
  colorScheme,
  isLoading,
  setIsLoading,
}) => {
  const backgroundColor = { backgroundColor: lite }
  const color = { color: dark }

  const requestData = async (login, pass) => {
    setIsLoading(true)
    const growattData = await getGrowattData(login, pass)
    setGrowattData((prev) => ({ ...prev, ...growattData }))
    setIsLoading(false)
  }

  const handleClick = () => {
    requestData(growattData.login, growattData.pass)
  }

  return (
    <View style={[styles.container, backgroundColor]}>
      {growattData.login && growattData.pass ? (
        <TouchableOpacity onPress={handleClick}>
          <Image
            source={require('../assets/icons8-hexagon-reload-48.png')}
            style={styles.reloadIcon}
          />
        </TouchableOpacity>
      ) : (
        <View>
          <Text style={[styles.text, color]}>Please, log in!</Text>
        </View>
      )}
      <ParamString
        paramString1="Generate:"
        paramString2={growattData.generate}
        paramString3="Watt"
        colorScheme={colorScheme}
        isLoading={isLoading}
      />
      <ParamString
        paramString1="Consumption:"
        paramString2={growattData.consumption}
        paramString3="Watt"
        colorScheme={colorScheme}
        isLoading={isLoading}
      />
      <ParamString
        paramString1="Company supply:"
        paramString2={growattData.powerCraft}
        paramString3="Watt"
        colorScheme={colorScheme}
        isLoading={isLoading}
      />
      <ParamString
        paramString1="Total:"
        paramString2={growattData.total}
        paramString3="kWatt"
        colorScheme={colorScheme}
        isLoading={isLoading}
      />
      <View>
        <Text style={[styles.text, color]}>{`Voltage: ${growattData.voltage} V`}</Text>
        <Text style={[styles.text, color]}>{`Amperage: ${growattData.amperage} A`}</Text>
        <Text style={[styles.text, color]}>{`Temperature: ${growattData.temperature} C`}</Text>
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
  text: {
    fontFamily: 'Orbitron',
  },
  reloadIcon: {
    width: 30,
    height: 30,
  },
})

export default SolarData
