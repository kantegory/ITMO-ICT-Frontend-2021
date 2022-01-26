# Создать вакансию

Создать новую вакансию

**URL** : `/api/jobs/new`

**Methods** : `POST`

**Auth required** : NO

**Permissions required** : None

**Data constraints** : 
```json
{
    "title": "Андроид разработчик",
    "description": "описание",
    "min_years_experience": 2,
    "remote_available": true,
    "open": true,
    "company": 1
}
```

## Success Responses

**Code** : `201 Created`

**Content** : 

```json
{
    "id": 1,
    "title": "Андроид разработчик",
    "description": "описание",
    "min_years_experience": 2,
    "remote_available": true,
    "open": true,
    "company": 1
}
```