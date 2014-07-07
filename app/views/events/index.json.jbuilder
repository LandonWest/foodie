json.array! @events do |event|
  # json.food 'taco'
  # json.name 'Landon'
  # json.creature 'kraken'
  # json.frisbee 4
  # json.zombies ['moo', 'ahh']
  json.id event.id
  json.title event.title
  json.allDay event.all_day
  json.start event.starts_at
  json.end event.ends_at
  json.url event.url
  json.color event.color
end
