"""Python StackOverflow API example usage."""

import pprint

from stackapi import StackAPI


# `pprint`` is a bit prettier than `print` or `json.dumps`
PP = (pprint.PrettyPrinter()).pprint

# StackAPI Client - Site is "stackoverflow", API Version: 2.3
SO_API = StackAPI('stackoverflow', version="2.3")

# Configure the StackAPI object (Be kind with anonymous API usuage)
SO_API.page_size = 5
SO_API.max_pages = 1
