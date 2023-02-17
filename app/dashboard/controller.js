module.exports = {
  index: async (req, res) => {
    try {
      res.render("index", {
        name: req.session.user.name,
        title: 'Halaman Dahsboard'
      });
    } catch (error) {
      console.log(error);
    }
  },
};
