pipeline {
    agent {
        docker {
            image 'node:10-alpine' 
            args '-v deploy:/var/www/'
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
        stage('Compile & Build React App') {
            steps {
                dir("sapphire-website"){
                    echo 'Compiling...'
                    sh "npm install --unsafe-perm=true --allow-root"
                    echo 'Building...'
                    sh "npm run build --unsafe-perm=true --allow-root"
                }
            }
        }
        stage('Serve the React App') {
            steps {
                dir("sapphire-website"){
                    echo 'Copying the app to apache directory'
                    sh "mv build html"
                    sh "cp html /var/www/"
                }
            }
        }
        stage('Publish Artifacts') {
            steps {
                echo 'Save the assemblies generated from the compilation' 
            }
        }
    }
}