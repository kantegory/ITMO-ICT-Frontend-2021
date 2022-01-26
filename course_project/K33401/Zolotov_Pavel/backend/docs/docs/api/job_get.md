# Показать вакансии на основе поискового запроса

Выводит информацию о вакансиях, которые содержат в заголовке искомый запрос

**URL** : `/api/jobs/get?title={title}`

**Method** : `GET`

**Auth required** : NO

**Permissions required** : None

**Data constraints** : `{}`

## Success Responses

**Code** : `200 OK`

**Content** : 

```json
{
    "Jobs": [
        {
            "id": 2,
            "title": "Менеджер по продажам",
            "description": "Требуется опыт ведения крупных сделок",
            "min_years_experience": 3,
            "remote_available": false,
            "open": true,
            "company": 3
        },
        {
            "id": 3,
            "title": "Менеджер проектов",
            "description": "Требуется опыт коммуникации с командой разработки, аналитическое мышление и примеры успешных проектов",
            "min_years_experience": 2,
            "remote_available": true,
            "open": false,
            "company": 4
        }
    ]
}
```