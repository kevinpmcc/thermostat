require 'data_mapper'
require 'dm-postgres-adapter'

class Temperature
  include DataMapper::Resource

  property :temperature, String

end
