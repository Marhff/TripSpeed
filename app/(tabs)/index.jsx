import {StyleSheet, Text, View, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import login from '../screens/LoginScreen'


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={{ height: 20 }} />
      <Button
        title="login"
        onPress={() => console.log(navigation) }
      />
      <View style={{ height: 20 }} />
      <Button
        title="login"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});
