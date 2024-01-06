# There are common ways to make API calls in React:

1. `XMLHttpRequest`:XMLHttpRequest object is an API for sending HTTP requests from a web page to a server. It’s a low-level API because it only provides a basic mechanism for making HTTP requests and leaves it up to the developer to parse the response, handle errors and manage the request’s state.

2. `Fetch API`:The Fetch API is a modern and native JavaScript API for making HTTP requests.

3. `Axios`:Axios is a popular third-party library for making HTTP requests.

4. `Async/Await with fetch`:You can use the async/await syntax to make asynchronous API calls, which can make your code more readable and maintainable.

5. `React-Query`: React-Query is a library specifically designed for managing and caching asynchronous data in React applications. It provides hooks like useQuery for fetching and caching data.

## Difference
The main difference between `XMLHttpRequest` and the `Fetch API` is that XMLHttpRequest is an older, more established API that’s been around since the early days of the web. Fetch API is a more modern API that was introduced in modern browsers to provide a simpler and more flexible way to make HTTP requests.