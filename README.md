<h1 align="center"> Blog API </h1>

<p align="right">
<img src="http://img.shields.io/static/v1?label=STATUS&message=%20FINISHED&color=GREEN&style=for-the-badge"/>
</p>

## ✔ Technologies used

-  <img align="center" alt="Matheus-DOCKER" height="30" src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white">
-  <img align="center" alt="Matheus-MYSQL" height="30" src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white">
-  <img align="center" alt="Matheus-NODE" height="30" src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white">
-  <img align="center" alt="Matheus-SQUELIZE" height="30" src="https://img.shields.io/badge/sequelize-323330?style=for-the-badge&logo=sequelize&logoColor=blue">

## 📒 Introduction

This is a project in which an API was implemented following the MSC architecture (Model - Service - Controller) with the help of an Object-Relational Mapping (ORM) tool, the Sequelize. 

The main idea was to implement an API for the possible implementation of a generic blog. This application was built in Node.js using the Sequelize package to perform CRUD operations on posts and users. Endpoints were developed, which are connected to a database following REST principles. In addition, it is required that the user is logged in, i.e., has made a login to generate a token, allowing them to perform post insertion, update, retrieval, and deletion.

## :book: Database

The database consists of three tables, namely "categories", "posts_categories", "blog_posts" and "users". The "posts_categories" table refers to the categories of each post.

## :bulb: Installation

To start the project, it is necessary to install npm in the directory and start the Docker. Docker-compose needs to be version 1.29 or higher.

install the dependencies:

```bash
npm install

docker-compose up -d
```
