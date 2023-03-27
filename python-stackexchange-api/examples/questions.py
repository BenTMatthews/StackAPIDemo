"""Questions endpoint https://api.stackexchange.com/docs/questions."""

from . import SO_API, PP


questions = SO_API.fetch('questions')

PP(questions['items'])
