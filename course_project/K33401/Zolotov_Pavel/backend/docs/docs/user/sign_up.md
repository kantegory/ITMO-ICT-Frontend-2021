# Регистрация

Регистрация нового пользователя

**URL** : `/auth/users/`

**Method** : `POST`

**Auth required** : NO

**Permissions required** : None

**Data constraints** : 
```
username=djoser&password=alpine12
```

## Success Responses

**Code** : `200 OK`

**Content** : 

```json
{"email": "", "username": "djoser", "id":1}
```