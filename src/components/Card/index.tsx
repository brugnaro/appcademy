import React from 'react';
import {Text, View} from 'react-native';

import {Computer} from '../../assets/icons';

import styles from './styles';

const Card = (props: {subtitle: String, title: String}) => (
  <View style={styles.container}>
    <Computer />
    <View style={styles.content}>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.subtitle}>{props.subtitle}</Text>
    </View>
  </View>
);

export default Card;
