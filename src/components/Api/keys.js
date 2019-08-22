const firestoreKey = {
  apiKey: process.env.YOUR_API_KEY,
  authDomain: process.env.YOUR_AUTH_DOMAIN,
  databaseURL: process.env.YOUR_DATABASE_URL,
  projectId: process.env.YOUR_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.YOUR_MESSAGING_SENDER_ID,

};

class Firebase {
  constructor() {
    app.initializeApp(firestoreKey);
  }
}
export default Firebase;
