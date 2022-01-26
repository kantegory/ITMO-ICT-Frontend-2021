# Создать компанию

Создает новую компанию

**URL** : `/api/company/new`

**Methods** : `POST`

**Auth required** : NO

**Permissions required** : None

**Data constraints** : 
```json
{
    "name": "Сбер",
    "rating": 4.2,
    "description": "Крупный банк",
    "verified": true,
    "industry": 1,
    "regions": [
        1,
        3
    ]
}
```

## Success Responses

**Code** : `201 Created`

**Content** : 

```json
{
    "id": 1,
    "name": "Сбер",
    "rating": 4.2,
    "description": "Крупный банк",
    "verified": true,
    "industry": 1,
    "regions": [
        1,
        3
    ]
}
```