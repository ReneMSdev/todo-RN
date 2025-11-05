import { createHomeStyles } from '@/assets/home.styles'
import useTheme from '@/hooks/useTheme'
import { LinearGradient } from 'expo-linear-gradient'
import { StatusBar, Text, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Index() {
  const { toggleDarkMode, colors } = useTheme()
  const homeStyles = createHomeStyles(colors)

  return (
    <LinearGradient
      colors={colors.gradients.background}
      style={homeStyles.container}
    >
      <StatusBar barStyle={colors.statusBarStyle} />
      <SafeAreaView style={homeStyles.safeArea}>
        <Text style={homeStyles.title}>SQUAB A DAT HEEB</Text>
        <TouchableOpacity onPress={toggleDarkMode}>
          <Text style={homeStyles.editButtonText}>Toggle Color Mode</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  )
}
