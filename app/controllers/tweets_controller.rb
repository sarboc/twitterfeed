class TweetsController < ApplicationController

  def index
    if params[:search]
      @tweets = Tweet.tweet_call(params[:search])
    end


    respond_to do |format|
      format.html
      format.json {render json: @tweets}
    end
  end

end
