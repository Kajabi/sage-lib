module MocksHelper
  
  # Lists out all the available sage mocks
  def sage_mocks
    [
      {
        archived: true,
        alias: "test",
        milestone_url: "https://github.com/Kajabi/sage-lib/milestone/21",
        name: "Test",
        status: "doing",
        team: "UXD",
      },
      {
        archived: false,
        alias: "contact-profile",
        milestone_url: "https://github.com/Kajabi/sage-lib/milestone/21",
        name: "Contact Profile",
        status: "doing",
        team: "UXD",
      }
    ]
  end

  def get_mock(mock_alias)
    sage_mocks.select { |mock| mock[:alias] == mock_alias }[0]
  end

  def get_mock_path(mock)
    if mock[:archived]
      "mocks/archives/#{mock[:alias]}/main"
    else
      "mocks/#{mock[:alias]}/main"
    end
  end

end
