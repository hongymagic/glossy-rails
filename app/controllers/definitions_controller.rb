class DefinitionsController < ApplicationController
  # GET /definitions.json
  def index
    @definitions = Definition.all

    respond_to do |format|
      format.html
      format.json { render json: @definitions }
    end
  end

  # GET /definitions/1.json
  def show
    @definition = Definition.find(params[:id])

    respond_to do |format|
      format.json { render json: @definition }
    end
  end

  # GET /definitions/new.json
  def new
    @definition = Definition.new

    respond_to do |format|
      format.json { render json: @definition }
    end
  end

  # GET /definitions/1/edit
  def edit
    @definition = Definition.find(params[:id])
  end

  # POST /definitions.json
  def create
    @definition = Definition.new(params[:definition])

    respond_to do |format|
      if @definition.save
        format.json { render json: @definition, status: :created, location: @definition }
      else
        format.json { render json: @definition.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /definitions/1.json
  def update
    @definition = Definition.find(params[:id])

    respond_to do |format|
      if @definition.update_attributes(params[:definition])
        format.json { head :ok }
      else
        format.json { render json: @definition.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /definitions/1.json
  def destroy
    @definition = Definition.find(params[:id])
    @definition.destroy

    respond_to do |format|
      format.json { head :ok }
    end
  end
end
