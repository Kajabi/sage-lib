# Docker Local Development

The repo includes a `docker-compose.yml` config for running the app stack
locally with Docker. This is useful if you want to get the app running quickly.

## Pre-requisites

1. Create an ssh-key (`ssh-keygen`)
1. [Add your SSH key to Github](https://docs.github.com/en/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)
1. Clone this repo
1. Add entries to your host file by running `sudo docker/scripts/hosts.sh`, you will be prompted for your administrator password.

### Mac

1. [Homebrew](https://brew.sh/)
1. Git (`brew install git`)
1. [Docker for Mac](https://docs.docker.com/docker-for-mac/install/)

### Linux (Ubuntu)

1. `sudo apt-get install git docker.io docker-compose`
1. `sudo service docker start`
1. `sudo chmod 666 /var/run/docker.sock`

## Spinning Up

1. Boot the app with `docker-compose up` (☕️ this will take a while the first time while dependencies install)
1. Hit http://www.sage.test when booted

Docker will bind to port 80, and 4000, so those ports need to be available on your
machine.

Dependencies and migrations are kept up to date automatically every time the
containers are started. If you do need a command prompt to run tasks,
use `docker-compose exec web bash` while the containers are running to connect
to the running web container.
