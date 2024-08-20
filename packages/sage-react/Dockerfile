FROM alpine:3.17.0

ARG NONROOT_UID="1000"
ARG NONROOT_GID="1000"
ARG NODE_VERSION="18.20.4"
ARG ARCH="x64"

RUN apk add \
  bash \
  build-base \
  curl \
  git \
  libxml2-dev \
  libxslt-dev \
  tzdata \
  # Install node
  && curl -fsSLO --compressed "https://unofficial-builds.nodejs.org/download/release/v$NODE_VERSION/node-v$NODE_VERSION-linux-$ARCH-musl.tar.xz" \
  && tar -xJf "node-v$NODE_VERSION-linux-$ARCH-musl.tar.xz" -C /usr/local --strip-components=1 --no-same-owner \
  && ln -s /usr/local/bin/node /usr/local/bin/nodejs \
  && rm node-v$NODE_VERSION-linux-$ARCH-musl.tar.xz \
  && apk del --force-broken-world \
  && rm -f /var/cache/apk/* \
  && addgroup -g $NONROOT_GID -S nonroot \
  && adduser -u $NONROOT_UID -S nonroot -G nonroot -h /workspace \
  && npm install -g serve


RUN mkdir -p /app && chown nonroot:nonroot /app

WORKDIR /app
ENV HOME="/app"

ENV PORT ${PORT:-4100}

COPY --chown={$NONROOT_UID}:${NONROOT_GID} build /app/build

EXPOSE $PORT

CMD [ "serve", "/app/build" ]
