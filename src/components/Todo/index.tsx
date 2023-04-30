import { Image, Text, TouchableOpacity, View } from 'react-native'

import trash from '../../../assets/trash.png'
import check from '../../../assets/Check.png'
import { styles } from './styles'

type TodoProps = {
  todo: {
    id: string
    name: string
    done: boolean
  }
  onTaskDone: () => void
  onRemove: () => void
}

export function Todo({ todo, onTaskDone, onRemove }: TodoProps) {
  return (
    <View style={[styles.container, !todo.done && styles.containerDoing]}>
      <TouchableOpacity
        style={[
          styles.radioBtn,
          todo.done ? styles.radioBtnDone : styles.radioBtnDoing,
        ]}
        onPress={onTaskDone}
      >
        {todo.done && <Image source={check} />}
      </TouchableOpacity>
      <Text style={[styles.text, todo.done && styles.textDone]}>
        {todo.name}
      </Text>
      <TouchableOpacity onPress={onRemove}>
        <Image source={trash} />
      </TouchableOpacity>
    </View>
  )
}
