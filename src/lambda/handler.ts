import * as AWS from 'aws-sdk'

AWS.config.update({
  region: 'eu-west-3', 
  credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
  },
})

const lambda = new AWS.Lambda()
function handler(event: any, context: unknown) {
    if (event["name"] == "s3:ObjectCreated:*"){
        return 
    }
    return "unknown event"
}
