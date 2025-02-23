function registerUser(username, callback) {
  setTimeout(() => {
    if (!username) {
      callback("Registration failed: Username is required");
    } else {
      console.log("User registered successfully");
      callback(null, username);
    }
  }, 1000);
}

function sendVerification(username, callback) {
  setTimeout(() => {
    if (username !== "validUser") {
      callback("Verification failed: Invalid user");
    } else {
      console.log("Verification email sent");
      callback(null, username);
    }
  }, 1000);
}

function loginUser(username, callback) {
  setTimeout(() => {
    if (username !== "validUser") {
      callback("Login failed: Incorrect username");
    } else {
      console.log("User logged in successfully");
      callback(null, username);
    }
  }, 1000);
}

function displayWelcomeMessage(username, callback) {
  setTimeout(() => {
    console.log(`Welcome, ${username}!`);
    callback();
  }, 1000);
}

registerUser("validUser", (err, username) => {
  if (err) return console.error(err);

  sendVerification(username, (err, username) => {
    if (err) return console.error(err);

    loginUser(username, (err, username) => {
      if (err) return console.error(err);

      displayWelcomeMessage(username, () => {
        console.log("Workflow completed successfully");
      });
    });
  });
});
