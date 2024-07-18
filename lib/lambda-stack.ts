import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as path from 'path'; 

export class MyLambdaStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const myFunction = new NodejsFunction(this, 'MyNodejsFunction', {
      runtime: lambda.Runtime.NODEJS_18_X,
      entry: path.join(__dirname, '../lambda/index.ts'), 
      handler: 'handler',
      bundling: {
        externalModules: [], 
        nodeModules: [], 
        sourceMap: true, 
      },
    });

    const api = new apigateway.LambdaRestApi(this, 'MyApi', {
      handler: myFunction,
      proxy: false,
    });

    const helloResource = api.root.addResource('hello');
    helloResource.addMethod('GET');
  }
}


