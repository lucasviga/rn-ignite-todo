import { Image, Text, View } from 'react-native'

import { styles } from './styles'

import task from '../../../../assets/Clipboard.png'

export function EmptyStateTask() {
  return (
    <View style={styles.container}>
      <Image source={task} />
      <Text style={styles.title}>You don't have added tasks yet</Text>
      <Text style={styles.description}>
        Create taks and organize your todo items
      </Text>
    </View>
  )
}
