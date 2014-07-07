json.array!(@noms) do |nom|
  json.extract! nom, :id, :name, :delicious
  json.url nom_url(nom, format: :json)
end
