# 📦 Simple Node.js Application – Jenkins CI/CD Demo

## 📌 Project Overview

This project demonstrates a complete CI/CD pipeline setup using **Jenkins** for a basic **Node.js** application.  
It is designed to help **DevOps beginners**, **students**, or **interview candidates** learn the real-world implementation of a Jenkins-driven pipeline that builds, tests, and containerizes a Node.js app.

> 💡 While the Node.js app is minimal, the focus is on CI/CD automation and containerized deployments using **Jenkins** and **Docker** — key skills for entry-level DevOps roles.

---

## 🚀 What You’ll Learn

- Connect Jenkins to a GitHub repository  
- Automate build, test, and deployment pipelines using a `Jenkinsfile`  
- Containerize Node.js applications using Docker  
- Trigger builds via GitHub code push or Jenkins “Build Now” button  

---

## 🛠️ Tech Stack

- **Node.js** & **npm**
- **Jenkins** (CI/CD server)
- **Docker** (for containerization)
- **GitHub** (source code management)

---

## ⚙️ Project Structure
.
├── Dockerfile # For containerizing the Node.js app
├── Jenkinsfile # Declarative Jenkins pipeline definition
├── app.js # Main app code
├── package.json # Node dependencies and scripts
└── README.md # Project documentation

---

## 🧪 Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/<YOUR-USERNAME>/<YOUR-REPO-NAME>.git
cd <YOUR-REPO-NAME>

2. Run Locally (Optional)
bash
Copy
Edit
npm install
npm start
# Visit http://localhost:3000/

3. Build Docker Image (Optional)
bash
Copy
Edit
docker build -t simple-node-app .
docker run -p 3000:3000 simple-node-app

👷 Jenkins CI/CD Pipeline
Pipeline Flow
css
Copy
Edit
GitHub Code Push → Jenkins Webhook Trigger → Pipeline Execution
Pipeline Stages (from Jenkinsfile):
Checkout: Pull code from GitHub repo

Install: Install Node.js dependencies using npm install

Test: Run tests with npm test (fail-safe: will not stop pipeline on failure)

Docker Build: Build Docker image from source

Run Container: Deploy the built Docker image


🧰 How to Use This Project
Install Jenkins and required plugins:

Docker

Git

NodeJS

Connect Jenkins to your GitHub repository.

Make sure your Jenkins agent has Docker installed and accessible.

Trigger build:

Automatically (via GitHub webhook or polling)

Manually (via Jenkins “Build Now” button)