module MocksHelper

  # Mock statuses
  TODO = "todo"
  DOING = "doing"
  DONE = "done"
  ARCHIVED = "archived"

  # Github URLs
  GITHUB_REPO_URL = "https://github.com/Kajabi/sage-lib"
  GITHUB_FILES_BASE_URL = "#{GITHUB_REPO_URL}/tree/main/docs" # TODO: can we read the current git branch here by chance?
  
  # Storybook live URL
  STORYBOOK_BASE_URL = "https://sage-lib-storybook.herokuapp.com"
  
  # Lists out all the available sage mocks
  def sage_mocks
    [
      {
        alias: "test",
        milestone_id: nil,
        name: "Test",
        status: ARCHIVED,
        team: "UXD",
        storybook_url: nil,
      },
      {
        alias: "contact_profile",
        milestone_id: 21,
        name: "Contact Profile",
        status: DOING,
        team: "Manage",
        storybook_url: nil,
      }
    ]
  end

  def sage_active_mocks
    sage_mocks.select { |mock| mock[:status] != "archived" }
  end

  def sage_archived_mocks
    sage_mocks.select { |mock| mock[:status] == "archived" }
  end

  def sorted_sage_mocks(active: true)
    if active
      sage_active_mocks.sort_by { |h| h[:name] }
    else
      sage_archived_mocks.sort_by { |h| h[:name] }
    end
  end

  def get_mock(mock_alias)
    sage_mocks.select { |mock| mock[:alias] == mock_alias }[0]
  end

  def get_mock_path(mock)
    if mock[:status] == "archived"
      "mocks/archives/#{mock[:alias]}/main"
    else
      "mocks/#{mock[:alias]}/main"
    end
  end

  def mock_status_configs(mock)
    case mock[:status]
    when "doing"
      {
        value: "In progress",
        color: "warning",
      }
    when "done"
      {
        value: "Done",
        color: "published",
      }
    when "stop"
      {
        value: "Archived",
        color: "locked",
      }
    else "todo"
      {
        value: "Proposed",
        color: "draft",
      }
    end
  end

  def mock_code_items(mock)
    mock_code_items = [
      {
        value: "Rails partials",
        attributes: {
          href: "#{GITHUB_FILES_BASE_URL}/app/views/mocks/#{mock[:alias]}/",
          target: "_blank",
          rel: "noreferrer noopener",
        },
      },
      {
        value: "Rails helpers",
        attributes: {
          href: "#{GITHUB_FILES_BASE_URL}/app/helpers/mocks/#{mock[:alias]}_helper.rb",
          target: "_blank",
          rel: "noreferrer noopener",
        },
      },
      {
        value: "Rails JavaScript",
        attributes: {
          href: "#{GITHUB_FILES_BASE_URL}/lib/sage-frontend/javascript/docs/mocks/#{mock[:alias]}/",
          target: "_blank",
          rel: "noreferrer noopener",
        },
      },
      {
        value: "SCSS Styles",
        attributes: {
          href: "#{GITHUB_FILES_BASE_URL}/lib/sage-frontend/stylesheets/docs/mocks/_#{mock[:alias]}.scss",
          target: "_blank",
          rel: "noreferrer noopener",
        },
      }
    ]

    if mock[:storybook_url]
      mock_code_items << {
        value: "React mock",
        attributes: {
          href: "#{STORYBOOK_BASE_URL}/?path=#{mock[:storybook_url]}",
          target: "_blank",
          rel: "noreferrer noopener",
        },
      }
    end

    mock_code_items
  end

  def mock_milestone_url(mock)
    if mock[:milestone_id]
      "#{GITHUB_REPO_URL}/milestone/#{mock[:milestone_id].to_s}"
    else
      nil
    end
  end
end
