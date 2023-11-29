import React from 'react';
import { View, Text, Button } from 'react-native';

class HomePage extends React.Component {
  render() {
    // Destructure the 'navigation' prop from 'this.props'
    const { navigation } = this.props;
    return (
      <View>
        <Text>Home</Text>
        <Button title="Logout" onPress={() => navigation.navigate('Login')} />
      </View>
    );
  }
}
export default HomePage;