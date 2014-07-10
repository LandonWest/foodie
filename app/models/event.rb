class Event < ActiveRecord::Base
  mount_uploader :pic, EventPicUploader
end
