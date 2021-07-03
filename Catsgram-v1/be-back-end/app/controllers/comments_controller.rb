class CommentsController < ApplicationController

    def index
        comments = Comment.all
        render json: comments
    end


    def create
      
        @comment = Comment.new
        @comment.comment= params[:text]
       
       
        @cat = Cat.find_by_id(params[:catId])
        
        @comment.cat = @cat
        @comment.save

        render json: @comment
    end 


    def destroy
        @comment = Comment.find_by_id(params[:id])
        @cat= @comment.cat
    
        @comment.destroy
      
    
        response = [@cat.id, params[:id]]
    
        render :json => response

    end

end
