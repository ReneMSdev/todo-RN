import useTheme, { ColorScheme } from '@/hooks/useTheme'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function Index() {
  const { toggleDarkMode, colors } = useTheme()
  const styles = createStyles(colors)

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

const createStyles = (colors: ColorScheme) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      gap: 10,
      backgroundColor: colors.bg,
    },
    content: {
      fontSize: 44,
    },
  })
  return styles
}
