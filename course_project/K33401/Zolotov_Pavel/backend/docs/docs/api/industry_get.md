# Показать все индустрии

Выводит информацию обо всех индустриях

**URL** : `/api/industry/get`

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
        "name": "Технологии"
    },
    {
        "id": 2,
        "name": "Медицина"
    },
    {
        "id": 3,
        "name": "Строительство"
    },
    {
        "id": 4,
        "name": "Промышленность"
    },
    {
        "id": 5,
        "name": "Телеком"
    },
    {
        "id": 6,
        "name": "Нефтедобыча"
    }
]
```