import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { aws_s3 as s3 } from 'aws-cdk-lib';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class AwsCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new s3.Bucket(this, 'aws-s3-sandbox-cdktemp-dev', {
      versioned: true,
    });
  }
}
