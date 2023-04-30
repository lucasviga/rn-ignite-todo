import { View, Text } from 'react-native'

import { styles } from './styles'

type ProgressProps = {
  total: {
    done: number
    inProgress: number
  }
}

export function Progress({ total }: ProgressProps) {
  return (
    <View style={styles.headerProgress}>
      <View style={styles.progress}>
        <Text style={styles.created}>Created</Text>
        <View style={styles.counter}>
          <Text style={styles.counterText}>{total.inProgress}</Text>
        </View>
      </View>

      <View style={styles.progress}>
        <Text style={styles.done}>Done</Text>
        <View style={styles.counter}>
          <Text style={styles.counterText}>{total.done}</Text>
        </View>
      </View>
    </View>
  )
}
