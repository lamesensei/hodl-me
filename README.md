# Hodlnaut Coding Challenge

Thanks for taking the time to do our coding test!

__The reason we are using replit is so you don't have to go through the trouble of setting up a node.js environment. If you'd prefer to develop locally and upload your code to a git repo then feel free to do this and share the link.__

On the Hodlnaut website, users can have balances in various cryptocurrency assets including BTC and ETH. Users also want to view their total balance in another asset such as USD. To be able to do this, we need to fetch prices for pairs such as BTC/USD and ETH/USD to convert between assets.

To give an example, let’s say the user’s balance is 0.5 BTC and 2 ETH. If the current BTC/USD price is 60000 and the ETH/USD price is 3000, then the user’s total balance in USD would be 60000 \* 0.5 + 3000 \* 2 = 36000 USD.

### Submission
Please fork the repl.it, and share the link with us. You can add the answers to the question directly in the document.

----

## Task

Create __one API endpoint using Node and Express that takes in a user id and returns the user's total balance in USD__.

Keep the user’s balances stored in memory. An example of the data to be stored is provided at the end of this section. Feel free to add more entries or change the way the data is stored if you want, but this is not necessary.

You will need to fetch the current prices from a third party public API. You can use the price from any cryptocurrency exchange but it is recommended that you use Bitstamp.

Here is a link to their API docs: https://www.bitstamp.net/api/#ticker

Assume that the only assets that the user’s balance can contain are __BTC and ETH__.

Ensure the API endpoint works correctly by writing at least one test case using the __Mocha and Chai__ frameworks.

There is a test scaffold  `test.js` that you can use and `package.json` has been changed so that `npm run test` will run the unit tests.

It’s expected that this task should take less than 2-3 hours to complete. If you find yourself spending too much time on this task, then just give a short explanation about what aspects were particularly time consuming and what steps you would’ve done in order to complete the task.

Aim to write clear and concise code.

```
const userBalances = {
  "user-1": {
    "BTC": "0.5",
    "ETH": "2"
  },
  "user-2": {
    "BTC": "0.1",
  },
  "user-3": {
    "ETH": "5",
  },
}
```

## Questions
__1. (Optional) If you didn’t have time to complete your intended design, what else would you have done?__
> I would have like to have a better error handling flow and more MVC like structure. Probably use express router and make use of middleware to handle the "user" retrieval.

__2. Which took the most time? What did you find most difficult?__
> - Testing took awhile because of I was not familiar Chai/Mocha. Designing the test was also annoying due to the general lack of structure for express.js. (I'm used to rails-like frameworks like Laravel, Phoenix). I don't even think my tests are correct -- I think external apis should be mocked?
> - Initially getting the app to start on my local env took awhile. I will admit that the whole commonjs/es6 modules thing boggles me (compared to working with react). Eventually got it working with a higher nodejs version.


__3. If we wanted the balance to update on the frontend more often (10 times per second), how would you improve the current system to handle this?__
> Websockets? Frontend I'm guessing websockets or Graphql subscription.

__4. How did you find the test overall? If you have any suggestions on how we can improve the test, we'd love to hear them!__
> I think the test is pretty basic. The instructions are clear. I think that there should be more specifics (object? string? etc) on the desired outcome. 