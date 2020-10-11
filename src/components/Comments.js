import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {fetchComments, resetComments} from '../store/actions';

export default function Comments({postId}) {
  const dispatch = useDispatch();
  const {data, isLoading, error} = useSelector((state) => state.comments);
  let comments = [];

  useEffect(() => {
    if (!data) {
      dispatch(fetchComments());
    }
  }, [data, dispatch]);

  useEffect(() => {
    // We reset the comments store when unmounting the component to simulate
    // a real world app, in which we would have requested only the comments
    // for the specific post each time.
    return () => dispatch(resetComments());
  }, [dispatch]);

  if (data && postId !== undefined) {
    const newData = data.filter((c) => c.postId === postId);
    comments = newData;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Comments ({comments.length})</Text>

      {isLoading && <Text>Loading comments...</Text>}

      {!!(!isLoading && error) && (
        <Text style={styles.body}>
          There was a problem loading the comments...
        </Text>
      )}

      {!!(!comments.length && !isLoading && !error) && (
        <Text style={styles.body}>No comments yet.</Text>
      )}

      {comments &&
        comments.map((comment) => (
          <View key={comment.id} style={styles.comment}>
            <Text style={styles.commentName}>{comment.name}</Text>
            <Text style={styles.commentBody}>{comment.body}</Text>
          </View>
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingTop: 20,
    borderTopColor: 'lightgrey',
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  title: {
    fontWeight: Platform.select({ios: '600', android: 'bold'}),
    fontSize: 18,
    marginBottom: 10,
  },
  body: {
    marginTop: 20,
    fontSize: 16,
  },
  comment: {
    marginTop: 10,
    paddingTop: 10,
    borderTopColor: 'lightgrey',
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  commentName: {
    fontSize: 16,
    fontStyle: 'italic',
    fontWeight: '500',
    marginBottom: 10,
  },
  commentBody: {
    fontSize: 16,
    fontWeight: '300',
  },
});
