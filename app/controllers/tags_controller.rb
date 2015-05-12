class TagsController < ApplicationController

  def create
    @tag = Tag.new(whitelisted_tag_params)
    respond_to do |format|
      format.js {}
    end
  end

  private

  def whitelisted_tag_params
    params.require(:tag).permit(:name, :x, :y)
  end

end
