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
- [x] Add routes file
- [x] Add home controller
- [x] Add error controller `404 Page`

### 3. Handlebars

- [x] Install handlebars `express-handlebars`
- [x] Config handlebars engine
- [x] Config handlebars file extension
- [x] Use handlebars engine
- [x] Set views folder
- [x] Add home view /in home controller/
- [x] Render home view without layout `{layout: false}`
- [x] Fix assets paths in html/hbs
- [x] Add layout /remove from html/hbs/ and remove `{layout: false}`
- [x] Add partials dir
- [x] Config handlebars to work with mongoose documents `omit lean()`
  - [x] `runtimeOptions : { allowProtoPropertiesByDefault: true, allowProtoMethodsByDefault: true }`

### 4. Database

- [x] Install mongoose
- [x] Connect to db
- [x] Add Error handling on connect
- [x] Add simple user model

### 5. Register

- [x] Fix navigation links
- [x] Add user controller
- [x] Add user controller to routes
- [x] Create register view
- [x] Render register view
- [x] Modify register form
- [x] Create post route for register
- [x] Create user service
- [x] Redirect after successful register
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
