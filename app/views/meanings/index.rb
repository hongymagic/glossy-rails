class Meanings::Index < Mustache::Rails

  def new_path
    new_meaning_path()
  end
  
  def listing
    meanings.collect do |record|
      {
          :word => record.word,
          :means => record.means,
          :show_path => meaning_path(record)
      }
    end
  end
  
end