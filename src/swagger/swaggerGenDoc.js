import swaggerAutogen from "swagger-autogen";

const doc = {
  info: {
    title: "GSheets API Back-End",
    contact: { email: "andreperna@gmail.com" },
    description: "Use your Google Sheets as Back-End",
  },
  host: "oracle-vm2.freeddns.org:3000",
  // schemes: ["http"],
};

const outputFile = "src/swagger/swagger-output.json";
const endpointsFiles = ["src/api/routes/routes.js"];

async function generateSwaggerDoc() {
  return swaggerAutogen(outputFile, endpointsFiles, doc);
}

export const swaggerGenDoc = {
  generateSwaggerDoc
}