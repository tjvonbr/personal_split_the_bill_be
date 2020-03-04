# Split the Bill

## Contributors
* Trevor Von Bruenchenhein
* Ryan Wisniewski
* Jeff Oliver

## Overview
Split the Bill is a web application designed to make splitting the bill amongst a group of fellow restaurant-goers a simpler task.  Some of the established payment applications (e.g., Venmo, Cash, etc.) already make sending and receiving payments easier, but for each of the provided examples, we still have to compute how much each individual is going to be charged, then request that amount.  With Split the Bill, however, we only need to enter the bill's total amount, then select the individuals who are present.  Split the Bill will then request an equal payment from everyone sitting at the table.

### User Flow
1.  You and three friends visit your favorite pizza place and order three pizzas.
2.  The server brings the bill after you're all done, and the bill's total is $60.00.
3.  You pull out your credit card and offer it as payment at the restaurant.
4.  You log in to your Split the Bill account and enter details about the meal (including total of $60.00).
5.  You find the profiles of each of the individuals that are at the restaurant with you and include them on the bill.
6.  Split the Bill will then request money from those individuals so that everyone pays an equal amount.
  
### Key Features
* Split the bill evenly amongst people sharing one bill at a restaurant
* Stored history of restaurant and payment visits

### Frameworks and Libraries
#### Front end built with:
* React
* Semantic-UI
* Styled Components
* Formik
* Yup

#### Back end built with:
* Node
* Express
* SQL
* JSON Web Token

## API
**Base URL:  https://split-the-bill-bw.herokuapp.com**
### Register a new user
#### POST /api/user/register

Expects object:
```
{
    "firstName": "test",
    "lastName": "test",
    "email": "test@test.com",
    "username": "test",
    "password": "test123"
}
```

Returns object:

```
{
  "id": // auto-incrementing id
  "firstName": "test",
  "lastName": "test",
  "email": "test@test.com",
  "username": "test",
  "password": // encrypted password
}
```

### Login existing user
####  POST /api/user/login

Expects object:

```
{
    "username": "test",
    "password": "test123"
}
```

Returns object:

```
{
    "message": "Welcome 'username'",
    "token": // JSON web token
}
```

### Get ALL meals for user
#### GET /user/:id/meal

Returns meals by user_id as an array.

```
[
    {
        "restaurant": "Chile's",
        "meal": "Hamburger",
        "total_price": "36.05",
        "description": "I owe someone 18.02"
    },
    {
        "restaurant": "Mcdonalds",
        "meal": "Hamburger",
        "total_price": "36.05",
        "description": "I owe someone 18.02"
    }
]
```

All keys are required except *description*

### Get single meal for user
#### GET /user/:id/meals/:ids

Returns single meal by user_id as an object.

```
{
    "restaurant": "Mcdonalds",
    "meal": "Hamburger",
    "total_price": "36.05",
    "description": "I owe someone 18.02"
}
```

All keys are required except *description*

### Create new meal
#### POST /user/:id/meals/

Creates single meal by user_id as an object.

```
{
    "restaurant": "Mcdonalds",
    "meal": "Hamburger",
    "total_price": "36.05",
    "description": "I owe someone 18.02"
}
```

All keys are required except *description*


### Change meal
#### PUT /user/:id/meals/

Updates single meal by id.

```
{
    "restaurant": "Mcdonalds",
    "meal": "Hamburger",
    "total_price": "36.05",
    "description": "I owe someone 18.02"
}
```

All keys are required except *description*

### Delete meal
#### DELETE /user/:id/meals/:ids

Deletes single meal by ids from user id.

Returns the amount of objects deletes: Should be 1.

## Installation
1.  Install Node.js on your machine.
2.  Clone the backend repository and download it to your machine.
3.  Once you have opened the project, `cd` into the `personal_split_the_bill` directory.
4.  Install dependencies by running the `npm install` or `yarn install` command.
5.  Run the development by running the `npm run server` or `yarn run server` command.

## Contributing
If you'd like to contribute to this repository, please discuss the change you'd like to make via email with the owner of this repository.

### Feature Requests
We would love to hear from you about any features or fixes that might make the app better in any sense of the word.  In your initial email request, please be explicit and thorough regarding the change you'd like to make and why you think the change would improve the app.

### Pull Requests
If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

1.  Remember this project is licensed under the MIT license, and by submitting a pull request, your changes should follow the guideline.
2.  Update the README.md with details of your code.
3.  Submit a pull request with your changes after carefully reviewing and testing your code.

