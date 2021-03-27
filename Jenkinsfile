pipeline {
    agent {
        docker {
            image 'node:6-alpine' 
            args '-p 4000:4000' 
        }
    }
    stages {
        stage('Static Analysis') {
            steps {
                echo 'Run the static analysis to the code' 
            }
        }
        stage('Compile') {
            steps {
                echo 'Compiling react app'
                sh 'sudo ./jenkins/scripts/deliver.sh'
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