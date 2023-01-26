import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import Header from './src/Header';
import KenoGrid from './src/KenoGrid';
import KenoForm from './src/KenoForm';
import KenoSuccess from './src/KenoSuccess';
import {KenoContext} from './kenoContext';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    height: '100%',
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [kenoNumbers, setKenoNumbers] = useState<Number[]>([]);
  const [kenoBet, setKenoBet] = useState<Number>(0);
  return (
    <KenoContext.Provider
      value={{kenoNumbers, setKenoNumbers, kenoBet, setKenoBet}}>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
          <Header />
          <KenoGrid />
          <KenoForm />
        </ScrollView>
      </SafeAreaView>
      <KenoSuccess />
    </KenoContext.Provider>
  );
};

export default App;
