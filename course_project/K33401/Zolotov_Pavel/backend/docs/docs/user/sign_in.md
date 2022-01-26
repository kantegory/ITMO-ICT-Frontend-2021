# Авторизация

Авторизация существующего пользователя

**URL** : `/auth/token/login/`

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
{"auth_token": "b704c9fc3655635646356ac2950269f352ea1139"}
```