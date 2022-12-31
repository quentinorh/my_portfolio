class PostsController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index, :show]

  def index
    if params[:tag].present?
      @posts = Post.tagged_with(params[:tag]).order(order_number: :desc)
    else
      @posts = Post.all.order(order_number: :desc)
    end
  end

  def show
    @post = Post.find(params[:id])
    @related_posts = @post.find_related_tags
  end

  def new
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)
    if Post.last
      @post.order_number = Post.all.order(:order_number).last.order_number + 1
    else
      @post.order_number = 1
    end

    if @post.save
      redirect_to @post
    else
      render :new
    end
  end

  private

  def post_params
    params.require(:post).permit(:title, :content, :cover_url, photos: [], tag_list: [])
  end
end
