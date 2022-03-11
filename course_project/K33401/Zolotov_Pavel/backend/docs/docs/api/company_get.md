# Показать все компании

Выводит информацию обо всех компаниях

**URL** : `/api/company/get`

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
        "name": "Сбер",
        "rating": 4.2,
        "description": "Крупный банк",
        "verified": true,
        "industry": 1,
        "regions": [
            1,
            3
        ]
    },
    {
        "id": 2,
        "name": "Газпром",
        "rating": 4.1,
        "description": "Добыча газа и нефти",
        "verified": false,
        "industry": 6,
        "regions": [
            3
        ]
    },
    {
        "id": 3,
        "name": "ПИК",
        "rating": 4.3,
        "description": "Строительная компания",
        "verified": true,
        "industry": 3,
        "regions": [
            3,
            4
        ]
    },
    {
        "id": 4,
        "name": "МТС",
        "rating": 4.5,
        "description": "Оператор сотовой связи",
        "verified": true,
        "industry": 5,
        "regions": [
            1,
            3
        ]
    }
]
```