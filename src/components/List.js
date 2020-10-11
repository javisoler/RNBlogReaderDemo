import React from 'react';
import {FlatList, View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

import ListItem from './ListItem';

export default function List({navigation}) {
  const {data, isLoading, error} = useSelector((state) => state.posts);

  if (isLoading) {
    return (
      <View style={styles.loader}>
        <Text style={styles.loaderText}>Loading...</Text>
      </View>
    );
  }

  if (error || !data) {
    return (
      <View style={styles.loader}>
        <Text style={styles.loaderText}>
          {error || 'Sorry there was a problem loading this!'}
        </Text>
      </View>
    );
  }

  return (
    <FlatList
      data={data}
      renderItem={({item}) => (
        <ListItem
          item={item}
          onPress={() => navigation.push('Details', {item})}
        />
      )}
      keyExtractor={(item) => String(item.id)}
    />
  );
}

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  loaderText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
