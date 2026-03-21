```js
const fs = require("fs")
const path = require("path")

const BASE_URL = process.env.ODYSSEY_BASE_URL
const API_KEY = process.env.ODYSSEY_API_KEY

async function run() {
  const text = fs.readFileSync(
    path.join(__dirname, "..", "demo-data", "vendor-policy-v2.txt"),
    "utf8"
  )

  const res = await fetch(`${BASE_URL}/api/v1/ingest`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": API_KEY,
    },
    body: JSON.stringify({
      text,
      source: "example",
      doc_title: "Vendor Policy v2",
      tags: ["vendor", "policy"],
    }),
  })

  const json = await res.json()
  console.log(json)
}

run()
```
