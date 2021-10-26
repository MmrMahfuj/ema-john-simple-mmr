const firebaseConfig = {
    apiKey: "AIzaSyBDojvsXbn6vg9lNBK7TejilVWIKIl0xnI",
    authDomain: "ema-john-simple-a70da.firebaseapp.com",
    projectId: "ema-john-simple-a70da",
    storageBucket: "ema-john-simple-a70da.appspot.com",
    messagingSenderId: "990100776727",
    appId: "1:990100776727:web:0ef944a1ed4560257db952",
};

export default firebaseConfig;

/*
steps for authentication
------------------------

Step-1: initial setup
1. firebase: create project
2. create web app
3. get configuration
4. initialize firebase
5. enable auth method
-------------------------

Step-2: setup component
1. Create Login Component
2. Create Tegister Component
3. Create Route for Login and Register

-------------------------
Step-3: set auth system
1. set up sign in method
2. setup sign out method
3. user state
4. special observer
5. return necessary methods and states from useFirebase
----------------------------
Step-4: create auth context hook (use Auth)
1. create a auth context
2. create context provider
3. set context provider context value
4. use auth provider
5. create useAuth hook
---------------------------
Step-5: create private route
1. create private Route
2. set private route

----------------------------
Step-6: Redirect after login
1. after login redirect user to their desired destination

*/
