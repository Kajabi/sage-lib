module MocksHelper

  # Mock statuses
  TODO = "todo"
  DOING = "doing"
  DONE = "done"
  ARCHIVED = "archived"

  # Github URLs
  GITHUB_REPO_URL = "https://github.com/Kajabi/sage-lib"
  GITHUB_FILES_BASE_URL = "#{GITHUB_REPO_URL}/tree/main" # TODO: can we read the current git branch here by chance?
  
  # Storybook live URL
  STORYBOOK_BASE_URL = "https://sage-lib-storybook.herokuapp.com"


  # -------------------------------------------------------
  # 
  # Lists out all the available sage mocks. Properties include:
  #
  #   alias - <string> required unique snake_case alias for the profile
  #   milestone_id - <int> Github milestone id. For example, in `https://github.com/Kajabi/sage-lib/milestone/21` the id is `21`
  #   name - <string> user-friendly name for the mock
  #   no_rails_partials -- <bool> (passive) use if no rails partials (suppress link to partials in repo)
  #   no_rails_helper -- <bool> (passive) use if no rails helper (suppress link to helpers in repo)
  #   no_rails_js -- <bool> (passive) use if no rails js (suppress link to js)
  #   no_custom_styles -- <bool> (passive) use if no custom styles (suppress link to styles in repo)
  #   status - <string> one of the statuses above. If ARCHIVED the mock partials should also be moved to the archives folder.
  #   storybook_path: <string> `path` url segment for the corresponding mock in storybook.
  #   team - <string> name of the team or group who requested the mock.
  #
  # -------------------------------------------------------

  def sage_mocks
    [
      {
        alias: "test",
        name: "Test",
        status: ARCHIVED,
        team: "UXD",
      },
      {
        alias: "contact_profile",
        milestone_id: 21,
        name: "Contact Profile",
        no_custom_styles: true,
        no_rails_js: true,
        status: DOING,
        storybook_path: '/story/mocks-contact-profile--default',
        team: "Manage",
      },
      {
        alias: "upsell_downsell",
        milestone_id: 25,
        name: "Upsell Downsell",
        no_rails_js: true,
        status: DONE,
        team: "Commerce",
      },
      {
        alias: "new_plans_upgrade",
        milestone_id: 23,
        name: "New Plans and Upgrade",
        no_rails_js: true,
        status: DOING,
        team: "Growth",
      }
    ]
  end

  # -------------------------------------------------------
  #
  # Helper methods
  #
  # -------------------------------------------------------

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

  def get_mock_alias_kebab(mock_alias)
    mock_alias.gsub(/_/, "-").downcase
  end

  def get_mock_alias_pascal(mock_alias)
    mock_alias.split("_").map { |s| s.capitalize }.join()
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
    mock_code_items = []

    unless mock[:no_rails_partials]
      mock_code_items << {
        value: "Rails partials",
        attributes: {
          href: "#{GITHUB_FILES_BASE_URL}/docs/app/views/mocks/#{mock[:alias]}/",
          target: "_blank",
          rel: "noreferrer noopener",
        },
      }
    end

    unless mock[:no_rails_helper]
      mock_code_items << {
        value: "Rails helpers",
        attributes: {
          href: "#{GITHUB_FILES_BASE_URL}/docs/app/helpers/mocks/#{mock[:alias]}_helper.rb",
          target: "_blank",
          rel: "noreferrer noopener",
        },
      }
    end

    unless mock[:no_rails_js]
      mock_code_items << {
        value: "Rails JavaScript",
        attributes: {
          href: "#{GITHUB_FILES_BASE_URL}/docs/lib/sage-frontend/javascript/docs/mocks/#{mock[:alias]}/",
          target: "_blank",
          rel: "noreferrer noopener",
        },
      }
    end

    unless mock[:no_custom_styles]
      mock_code_items << {
        value: "SCSS Styles",
        attributes: {
          href: "#{GITHUB_FILES_BASE_URL}/docs/lib/sage-frontend/stylesheets/docs/mocks/_#{mock[:alias]}.scss",
          target: "_blank",
          rel: "noreferrer noopener",
        },
      }
    end

    if mock[:storybook_path]
      mock_code_items << {
        value: "React mock",
        attributes: {
          href: "#{GITHUB_FILES_BASE_URL}/packages/sage-react/lib/mocks/#{get_mock_alias_kebab(mock[:alias])}",
          target: "_blank",
          rel: "noreferrer noopener",
        },
      }
    end

    mock_code_items
  end

  def mock_storybook_url(mock)
    "#{STORYBOOK_BASE_URL}/?path=#{mock[:storybook_path]}"
  end

  def mock_milestone_url(mock)
    if mock[:milestone_id]
      "#{GITHUB_REPO_URL}/milestone/#{mock[:milestone_id].to_s}"
    else
      nil
    end
  end
end
