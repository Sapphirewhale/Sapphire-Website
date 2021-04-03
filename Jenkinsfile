pipeline {
    agent {
        docker {
            image 'node:10-alpine' 
            args '-v deploy:/var/www/html'
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
                    //sh "chmod +x -R /var/www/" 
                    sh "sudo cp -r build/* /var/www/html"
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