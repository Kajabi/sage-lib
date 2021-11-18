module SageClassnamesHelper
  def sage_classnames(obj)
    "t-sage--color-#{obj[:color]} t-sage--align-#{obj[:align]}"
  end
end
