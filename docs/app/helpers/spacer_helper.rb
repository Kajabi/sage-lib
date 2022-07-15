module SpacerHelper
  #
  # TODO: Keep in sync with spacer tokens or consolidate to avoid repeat
  #
  def sage_spacers
    [
      ["2xs", "4px"],
      ["xs", "8px"],
      ["sm", "16px"],
      ["md", "24px"],
      ["lg", "32px"],
      ["xl", "48px"],
    ]
  end

  def sage_spacers_application
   {
      application: '48px',
      panel: '32px',
      card: '24px',
      stack: '8px',
    }
  end
end
