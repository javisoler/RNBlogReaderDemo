import React from 'react';
import {Text, StyleSheet, ScrollView, Platform} from 'react-native';
import {useSelector} from 'react-redux';

import Comments from '../../components/Comments';

export default function DetailsScreen({route}) {
  const users = useSelector((state) => state.users);
  const item = route.params.item;
  let user;

  if (!item) {
    return null;
  }

  if (users && users.data) {
    user = users.data.find((u) => u.id === item.userId);
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.body}>{item.body}</Text>

      {user && <Text style={styles.user}>{user.username}</Text>}

      <Comments postId={item.id} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  contentContainer: {
    paddingBottom: 60,
  },
  title: {
    fontWeight: Platform.select({ios: '800', android: 'bold'}),
    fontSize: 22,
  },
  body: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: '300',
  },
  user: {
    marginTop: 20,
    fontSize: 16,
    fontStyle: 'italic',
  },
});
