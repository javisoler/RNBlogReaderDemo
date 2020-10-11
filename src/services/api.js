const POSTS_URL = 'http://jsonplaceholder.typicode.com/posts';
const USERS_URL = 'http://jsonplaceholder.typicode.com/users';
const COMMENTS_URL = 'http://jsonplaceholder.typicode.com/comments';

/**
 * Fetch All Posts
 */
export async function getPosts() {
  const response = await fetch(POSTS_URL);
  const json = await response.json();

  return json;
}

/**
 * Fetch All Users
 */
export async function getUsers() {
  const response = await fetch(USERS_URL);
  const json = await response.json();

  return json;
}

/**
 * Fetch All Comments
 */
export async function getComments() {
  const response = await fetch(COMMENTS_URL);
  const json = await response.json();

  // Simulate longer wait
  await sleep();

  return json;
}

const sleep = (time = 1000) =>
  new Promise((resolve) => setTimeout(resolve, time));
