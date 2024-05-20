Trip data example json

```json
{
    "departureOn": "2024-06-03",
    "arrivesOn": "2024-06-07",
    "flights": [
        {
            "total": {
                "price": "213",
                "devise": "€"
            },
            "duration": "260",
            "departure": {
                "hour": "18:35",
                "airport": "BCN"
            },
            "arrives": {
                "hour": "22:55",
                "airport": "CDG"
            },
            "type": "stopover",
            "stopovers": [
                {
                    "duration": "110",
                    "departure": {
                        "date": "2024-06-03",
                        "hour": "18:35",
                        "airport": "BCN"
                    },
                    "arrives": {
                        "date": "2024-06-03",
                        "hour": "20:25",
                        "airport": "ZRH"
                    },
                    "company": {
                        "name": "SWISS",
                        "logo": "https://cdn.example.com/logo/easyjet"
                    }
                },
                {
                    "stopoverDuration": "75"
                }
                {
                    "duration": "110",
                    "departure": {
                        "date": "2024-06-03",
                        "hour": "21:40",
                        "airport": "ZRH"
                    },
                    "arrives": {
                        "date": "2024-06-03",
                        "hour": "22:55",
                        "airport": "CDG"
                    },
                    "company": {
                        "name": "SWISS",
                        "logo": "https://cdn.example.com/logo/easyjet"
                    }
                }
            ]
        },
        {

        }
    ]
}
```