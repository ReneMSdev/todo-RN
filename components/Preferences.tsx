import { createSettingsStyles } from '@/assets/settings.styles'
import useTheme from '@/hooks/useTheme'
import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import React, { useState } from 'react'
import { Switch, Text, View } from 'react-native'

const Preferences = () => {
  const [isAutoSync, setIsAutoSync] = useState(true)
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true)
  const { colors, isDarkMode, toggleDarkMode } = useTheme()
  const styles = createSettingsStyles(colors)

  return (
    <LinearGradient
      colors={colors.gradients.surface}
      style={styles.section}
    >
      <Text style={styles.sectionTitle}> Preferences </Text>

      {/* DARK MODE */}
      <View style={styles.settingItem}>
        <View style={styles.settingLeft}>
          <LinearGradient
            colors={colors.gradients.primary}
            style={styles.settingIcon}
          >
            <Ionicons
              name='moon'
              size={18}
              color='white'
            />
          </LinearGradient>
          <Text style={styles.settingText}>Dark Mode</Text>
        </View>
        <Switch
          value={isDarkMode}
          onValueChange={toggleDarkMode}
          thumbColor={'white'}
          trackColor={{
            true: colors.primary,
            false: colors.border,
          }}
          ios_backgroundColor={colors.border}
        />
      </View>

      {/* NOTIFICATIONS */}
      <View style={styles.settingItem}>
        <View style={styles.settingLeft}>
          <LinearGradient
            colors={colors.gradients.warning}
            style={styles.settingIcon}
          >
            <Ionicons
              name='notifications'
              size={18}
              color='white'
            />
          </LinearGradient>
          <Text style={styles.settingText}>Notifications</Text>
        </View>
        <Switch
          value={isNotificationsEnabled}
          onValueChange={setIsNotificationsEnabled}
          thumbColor={'white'}
          trackColor={{
            true: colors.warning,
            false: colors.border,
          }}
          ios_backgroundColor={colors.border}
        />
      </View>

      {/* AUTO-SYNC */}
      <View style={styles.settingItem}>
        <View style={styles.settingLeft}>
          <LinearGradient
            colors={colors.gradients.success}
            style={styles.settingIcon}
          >
            <Ionicons
              name='notifications'
              size={18}
              color='white'
            />
          </LinearGradient>
          <Text style={styles.settingText}>Auto-Sync</Text>
        </View>
        <Switch
          value={isAutoSync}
          onValueChange={setIsAutoSync}
          thumbColor={'white'}
          trackColor={{
            true: colors.success,
            false: colors.border,
          }}
          ios_backgroundColor={colors.border}
        />
      </View>
    </LinearGradient>
  )
}

export default Preferences
