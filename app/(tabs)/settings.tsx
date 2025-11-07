import { createSettingsStyles } from '@/assets/settings.styles'
import DangerZone from '@/components/DangerZone'
import Preferences from '@/components/Preferences'
import ProgressStats from '@/components/ProgressStats'
import useTheme from '@/hooks/useTheme'
import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Settings() {
  const { colors } = useTheme()

  const settingsStyles = createSettingsStyles(colors)

  return (
    <LinearGradient
      colors={colors.gradients.background}
      style={settingsStyles.container}
    >
      <SafeAreaView style={settingsStyles.safeArea}>
        {/* HEADER */}
        <View style={settingsStyles.header}>
          <View style={settingsStyles.titleContainer}>
            <LinearGradient
              colors={colors.gradients.primary}
              style={settingsStyles.iconContainer}
            >
              <Ionicons
                name='settings'
                size={28}
                color='white'
              />
            </LinearGradient>
            <Text style={settingsStyles.title}>Settings</Text>
          </View>
        </View>

        <ScrollView
          style={settingsStyles.scrollView}
          contentContainerStyle={settingsStyles.content}
        >
          {/* PROGRESS STATS */}
          <ProgressStats />

          {/* PREFERENCES */}
          <Preferences />

          {/* Danger Zone */}
          <DangerZone />
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  )
}
