import { createHomeStyles } from '@/assets/home.styles'
import Header from '@/components/Header'
import TodoInput from '@/components/TodoInput'
import useTheme from '@/hooks/useTheme'
import { LinearGradient } from 'expo-linear-gradient'
import { StatusBar, TouchableOpacity } from 'react-native'
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
        <Header />
        <TouchableOpacity onPress={toggleDarkMode}>
          <TodoInput />
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  )
}
