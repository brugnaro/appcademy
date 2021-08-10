import React, {useEffect} from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';

import {Card, Header} from '../../components';

import styles from './styles';

import useMain from '../../store/main/hooks/useMain';

interface itemsList {
  title: String;
  subtitle: String;
}

const Home = (props: {navigation: any; route: any}) => {
  const {main, isLoading, setMainList} = useMain();

  useEffect(() => {
    setMainList();
  }, []);

  const renderItem = ({item}: {item: itemsList}) => (
    <Card subtitle={item.subtitle} title={item.title} />
  );

  const List = () => (
    <View>
      {isLoading ? (
        <Text style={styles.text}>Buscando Informações...</Text>
      ) : (
        <FlatList
          data={main.mainList}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      )}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header
        goBack={() => props.navigation.navigate('Home')}
        title={props.route.name}
      />
      <List />
    </SafeAreaView>
  );
};

export default Home;
