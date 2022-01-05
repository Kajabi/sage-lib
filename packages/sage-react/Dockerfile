FROM node:14.14.0

ENV PORT 4100

# RUN npm install -g yarn

COPY package.json ./

RUN yarn install

COPY . ./

RUN yarn build

CMD ["bash", "-c", "yarn storybook -p ${PORT}"]
