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
    "message", "Welcome 'username'",
    "token", "token"
}
```

## GET /meals

Returns meals by user_id as an array.

```
{
    "restaurant": "Chile's",
    "meal": "Hamburger",
    "total_price": "36.05",
    "description": "I owe someone 18.02"
}
```

All keys are required except *description*


