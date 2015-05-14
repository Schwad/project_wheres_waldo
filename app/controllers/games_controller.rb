class GamesController < ApplicationController
  def create
    @game = Game.new
    if @game.save
      redirect_to @game
    end
  end

  def show

  end
end
