# Показать отклики на вакансии для пользователя

Выводит информацию об откликах текущего пользователя

**URL** : `/api/jobs-response/get`

**Method** : `GET`

**Auth required** : YES

**Permissions required** : Response owner permission

**Data constraints** : `{}`

## Success Responses

**Code** : `200 OK`

**Content** : 

```json
[
    {
      "id": 1,
      "user": "admin",
      "text": "Text of application letter",
      "cv": "https://drive.google.com/file",
      "created_at": "2022-01-22T22:36:46.343Z",
      "job": 0
    },
    {
      "id": 2,
      "user": "admin",
      "text": "Text of application letter",
      "cv": "https://disk.yandex.ru/file",
      "created_at": "2022-01-22T22:36:46.343Z",
      "job": 1
    }
]
```