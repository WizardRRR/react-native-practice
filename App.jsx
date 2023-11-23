import { Image, StyleSheet, Text, View } from 'react-native'
import Constants from 'expo-constants'

export default function App() {

  /** objeto con la información del usuario */
  const user = {
    name: 'Rodolfo',
    lastname: 'choquemamini',
    phone: 963852741,
    age: 29,
    address: 'av. lejos de tu corazon',
    email: 'rodochoque15@gmail.com'
  }

  /** booleano si el usuario es mayor de edad */
  const isOlder = user.age > 18

  /** acceso a la aplicacion */
  const token = true

  /**
   * componetizar el HEADER
   * componetizar el BODY SECTION
   * componetizar el FOOTER
   */

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.title}>Welcome</Text>
        <Text style={{ fontSize: 16 }}>
          Bienvenido {user.name} a la Aplicación de mascotas más popula del Perú
        </Text>
        <View style={{ flexDirection: 'row', gap: 5, marginTop: 10, alignItems: 'center' }}>
          <Text style={styles.ageMessage}>
            {isOlder ? 'Usted es mayor de edad' : 'Eres menor de edad'}
          </Text>
          <View style={[styles.circle, { backgroundColor: isOlder ? 'green' : 'red' }]}></View>
        </View>
      </View>

      {token &&
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
      }

      {!token &&
        <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
          <Image
            source={{ uri: 'https://png.pngtree.com/element_our/20190601/ourlarge/pngtree-no-entry-icon-design-image_1364550.jpg' }}
            style={{ width: 300, height: 300 }}
          />
        </View>
      }

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight
  },
  header: {
    flex: 1,
    backgroundColor: '#add',
    padding: 15
  },
  title: {
    fontSize: 30,
    fontWeight: '900',
  },
  containerBoxes: {
    flex: 2,
    backgroundColor: '#ooo',
  },
  box: {
    flexBasis: '45%',
    backgroundColor: 'skyblue',
    height: 150,
    borderRadius: 20,
  },
  containerBoxes2: {
    flex: 2,
    backgroundColor: 'blue',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
    alignContent: 'center'
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
  },
  ageMessage: {
    fontWeight: 'bold',
    fontSize: 16
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10
  }
})

