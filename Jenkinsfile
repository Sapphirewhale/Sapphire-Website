pipeline {
    environment {
        CACHE_DIR = "/var/nm_cache/sapphire-website/"
    }
    agent {
        docker {
            image 'node:10-alpine' 
            args '-v deploy:/var/www/'
        }
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
                    sh 'sudo chown -R 129:135 "/.npm"'
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
                    sh "rename build html"
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