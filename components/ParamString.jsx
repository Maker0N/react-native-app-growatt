import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Loader from './Loader'

const ParamString = ({
  paramString1,
  paramString2,
  paramString3,
  colorScheme: { lite, dark },
  isLoading,
}) => {
  const backgroundColor = { backgroundColor: lite }
  const color = { color: dark }

  return (
    <View style={[styles.container, backgroundColor]}>
      <View style={styles.textWrapperLeft}>
        <Text style={[styles.text, color]}>{paramString1}</Text>
      </View>
      <View style={styles.paramWrapper}>
        {isLoading ? (
          <Loader />
        ) : (
          <Text style={styles.paramText}>{paramString2}</Text>
        )}
      </View>
      <View style={styles.textWrapperRight}>
        <Text style={[styles.text, color]}>{paramString3}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    stifyContent: 'space-around',
  },
  textWrapperLeft: {
    flex: 0.35,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  textWrapperRight: {
    flex: 0.35,
    justifyContent: 'flex-end',
  },
  paramWrapper: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  text: {
    fontFamily: 'Orbitron',
  },
  paramText: {
    fontSize: 17,
    fontFamily: 'Orbitron',
  },
})

export default ParamString
