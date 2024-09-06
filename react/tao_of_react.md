# Tao of React

## Architecture

### 1.1 Common modules : 
Make use of common modules to maintain re-usable code at one place.

### 1.2 Use Absoulute Paths:
1. In lot of projects we use reference paths, those are not ideal for large prokects. it leaves us in ambiguity where what files is importing from which file.
2. We can make use of absoulute paths such as '@modules/common' prefix can be of any choice, and we have to configure in the module bundler or webpack.

### 1.3 Put components in folders

### 1.4 Group component by routes/modules

### 1.6 Wrap External components
Its better to create a wrapper for external components from MUI or any other, because in future if you want to change the markup its easier, all external componnents should be wrapped at one place for better understanding.

### 1.7 How to create a module
module is a logical unit of your application, we can take top level routes as modules.
![image](https://github.com/user-attachments/assets/2f2d9faf-7a99-4d17-9a81-3c05627427c9)
1. Components : will be the larger one and it takes all the components and sub components.
2. utils : it takes small and reusage logics where it isn't include business logic of the application, for example email validation
3. hooks : the hooks folder will keep the custom hooks we create, its recommended to abstract as much as logic we can to build custom hooks and separate the logic part from components.
4. api: the api folders holds the business logic that is specific to this module like functions and constants, this is different from utils, api will only deals with business logic such as calculations, or data manupulation logic
5. index.js: this is the start point of our module, the one that defines the page structure, routes, sub routes

### 1.8 Project structure should tell a story.
Use proper names, do not use common names like libraries and all

### 1.9 Keep things closed to where they've used.
too many files at the root folder will cause problems and ambiguity

### 1.10 Dont put business logic in utility functions.
Do not bind utility functions too tightly with business logic, if needed create a function more generic and use the function inside api folder 

### 1.11 Separate business logic from UI.
1. Abstract logic from UI component and put it in custom hooks. 
2. Sometimes if you want to call a hook inside a custom hook is also fine, to look more clean and polished.
3. If i can't put the logic in terms of hooks, we can have it as functions and constants at api folder, we can put domain specific logic in api folder.
4. Aim components clean from domain specific

### 1.12 Module should own their routes.
1. Generally in many applications all routes and sub routes are declared at one single place, it is not recommended because in future it can grow big and cause problems.
2. The above structure causes problem like every developer should make changes at one place
3. The modules should take ownership and build their sub routes inside the modules
4. In main route files only high level modules will be there

### 1.13 Avoid Single global contexts
1. Do not put everything in one single context.
2. Create different contexts for different use cases like theme, user settings, modal window.
3. Think of data storage points where context can be used. if it is limited to that module then wrap the context provider only to that module, do not wrap for entire application

### 1.14 Shared libraries and desingn system

### 1.15 Run the application with single command

### 1.16 Pin dependency versions

### 1.17 styling

### 1.18 Avoild Hard coding links
1. Dont hard code links for apis and hrefs
![image](https://github.com/user-attachments/assets/86d4ada5-5c6e-4b98-929d-9c60adbab2f0)

