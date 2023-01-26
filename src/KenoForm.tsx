import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {useKenoContext} from '../kenoContext';

const KenoForm = () => {
  const {kenoNumbers, setKenoNumbers, setKenoBet} = useKenoContext();
  const commonBets = [50, 100, 200, 500];
  const [betValue, setBetValue] = useState<Number>(0);
  let formBets = [];
  const placeBet = () => {
    if (betValue > 0) {
      setKenoBet(betValue);
      setBetValue(0);
    }
  };
  const luckyDip = () => {
    setKenoNumbers([]);
    let kn: number[] = [];
    while (kn.length < 5) {
      let n = Math.floor(Math.random() * 80 + 1);
      if (!kn.find(x => x === n)) {
        kn = kn.concat(n);
      }
    }
    return kn;
  };
  const handleChange = (value: string) => {
    if (kenoNumbers.length === 5) {
      if (value.length < 1) {
        setBetValue(Number(0));
      }
      if (Number(value) > 0) {
        setBetValue(Number(value));
      }
    }
  };
  commonBets.map((bet, index) => {
    formBets.push(
      <View key={index} style={styles.betValueContainer}>
        <TouchableOpacity
          style={styles.betValueButton}
          onPress={() => {
            if (kenoNumbers.length === 5) {
              setBetValue(Number(bet));
            }
          }}>
          <Text style={[styles.betValueText]}>{bet}</Text>
        </TouchableOpacity>
      </View>,
    );
  });
  formBets.push(
    <View key={formBets.length} style={styles.inputContainer}>
      <TextInput
        style={styles.betInput}
        value={betValue.toString()}
        keyboardType="numeric"
        onChangeText={handleChange}
      />
    </View>,
  );
  return (
    <>
      <View style={styles.valueContainer}>{formBets}</View>
      <View style={styles.buttonsContainer}>
        <View key={1} style={styles.betContainer}>
          <TouchableOpacity
            style={styles.betButton}
            onPress={() => {
              setKenoNumbers([]);
              setBetValue(0);
              setKenoBet(0);
            }}>
            <Text style={[styles.betButtonText]}>Reset</Text>
          </TouchableOpacity>
        </View>
        <View key={2} style={styles.betContainer}>
          <TouchableOpacity
            style={styles.betButton}
            onPress={() => setKenoNumbers(luckyDip())}>
            <Text style={[styles.betButtonText]}>Lucky Dip</Text>
          </TouchableOpacity>
        </View>
        <View key={3} style={styles.betContainer}>
          <TouchableOpacity style={styles.betButton} onPress={placeBet}>
            <Text style={[styles.betButtonText]}>Place Bet</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  valueContainer: {
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 5,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  buttonsContainer: {
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 5,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  betValueContainer: {
    flex: 1,
    padding: 10,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 3,
    borderColor: '#ff2b33',
  },
  betValueButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  betValueText: {
    color: '#ff2b33',
    fontSize: 14,
    fontWeight: '600',
  },
  betContainer: {
    flex: 1,
    padding: 10,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    backgroundColor: '#ff2b33',
  },
  inputContainer: {
    flex: 1,
    padding: 10,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 3,
    borderColor: 'gold',
  },
  betButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  betButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  betInput: {
    color: '#000',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default KenoForm;
