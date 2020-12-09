class SageHero < SageComponent
  attr_accessor :description
  attr_accessor :image
  attr_accessor :title
  attr_accessor :css_classes

  def sections
    %w(sage_hero_action)
  end
end
