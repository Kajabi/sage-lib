class SageFormSection < SageComponent
  set_attribute_schema({
    id: [:optional, String],
    subtitle: [:optional, NilClass, String],
    title_tag: [:optional, String],
    title: [:optional, NilClass, String],
  })

  def sections
    %w(form_section_subtitle)
  end
end
