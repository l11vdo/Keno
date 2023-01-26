import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/amelco.png')} />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Keno Lottery</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    margin: 5,
    padding: 10,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: '#ff2b33',
    maxHeight: 80,
  },
  logoContainer: {
    width: '50%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  titleContainer: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#ff2b33',
  },
});

export default Header;
