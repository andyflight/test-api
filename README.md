# test-api
### Test recieving data from foreign API with Next.js framework

#### Scenario of using API:
1. Learn the docs of [JSON Placeholder](https://jsonplaceholder.typicode.com/)
2. Choose data to get 
3. Enter an HTTP-request to get raw data in JSON

#### Using Next framework:
1. Clone repo to your local machine
2. In project directory run one of the following commands to run server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

**To get another data you should change `requestURL` in `src/app/page.tsx` and html-table to render**