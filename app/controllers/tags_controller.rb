class TagsController < ApplicationController

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

  private

  def whitelisted_tag_params
    params.require(:tag).permit(:character_id, :x, :y)
  end

  def tag_coordinates
    {x: params["x"], y: params["y"]}
  end

end
