MongoMapper.config = { 
  Rails.env => { 
    'uri' => ENV['MONGOLAB_URI'] || 'mongodb://localhost/glossy' 
  } 
}
MongoMapper.connect(Rails.env)
