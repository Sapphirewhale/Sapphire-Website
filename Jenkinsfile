pipeline {
    agent {
        docker {
            image 'node:6-alpine' 
            args '-p 4000:4000' 
        }
    }
    environment {
        npm_config_cache = 'npm-cache'
    }
    stages {
        stage('Setup') {
            steps {
                echo 'Giving Jenkins Permissions'
                sh "chmod +x -R ${env.WORKSPACE}" 
            }
        }
        stage('Compile') {
            steps {
                echo 'Compiling react app'
                echo 'Changing directories'
                sh 'cd sapphire-website'

                echo 'Installing the app'
                sh 'npm install --unsafe-perm=true --allow-root'

                echo 'Building the app'
                sh 'npm run build --unsafe-perm=true --allow-root'
            }
        }
        stage('Security Check') {
            steps {
                echo 'Run security check against the application' 
            }
        }
        stage('Run Unit Tests') {
            steps {
                echo 'Run unit tests from the source code' 
            }
        }
        stage('Run Integration Tests') {
            steps {
                echo 'Run only crucial integration tests from the source code' 
            }
        }
        stage('Publish Artifacts') {
            steps {
                echo 'Save the assemblies generated from the compilation' 
            }
        }
    }
}