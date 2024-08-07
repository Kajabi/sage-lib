FROM alpine:3.17.0

ARG NONROOT_UID="1000"
ARG NONROOT_GID="1000"
ARG NODE_VERSION="16.20.2"
ARG YARN_VERSION="1.22.18"
ARG ARCH="x64"
ARG GITHUB_TOKEN

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

ENV PORT ${PORT:-4100}
ENV NODE_PATH=lib
ENV GITHUB_TOKEN='${GITHUB_TOKEN}'

COPY <<'EOF' ./.npmrc
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
@kajabi:registry=https://npm.pkg.github.com/
EOF

COPY --chown={$NONROOT_UID}:${NONROOT_GID} package.json /app/package.json
RUN yarn install --check-files

COPY --chown={$NONROOT_UID}:${NONROOT_GID} .babelrc /app/.babelrc
COPY --chown={$NONROOT_UID}:${NONROOT_GID} lib /app/lib
COPY --chown={$NONROOT_UID}:${NONROOT_GID} .storybook /app/.storybook
COPY --chown={$NONROOT_UID}:${NONROOT_GID} public /app/public

EXPOSE $PORT

CMD [ "yarn", "run", "storybook"]
