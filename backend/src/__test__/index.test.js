const fetch = require("node-fetch");

require("dotenv/config");

function fetchData(url) {
  const res = fetch(`http://localhost:5000/${url}`)
    .then((data) => data.json())
    .then((res) => res);
  return res;
}

test("There should be only one table or none", async () => {
  const data = await fetchData("tables");
  expect(data.length).toBeLessThanOrEqual(1);
});

test("There should be a maximum of 10 teams", async () => {
  const data = await fetchData("teams");
  expect(data.length).toBeLessThanOrEqual(10);
});
