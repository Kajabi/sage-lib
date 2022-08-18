module SageGridHelper
  def grid_column_classes(col)
    column_sizes = ["xlarge", "large", "medium", "small"]
    column_classes = ""

    if col.breakpoint.present? && col.size.present?
      column_classes << "sage-col--#{col.breakpoint}-#{col.size}"
    elsif !col.breakpoint.present? && col.size.present?
      column_classes << "sage-col-#{col.size}"
    # elsif !col.breakpoint.present? && !col.size.present? && grid_col_legacy(column_sizes)
    #   grid_col_breakpoint_individual(col, column_classes)
    else
      column_classes << "sage-col"
    end
  end

  private

  def grid_col_legacy(col)
    col.include?
  end

  def grid_col_breakpoint_individual(col, column_classes)
    column_classes << " sage-col--xl-#{col.xlarge}" if col.xlarge.present?
    column_classes << " sage-col--lg-#{col.large}" if col.large.present?
    column_classes << " sage-col--md-#{col.medium}" if col.medium.present?
    column_classes << " sage-col--sm-#{col.small}" if col.small.present?
  end
end
