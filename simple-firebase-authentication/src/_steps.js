/**
    * Steps to use firebase
    * 1. Create a project on console.google.com
    * 2. install firebase(npm install firebase)
    * 3. Register Web app in firebase
    * 4. copy firebase init with config from firebase project setting into a file firebase.init.js
    * 5. export default app
    * 6. import app firebase init.js into your app.js 
    * 7. import getAuth from firebase/auth and create auth = getAuth(app)
    * 8. trun on google authentication (firebase > authentication > google sign in)
    * 9. create google auth provider
    * 10. use signInWithPopup and pass auth and provider
    * 11. handle .then (if successful) and .catch error (if error)
*/