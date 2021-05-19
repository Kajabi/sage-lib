class SageChartSummary < SageComponent
  set_attribute_schema({
    caption: [:optional, NilClass, String],
    centered: [:optional, NilClass, TrueClass],
    chart_type: [:optional, NilClass, Set.new(["donut"])],
    label: [:optional, NilClass, String],
    value: String,
  })
end
