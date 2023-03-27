"""Questions endpoint: https://api.stackexchange.com/docs/questions."""

import datetime
import time

from . import SO_API, PP


# Unix timestamps as `int`
DATE_FROM = int(time.mktime(datetime.date(2023, 1, 1).timetuple()))
DATE_TODAY = int(datetime.datetime.timestamp(datetime.datetime.now())) 

questions = SO_API.fetch('questions', filter='withbody', fromdate=DATE_FROM,
                         tagged='python', todate=DATE_TODAY)

PP(questions['items'])
