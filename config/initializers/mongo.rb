MongoMapper.database = "glossy-#{Rails.env}"
MongoMapper.config = { 
  Rails.env => { 'uri' => ENV['MONGOHQ_URL'] || 
                          'mongodb://localhost/sushi' } }

MongoMapper.connect(Rails.env)