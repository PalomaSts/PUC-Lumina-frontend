terraform {
  required_version = ">= 1.5.0"

  required_providers {
    local = {
      source  = "hashicorp/local"
      version = "~> 2.4"
    }
  }
}

resource "local_file" "frontend_env" {
  filename = "${path.module}/frontend.env"

  content = <<EOT
REACT_APP_SERVER_URL=${var.backend_url}
REACT_APP_ENV=${var.environment}
EOT
}