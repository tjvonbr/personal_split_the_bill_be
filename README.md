# Split-The-Bill API Endpoints

## Register a new user
### POST api/use/register
https://split-the-bill-bw.herokuapp.com/api/user/register

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

Returns "User Created"

## Log in a user
###  POST api/user/login
https://split-the-bill-bw.herokuapp.com/api/user/login

Expects object:

```
{
    "username": "test",
    "password": "test123"
}
```

Returns Object:

```
{
    "message": "Welcome 'username'",
    "token": "token"
}
```

## Get ALL meals for user
### GET /user/:id/meal

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

## Get single meal for user
### GET /user/:id/meal/:ids

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

## Create new meal
### POST /user/:id/meal/

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


## Change meal
### PUT /user/:id/meal/

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

## Delete meal
### DELETE /user/:id/meal/:ids

Deletes single meal by ids from user id.

Returns the amount of objects deletes: Should be 1.


