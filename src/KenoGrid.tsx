import React, {useState, useEffect} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import KenoGridRow from './KenoGridRow';

type orientationType = 'Landscape' | 'Portrait';

const gridShape = {
  Portrait: {rows: 10, cols: 8},
  Landscape: {rows: 8, cols: 10},
};

const orientation = (): orientationType => {
  const dim = Dimensions.get('screen');
  if (dim.height >= dim.width) {
    return 'Portrait';
  } else {
    return 'Landscape';
  }
};

const KenoGrid = () => {
  const [screenOrientation, setScreenOrientation] = useState<orientationType>(
    orientation(),
  );
  useEffect(() => {
    Dimensions.addEventListener('change', _e => {
      setScreenOrientation(orientation());
    });
  }, []);
  let gridRows = [];
  for (let i = 1; i <= gridShape[orientation()].rows; i++) {
    gridRows.push(
      <View key={i} style={styles.kenoRow}>
        <KenoGridRow
          kenoStart={i}
          kenoCount={gridShape[screenOrientation].cols}
        />
      </View>,
    );
  }
  return <View style={styles.container}>{gridRows}</View>;
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 10,
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '50%',
  },
  kenoRow: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default KenoGrid;
