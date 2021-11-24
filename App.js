import React from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import colors from './src/utils/colors';
import Snackbar from 'react-native-snackbar';

const App = () => {
  const showSnackbar = () => {
    Snackbar.show({
      text: 'Hello Snackbar!',
      duration: Snackbar.LENGTH_LONG,
      textColor: colors.secondary,
    });
  };
  return (
    <SafeAreaView>
      <TouchableOpacity style={styles.buttonStyle} onPress={showSnackbar}>
        <Text style={styles.buttonTextStyle}>show snackbar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  buttonStyle: {
    alignSelf: 'center',
    backgroundColor: colors.primary,
    padding: 20,
    borderRadius: 10,
  },
  buttonTextStyle: {color: colors.white},
});
