class SageModalContent < SageComponent
  attr_accessor :title

  def sections
    %w(header footer footer_aside)
  end
end
