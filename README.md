# CypressDemo
Test automation for web and api's using Cypress

# Pre-requisites

1. NodeJS
2. VisualStudioCode IDE

# How to build

1. Clone the PRIVATE repository https://github.com/rajatrastogi2404/CypressDemo	
2. Open CypressDemo project into VisualStudioCode IDE.

# Run the tests

1. To run API and web test : Go to terminal and type 'npm run cypress:run'
2. To run API test : Go to terminal and type 'cypress run --browser=chrome -s .\cypress\integration\web_src\test_api.spec.js' 
3. To run Web test : Go to terminal and type 'cypress run --browser=chrome -s .\cypress\integration\web_src\test_web.spec.js' 

# Configure to CI Pipeline

1. Used Jenkins as a CI tool and created Jenkinsfile.
2. Create a Multibranch Pipeline
3. Checkout SCM
4. Path for Jenkinsfile
5. Build the pipeline

# Description about source code

1. Tests are placed in CypressDemo\cypress\integration directory.
2. For API test 'test_api.spec.js', refer the path: 'CypressDemo\cypress\integration\api_src'
3. For Web test 'test_web.spec.js', refer the path: 'CypressDemo\cypress\integration\web_src'
4. For pageObjects, refer the path: 'CypressDemo\cypress\pageObject'
5. For actions respective to page elements, refer the path : 'CypressDemo\cypress\action' 
6. For Utilities to generate Hash, refer the path : 'C:\Users\RTR\git\CypressDemo\cypress\utils'

# PS
1. I was unable to reproduce 403 Error code in API test that's why could not automate the test.
2. I'm using Windows OS that's why put 'bat' keyword in Jenkinsfile. To work on other OS's , please change to 'sh' in Jenkinsfile.
3. Currently tests will run on Chrome browser. To run on 'electron' browser, please change  "cypress:run": "cypress run --browser=chrome" to  "cypress:run": "cypress run" in package.json file
