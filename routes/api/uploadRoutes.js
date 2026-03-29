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

// @route GET /api/upload/fallback
// @desc Get the most recently uploaded image (for fallback when active is deleted)
// @access Public
router.get("/fallback", async (req, res) =>
{
  try {
    const { resources } = await cloudinary.search.expression()
      .sort_by('uploaded_at', 'desc')
      .max_results(1)
      .execute();
    
    if (resources && resources.length > 0) {
      res.json({ fallbackPublicId: resources[0].public_id });
    } else {
      res.json({ fallbackPublicId: null });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ fallbackPublicId: null, error: error.message });
  }
})

router.delete("/:id", async (req, res) =>
{
  await cloudinary.uploader.destroy(req.params.id, function (error, result)
  {
    console.log(result, error)
  });
})

module.exports = router;
