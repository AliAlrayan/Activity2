import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class LoginPage extends React.Component {
  state = {
    username: '',
    password: '',
  };
  render() {
    // Destructure navigation from props
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Login</Text>

        <View style={styles.inputContainer}>
          <Icon name="envelope" size={20} color="black" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Email"
            label="Email"
            onChangeText={(text) => this.setState({ username: text })}
            value={this.state.username}
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon name="lock" size={20} color="black" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            onChangeText={(text) => this.setState({ password: text })}
            value={this.state.password}
          />
        </View>

        <TouchableOpacity
          style={[styles.button, styles.registerButton]}
          onPress={() => navigation.navigate('Registration')}
        >
          <Icon name="user-plus" size={20} color="white" style={styles.icon} />
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.recoveryButton]}
          onPress={() => navigation.navigate('AccountRecovery')}
        >
          <Icon name="key" size={20} color="white" style={styles.icon} />
          <Text style={styles.buttonText}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.goBackButton]}
          onPress={() => navigation.navigate('Landing')}
        >
          <Icon name="arrow-left" size={20} color="white" style={styles.icon} />
          <Text style={styles.buttonText}>Back to Landing</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
// Styles for the LoginPage component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  header: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 25,
    paddingLeft: 8,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    paddingLeft: 8,
  },
  button: {
    borderRadius: 25,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  registerButton: {
    backgroundColor: '#2d91cf',
  },
  recoveryButton: {
    backgroundColor: '#2d91cf',
  },
  goBackButton: {
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
export default LoginPage;