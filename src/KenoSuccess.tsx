import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Modal} from 'react-native';
import {useKenoContext} from '../kenoContext';
import Header from './Header';

const KenoSuccess = () => {
  const {kenoNumbers, setKenoNumbers, kenoBet, setKenoBet} = useKenoContext();
  return (
    <Modal
      animationType="slide"
      visible={kenoBet > 0}
      supportedOrientations={[
        'portrait',
        'portrait-upside-down',
        'landscape',
        'landscape-left',
        'landscape-right',
      ]}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Header />
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>SUCCESS</Text>
          </View>
          <View style={styles.selectionContainer}>
            <Text style={styles.selectionText}>
              Your selection: {kenoNumbers.sort().toString()}
            </Text>
            <Text style={styles.selectionText}>
              Your stake: {kenoBet.toString()}
            </Text>
          </View>
          <View style={styles.closeContainer}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => {
                setKenoNumbers([]);
                setKenoBet(0);
              }}>
              <Text style={[styles.closeButtonText]}>Play again!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginBottom: 10,
    paddingHorizontal: 10,
    flex: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    maxHeight: 60,
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  titleContainer: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontSize: 48,
    fontWeight: '600',
    color: '#ff2b33',
  },
  closeContainer: {
    padding: 10,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    backgroundColor: '#ff2b33',
    maxHeight: 60,
  },
  closeButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '600',
  },
  selectionContainer: {
    marginTop: 10,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  selectionText: {
    color: '#ff2b33',
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 40,
  },
});

export default KenoSuccess;
