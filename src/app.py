import json

import requests


def handler(event, context):
    ip = requests.get("http://checkip.amazonaws.com/")
    print('ip', ip)

    print('event \n', event)

    return {
        "statusCode": 200,
        "body": json.dumps({
            "message": "hello world",
        }),
    }
