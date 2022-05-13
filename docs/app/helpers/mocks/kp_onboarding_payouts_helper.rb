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
    when "topup"
      {
        value: "Top-up",
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

  def payout_details_table_get_amount_ui_style(type)
    case type
    when "refund"
      "#{SageClassnames::TYPE_COLORS::GREY_500}"
    else
      ""
    end
  end

  def payouts_table_get_amount_ui_style(type)
    case type
    when "topup"
      "#{SageClassnames::TYPE_COLORS::CHARCOAL_100}"
    when "withdraw"
      "#{SageClassnames::TYPE_COLORS::CHARCOAL_100}"
    else
      "#{SageClassnames::TYPE::BODY_MED}"
    end
  end

  def payouts_balance_settings_options
    [
      { 
        attributes: { "data-js-modaltrigger": "modal-payouts-add-funds" },
        value: "Add to balance",
      },
      {
        attributes: { "data-js-modaltrigger": "modal-payouts-edit-bank-acct" },
        value: "Edit bank account",
      },
    ]
  end

  def payouts_week_day_options
    [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ].map do | day |
      {
        text: day,
        value: day.downcase,
      }
    end
  end

  def payouts_month_day_options
    (1..31).to_a.map do | value |
      { text: value.to_s, value: value.to_s }
    end
  end

  def payout_detail_summary
    {
      date: "Jan 19, 2022",
      amount: "$2,888.71",
      currency: "USD",
      status: "transferring",
      account: {
        ending_digits: "37",
        currency: "USD",
      },
      data: [
        {
          label: "Sales",
          quantity: "273",
          gross: "$3,390.68",
          fees: "-$139.51",
          total: "$3.251.17",
        },
        {
          label: "Refunds",
          quantity: "3",
          gross: "-$362.46",
          fees: "N/A",
          total: "-$362.46",
        },
        {
          label: "Adjustments",
          quantity: "0",
          gross: "$0.00",
          fees: "$0.00",
          total: "$0.00",
        },
      ]
    }
  end

  def payout_detail_line_items
    [
      {
        date: "Jan 20, 2022 07:52",
        type: "charge",
        amount: "$127.50",
        fee: "-$6.68",
        net: "$120.82",
      },
      {
        date: "Jan 21, 2022 09:14",
        type: "subscription",
        amount: "$127.50",
        fee: "-$7.02",
        net: "$120.48",
      },
      {
        date: "Jan 22, 2022 13:05",
        type: "refund",
        amount: "$127.50",
        fee: "-$6.68",
        net: "-$120.82",
      },
      {
        date: "Jan 23, 2022 12:36",
        type: "charge",
        amount: "$127.50",
        fee: "-$6.68",
        net: "$120.48",
      },
    ]
  end

  def payouts_sample_bank_acct
    {
      ending_digits: "••••2324",
      name: "Wells Fargo Bank, N.A.",
    }
  end

  def payouts_all_data
    [
      {
        amount: "$2,888.71",
        currency: "USD",
        status: "transferring",
        date: "Yesterday at 3:30 pm",
        account: payouts_sample_bank_acct,
      },
      {
        amount: "$654.82",
        currency: "USD",
        status: "paid",
        date: "Jan 18 at 2:29 pm",
        account: payouts_sample_bank_acct,
      },
      {
        amount: "($130.37)",
        currency: "USD",
        status: "withdraw",
        date: "Jan 17 at 3:29 pm",
        account: payouts_sample_bank_acct,
      },
      {
        amount: "+$200.00",
        currency: "USD",
        status: "topup",
        date: "Jan 14 at 2:29 pm",
        account: payouts_sample_bank_acct,
      }
    ]
  end
end
