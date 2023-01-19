export const initialState = {
  status: "checking", //'checking','not-authenticated', 'authenticated
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
};

export const authenticatedState = {
  status: "authenticated", //'checking','not-authenticated', 'authenticated
  uid: "123asd",
  email: "demo@test.com",
  displayName: "test user",
  photoURL: "https://test.jpg",
  errorMessage: null,
};

export const notAuthenticatedState = {
  status: "not-authenticated", //'checking','not-authenticated', 'authenticated
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
};

export const demoUser = {
  uid: "ABC123",
  email: "demo@email.com",
  displayName: "Demo User",
  photoURL: "https://test.jpg",
};
