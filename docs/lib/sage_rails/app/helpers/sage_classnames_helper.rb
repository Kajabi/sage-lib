module SageClassnamesHelper
  #
  # The set of classnames we expose through this helper
  # pulled from the SageClassnames module
  #
  # This leaves `SageClassnames` intact for current uses,
  # but future deprecate that token and then consolidate definitions
  # in this file alone.
  #
  def sage_classnames_map
    {
      # Text color
      color: module_consts_to_hash(SageClassnames::TYPE_COLORS),

      # Internal grid configurations
      grid: {
        CARD: SageClassnames::GRID_CARD,
        PANEL: SageClassnames::GRID_PANEL,
      },

      # Internal gap (grid-gap) settings
      gap: module_consts_to_hash(SageClassnames::GRID_GAP_OPTIONS),

      # Grid templates
      grid_template: module_consts_to_hash(SageClassnames::GRID_TEMPLATES),

      # Reveal utility classnames
      reveal: {
        CONTAINER: SageClassnames::REVEAL_CONTAINER,
        ON_HOVER: SageClassnames::REVEAL_ON_HOVER,
        ON_CONTAINER_HOVER: SageClassnames::REVEAL_ON_CONTAINER_HOVER,
      },

      # Spacers (margin)
      spacer: module_consts_to_hash(SageClassnames::SPACERS),

      # Strikethrough style for text
      strikethrough: SageClassnames::TYPE_STRIKETHROUGH,

      # Text alignment
      text_align: {
        CENTER: SageClassnames::TYPE_ALIGN_CENTER,
        RIGHT: SageClassnames::TYPE_ALIGN_RIGHT,
      },
      # Truncate inner contents with ellipses
      truncate: SageClassnames::TRUNCATE_TEXT,

      # Container to auto-space and format inner HTML contents to Sage type spec
      type_block: SageClassnames::TYPE_BLOCK,

      # Type specs
      type: module_consts_to_hash(SageClassnames::TYPE),
    }
  end
  
  #
  # Given a hash of classname keys, retrieve classnames from main map
  # and combine them into a single string of classnames
  # that can be rendered within an HTML `class` attribute.
  # 
  # NOTE: Inspect `sage_classnames_hash` for possible options and keys
  #
  def sage_classnames(opts)
    # Main list of available classnames
    classnames = sage_classnames_map

    # array of classnames requested
    classes = []

    # Check each provided option
    opts.keys.each do | key |
      # The associated value for this key
      value = opts[key]
    
      # Ensure provided key exists in classnames list
      if classnames.keys.include? key
        classnames_child = classnames[key]

        # Return the only value available if this classname is just a string
        # and the provided option is truthy
        if classnames_child.is_a?(String) && value
          classes.push(classnames_child)
        else
          # Output the specified classname value
          if value.is_a?(Array)
            # Add all items specified in an array of values
            value.each do | sub_value |
              if classnames_child.keys.include? sub_value.to_sym
                classes.push(classnames_child[sub_value.to_sym])
              else
                classes.push("sage-nil--#{key}-#{sub_value}")
              end
            end
          elsif classnames_child.keys.include? value.to_sym
            classes.push(classnames_child[value.to_sym])
          else
            # Output a nil class with the key and value as a modifier
            classes.push("sage-nil--#{key}-#{value}")
          end
        end
      else
        # Output a nil class with the key as a modifier
        classes.push("sage-nil--#{key}")
      end
    end

    # Join all resulting classnames and return a signle string
    classes.join(" ")
  end
end
