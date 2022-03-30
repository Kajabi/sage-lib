class SageLabelGroup < SageComponent
	set_attribute_schema({
		align: [:optional, Set.new(["center", "space-between", "end"])],
		gap: [:optional, NilClass, SageSchemas::GRID_GAP_OPTION],
		line_clamp: [:optional, Integer, String],
	})

  def sections
    %w(label_group_overflow_action)
  end
end
