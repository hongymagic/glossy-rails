class Definition
  include MongoMapper::Document

  key :term, String
  key :definition, String

end
