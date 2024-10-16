import { connect, Environment } from "braintree";
var gateway = connect({
  environment: Environment.Sandbox,
  merchantId: "48fx4jnkmfsk6g33",
  publicKey: "kp78pnvbvb9d5x3p",
  privateKey: "c9e3ff083dffa6f61a464910e8b18baa"
});


export function getToken(req, res) {
  gateway.clientToken.generate({}, function(err, response) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(response);
    }
  });
}


export function processPayment(req, res) {
  let nonceFromTheClient = req.body.paymentMethodNonce;


  let amountFromTheClient = req.body.amount;
  gateway.transaction.sale(
    {
      amount: amountFromTheClient,
      paymentMethodNonce: nonceFromTheClient,


      options: {
        submitForSettlement: true
      }
    },
    function(err, result) {
      if (err) {
        res.status(500).json(error);
      } else {
        res.json(result);
      }
    }
  );
}
