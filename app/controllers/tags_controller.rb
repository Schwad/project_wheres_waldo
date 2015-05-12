class TagsController < ApplicationController

  def new
    @tag = Tag.new
    respond_to do |format|
      format.js {}
    end
  end

  def create
    @tag = Tag.new(whitelisted_tag_params)
    respond_to do |format|
      if @tag.save
        format.js {}
      end
    end
  end

  private

  def whitelisted_tag_params
    params.require(:tag).permit(:name, :x, :y)
  end

end
