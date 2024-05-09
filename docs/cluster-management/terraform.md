# Terraform

Terraform is an incredibly powerful and flexible tool for Infrastructure as Code (IaC). It enables the definition of resources using a specific language called HCL. Each resource can be applied to the chosen destination, such as AWS, GCP, etc.

Terraform communicates with these destinations through the implementation of APIs wrapped for Terraform, called providers.

The state is managed using GitLab's managed [remote state](https://docs.gitlab.com/ee/user/infrastructure/iac/terraform_state.html).

## Configuring Applications

Currently, Terraform is used for application configuration, allowing everything to be written to a file and reproduced at a later time.

### Vault

This tool is utilized for Vault configuration, including certificates, secrets, and permissions to access them. Every certificate can be defined with Terraform and applied to Vault, enabling applications to utilize them. Vault also manages secrets used by applications, and in the future, it will include database credentials with appropriate automatic rotation.

### ArgoCD

ArgoCD's initial configuration is handled with Terraform. In ArgoCD, there is a main application that monitors other applications. Each additional application is either a Helm Chart or a YAML manifest defining Kubernetes resources.
