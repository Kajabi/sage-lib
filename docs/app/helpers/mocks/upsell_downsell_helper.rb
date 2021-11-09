module Mocks::UpsellDownsellHelper
  def upsell_downsell_data
    {
      upsells: [
        {
          id: 1,
          title: "Upsell Title",
          price: "$10.00 USD",
          downsell: {
            id: 3,
            title: "Downsell Title",
            price: "$10.00 USD"
          }
        },
        {
          id: 2,
          title: "Upsell Title 2",
          price: "$12.00 USD",
          downsell: nil
        }
      ]
    }
  end

  def upsell_downsell_status_dropdown_options
    [
      {
        value: "Active",
      },
      {
        value: "Inactive",
      },
    ]
  end

  def upsell_downsell_option_preview(id)
    {
      value: "Preview",
      icon: "preview-on",
      attributes: {
        "href": "#TODO-preview-upsell-#{id}",
      },
    }
  end

  def upsell_downsell_option_remove(id)
    {
      value: "Remove",
      icon: "remove-circle",
      attributes: {
        "href": "#TODO-remove-upsell-#{id}",
      },
      style: "danger",
    }
  end

  def upsell_downsell_option_add(id)
    {
      value: "Add Downsell",
      icon: "arrow-corner",
      attributes: {
        "href": "#TODO-add-upsell-to-#{id}",
      },
    }
  end

  def upsell_downsell_get_options(item, is_downsell: false)
    options = [upsell_downsell_option_preview(item[:id])]
    
    unless is_downsell || item[:downsell]
      options.push(upsell_downsell_option_add(item[:id]))
    end

    options.push(upsell_downsell_option_remove(item[:id]))
    
    options
  end
end
