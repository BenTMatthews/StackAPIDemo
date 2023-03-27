"""Users` endpoint: https://api.stackexchange.com/docs/users."""

from . import SO_API, PP


users = SO_API.fetch('users', filter='!)mYVom7)TA9')

PP(users['items'])
