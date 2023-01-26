import React from 'react';
import {StyleSheet, View} from 'react-native';
import KenoGridButton from './KenoGridButton';

interface kenoRowProps {
  kenoStart: number;
  kenoCount: number;
}

const KenoGridRow = ({kenoStart, kenoCount}: kenoRowProps) => {
  let KenoButtons = [];
  for (
    let i = (kenoStart - 1) * kenoCount + 1;
    i <= kenoStart * kenoCount;
    i++
  ) {
    KenoButtons.push(
      <View key={i} style={styles.kenoNumber}>
        <KenoGridButton kenoNumber={i} />
      </View>,
    );
  }
  return <View style={styles.container}>{KenoButtons}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  kenoNumber: {
    margin: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default KenoGridRow;
