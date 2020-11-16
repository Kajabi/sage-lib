class SageAlert < SageComponent
  attr_accessor :color
  attr_accessor :icon_name
  attr_accessor :title
  attr_accessor :desc
  attr_accessor :dismissable
  attr_accessor :raised
  def sections
    %w(alert_actions)
  end
end
