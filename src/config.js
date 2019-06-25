export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-uploads-djhernandez"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://hwdi3qdvy2.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_Q9a47cBSi",
    APP_CLIENT_ID: "71cv9pg4c9vtbclkhdv6k0urvs",
    IDENTITY_POOL_ID: "us-east-2:20bdc7cf-0aa5-4437-bd2e-4cf9b73b593c"
  }
};
