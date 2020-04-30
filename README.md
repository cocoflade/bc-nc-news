# Flannery-nc-news

https://flannery-nc-news.herokuapp.com/api/

A server built using express with the ability to provide a series of reddit-style article data to a front-end. This project makes use of a PSQL database, utilizing knex in order to query the database.

## Getting Started

These instructions will allow you to get a copy of the project up and running on your local machine for development and testing purposes.

## Cloning the project

Provided are a series of CLI commands in order to successfully clone this project:

``` git clone https://github.com/cocoflade/flannery-nc-news.git ```

Install node dependencies to the local node_modules folder, then install the relevant project dependencies as documented below:

``` npm install ```

Seed the database:

``` npm run setup-dbs ```

```npm run seed```

Begin running the server:

```npm run start```

## Using the API 

In order to see the list of available endpoints, produce a GET request to ```/api/```, alternatively see below:

### /api/

* **GET** ```/api/```

### /api/topics

* **GET** ```/api/topics```
* **POST** ```/api/topics```

### /api/articles

* **GET** ```/api/articles```
* **POST** ```/api/articles```
* **GET** ```/api/articles/:article_id```
* **PATCH** ```/api/articles/:article_id```
* **DELETE** ```/api/articles/:article_id```
* **GET** ```/api/articles/:article_id/comments```
* **POST** ```/api/articles/:article_id/comments```

### /api/comments

* **PATCH** ```/api/comments/:comment_id```
* **DELETE** ```/api/comments/:comment_id```

### /api/users

* **GET** ```/api/users```
* **POST** ```/api/users```
* **GET** ```/api/users/:username```

## Running tests

A full suite of automated tests for this system, built using test-driven development are provided for you and available using the following CLI command. Ensure *mocha* and *chai* have been installed as dependencies before taking this step:

```npm test```

To test the provided utility functions:

```npm run test-utils```

## Built Using

* Node.JS
*	Express
*	PostgreSQL
*	Knex
*	Chai
*	Mocha
*	Supertest

## Author 

Luke Flannery

## Acknowledgments

I'd like to give a special thank you to the wonderful team at Northcoders, Manchester, for giving me the tools and knowledge necessary to create such a project. Visit them at https://northcoders.com/


