import { MyText } from 'epic-native'
import { StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 70,
    paddingBottom: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default function App() {
  return (
    <View style={styles.screen}>
      <MyText />
    </View>
  )
}
