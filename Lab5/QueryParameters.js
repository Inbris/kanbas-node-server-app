export default function QueryParameters(app) {
    app.get("/lab5/calculator", (req, res) => {
      const { a, b, operation } = req.query;
      let result = 0;
      switch (operation) {
        case "add":
          result = parseInt(a) + parseInt(b);
          break;
        case "subtract":
          result = parseInt(a) - parseInt(b);
          break;
          // implement multiply and divide on your own
        case 'multiply': 
          result = parseInt(a) * parseInt(b);
          break;

        case 'divide': 
          if (parseInt(b) !== 0) {
            result = parseInt(a) / parseInt(b);
          } else {
            res.send("Division by zero error");
            return;
          }
          break;


        default:
          result = "Invalid operation";
      }
      res.send(result.toString());
    });
  }
  
  