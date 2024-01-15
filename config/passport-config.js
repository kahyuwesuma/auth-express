const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const users = [
  { id: 1, username: 'user1', password: 'password1' },
  { id: 2, username: 'user2', password: 'password2' }
];

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  const user = users.find(u => u.id === id);
  done(null, user);
});

passport.use(new LocalStrategy((username, password, done) => {
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    return done(null, user);
  } else {
    return done(null, false, { message: 'Incorrect username or password' });
  }
}));
