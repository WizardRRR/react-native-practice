import Constants from 'expo-constants'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { useState } from 'react'
import Header from './src/components/Header'
import NoAccess from './src/components/NoAccess'
import BodySection from './src/components/BodySection'

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

  const [token, setToken] = useState(false)

  const photoNoAccess = 'https://png.pngtree.com/element_our/20190601/ourlarge/pngtree-no-entry-icon-design-image_1364550.jpg'

  return (
    <View style={styles.container}>

      <Header nombre={user.name} mayorEdad={isOlder} />

      <TouchableOpacity
        style={styles.buttonAccess}
        onPress={() => setToken(!token)}
      >
        {/* "=" asignacion "==" compracion debil "===" comparacion extricta */}
        <Text style={styles.titleButton}>
          {token ? 'Denegar Acceso' : 'Obtener Acceso'}
        </Text>
      </TouchableOpacity>

      {token && <BodySection />}

      {!token && <NoAccess photoUri={photoNoAccess} />}

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight
  },
  buttonAccess: {
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'center',
    marginVertical: 10
  },
  titleButton: {
    color: 'white',
    fontWeight: '700'
  }
})

