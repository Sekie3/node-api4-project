module.exports = function(app) {
    const users = [{ id: 1, username: 'user1' }];
  
    app.get('/api/users', (req, res) => {
      res.json(users);
    });
  
    app.post('/api/register', (req, res) => {
      const { username, password } = req.body;
  
      const newUser = {
        id: users.length + 1,
        username,
      };
  
      users.push(newUser);
      res.status(201).json(newUser); 
    });
  
    app.post('/api/login', (req, res) => {
      const { username, password } = req.body;
  
      const user = users.find(u => u.username === username);
  
      if (user) {
        res.send(`Welcome ${username}!`);
      } else {
        res.status(401).send('Username or password is incorrect');
      }
    });
  };
  