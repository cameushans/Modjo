resource "aws_lambda_function" "lambda_function" {
    description = "Trigger file upload to bucket and upload them to third party api"
    function_name = "upload"
    filename = ""
    role          = var.lambda_role
    handler       = "handler.js"
    runtime = "nodejs20.x"
    package_type = "Zip"
    // provision concurrency keeps a lambda up and running 
    /* resource "aws_lambda_provisioned_concurrency_config" "example" {
    function_name                     = aws_lambda_function.example.function_name
    provisioned_concurrent_executions = 1
    qualifier                         = aws_lambda_function.example.version
    } */
    // that particular function will be have the priority to run 999 times concurently
    reserved_concurrent_executions = 999
    architectures = ["x86_64"]
    
    
}

resource "aws_lambda_function_event_invoke_config" "config" {
  function_name = aws_lambda_function.lambda_function.function_name
  maximum_retry_attempts = 5
}

resource "aws_lambda_permission" "s3_permission_on_lambda" {
  statement_id  = "AllowS3Invoke"
  function_name = aws_lambda_function.lambda_function.function_name
  action = "lambda:InvokeFunction"
  principal = "s3.amazonaws.com"
  source_arn = var.s3_bucket_arn
}
