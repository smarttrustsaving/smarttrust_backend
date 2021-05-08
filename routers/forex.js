const cacheableResponse = require("cacheable-response");
const router = require("express").Router();
const forexController = require("../controllers/forex");

/*



for caching

*/
const ssrCache = cacheableResponse({
  get: async ({ req, res }) => ({
    data: await forexController(),
    ttl: 24 * 60 * 60 * 1000, // 2 hours
  }),
  send: ({ data, res, req }) => {
    if (data.error) return res.status(500).send(data.error);

    return res.send(data);
  },
});

router.get("/all", (req, res) => ssrCache({ req, res }));

module.exports = router;
