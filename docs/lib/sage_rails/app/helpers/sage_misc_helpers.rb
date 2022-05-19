module SageMiscHelpers
  #
  # Converts the constants within a module into a has
  #
  def module_consts_to_hash(mod)
    # Declare an initial hash
    hash = {}

    # Loop through constants in this module
    mod.constants.each do | const |
      # Add this constant and its value to the main hash
      hash[const] = mod.const_get(const)
    end

    # Return resulting hash
    hash
  end
end
