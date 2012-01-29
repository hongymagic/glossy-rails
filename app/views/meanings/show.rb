class Meanings::Show < Mustache::Rails
	def word
		meaning.word
	end
	
	def means
		meaning.means
	end
	
	def edit_path
		edit_meaning_path(@meaning)
	end
	
	def index_path
		meanings_path
	end
end