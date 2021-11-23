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

  def plan_ugrade_panel_demo_plan
    {
      title: "Basic plan",
      total_cost: 1428,
      billing: [
        {
          label: "today",
          items: []
        },
        {
          label: "Oct 4, 2022",
          items: [
            {
              label: "Basic plan",
              amount: 1428,
            },
          ]
        }
      ]
    }
  end

  def plan_tiers_demo_plans
    [
      {
        name: "Beginner",
        price: 69,
        duration: "mo",
        billing: "Billed annually",
        description: "Try out the core features",
        current: true,
        features: [
          "1 Products",
          "250 Members",
          "1k marketing emails",
          "10K Contacts",
          "1 Pipeline",
          "50 landing pages",
          "1 Admin user",
          "1 Site",
          "Kajabi branding",
          "0% Transaction fee",
          "Chat bot support",
          "Live webinars",
          "Standard analytics",
        ]
      },
      {
        name: "Basic",
        price: 149,
        duration: "mo",
        billing: "Billed annually",
        description: "All the basics for starting your new business",
        current: false,
        features: [
          "3 Products",
          "1k Members",
          "Unlimited marketing emails",
          "10K Contacts",
          "3 Pipelines",
          "Unlimited landing pages",
          "1 Admin user",
          "1 Site",
          "Kajabi branding",
          "0% Transaction fee",
          "Email support",
          "9-5 PST chat support",
          "Activation call",
          "Live webinars",
          "Standard analytics",
          "Standard integrations",
        ]
      },
      {
        name: "Growth",
        price: 199,
        duration: "mo",
        billing: "Billed annually",
        description: "Everything you need for your growing business",
        current: false,
        features: [
          "15 Products",
          "10k Members",
          "Unlimited marketing emails",
          "25K Contacts",
          "100 Pipelines",
          "Unlimited landing pages",
          "10 Admin user",
          "1 Site",
          "Custom branding",
          "0% Transaction fee",
          "Email support",
          "24/7 chat support",
          "Activation call",
          "Live webinars",
          "Affiliate program",
          "Standard analytics",
          "Standard integrations",
        ]
      },
      {
        name: "Pro",
        price: 399,
        duration: "mo",
        billing: "Billed annually",
        description: "Advanced features for scaling your business",
        current: false,
        features: [
          "100 Products",
          "20k Members",
          "Unlimited marketing emails",
          "100K Contacts",
          "100 Pipelines",
          "Unlimited landing pages",
          "25 Admin user",
          "3 Sites",
          "Custom branding",
          "0% Transaction fee",
          "Email support",
          "24/7 chat support",
          "Activation call",
          "Live webinars",
          "Affiliate program",
          "Standard analytics",
          "Standard integrations",
        ]
      }
    ]
  end
end
