import { MyLambdaStack } from './../lib/lambda-stack';
import * as cdk from 'aws-cdk-lib';


const app = new cdk.App();
new MyLambdaStack(app, 'MyLambdaStack');