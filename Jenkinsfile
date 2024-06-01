pipeline {
    agent any
    tools {
        node 'node'
    }

    stages {
        stage("Checkout") {
            steps {   
                git url: 'https://github.com/cameushans/Modjo.git'
            }
        }
        stage('build') {
            steps {
                sh 'yarn build ${WORKSPACE}/main.ts'
            }
        }
    }

    post { always { echo 'This is your best pipeline'}}
