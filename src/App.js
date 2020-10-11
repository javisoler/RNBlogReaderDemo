import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';

import HomeScreen from './screens/home';
import DetailsScreen from './screens/details';
import configureStore from './store';
import {fetchPosts, fetchUsers} from './store/actions';

const store = configureStore();

const Stack = createStackNavigator();

store.dispatch(fetchPosts());
store.dispatch(fetchUsers());

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{title: 'Blog Reader'}}
          />
          <Stack.Screen
            name="Details"
            component={DetailsScreen}
            options={({route}) => ({
              title: route.params.item.title,
              headerBackTitle: 'Back',
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
