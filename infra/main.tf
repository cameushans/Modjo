
provider "aws" {
/*     access_key  = "var.aws_access_key"
    secret_key  = "var.aws_secret_key" */
    region      = "eu-west-3"
}

module "lambda" {
  source = "./lambda"
  s3_bucket_arn = module.s3.bucket_arn
  lambda_role = module.iam.lambda_iam_role
}
module "iam" {
  source = "./iam"
}
module "s3" {
  source = "./s3"
  lambda_arn = module.lambda.lambda_arn
}
