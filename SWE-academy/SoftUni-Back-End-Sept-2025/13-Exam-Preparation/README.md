# SoftUni JS Back-End Exam Preparation

## 1. Create Skeleton Project

### 1. Initialize Project

- [x] Initialize npm project
- [x] Change module system
- [x] Add start file `/src/index.js`
- [x] Add dev script
- [x] Config debugger
- [x] Add resources

### 2. Express

- [x] Install express
- [x] Init express server
- [x] Setup static middleware
- [x] Add body parser `form parser - urlencoded({extended: false})`
- [ ] Add JSON parser `optional`
- [ ] Add route file
- [ ] Add home controller
- [ ] Add error controller `404 Page`

### 3. Handlebars

- [ ] Install handlebars `express-handlebars`
- [ ] Config handlebars engine
- [ ] Use handlebars engine
- [ ] Config handlebars file extension
- [ ] Set views folder
- [ ] Add home view /home controller/
- [ ] Render home view without layout `{layout: false}`
- [ ] Fix assets paths in html/hbs
- [ ] Add layout /remove from html/hbs/ and remove `{layout: false}`
- [ ] Add partials dir
- [ ] Config handlebars to work with mongoose documents `omit lean()`
  - [ ] `runtimeOptions : { allowProtoPropertiesByDefault: true, allowProtoMethodsByDefault: true }`

### 4. Database

- [ ] Install mongoose
- [ ] Connect to db
- [ ] Add Error handling on connect
- [ ] Add simple user model

### 5. Register

- [ ] Fix navigation links in layout
- [ ] Add user controller
- [ ] Add user controller to routes
- [ ] Create register view
- [ ] Render register view
- [ ] Modify register form
- [ ] Create post route for register
- [ ] Create user service
- [ ] Redirect after successful register
- [ ] Install bcrypt
- [ ] Hash password before save
- [ ] BONUS: Check if user exists

### 6. Login

- [ ] Fix login navigation link
- [ ] Add login view
- [ ] Crete get login action
- [ ] Fix login form
- [ ] Add post login action
- [ ] Add login method in userService
- [ ] Validate if user exists
- [ ] Validate password
- [ ] Install jsonwebtoken
- [ ] Generate token
- [ ] Call userService from userController
- [ ] Send token as cookie
- [ ] Redirect to homepage
- [ ] BONUS: Extract jwt secret to constant or env
- [ ] Auto login on register

### 7. Logout

- [ ] Add logout navigation link
- [ ] Add logout action

### 8. Authentication

- [ ] Install and use cookie-parser
- [ ] Create auth middleware
  - [ ] Allow if guest (no token)
  - [ ] Verify token (clear session if invalid)
  - [ ] Attach decoded token to req.user (of token)
- [ ] Use auth middleware

### 9. Authorization

- [ ] Create isAuth middleware
- [ ] Create isGuest middleware
- [ ] Add route guards
- [ ] Add not found page

### 10. Dynamic content

- [ ] Add use data to handlebars context
- [ ] Dynamic navigation
- [ ] Dynamic page titles
- [ ] BONUS: Set page title from view

### 11. Error handling and Validation

- [ ] Add error message in notification
- [ ] Notification conditional rendering
- [ ] Create getErrorMessage util function
- [ ] Add error handling for register
- [ ] Add register form data persistence
- [ ] Check repeat password
- [ ] BONUS: Check repeatPassword in model
- [ ] Error handling and data persistence on login

### Bonus

- [ ] Export helpers into separate module
- [ ] Add env variable for debugging `dotenv`
- [ ] Add global error handler
- [ ] Add bundler
- [ ] Use async jwt
- [ ] Refresh token
