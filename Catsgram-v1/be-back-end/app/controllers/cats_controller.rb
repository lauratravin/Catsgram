class CatsController < ApplicationController


    def index
        
        if (params[:order] == "true")
            cats = Cat.order(likes: :desc)
        else 
            cats = Cat.all
           
        end
        render json: cats, only: [:id, :name, :image, :likes], include: [:comments]
        
        

     end


     def create

        @cat = Cat.new
        @cat.name= params[:name]
        @cat.image= params[:image]
        @cat.likes= 0       
        @cat.save

        render json: @cat, include: [:comments]
    end

    def update

        @cat = Cat.find(params[:id])
        
        if params[:changename] 
            #just change name
            @cat.name = params[:name]
        else    
            #just change votes
            @cat.likes = @cat.likes.to_i + 1
           
        end  
        @cat.save
        
        render json: @cat
    end
end
