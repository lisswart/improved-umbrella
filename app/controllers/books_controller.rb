class BooksController < ApplicationController
  def index
    books = Book.all
    render json: books, include: :authors
  end

  def show
    book = Book.find(params[:id])
    render json: book, include: :authors
  end

  def create
    book = Book.create(params[:title])
    render json: book, include: :authors, status: :created
  end

  def update
    book = Book.find(params[:id])
    book.update(params[:title])
    render json: book, include: :authors
  end
end
