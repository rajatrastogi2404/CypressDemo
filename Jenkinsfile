pipeline {
    agent any
    stages {
        stage('Test') {
            steps {
               bat 'npm run cypress:run'
            }
        }
    }
}