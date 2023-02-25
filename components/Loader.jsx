// code in react-native loader spinne

import React from 'react'
import { View, ActivityIndicator } from 'react-native'
const Loader = (props) => {
  return (
    <View style={styles.loaderContainer}>
      <ActivityIndicator size={props.size || 'small'} color={props.color} />
    </View>
  )
}
const styles = {
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
}
export default Loader
