output "lambda_arn" {
  description = "The ARN of the lambda"
  value       = aws_lambda_function.lambda_function.arn
}

output "lambda_id" {
  description = "The ID of the lambda"
  value       = aws_lambda_function.lambda_function.id
}
