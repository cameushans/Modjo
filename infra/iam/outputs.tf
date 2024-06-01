output "lambda_iam_role" {
  description = "The ID of the lambda"
  value       = aws_lambda_function.lambda_function.id
}