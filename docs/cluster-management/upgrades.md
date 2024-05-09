# Cluster upgrades 
At the moment the Kubernetes cluster runs k3s.
Upgrades are managed in an semi-automated way using Kubernetes operator system-upgrade-operator.

Using this the tool, the upgrades are managed using CRD and then apply them to the cluster.
This CRD is called Plan and for every resource the controller performs an upgrade.

This approch has a few downsides, for instance it requires an high privileged container that performs the upgrades.

At the time, there is not an official Helm Chart that support this application. 
For this reason the application is installed using plain manifests found here: [manifests](https://github.com/rancher/system-upgrade-controller/tree/master/manifests) and [CRDs](https://raw.githubusercontent.com/rancher/system-upgrade-controller/v0.13.4/manifests/system-upgrade-controller.yaml).

## Upgrade process
Before an upgrade is needed to define a CRD that defines a Plan. This plan is firstly applied and than executed by the system-upgrade-controller operator.

```yml
apiVersion: upgrade.cattle.io/v1
kind: Plan
metadata:
  name: k3s-server
  namespace: system-upgrade
  labels:
    k3s-upgrade: server
spec:
  concurrency: 1 
  version: v1.28.8+k3s1
  nodeSelector:
    matchExpressions:
      - {key: k3s-upgrade, operator: Exists}
      - {key: k3s-upgrade, operator: NotIn, values: ["disabled", "false"]}
      - {key: k3os.io/mode, operator: DoesNotExist}
      - {key: node-role.kubernetes.io/control-plane, operator: Exists}
  serviceAccountName: system-upgrade
  cordon: true
  upgrade:
    image: rancher/k3s-upgrade
```

This plan is used to upgrade a specific master node to the specified version. 
By default this plan will not work because not all node selectors are satisfied.
In this case is missing the `k3s-upgrade` node label.

The label can be added using:
```sh 
kubectl label node <node-name> k3s-upgrade=true
```

After this the operator should perform the upgrade.

## Kubectl version
Since the cluster is upgraded using a pod, it requires a container that has kubectl installed.
This version can be specified during the Deployment installation through a ConfigMap.

For reference, the value is like this:
```
SYSTEM_UPGRADE_JOB_KUBECTL_IMAGE: rancher/kubectl:v1.28.8
```
