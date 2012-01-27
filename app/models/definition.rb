class Definition
	include MongoMapper::Document

	key :term, String
	key :definition, String

	# Validations
	validates_presence_of :term, :definition
	validates :term, :uniqueness => true, :format => { :with => /[A-Za-z0-9]+/ }
	validates :definition, :length => { :maximum => 256 }
end
