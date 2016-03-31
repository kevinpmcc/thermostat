require 'sinatra/base'

class Thermostat < Sinatra::Base
  get '/temperature' do
    Temperature.first_or_create(temperature: '20')   
    Temperature.first.temperature
  end

  post '/temperature' do
    Temperature.first.update(temperature: params[:temp])
  end
  # start the server if ruby file executed directly
  run! if app_file == $0
end
