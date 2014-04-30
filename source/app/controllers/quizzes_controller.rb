class QuizzesController < ApplicationController
  respond_to :json

  # GET /quizzes.json
  def index
    p "* "*30
    p params
    p "* "*30
    quizzes = Quiz.all
    render json: { quizzes: quizzes }.to_json
  end
end
