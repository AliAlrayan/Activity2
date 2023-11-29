import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class AccountRecoveryPage extends React.Component {
  // State to hold the email address for account recovery
  state = {
    email: '',
  };
  // Function to handle sending reset
  handleSendInstructions = () => {
    console.log('Sending reset instructions to:', this.state.email);
  };
  render() {
    // Destructure navigation from props
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Account Recovery</Text>

        <View style={styles.inputContainer}>
          <Icon name="envelope" size={20} color="black" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Email Address"
            onChangeText={(text) => this.setState({ email: text })}
            value={this.state.email}
          />
        </View>

        <TouchableOpacity
          style={[styles.button, styles.sendButton]}
          onPress={this.handleSendInstructions}
        >
          <Icon name="send" size={20} color="white" style={[styles.iconLeft, styles.buttonIcon]} />
          <Text style={styles.buttonText}>Send Reset</Text>
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
// Styles for the AccountRecoveryPage component
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
  button: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    overflow: 'hidden',
    marginBottom: 16,
  },
  sendButton: {
    backgroundColor: '#2d91cf',
  },
  goBackButton: {
    backgroundColor: '#2d91cf',
  },
  buttonText: {
    color: 'white',
    marginLeft: 10,
  },
  iconLeft: {
    color: 'black',
    marginLeft: 10,
  },
  buttonIcon: {
    marginRight: 10,
  },
});
export default AccountRecoveryPage;