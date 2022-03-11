# Создать регион

Создает новый регион

**URL** : `/api/region/new`

**Methods** : `POST`

**Auth required** : NO

**Permissions required** : None

**Data constraints** : 
```json
{
    "name": "Москва"
}
```

## Success Responses

**Code** : `201 Created`

**Content** :

```json
{
    "id": 1,
    "name": "Москва"
}
```