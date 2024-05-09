# Vault

Vault is the tool chosen for managing secrets within the Kubernetes cluster.

Initially, it was chosen for certificate management. In fact, every certificate can be generated and retrieved using this tool.

Everything is managed and maintained with Terraform, including secret and certificate definition.

## Managing Root Certificates

At the moment, the tool stores the self-signed root certificate used by the Ingress controller.

Every secret needed by the Ingress controller is automatically generated from this root certificate using cert-manager. Because it is a self-signed certificate, it must be trusted before being considered valid.

Once generated, it is manually imported into my development machine so that I can connect with SSL. However, currently, this is only possible locally because Proxmox is not exposed to the internet.

## Managing Intermediate Certificates

It is planned to test Istio as a service mesh with Vault integration.

Vault is responsible for generating a root certificate and an intermediate certificate, which are then used by Istio CA for issuing certificates used by the Kubernetes services.

Using this method, mTLS can be enabled.

## Managing Secrets

Vault can manage secrets. Every secret is versioned, and with the use of the [External Secret Operator](../eso), it is synced in Kubernetes as a secret.

