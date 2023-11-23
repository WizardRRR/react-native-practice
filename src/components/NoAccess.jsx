import { Image, StyleSheet, View } from 'react-native'

const NoAccess = ({ photoUri }) => {
  
  return (
    <View style={styles.containerImage}>
      <Image
        source={{ uri: photoUri }}
        style={styles.image}
      />
    </View>
  )
}

export default NoAccess

const styles = StyleSheet.create({
  containerImage: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 300,
    height: 300
  }
})