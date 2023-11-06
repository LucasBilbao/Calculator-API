const dotenv = require('dotenv');
const soap = require('soap');
const fs = require('fs');

// Configure .env
dotenv.config({ path: './config.env' });
const app = require('./app');
const calculatorService = require('./services/calculator');

const xml = fs.readFileSync('calculatorService.wsdl', 'utf8');

const PORT = process.env.PORT ?? 3000;
app.listen(PORT, () => {
  console.log(`App running on port http://localhost:${PORT} ...\n`); // eslint-disable-line

  soap.listen(app, '/soap_api/v1/calculator', calculatorService, xml);
  /* eslint-disable-line */ console.log(
    `Checkout http://localhost:${PORT}/soap_api/v1/calculator?wsdl to see if the service is working!`,
  );
});
