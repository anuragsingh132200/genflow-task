
# Stock Price API

This is a simple Express.js application that fetches the latest stock price for a given ticker symbol.

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/anuragsingh132200/genflow-task
   ```
2. Install the dependencies:
   ```
   cd genflow-task
   npm install
   ```

## Usage

Start the server:

```
npm start
```

The server will start on port 3000.

You can make a POST request to the `/stock` endpoint with a JSON body containing the `ticker` you want to fetch the price for. For example:

```json
{
    "ticker": "AAPL"
}
```

The response will be a JSON object with the ticker as the key and the latest stock price as the value. For example:

```json
{
    "AAPL": 123.45
}
```

## Testing

To run the tests:

```
npm test
```
