import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'

const Footer = ({ navigationRef, colorScheme: { average, dark } }) => {
  const backgroundColor = { backgroundColor: dark }
  const color = { color: average }

  return (
    <View style={styles.footer}>
      <TouchableOpacity
        active
        style={[styles.footerMenuButton, backgroundColor]}
        activeOpacity={0.3}
        onPress={() => navigationRef.navigate('Home')}
      >
        <Text style={[styles.text, color]}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.footerMenuButton, backgroundColor]}
        activeOpacity={0.3}
        onPress={() => navigationRef.navigate('Solardata')}
      >
        <Text style={[styles.text, color]}>Solar data</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.footerMenuButton, backgroundColor]}
        activeOpacity={0.3}
        onPress={() => navigationRef.navigate('Settings')}
      >
        <Text style={[styles.text, color]}>Settings</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  footer: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  footerMenuButton: {
    width: '33.3%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FFFFFF',
  },
  text: {
    fontFamily: 'Orbitron',
  },
})

export default Footer
