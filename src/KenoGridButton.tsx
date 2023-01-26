import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useKenoContext} from '../kenoContext';

interface kenoNumberProp {
  kenoNumber: number;
}

const KenoGridButton = ({kenoNumber}: kenoNumberProp) => {
  const {kenoNumbers, setKenoNumbers} = useKenoContext();
  const [opacity, setOpacity] = useState(
    kenoNumbers.find(x => x === kenoNumber) ? 0.3 : 1,
  );
  const onPress = () => {
    let kn = kenoNumbers;
    if (kn.find(x => x === kenoNumber)) {
      kn = kn.filter(n => n !== kenoNumber);
    } else {
      if (kn.length < 5) {
        kn = kn.concat(kenoNumber);
      }
    }
    setKenoNumbers(kn);
  };
  useEffect(() => {
    setOpacity(kenoNumbers.find(x => x === kenoNumber) ? 0.3 : 1);
  }, [kenoNumbers, kenoNumber]);

  return (
    <View
      style={[
        styles.container,
        // eslint-disable-next-line react-native/no-inline-styles
        {
          backgroundColor: kenoNumber > 40 ? 'red' : 'blue',
          opacity: opacity,
        },
      ]}>
      <TouchableOpacity style={styles.kenoButton} onPress={onPress}>
        <Text style={[styles.kenoButtonText]}>{kenoNumber}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  kenoButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  kenoButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default KenoGridButton;
