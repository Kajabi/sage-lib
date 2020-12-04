class SageLabel < SageComponent
  attr_accessor :color
  attr_accessor :style
  attr_accessor :icon
  attr_accessor :value
  attr_accessor :html_tag
  attr_accessor :interactive_type # TODO: Validate if :dropdown, :default, or :secondary_button
  attr_accessor :secondary_button
end
