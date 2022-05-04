module Mocks::KpOnboardingPayoutsHelper

  def payouts_recent_activity
    [
      {
        type: "deposit",
        bank: "Wells Fargo Bank",
        status: "transferring",
        date: "Apr 4",
        amount: "$2,888.71",
        currency: "USD",
      },
      {
        type: "deposit",
        bank: "Wells Fargo Bank",
        status: "paid",
        date: "Mar 28",
        amount: "$65482",
        currency: "USD",
      },
      {
        type: "deposit",
        bank: "Wells Fargo Bank",
        status: "paid",
        date: "Mar 21",
        amount: "$654.82",
        currency: "USD",
      },
      {
        type: "withdrawal",
        bank: "Wells Fargo Bank",
        status: "withdraw",
        date: "Mar 19",
        amount: "-$130.37",
        currency: "USD",
      },
      {
        type: "deposit",
        bank: "Wells Fargo Bank",
        status: "paid",
        date: "Mar 14",
        amount: "$2,971.21",
        currency: "USD",
      },
    ]
  end

  def payouts_get_activity_type_ui_configs(type)
    case type
    when "deposit"
      {
        card_color: "draft",
        icon: "file-money",
      }
    when "withdrawal"
      {
        card_color: "draft",
        icon: "arrow-up",
      }
    end
  end

  def payouts_get_activity_status_ui_configs(status)
    case status
    when "paid"
      {
        value: "Paid",
        color: "published"
      }
    when "withdraw"
      {
        value: "Withdraw",
        color: "draft"
      }
    when "transferring"
      {
        value: "Transferring",
        color: "draft"
      }
    end
  end

  def payouts_get_amount_ui_style(type)
    case type
    when "withdrawal"
      "#{SageClassnames::TYPE::BODY} #{SageClassnames::TYPE_COLORS::CHARCOAL_100}"
    else
      "#{SageClassnames::TYPE::BODY_MED} #{SageClassnames::TYPE_COLORS::CHARCOAL_500}"
    end
  end
end
