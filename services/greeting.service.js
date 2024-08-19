class GreetingService {
  static getGreeting = () => {
    try {
      const dbResponse = { greeting: "Hello" };

      if (!dbResponse) {
        throw new Error("Failed to fetch greeting from the database");
      }

      return { response: dbResponse, error: false };
    } catch (err) {
      return { response: null, error: err.message };
    }
  };
}

module.exports = GreetingService;
