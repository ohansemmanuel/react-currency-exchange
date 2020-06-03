# React Currency Exchange

### Demo real world app with React + Redux Toolkit

## State

A modified version of the [ducks pattern](https://github.com/erikras/ducks-modular-redux) is used.

## Running the app

1. Install dependencies: `npx yarn`
2. Start the app: `npx yarn start`

## Running the Tests

`npx yarn test`

## Run storybook

`npx yarn storybook`

## Screenshots

### Toggle Exchange Currency

![Toggle Exchange Currency](https://i.imgur.com/YQm8MbS.png)

### Show plus and minus signs for exchange

![Shpw plus and minus signs](https://i.imgur.com/7y5n4SI.png)

### Show minimum exchange amount

![Minimum exchange amount](https://i.imgur.com/YydEwtu.png)

### Balance Exceeded?

![Balance exceeded](https://i.imgur.com/Jbw9CLI.png)

### Stop polling (useful for manual testing)

Current exchange rate is polled every 10s. It may be useful to stop polling to prevent overflowing to daily rate limit :)

![Stop Polling](https://i.imgur.com/TlnEf1g.png)
