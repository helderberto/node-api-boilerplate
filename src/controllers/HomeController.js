class HomeController {
  index(req, res) {
    return res.json({
      message: '✨ Welcome to the Node API boilerplate!',
    })
  }
}

export default new HomeController()
