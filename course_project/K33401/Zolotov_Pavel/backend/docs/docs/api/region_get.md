# Показать все регионы

Выводит информацию обо всех регионах

**URL** : `/api/region/get`

**Method** : `GET`

**Auth required** : NO

**Permissions required** : None

**Data constraints** : `{}`

## Success Responses

**Code** : `200 OK`

**Content** : 

```json
[
    {
        "id": 1,
        "name": "Москва"
    },
    {
        "id": 2,
        "name": "Московская область"
    },
    {
        "id": 3,
        "name": "Санкт-Петербург"
    },
    {
        "id": 4,
        "name": "Ленинградская область"
    }
]
```