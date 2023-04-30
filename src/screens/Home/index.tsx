import { useState } from 'react'
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native'

import logo from '../../../assets/Logo.png'

import { Todo } from '../../components/Todo'
import { EmptyStateTask } from './EmptyStateTask'

import { styles } from './styles'
import { Form } from '../../components/Form'
import { Progress } from './Progress'

type Todos = {
  id: string
  name: string
  done: boolean
}

export function Home() {
  const [todos, setTodos] = useState<Todos[]>([])
  const [newTodoInput, setNewTodoInput] = useState('')

  const totalDone = todos.filter((todos) => todos.done === true)
  const totalInProgress = todos.filter((todos) => todos.done !== true)

  function handleInputNewTodo(text: string) {
    setNewTodoInput(text)
  }

  function handleCreateTodo() {
    const newTodo = {
      id: String(Date.now()),
      name: newTodoInput,
      done: false,
    }

    setTodos((prevState) => [...prevState, newTodo])
    setNewTodoInput('')
  }

  function handleDoneTask(todo: Todos) {
    const index = todos.findIndex((item) => item.id === todo.id)

    todos[index].done = !todos[index].done

    setTodos((todos) => [...todos])
  }

  function handleRemoveTask(todo: Todos) {
    setTodos((prevState) => [
      ...prevState.filter((item) => item.id !== todo.id),
    ])
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} />
      </View>

      <Form
        inputValue={newTodoInput}
        onChangeInput={handleInputNewTodo}
        onCreateTodo={handleCreateTodo}
      />

      <View style={styles.todo}>
        <Progress done={totalDone.length} inProgress={totalInProgress.length} />

        <FlatList
          data={todos}
          keyExtractor={(todo) => todo.id}
          renderItem={({ item }) => (
            <Todo
              todo={item}
              onTaskDone={() => handleDoneTask(item)}
              onRemove={() => handleRemoveTask(item)}
            />
          )}
          ListEmptyComponent={<EmptyStateTask />}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  )
}
