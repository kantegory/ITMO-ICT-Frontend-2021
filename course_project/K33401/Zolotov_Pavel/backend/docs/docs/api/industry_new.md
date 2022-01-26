# Создать индустрию

Создает новую индустрию

**URL** : `/api/industry/new`

**Methods** : `POST`

**Auth required** : NO

**Permissions required** : None

**Data constraints** : 
```json
{
    "name": "Технологии"
}
```

## Success Responses

**Code** : `201 Created`

**Content** : 

```json
{
    "id": 1,
    "name": "Технологии"
}
```