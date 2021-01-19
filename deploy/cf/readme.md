# Static site buckets + users
This document details the S3 buckets, plus users needed to create assets in those buckets, for hosting the app. The CF template given in `./s3.yml` will create 2 buckets (one for staging and one for prod) with perms setup for the users access. Note that access keys will need to be manually configured under the new users

## Deploying to aws account
To deploy this stack run in this dir
```bash
aws cloudformation deploy --stack-name mbo-app-buckets --region eu-west-2 --profile [your local AWS profile name] --capabilities CAPABILITY_NAMED_IAM --template-file s3.yml
```

