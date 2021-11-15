#!/bin/bash
# Gives more information about the `yarn branches:udpate` command that occurs during the Sage Version Bump process. Also, creates a bit of visual sass. 💅

# Kickoff the `yarn branches:update process`
printf '\e[1;37m%-6s\e[m' "👋 Would you like to continue to update the main and develop branches (y/n)?"
read -r answer

if [ "$answer" != "${answer#[Yy]}" ] ;then
  # Checkout `main` branch
  printf '\e[1;34m%-6s\e[m \n%s\n' "---------------------------[CHECKING OUT MAIN]---------------------------"
  if git checkout main --progress 2>&1 | grep -w "Switched"; then
    # Pull `main` branch
    printf '\e[1;34m%-6s\e[m \n%s\n  %s\n' "-----------------------------[PULLING MAIN]------------------------------"
    if git pull --progress 2>&1 | grep -w "Already"; then
      # Checkout `develop` branch
      printf '\e[1;34m%-6s\e[m \n%s\n  %s\n' "--------------------------[CHECKING OUT DEVELOP]-------------------------"
      if git checkout develop --progress 2>&1 | grep -w "Switched"; then
        # Pull `develop` branch
        printf '\e[1;34m%-6s\e[m \n%s\n  %s\n' "-----------------------------[PULLING DEVELOP]---------------------------"
        if git pull --progress 2>&1 | grep -w "Already"; then
          # Rebase `develop` branch on `main` branch
          printf '\e[1;34m%-6s\e[m \n%s\n %s\n' "-------------------------------[REBASING]--------------------------------"
          git rebase main
        else
          printf '%s\n %s\n' "🛑 Did not pull develop branch. Review your changes and retry 'yarn branches:update'."
        fi
      else
        printf '%s\n %s\n' "🛑 Did not switch to develop branch. Review your changes and retry 'yarn branches:update'."
      fi
    else
      printf '%s\n %s\n' "🛑 Did not pull main branch. Review your changes then retry 'yarn branches:update'."
    fi
  else
    printf '%s\n %s\n' "🛑 Did not switch to main branch. Review your changes then retry 'yarn branches:update'."
  fi
else
  printf '\n%s\n %s\n' "👍 No problem. Branch updates have been canceled."
fi
