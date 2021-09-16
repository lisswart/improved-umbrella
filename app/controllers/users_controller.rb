class UsersController < ApplicationController
  def create
    user = User.create(username: params[:username], email: params[:email])
    render json: user, status: :created
  end

  def show
    user = User.find(session[:user_id])
    render json: user
  end
end
