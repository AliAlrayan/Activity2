import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class RegistrationPage extends React.Component {
  // State to hold input values
  state = {
    email: '',
    password: '',
    retypePassword: '',
  };
  // Function to handle registration logic
  handleRegistration = () => {
    const { email, password, retypePassword } = this.state;
    if (email && password && retypePassword && password === retypePassword) {
      console.log('Registration successful!');
    } else {
      console.log('Registration failed. Please check your inputs.');
    }
  };
  render() {
    // Destructure navigation from props
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Registration</Text>

        <View style={styles.inputContainer}>
          <Icon name="envelope" size={14} color="black" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Email address"
            onChangeText={(text) => this.setState({ email: text })}
            value={this.state.email}
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon name="lock" size={20} color="black" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            onChangeText={(text) => this.setState({ password: text })}
            value={this.state.password}
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon name="lock" size={20} color="black" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Re-type password"
            secureTextEntry
            onChangeText={(text) => this.setState({ retypePassword: text })}
            value={this.state.retypePassword}
          />
        </View>

        <TouchableOpacity
          style={[styles.button, styles.registerButton]}
          onPress={this.handleRegistration}
        >
          <Icon name="user" size={20} color="white" style={[styles.iconLeft, styles.buttonIcon]} />
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.goBackButton]}
          onPress={() => navigation.navigate('Login')}
        >
          <Icon name="arrow-left" size={20} color="white" style={[styles.iconLeft, styles.buttonIcon]} />
          <Text style={styles.buttonText}>Back to Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
// Styles for the RegistrationPage component
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
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 8,
    flex: 1,
  },
  icon: {
    marginRight: 8,
  },
  iconLeft: {
    color: 'black',
    marginLeft: 15,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    height: 40, 
    overflow: 'hidden',
    marginBottom: 5,
  },
  registerButton: {
    backgroundColor: '#2d91cf',
  },
  goBackButton: {
    backgroundColor: '#2d91cf',
  },
  buttonText: {
    color: 'white',
    marginRight: 1,
  },
  buttonIcon: {
    marginRight: 10,
  },
});
export default RegistrationPage;