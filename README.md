# Drizzle tutorial with React Hooks

![drizzle_logo](https://github.com/trufflesuite/drizzle/raw/master/readme/drizzle-logomark.png?raw=true)

I created a **React Hooks** version of this [**Drizzle tutorial**](https://www.trufflesuite.com/tutorials/getting-started-with-drizzle-and-react).

![DApp demo](https://media.giphy.com/media/TdQVda1SmPNaU2gN4J/giphy.gif)

You will need to install Node.js and Truffle, as stated in the tutorial - see "Setting up the development environment".

See the ReactJS [guidance on using hooks](https://reactjs.org/docs/hooks-reference.html) and [Drizzle](https://www.trufflesuite.com/drizzle) for further details on implementing hooks in your project.

## To run your project after unboxing ##

In the main project directory:

```
truffle develop
```

Then, in truffle's developer console: 
```
compile
```

and then:
```
migrate
```

To test your smart contract(s), in truffle's developer console:
```
test
```

Now that you have successfully launched your Solidity contract onto your local blockchain, go into the client directory:

```
cd client
```

Run the project by entering the following:

```
npm start
```

To see your project in the browser, go to http://localhost:3000/

You can test your DApp by entering the following:

```
npm test
```
