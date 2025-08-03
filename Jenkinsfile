pipeline {
    agent any

    environment {
        IMAGE_NAME = "simple-node-notes-app"
        CONTAINER_NAME = "node-notes-app"
        PORT = "3000"
    }

    stages {
        stage('Git Checkout') {
            steps {
                git 'https://github.com/Siddhantrathod/Simple-Node-Notes-app.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh "docker build -t $IMAGE_NAME ."
            }
        }

        stage('Stop Existing Container') {
            steps {
                sh "docker rm -f $CONTAINER_NAME || true"
            }
        }

        stage('Run New Container') {
            steps {
                sh "docker run -d --name $CONTAINER_NAME -p $PORT:3000 $IMAGE_NAME"
            }
        }

        stage('Verify App is Running') {
            steps {
                sh "sleep 5 && curl -f http://localhost:$PORT || (echo 'App did not start properly!' && exit 1)"
            }
        }
    }

    post {
        failure {
            echo "❌ Deployment Failed"
        }
        success {
            echo "✅ App is deployed and running on EC2: http://<your-ec2-ip>:3000"
        }
    }
}