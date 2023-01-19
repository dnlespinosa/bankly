1. auth/login - still recieving token even with incorrect password

Original Code
router.post('/login', async function(req, res, next) {
  try {
    const { username, password, } = req.body;
    let user = User.authenticate(username, password);
    const token = createTokenForUser(username, user.admin);
    return res.json({ token });
  } catch (err) {
    return next(err);
  }
});
Test
test("should not allow incorrect username and/or password to log in", async function() {
  const response = await request(app)
    .post("/auth/login")
    .send({
      username: "u1",
      password: "pwddd1"
    });
  expect(response.statusCode).toBe(401);
})
Fix - not awaiting User.authenticate which is an async function
let user = await User.authenticate(username, password);

2. router.patch(/:username) - users who are not admins are unable to change their information 
Original Code 
router.patch('/:username', authUser, requireLogin, requireAdmin, 
function requireAdmin(req, res, next) {
  try {
    if (req.curr_admin) {
      return next();
    } else {
      return next({ status: 401, message: 'Unauthorized' });
    }
  } catch (err) {
    console.log('requireAdmin')
    return next(err);
  }
}
Test - 
  test('should allow user who is not an admin to change data', async function() {
    const response = await request(app)
      .patch("/users/u1")
      .send({ _token: tokens.u1, first_name: "new-fn1" });
    expect(resonse.statusCode).toBe(200);
  })
Solution
Created a new route for admins to edit users 
Removed the requireAdmin from the router.patch(/:username)

3. router.get(/:username) - is returning the data for :username with ANY token 
Test - 
test('should deny access if incorrect token is provided', async function() {
    const response = await request(app)
      .get("/users/u1")
      .send({ _token: tokens.u2 });
    expect(response.statusCode).toBe(401);
  })
Solution - 
Checked the stored username from the token provided and compared it to the username provided in the params

