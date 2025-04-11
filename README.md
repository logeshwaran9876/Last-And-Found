# 🔍 Lost & Found Portal

A full-stack web app where users can report lost items and claim found ones. Built to help connect people with their missing stuff! 🧢📱🎒

---

## 🚀 Features

- 📝 Report lost or found items
- 🔍 Search items by category, location, or keywords
- 📦 Image upload for items
- 👤 User login and roles (admin/user)
- 🛠 Admin panel for managing reports
- 📬 Messaging/contact system for item return

---

## 🛠 Tech Stack

**Frontend**
- HTML
- CSS
- Bootstrap
- JavaScript

**Backend**
- PHP
- MySQL
- REST API

**Tools**
- Git & GitHub
- XAMPP / WAMP (for local server)

---

## 🖼️ Screenshots

_Add some fire visuals here in the `/screenshots` folder_

```bash
📁 /screenshots
   ├── home.png
   ├── report.png
   └── found.png
📦 Installation Guide
Clone the project:

bash
Copy
Edit
git clone https://github.com/yourusername/lost-and-found.git
Move the folder to your XAMPP/WAMP htdocs directory.

Import the lost_found.sql file into your MySQL database:

sql
Copy
Edit
CREATE DATABASE lost_found;
USE lost_found;
-- then import the .sql file
Start Apache and MySQL via XAMPP.

Open your browser:

arduino
Copy
Edit
http://localhost/lost-and-found/
🧠 Usage
Go to the homepage.

Register/Login as a user.

Report lost or found items.

Search the item list.

Admins can log in to manage posts and users.

📁 Project Structure
bash
Copy
Edit
📦 lost-and-found/
├── index.php
├── login.php
├── register.php
├── report_lost.php
├── report_found.php
├── search.php
├── admin/
│   ├── dashboard.php
│   └── manage_items.php
├── assets/
│   ├── css/
│   ├── js/
│   └── images/
├── db/
│   └── config.php
└── lost_found.sql
