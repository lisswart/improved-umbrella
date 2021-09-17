class UsersController < ApplicationController
  def create
    user = User.create(username: params[:username], email: params[:email])
    render json: user, status: :created
  end

  def show
    user = User.find(session[:user_id])
    render json: user
  end

  def update
    user = User.find(params[:id])
    user.update(user_params)
    render json: user
  end

  private

  def user_params
    params.permit(:firstname, :lastname, :username, :email, :password_digest)
  end
end
