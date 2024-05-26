import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style = {styles.textStyles}>My name is <Text style = {styles.nameStyles}>Bismark Obuobi</Text></Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1DECD',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyles: {
    fontSize: 24
  },
  nameStyles: {
    fontWeight: "bold"
  },
});
