import { View, Text } from 'react-native'

import { styles } from './styles'

type ProgressProps = {
  done: number
  inProgress: number
}

export function Progress({ done, inProgress }: ProgressProps) {
  return (
    <View style={styles.headerProgress}>
      <View style={styles.progress}>
        <Text style={styles.created}>Created</Text>
        <View style={styles.counter}>
          <Text style={styles.counterText}>{inProgress}</Text>
        </View>
      </View>

      <View style={styles.progress}>
        <Text style={styles.done}>Done</Text>
        <View style={styles.counter}>
          <Text style={styles.counterText}>{done}</Text>
        </View>
      </View>
    </View>
  )
}
