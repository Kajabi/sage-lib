class SageLabelGroup < SageComponent
	set_attribute_schema({
		align: [:optional, Set.new(["center", "space-between", "end"])],
		gap: [:optional, Set.new([:xs, :sm, :md, :lg])],
		wrap: [:optional, TrueClass]
	})
end
