# crawl twitter and export into txt file

from twittercrawler.crawlers import StreamCrawler, PeopleCrawler
stream = StreamCrawler()
# stream = PeopleCrawler(limit=5)
stream.authenticate("api_key.json")

from twittercrawler.data_io import FileWriter
stream.connect_output([FileWriter("stream_results.txt")])

search_params = {
    # "q":"#lockdown OR #stayhomenotice OR #workfromhome",
    "q": "#anxiety OR #stress",
    "result_type":"recent",
    "lang":"en",
    "count":100
}
stream.set_search_arguments(search_args=search_params)

from twittercrawler.search import get_time_termination
import datetime

now = datetime.datetime.now()
time_str = (now-datetime.timedelta(days=30)).strftime("%a %b %d %H:%M:%S +0000 %Y")
time_terminator =  get_time_termination(time_str)

try:
    stream.search(15, time_terminator)
    # stream.search()
except:
    raise
finally:
    stream.close()