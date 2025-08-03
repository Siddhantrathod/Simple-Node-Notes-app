# 📦 Simple Node.js Application – Jenkins CI/CD Demo

![Jenkins](https://img.shields.io/badge/CI-Jenkins-blue?logo=jenkins)
![Docker](https://img.shields.io/badge/Containerized-Docker-blue?logo=docker)
![Node.js](https://img.shields.io/badge/Backend-Node.js-green?logo=node.js)
![GitHub](https://img.shields.io/badge/Source-GitHub-black?logo=github)

---

## 📌 Project Overview

This project demonstrates a **complete CI/CD pipeline** setup using **Jenkins** for a simple **Node.js** application.

It’s designed to help:
- 🧑‍💻 **DevOps beginners**
- 🧪 **Students**
- 🎯 **Interview candidates**

> 💡 While the app is intentionally simple, the **goal is to learn Jenkins automation, Docker containerization**, and real-world DevOps flow — essential for junior DevOps roles.

---

## 🚀 What You’ll Learn

✅ Connect Jenkins to a GitHub repo  
✅ Automate builds, tests, and deployments using a `Jenkinsfile`  
✅ Containerize apps using Docker  
✅ Trigger builds via GitHub push or Jenkins UI  

---

## 🛠️ Tech Stack

| Tool        | Purpose                    |
|-------------|-----------------------------|
| **Node.js** | Application Runtime         |
| **npm**     | Dependency Management       |
| **Jenkins** | Continuous Integration Tool |
| **Docker**  | Containerization            |
| **GitHub**  | Source Code Hosting         |

---
## 🧪 Quick Start Guide

### 🔁 1. Clone the Repository

```bash
git clone https://github.com/<YOUR-USERNAME>/<YOUR-REPO-NAME>.git
cd <YOUR-REPO-NAME>
```

### 💻 2. Run Locally (Optional)
```bash
npm install
npm start
```
> 🔗 Visit: http://localhost:3000

### 🐳 3. Build Docker Image (Optional)
```bash
docker build -t simple-node-app .
docker run -p 3000:3000 simple-node-app
```

## 👷 Jenkins CI/CD Pipeline

### 🔄 Pipeline Flow
```bash
GitHub Push ➜ Jenkins Trigger ➜ Checkout ➜ Install ➜ Test ➜ Docker Build ➜ Run Container
```

### 🧱 Pipeline Stages (from Jenkinsfile)

> Checkout
  Pull latest code from GitHub

> Install
  Run npm install to install dependencies

> Test
  Run tests using npm test (⚠️ Test failures won’t stop pipeline (|| true used) )

> Docker Build
  Build Docker image from Dockerfile

> Run Container
  Deploy container on port 3000



### 🧰 How to Use This Project
### 🔧 Jenkins Setup
> - Install Jenkins on your system or use Docker.

> - Install required plugins:

- ✅ Docker Pipeline

- ✅ Git

- ✅ NodeJS

> - Configure Jenkins:

- Connect Jenkins to your GitHub repository

- Create a new Pipeline job and point it to this repo

- Ensure Jenkins agent can run Docker

### ⚙️ Trigger Builds
- Automatically: via GitHub webhook or SCM polling

- Manually: use “Build Now” in Jenkins UI