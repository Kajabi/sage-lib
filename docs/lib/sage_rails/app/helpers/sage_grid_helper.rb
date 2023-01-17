module SageGridHelper
  def grid_column_classes(col)
    column_classes = ""

    if col.breakpoint.present? && col.size.present?
      # if both breakpoint and sizing are provided
      column_classes << "sage-col--#{col.breakpoint}-#{col.size} "
    elsif !col.breakpoint.present? && col.size.present?
      # or if only a size is provided, without a breakpoint
      column_classes << "sage-col-#{col.size} "
    elsif !col.breakpoint.present? && !col.size.present? && grid_col_legacy(col)
      # or if a legacy individual breakpoint is provided
      grid_col_breakpoint_individual(col, column_classes)
    else
      # otherwise we display a default unsized column
      column_classes << "sage-col "
    end

    if col.vertical_alignment.present?
      column_classes << "sage-col--valign-#{col.vertical_alignment} "
    end
    
    column_classes << col.generated_css_classes
  end

  def grid_row_classes(row)
    row_classes = ""
    
    if row.horizontal_alignment.present?
      row_classes << "sage-row--align-#{row.horizontal_alignment} "
    end

    if row.vertical_alignment.present?
      row_classes << "sage-row--valign-#{row.vertical_alignment} "
    end
    
    row_classes << row.generated_css_classes
  end

  private

  def grid_col_legacy(col)
    col.xlarge.present? || col.large.present? || col.medium.present? || col.small.present?
  end

  def grid_col_breakpoint_individual(col, column_classes)
    column_classes << "sage-col--xl-#{col.xlarge} " if col.xlarge.present?
    column_classes << "sage-col--lg-#{col.large} " if col.large.present?
    column_classes << "sage-col--md-#{col.medium} " if col.medium.present?
    column_classes << "sage-col--sm-#{col.small} " if col.small.present?
  end
end
