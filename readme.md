# Project AC-Exercise-S2-3-A10-login-system-simple
Alpha camp Semester2-3 A10 login system simple

![alt text](https://github.com/yc62897441/AC-Exercise-S2-3-A10-login-system-simple/blob/main/images/sample001.JPG?raw=true)

![alt text](https://github.com/yc62897441/AC-Exercise-S2-3-A10-login-system-simple/blob/main/images/sample002.JPG?raw=true)

## Environment & Prerequisites

nvm: 1.1.9

@popperjs/core: ^2.11.4

body-parser: ^1.20.0

express: ^4.17.3

express-handlebars: ^6.0.3

mongoose: ^6.2.10

## Installing and Execution
1. Clone projet to your localhost
```
git clone https://github.com/yc62897441/AC-Exercise-S2-3-A10-login-system-simple.git
```

2. change directory to project file "AC-Exercise-S2-3-A10-login-system-simple"
```
cd "AC-Exercise-S2-3-A10-login-system-simple"
```

3. install npm module
```
npm install
```

4. change directory to account seeds file "AC-Exercise-S2-3-A10-login-system-simple/models/seeds"   
```
cd models/seeds
```

5. generate account seeds 
```
node accountSeeder.js
```

6. back directory to project file "AC-Exercise-S2-3-A10-login-system-simple"   
```
cd ..
cd ..
```

7. Run project
```
npm run dev
```

8. browse: localhost:3000


## Features
1. Verify the email summitted whether exists.

2. Verify the password summitted whether is correct, if the email summitted does exist.

3. Redirect to personal user page, if both of email and password summitted are correct.

4. Show a alert, if the email summitted dosen't exist or the password summitted is incorrect.
