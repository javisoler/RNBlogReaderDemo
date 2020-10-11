# React Native Blog Reader Demo

This is a simple React Native app for demo purposes.

It uses [Redux](https://redux.js.org/) for state management and [React Navigation](https://reactnavigation.org/) for screen navigation.

The app fetches sample blog posts, users and comments from three different endpoints. It consists of 2 screens, a simple list of posts, and a details page showing the post body and the comments.

## Development

Install dependencies:

```
yarn
```

Install iOS dependencies:

```
cd ios && pod install && cd ..
```

Run on iOS:

```
yarn ios
```

Run on Android:

```
yarn android
```
