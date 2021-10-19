import React from 'react';
import {View} from 'react-native';
import {Icon, Text} from '@ui-kitten/components';
import styles from './style';
export const Header = () => {
  const pulseIconRef: any = React.useRef();

  return (
    <View style={styles.headerContainer}>
      <Icon
        ref={pulseIconRef}
        animation="zoom"
        name="close-outline"
        style={{width: 32, height: 32}}
        fill="#FFF"
        onPress={() => pulseIconRef.current.startAnimation()}
      />
      <Text style={{paddingLeft: 5, color: '#fff'}}>Filter Result</Text>
    </View>
  );
};
