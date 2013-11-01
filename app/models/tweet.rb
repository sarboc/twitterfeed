class Tweet < ActiveRecord::Base
  # attr_accessible :title, :body

    Twitter.configure do |config|
      config.consumer_key = "z5LCqA1uiVbaC0nNzPYINw"
      config.consumer_secret = "whQh5GS0zOC6u7eAjKqJPrH6LC0WOaRM99fZPjd7gg"
      config.oauth_token = "1557317078-8STLY5wLBUhEzUfLfEv4pHO76ZXJgW61KafiVv5"
      config.oauth_token_secret = "o9WqmlTZOV2nHAlQQC96ba7jGaJLLw9RHiD6v4HGQZ2mK"
    end

    def self.tweet_call(search)
      Twitter.search(search, :count => 10, :result_type => "recent").results
    end
end
