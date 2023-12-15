The Chain of Responsibility pattern() passes requests along a chain of handlers. Each handler decides either to process the request or to pass it to the next handler in the chain.


Popular exmaples:
- ExpressJS middleware pattern where you can specify middleware handlers that can either process and send a response or return a value([exmaple](https://expressjs.com/en/guide/using-middleware.html#using-middleware))
- Python decorator pattern( [see this exmaple](https://medium.com/@kim_t/design-apis-with-flask-restplus-decorators-3ac7d285c0b9))


Example:
- Imagine you make an API call to get User Data
- Then you pass the response object to a function that formats the object
- Then you use that 