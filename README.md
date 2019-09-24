# Split-The-Bill API Endpoints

## POST /user/register

Expects object:

```
{
    "username": "test",
    "email": "test@test.com",
    "password": "test"
}
```

Returns "User Created"

##  POST /user/login

Expects object:

```
{
    "username": "test",
    "email": "test@test.com",
    "password": "test"
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


