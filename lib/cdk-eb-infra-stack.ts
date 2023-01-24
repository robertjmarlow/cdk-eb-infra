import * as cdk from '@aws-cdk/core';
// import * as sqs from '@aws-cdk/aws-sqs';
import s3assets = require('@aws-cdk/aws-s3-assets');

export class CdkEbInfraStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    // Construct an S3 asset from the ZIP located from directory up.
    const webAppZipArchive = new s3assets.Asset(this, 'WebAppZip', {
      path: `${__dirname}/../app.zip`,
    });
    // example resource
    // const queue = new sqs.Queue(this, 'CdkEbInfraQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
