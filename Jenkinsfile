pipeline {
    agent {
        docker {
            image 'node:6-alpine' 
            args '-p 4000:4000' 
        }
    }
    stages {
        stage('Setup') {
            steps {
                echo 'Giving Jenkins Permissions'
                sh "chmod +x -R ${env.WORKSPACE}" 
                echo 'Giving npm permission'
                sh "chown -R ${env.WORKSPACE} ~/.npm"
            }
        }
        stage('Compile') {
            steps {
                echo 'Compiling react app'
                sh './jenkins/scripts/deliver.sh'
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