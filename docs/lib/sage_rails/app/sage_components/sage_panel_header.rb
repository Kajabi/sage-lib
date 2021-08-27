class SagePanelHeader < SageComponent
  set_attribute_schema({
    title: [:optional, String],
    subtext: [:optional, String],
  })

  def sections
    %w(panel_header_subtext)
  end
end
