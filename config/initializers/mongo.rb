MongoMapper.config = { 
  Rails.env => { 
    'uri' => ENV['MONGOLAB_URI'] || 'mongodb://localhost/sushi' 
  } 
}
MongoMapper.connect(Rails.env)
