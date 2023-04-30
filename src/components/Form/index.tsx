import { View, TextInput, TouchableOpacity, Image } from 'react-native'
import { styles } from './styles'

import plusIcon from '../../../assets/plus.png'

type FormProps = {
  inputValue: string
  onChangeInput: (text: string) => void
  onCreateTodo: () => void
}

export function Form({ inputValue, onChangeInput, onCreateTodo }: FormProps) {
  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Add new task"
        placeholderTextColor="#808080"
        value={inputValue}
        onChangeText={(text) => onChangeInput(text)}
      />
      <TouchableOpacity style={styles.btn} onPress={onCreateTodo}>
        <Image source={plusIcon} />
      </TouchableOpacity>
    </View>
  )
}
