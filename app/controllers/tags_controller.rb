class TagsController < ApplicationController

  def index
    @tags = Tag.all
    @characters = Character.all
  end

  def new
    @tag = Tag.new tag_coordinates
    respond_to do |format|
      format.js {}
    end
  end

  def create
    @tag = Tag.new(whitelisted_tag_params)
    @character = Character.find @tag.character_id
    respond_to do |format|
      if @tag.save
        format.js {}
      end
    end
  end

  def destroy
    @tag = Tag.find(params[:id])
    respond_to do |format|
      if @tag.destroy
        format.js {}
      end
    end
  end

  private

  def whitelisted_tag_params
    params.require(:tag).permit(:character_id, :x, :y)
  end

  def tag_coordinates
    {x: params["x"], y: params["y"]}
  end

end
