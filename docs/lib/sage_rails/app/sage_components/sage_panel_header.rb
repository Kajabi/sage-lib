class SagePanelHeader < SageComponent
  set_attribute_schema({
    subtext: [:optional, String],
    title: [:optional, String],
  })

  def sections
    %w(panel_header_subtext)
  end
end
