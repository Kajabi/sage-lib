class SageLabelGroup < SageComponent
	set_attribute_schema({
		align: [:optional, NilClass, Set.new(["center", "space-between", "end"])],
		gap: [:optional, NilClass, SageSchemas::GRID_GAP_OPTION],
	})
end
