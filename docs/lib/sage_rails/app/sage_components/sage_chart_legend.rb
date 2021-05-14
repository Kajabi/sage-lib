class SageChartLegend < SageComponent
  set_attribute_schema({
    items: [[
      color: String,
      title: String,
    ]],
  })
end
