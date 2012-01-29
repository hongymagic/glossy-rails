class Meaning
	include MongoMapper::Document

	key :word, String
	key :means, String

	def to_param
		"#{word}"
	end

	# Validations
	validates_presence_of :word, :means
	validates :word, :uniqueness => true, :format => { :with => /[A-Za-z0-9]+/ }
	validates :means, :length => { :maximum => 256 }
end
