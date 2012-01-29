class Definitions::Index < Mustache::Rails
	def listing
		definitions.collect do |record|
			{
				:term => record.term,
				:definition => record.definition
			}
		end
	end
end