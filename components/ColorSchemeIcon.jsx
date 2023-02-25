import React from 'react'
import { StyleSheet, View } from 'react-native'

const ColorSchemeIcon = ({ scheme }) => {
  return (
    <View style={[styles.icon, { borderColor: scheme.dark }]}>
      <View style={[styles.color, { backgroundColor: scheme.lite }]}></View>
      <View style={[styles.color, { backgroundColor: scheme.average }]}></View>
      <View style={[styles.color, { backgroundColor: scheme.dark }]}></View>
    </View>
  )
}

export default ColorSchemeIcon

const styles = StyleSheet.create({
  icon: {
    width: '50%',
    height: '50%',
    borderWidth: 1,
    borderRadius: 15,
    overflow: 'hidden',
  },
  color: {
    width: '100%',
    height: '33.3%',
  },
})
