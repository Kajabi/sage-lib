class SageBreadcrumbs < SageComponent
  set_attribute_schema({
    has_back_icon: [:optional, NilClass, TrueClass],
    is_progressbar: [:optional, NilClass, TrueClass],
    items: [[{
      is_current: [:optional, NilClass, TrueClass],
      text: String,
      url: [:optional, NilClass, String],
    }]],
  })
end
