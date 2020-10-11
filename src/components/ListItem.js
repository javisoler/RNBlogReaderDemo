import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';

export default function ListItem({item, onPress}) {
  return (
    <Pressable
      style={({pressed}) => ({
        backgroundColor: pressed ? 'rgba(0,0,0,0.1)' : 'white',
        ...styles.container,
      })}
      onPress={() => onPress && onPress()}>
      <Text style={styles.title} numberOfLines={1}>
        {item.title}
      </Text>
      <View>
        <Text style={styles.disclosureIndicator}>▶</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 60,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    paddingRight: 10,
  },
  disclosureIndicator: {
    opacity: 0.2,
    fontSize: 18,
  },
});
