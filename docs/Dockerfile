FROM ruby:2.7.7-alpine

ARG RAILS_ENV="production"
ARG NONROOT_UID="1000"
ARG NONROOT_GID="1000"
ARG BUNDLER_VERSION="2.3.14"
ARG NODE_VERSION="16.20.2"
ARG YARN_VERSION="1.22.18"
ARG ARCH="x64"
ARG GITHUB_TOKEN
ARG SECRET_KEY_BASE="setting_random_secret_for_asset_precompile"

ENV SECRET_KEY_BASE=$SECRET_KEY_BASE
ENV RAILS_ENV=$RAILS_ENV

RUN apk add \
  bash \
  build-base \
  curl \
  git \
  libxml2-dev \
  libxslt-dev \
  tzdata \
  # Install node and yarn
  && curl -fsSLO --compressed "https://unofficial-builds.nodejs.org/download/release/v$NODE_VERSION/node-v$NODE_VERSION-linux-$ARCH-musl.tar.xz" \
  && tar -xJf "node-v$NODE_VERSION-linux-$ARCH-musl.tar.xz" -C /usr/local --strip-components=1 --no-same-owner \
  && ln -s /usr/local/bin/node /usr/local/bin/nodejs \
  && rm node-v$NODE_VERSION-linux-$ARCH-musl.tar.xz \
  && npm -g install yarn@${YARN_VERSION} \
  && apk del --force-broken-world \
  && rm -f /var/cache/apk/* \
  && addgroup -g $NONROOT_GID -S nonroot \
  && adduser -u $NONROOT_UID -S nonroot -G nonroot -h /workspace

RUN mkdir -p /app && chown nonroot:nonroot /app
WORKDIR /app
ENV HOME="/app"
ENV BUNDLE_PATH="/app/vendor/gems"
ENV BUNDLE_APP_CONFIG="/app/.bundle"

RUN gem install bundler:$BUNDLER_VERSION

COPY Gemfile Gemfile.lock ./

RUN if [[ "$RAILS_ENV" == "production" ]]; then  bundle config set --local without 'development test'; fi

COPY --chown=${NONROOT_UID}:${NONROOT_GID} . .

RUN bundle install

RUN echo "-----> Using .npmrc from config"
RUN npm config set @kajabi:registry https://npm.pkg.github.com
RUN npm config set '//npm.pkg.github.com/:_authToken' '${GITHUB_TOKEN}'

RUN bundle exec rails assets:precompile
RUN yarn install --check-files

EXPOSE 3000

CMD bundle exec rails s -b 0.0.0.0 -e $RAILS_ENV

