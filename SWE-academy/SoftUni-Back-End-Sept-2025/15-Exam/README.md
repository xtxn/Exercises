# SoftUni JS Back-End Exam Preparation Cheat Sheet

## Create Skeleton Project

#### 1. Initialize Project

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
- [x] Install bcrypt
- [x] Hash password before save
- [x] BONUS: Check if user exists

### 6. Login

- [x] Fix login navigation link
- [x] Add login view
- [x] Crete get login action
- [x] Fix login form
- [x] Add post login action
- [x] Add login method in userService
- [x] Validate if user exists
- [x] Validate password
- [x] Install jsonwebtoken
- [x] Generate token
- [x] Call userService from userController
- [x] Send token as cookie
- [x] Redirect to homepage
- [x] BONUS: Extract jwt secret to constant or env
- [x] Auto login on register

### 7. Logout

- [x] Add logout navigation link
- [x] Add logout action

### 8. Authentication

- [x] Install and use cookie-parser
- [x] Create auth middleware
  - [x] Allow if guest (no token)
  - [x] Verify token (clear session if invalid)
  - [x] Attach decoded token to req.user (of token)
- [x] Use auth middleware

### 9. Authorization

- [x] Create isAuth middleware
- [x] Create isGuest middleware
- [x] Add route guards /in userController/
- [x] Add not found page

### 10. Dynamic content

- [x] Add use data to handlebars context
- [x] Dynamic navigation
- [x] Dynamic page titles
- [ ] BONUS: Set page title from view

### 11. Error handling and Validation

- [x] Add error message in notification
- [x] Notification conditional rendering
- [x] Create getErrorMessage util function
- [x] Add error handling for register
- [x] Add register form data persistence
- [x] Check repeat password
- [ ] BONUS: Check repeatPassword in model
- [x] Error handling and data persistence on login

### Bonus

- [ ] Export helpers into separate module
- [ ] Add env variable for debugging `dotenv`
- [ ] Add global error handler
- [ ] Add bundler
- [ ] Use async jwt
- [ ] Refresh token

## Steps to Use the Skeleton Project

- [x] Install dependencies `npm i`
- [x] Remove old resources and add new resources `/src/public`
- [x] Add html files to the views folder
- [x] Rename database name
- [] Replace layout
  - [] Dynamic title
  - [x] Fix resource routes
  - [x] Error notification
  - [x] Body
  - [x] Dynamic Navigation
- [x] Replace home page
- [x] Modify navigation links
- [x] Modify User model
- [x] Modify login and register controller
- [x] Modify login and register service
- [x] Modify token generation
- [x] Modify login and register error handlers
- [x] Replace login page
- [x] Replace register page
- [x] Replace 404 page

## Solve Mind Blog Exam Prep

### Create Blog Page

- [x] Fix create blog navigation link
- [x] Add blog controller
- [x] Add controller to routes
- [x] Add create action with render
- [x] Add blogs folder in views
- [x] Add create blog view
- [x] Add blog model
- [x] Modify create blog form
- [x] Create blog post action
- [x] Create blog service with create method
- [x] Add owner on blog creation
- [x] Add error handling

### Blogs Catalog Page

- [x] Fix navigation link
- [x] Add catalog view
- [x] Add get catalog action with static blogs
- [x] Get all blogs service
- [x] Show dynamic blogs

### Home page blogs

- [x] Add get latest blogs in blog service
- [x] Show dynamic latest blogs on home

### Blog details

- [x] Fix details link in blogs page
- [x] Fix details link in home page
- [x] Show static details page
- [x] Add getOne method in blog service
- [x] Show dynamic details page (without author and followers)
- [] Show dynamic author
- [] Hide buttons if not logged
- [] Show edit and delete button if author
- [] Show follow and already following buttons if logged
- [ ] Implement follow functionality
  - [] Add followers in blog relation
  - [] Add follow action
  - [] Add follow service method
  - [] Fix follow link
- [] Show dynamic followers
- [] Show follow button or already following buttons conditionally

### Delete blog

- [] Fix navigation link in details
- [] Add delete action
- [] Add delete method in blog service

### Edit blog

- [] Fix navigation link in details
- [] Add get edit action
- [] Show empty edit page
- [] Populate edit form with blog data
- [] Add post edit action
- [] Add edit method in blog service
- [] Add error handling

### Profile

- [] Fix navigation link
- [] Show static profile page
- [] Show dynamic user information
- [] Show created blogs
- [] Show followed blogs

## Validation and error handling

### Bonus 1

- [] Fix sort(_id) problem
