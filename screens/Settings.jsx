import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import ColorSchemeIcon from '../components/ColorSchemeIcon'

const Settings = ({
  colorScheme: { lite, dark },
  colorSchemes: { scheme1, scheme2, scheme3 },
  handleScheme,
}) => {
  const backgroundColor = { backgroundColor: lite }
  const color = { color: dark }

  return (
    <View style={[styles.container, backgroundColor]}>
      <TouchableOpacity style={styles.settingString} onPress={() => handleScheme(scheme1)}>
        <ColorSchemeIcon scheme={scheme1} />
        <View style={styles.textString}>
          <Text style={styles.text}>Color scheme 1</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingString} onPress={() => handleScheme(scheme2)}>
        <ColorSchemeIcon scheme={scheme2} />
        <View style={styles.textString}>
          <Text style={styles.text}>Color scheme 2</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingString} onPress={() => handleScheme(scheme3)}>
        <ColorSchemeIcon scheme={scheme3} />
        <View style={styles.textString}>
          <Text style={styles.text}>Color scheme 3</Text>
        </View>
      </TouchableOpacity>
      <Text style={[styles.copyright, color]}>® Vasilii Makerov</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  settingString: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '30%',
    width: '50%',
  },
  textString: {
    width: '100%',
    alignItems: 'center',
    fontFamily: 'Orbitron',
  },
  copyright: {
    fontSize: 10,
    fontFamily: 'Orbitron',
  },
  text: {
    width: '50%',
    fontFamily: 'Orbitron',
  },
})

export default Settings
