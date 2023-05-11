const router = require("express").Router();
const { User } = require("../../models");
const withAuth = require("../../utils/auth");

router.delete("/profile", withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id);

    if (!userData) {
      res.status(404).json({ message: "No user found with this id!" });
      return;
    }

    // Render a confirmation page if user is logged in and exists
    res.render("confirm-delete", {
      user: userData,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/profile/confirm", withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id);

    if (!userData) {
      res.status(404).json({ message: "No user found with this id!" });
      return;
    }

    // Delete user's data
    await userData.destroy();

    // Remove the session variables
    req.session.destroy(() => {
      res.redirect("/");
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;