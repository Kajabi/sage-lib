class SageLabelGroup < SageComponent
	set_attribute_schema({
		align: [:optional, Set.new(["center", "space-between", "end"])],
		gap: [:optional, NilClass, SageSchemas::GRID_GAP_OPTION],
	})
end
