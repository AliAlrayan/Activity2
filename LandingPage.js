import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class LandingPage extends React.Component {
  render() {
    // Destructure navigation from props
    const { navigation } = this.props;
    return (
      <View>
        <Text>Landing</Text>

        <TouchableOpacity
          style={[styles.button, styles.loginButton]}
          onPress={() => navigation.navigate('Login')}
        >
          <Icon name="sign-in" size={20} color="white" style={styles.icon} />
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.registerButton]}
          onPress={() => navigation.navigate('Registration')}
        >
          <Icon name="user-plus" size={20} color="white" style={styles.icon} />
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
// Styles for the LandingPage component
const styles = StyleSheet.create({
  button: {
    borderRadius: 100,
    height: 40, 
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  loginButton: {
    backgroundColor: '#2d91cf',
  },
  registerButton: {
    backgroundColor: '#2d91cf',
  },
  buttonText: {
    color: 'white',
    marginLeft: 10,
  },
  icon: {
    color: 'black',
    marginRight: 10,
  },
});
export default LandingPage;