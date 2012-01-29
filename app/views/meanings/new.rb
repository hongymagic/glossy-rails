class Meanings::New < Mustache::Rails

  def errors_display_div
    return "" unless meaning.errors.any?
    content_tag("div", :id=>"errorExplanation", :class=>"errorExplanation") do
      content_tag("h2", error_header) + content_tag("ul") do 
        meaning.errors.full_messages.inject("") do |memo,msg|
          memo += content_tag("li", msg)
        end
      end
    end
  end
  
def meaning_form_tag
    form_tag(create_path, :class => "meaning_form", :id => "edit_meaning_#{meaning.id}_form")
  end
  
def word_label
    label :meaning, :word
  end
    
def word_text_field
    text_field(:meaning, :word, :id => "word_text_field")
  end

def means_label
    label :meaning, :means
  end
    
def means_text_field
    text_field(:meaning, :means, :id => "means_text_field")
  end


  def form_submit
    submit_tag "Create"
  end

  
  def index_path
    meanings_path
  end
  
  private
  
  def create_path
    meanings_path
  end
  
  def error_header
    "u r dong it rong"
  end
  
end