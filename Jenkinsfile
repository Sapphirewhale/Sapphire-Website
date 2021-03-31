pipeline {
    environment {
        CACHE_DIR = "/var/nm_cache/sapphire-website/"
        APACHE_DIR = "/var/www/html/"
    }
    agent {
        docker {
            image 'node:10-alpine' 
            args '-p 3000:3000' 
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

                 sh '''
                    ls -al
                    cache_dir="${CACHE_DIR}"
                    cache_nm="${CACHE_DIR}node_modules"
                    cache_lock="${CACHE_DIR}yarn.lock"

                    if [ ! -d "$cache_dir" ]; then mkdir ${cache_dir}; fi
                    if [ ! -d "$cache_nm" ]; then mkdir ${cache_nm}; fi
                    if [ -d "$cache_nm" ]; then ln -sf ${cache_nm} ./; fi
                    if [ -f "$cache_lock" ]; then mv -n ${cache_lock} .; fi

                    ls -al
                    '''
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
                    sh "npm start"
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