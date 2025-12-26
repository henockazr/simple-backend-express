# 🚀 Student Management API

A robust and scalable Backend API designed for managing student data. Built with a focus on **security**, **performance**, and **industry-standard architecture**.

This project demonstrates a complete backend development lifecycle, from database design to cloud deployment with a custom domain.

🔗 **Live Demo:** [https://api.azrielhenock.xyz/](https://api.azrielhenock.xyz/)

---

## ✨ Key Features

* ✅ **CRUD Operations:** Full capability to Create, Read, Update, and Delete student records.
* 🔒 **Secure Authentication:** User registration and login protected by **Bcrypt** (Password Hashing).
* 🎫 **JWT Authorization:** Endpoint protection using **JSON Web Tokens** (Stateless Authentication).
* 🛡️ **Input Validation:** Strict request data validation using `express-validator` to ensure data integrity.
* 🐘 **PostgreSQL Database:** Utilizes a relational database for structured and reliable data storage.
* ☁️ **Cloud Deployment:** Deployed on **Railway** with a secure HTTPS connection and custom domain.

---

## 🛠️ Tech Stack

* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** PostgreSQL
* **Authentication:** JWT & Bcrypt
* **Deployment:** Railway
* **Tools:** Postman, Git, pgAdmin

---

## 📚 API Documentation

Below is the list of available endpoints.

### 🔐 Authentication

| Method | Endpoint | Description | Request Body |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/auth/register` | Register a new admin user | `{ name, email, password }` |
| `POST` | `/api/auth/login` | Login & receive Access Token | `{ email, password }` |

### 🎓 Students (Protected Routes)

> **Note:** You must include the `Authorization` header with the Bearer Token to access these endpoints.
>
> `Authorization: Bearer <your_token_here>`

| Method | Endpoint | Description | Request Body |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/students` | Retrieve all students | - |
| `GET` | `/api/students/:id` | Retrieve a specific student | - |
| `POST` | `/api/students` | Create a new student | `{ name, skill }` |
| `PUT` | `/api/students/:id` | Update student data | `{ name, skill }` |
| `DELETE` | `/api/students/:id` | Delete a student | - |

---

## 💻 Run Locally

If you wish to run this project on your local machine:

1.  **Clone the Repository**
    ```bash
    git clone [https://github.com/henockazr/simple-backend-express.git](https://github.com/henockazr/simple-backend-express.git)
    cd your-repo-name
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Setup Environment Variables**
    Create a `.env` file in the root directory and configure the following:
    ```env
    PORT=3000
    DB_USER=postgres
    DB_PASSWORD=your_local_password
    DB_HOST=localhost
    DB_NAME=learn_express
    DB_PORT=5432
    JWT_SECRET=your_local_secret_key
    ```

4.  **Start the Server**
    ```bash
    npm start
    ```

---

Created with "Awesomeness" by **Azriel Henock**.