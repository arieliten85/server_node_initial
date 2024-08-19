const greetingService = require("../services/greeting.service");

class GreetingController {
  static getGreeting = (req, res) => {
    const { response, error } = greetingService.getGreeting();

    if (error) {
      return res.status(500).json({ message: "Internal Server Error", error });
    }

    res.status(200).json(response);
  };
}

module.exports = GreetingController;
