#!/bin/bash

# AWS and Docker Image details
AWS_REGION="your-aws-region"
AWS_ACCOUNT_ID="your-aws-account-id"
ECR_REPOSITORY="your-ecr-repo-name"
IMAGE_TAG="your-image-tag"

# EC2 details
EC2_PUBLIC_IP="your-ec2-public-ip"
EC2_SSH_KEY="/path/to/your-ec2-key.pem"
EC2_PORT="your-local-port" # port on EC2 instance
CONTAINER_PORT="your-container-port" # port inside Docker container

# Build Docker image
docker build -t ${ECR_REPOSITORY} .

# AWS ECR login
aws ecr get-login-password --region ${AWS_REGION} | docker login --username AWS --password-stdin ${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com

# Tag Docker image
docker tag ${ECR_REPOSITORY}:latest ${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/${ECR_REPOSITORY}:${IMAGE_TAG}

# Push Docker image to ECR
docker push ${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/${ECR_REPOSITORY}:${IMAGE_TAG}

# SSH into EC2 instance and execute commands
ssh -o StrictHostKeyChecking=no -i ${EC2_SSH_KEY} ec2-user@${EC2_PUBLIC_IP} << 'EOF'

    # Authenticate with AWS ECR
    $(aws ecr get-login-password --region ${AWS_REGION} | docker login --username AWS --password-stdin ${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com)

    # Pull the Docker image from ECR
    docker pull ${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/${ECR_REPOSITORY}:${IMAGE_TAG}

    # Run the Docker image
    docker run -d -p ${EC2_PORT}:${CONTAINER_PORT} ${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/${ECR_REPOSITORY}:${IMAGE_TAG}

EOF
