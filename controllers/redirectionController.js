const urlModel = require("../models/urlModel");

exports.getShortUrl = async (req, res) => {
  try {
    // 1 check if the urlCode exist in the db
    const url = await urlModel.findOne({ urlCode: req.params.code });
    if (!url) {
      return res.status(404).json({ message: "No url was found" });
    }
    return res.redirect(url.longUrl);
  } catch (err) {
    console.log(err);
  }
};
