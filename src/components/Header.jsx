import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useState } from 'react'

const Header = ({ nombre, mayorEdad }) => {

  const [count, setCount] = useState(0)

  return (
    <View style={styles.header}>
      <Text style={styles.title}>
        Welcome
      </Text>
      <Text style={{ fontSize: 16 }}>
        Bienvenido {nombre} a la Aplicación de mascotas más popula del Perú
      </Text>
      <View style={styles.messageAge}>
        <Text style={styles.ageMessage}>
          {mayorEdad ? 'Usted es mayor de edad' : 'Eres menor de edad'}
        </Text>
        <View
          style={[
            styles.circle,
            { backgroundColor: mayorEdad ? 'green' : 'red' },
          ]}
        />
      </View>
      <View>
        <Text style={styles.count}>{count}</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 15 }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setCount(count + 1)}
          >
            <Text style={{ color: 'white' }}>
              Aumentar
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setCount(count - 1)}
          >
            <Text style={{ color: 'white' }}>
              Disminuir
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  header: {
    flex: 1,
    padding: 15,
  },
  title: {
    fontSize: 30,
    fontWeight: '900',
  },
  ageMessage: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  messageAge: {
    flexDirection: 'row',
    gap: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  count: {
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  button: {
    backgroundColor: 'blue',
    padding: 5,
    borderRadius: 5,
  },
})
