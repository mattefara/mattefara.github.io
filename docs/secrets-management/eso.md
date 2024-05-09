# External Secret Operator

The External Secret Operator is a tool for managing external secrets. It facilitates the synchronization of secrets stored in other sources into a Kubernetes cluster.

A source could be, for example, Vault, but it is not limited to that. It can also be used with KMS or Google Secret Manager.

For the homelab setup, Vault is chosen as the source. With this method, every secret stored in Vault can be synced to a Kubernetes secret, and vice versa: a Kubernetes secret can be stored inside Vault.

## Secret Store and Cluster Secret Store
This is one of the CRDs (Custom Resource Definitions) that the External Secret Operator offers. It allows the definition of a secret source, which can be cluster-wide or namespace-wide.

In the case of a Vault secret store, a ClusterSecretStore is utilized so that a single secret store can operate across different namespaces.

Each secret is then defined as a ClusterExternalSecret and kept synchronized. Whenever a new version of the defined secret is published in Vault, it is reflected inside the Kubernetes cluster as a Secret.

In Vault, secret creation is managed with Terraform. Terraform only defines the secret, and later it is populated. With this approach, the value of the secret is not saved inside the Terraform state.

