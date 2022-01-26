# Создать отклик на вакансию

Создать новый отклик на вакасию

**URL** : `/api/jobs-response/new`

**Methods** : `POST`

**Auth required** : YES

**Permissions required** : None

**Data constraints** : 
```json
{
  "text": "Text of application letter",
  "cv": "https://drive.google.com/file",
  "created_at": "2022-01-22T22:36:46.343Z",
  "job": 0
}
```

## Success Responses

**Code** : `201 Created`

**Content** :

```json
{
  "id": 1,
  "user": "admin",
  "text": "Text of application letter",
  "cv": "https://drive.google.com/file",
  "created_at": "2022-01-22T22:36:46.343Z",
  "job": 0
}
```