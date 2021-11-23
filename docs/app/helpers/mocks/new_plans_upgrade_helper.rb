module Mocks::NewPlansUpgradeHelper

  def feature_usage_display_demo_data
    {
      current_value: 100,
      upgrade_action: {
        attributes: { href: "#" },
        value: "Choose a new plan",
      },
      data: [
        { label: "Broadcasts", value: 200 },
        { label: "Sequences", value: 600 },
        { label: "Events", value: 200 },
      ],
      feature_name: "[feature name]",
      limit_value: 200,
    }
  end

  def feature_usage_display_button_configs(opened)
    {
      icon: {
        name: opened ? "caret-up" : "caret-down",
        style: "only"
      },
      style: "secondary",
      subtle: true,
      value: opened ? "Collapse" : "Expand"
    }
  end

  def feature_usage_display_current_display(props)
    "#{props[:current_value].to_s} #{props[:feature_name]}"
  end

  def feature_usage_display_limit_display(props)
    "#{props[:limit_value].to_s} #{props[:feature_name]}"
  end

  def feature_usage_display_progress_configs(props)
    {
      percent: (props[:current_value].to_f / props[:limit_value] * 100).to_i,
      label: "#{props[:current_value]} out of #{props[:limit_value]} #{props[:feature_name]}",
    }
  end
end
