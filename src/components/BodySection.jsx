import { StyleSheet, View } from 'react-native'
import React from 'react'

const BodySection = () => {
  return (
    <>
          <View style={styles.containerBoxes2}>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
          </View>
          <View style={styles.footer}>
            <View style={styles.elementFooter}></View>
          </View>
      </>
  )
}

export default BodySection

const styles = StyleSheet.create({
  containerBoxes2: {
    flex: 2,
    backgroundColor: 'blue',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
    alignContent: 'center'
  },
  box: {
    flexBasis: '45%',
    backgroundColor: 'skyblue',
    height: 150,
    borderRadius: 20,
  },
  
  footer: {
    flex: 1,
    backgroundColor: 'red'
  },
  elementFooter: {
    flex: 1,
    margin: 15,
    backgroundColor: 'violet',
    borderRadius: 10
  }
})