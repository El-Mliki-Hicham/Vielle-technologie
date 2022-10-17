import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';

export default function App() {

  const hello =()=>{
    console.log("hello")
    console.log("nada ")
  }
  return (
    <View style={styles.container}>
      <Text>TodoList</Text>
      <View>

    <Button title='click' onPress={() =>hello()}></Button>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color:"red",
  }
});
