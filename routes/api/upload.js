const router = require("express").Router();

require("dotenv").config();
const cloudinary = require('../../utils/cloudinary');

// Upload Endpoint
router.post("/", async (req, res) =>
{
  const fileStr = req.body.file;
  try
  {
    const uploadedResponse = await cloudinary.uploader.upload(fileStr);
    res.json({ public_id: uploadedResponse.public_id, secure_url: uploadedResponse.secure_url })
  } catch (error)
  {
    console.error(error);
    res.status(500).json({ err: "Something went wrong" })
  }
});

router.get("/", async (req, res) =>
{
  const { resources } = await cloudinary.search.expression()
    // .sort_by('public_id', 'desc')
    .sort_by('uploaded_at', 'asc')
    .max_results(30)
    .execute();
  const publicIds = resources.map(file => file.public_id);
  res.send(publicIds);
})

router.delete("/:id", async (req, res) =>
{
  await cloudinary.uploader.destroy(req.params.id, function (error, result)
  {
    console.log(result, error)
  });
})

module.exports = router;
