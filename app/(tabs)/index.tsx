import useTheme from '@/hooks/useTheme'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function Index() {
  const { toggleDarkMode } = useTheme()

  return (
    <View style={styles.container}>
      <Text style={styles.content}>Squab a dat heeb</Text>
      <Text>HI LOL</Text>
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>Toggle Color Mode</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
  },
  content: {
    fontSize: 44,
  },
})
