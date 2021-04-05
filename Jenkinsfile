pipeline {
    agent {
        docker {
            image 'node:10-alpine' 
        }
    }
    environment {
        npm_config_cache = 'npm-cache'
        SERVER_CREDENTIALSID = 'sapphire-server'
        Path = "${Path};usr/bin"
    }
    stages {
        stage('Setup') {
            steps {
                echo 'Giving Jenkins Permissions'
                //sh "chmod +x -R ${env.WORKSPACE}" 
            }
        }
        stage('Compile & Build React App') {
            steps {
                dir("sapphire-website"){
                    echo 'Compiling...'
                    //sh "npm install --unsafe-perm=true --allow-root"
                    echo 'Building...'
                    //sh "npm run build --unsafe-perm=true --allow-root"
                }
            }
        }
        stage('Serve the React App') {
            steps {
                dir("sapphire-website"){
                    echo 'Copying the app to apache directory'
                    //sh "chmod +x -R /var/www/" 
                    
                    sshagent(["${SERVER_CREDENTIALSID}"]) {
                      sh "scp -o StrictHostKeyChecking=no -r build/* sapphirewhale@10.0.0.6:/var/www/html/"
                    }
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