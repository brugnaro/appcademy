import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderColor: '#DDD',
    borderWidth: 1,
    flexDirection: 'row',
    height: 90,
    paddingHorizontal: 20,
  },
  content: {
    flexDirection: 'column',
    paddingLeft: 10,
    paddingVertical: 10,
  },
  subtitle: {color: '#a2a2a2', maxWidth: 250},
  title: {fontSize: 18, fontWeight: 'bold'},
});

export default styles;
