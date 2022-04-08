# remove duplicate and convert to CSV file

from twittercrawler.data_io import FileReader
results_df = FileReader("stream_results.txt").read()

dedup_df = results_df.drop_duplicates(subset=['text']).reset_index(drop=True)
print(len(dedup_df))
dedup_df.to_csv('data.csv')
