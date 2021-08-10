import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {Back} from '../../assets/icons';

import styles from './styles';

const Header = (props: {goBack: any; title: String}) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={props.goBack}>
      <Back />
    </TouchableOpacity>
    <Text style={styles.text}>{props.title}</Text>
    <View />
  </View>
);

export default Header;
