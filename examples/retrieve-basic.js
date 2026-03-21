const BASE_URL = process.env.ODYSSEY_BASE_URL
const API_KEY = process.env.ODYSSEY_API_KEY

async function run() {
  const res = await fetch(`${BASE_URL}/api/v1/retrieve`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": API_KEY,
    },
    body: JSON.stringify({
      query: "vendor access requirements",
      top_k: 3,
    }),
  })

  const json = await res.json()
  console.log(json)
}

run()
