---
sidebar_position: 1
---

# Introduction

This is my declarative repository for my home Kubernetes cluster. [Flux](https://fluxcd.io/docs/) watches the `cluster` folder and applies changes to the cluster based on differences in the YAML files.

## Cluster Setup

My cluster uses [k3s](https://k3s.io/) on Ubuntu 20.04. It used mixed hardware arm and x86 with raspberry pis and traditional hardware. I have a separate NFS server running TrueNAS just for data storage and backups.

## Cluster Components

- [rook-ceph](https://rook.io/): Provides persistent volumes, allowing any application to consume RBD block storage.
- [Mozilla SOPS](https://toolkit.fluxcd.io/guides/mozilla-sops/): Encrypts secrets which is safe to store - even to a public repository.
- [cert-manager](https://cert-manager.io/docs/): Configured to create TLS certs for all ingress services automatically using LetsEncrypt.

## Repository Structure

The Git repository contains the following directories under cluster and are ordered below by how Flux will apply them.

- **base** directory is the entrypoint to Flux
- **crds** directory contains custom resource definitions (CRDs) that need to exist globally in your cluster before anything else exists
- **core** directory (depends on **crds**) are important infrastructure applications (grouped by namespace) that should never be pruned by Flux
- **apps** directory (depends on **core**) is where your common applications (grouped by namespace) could be placed, Flux will prune resources here if they are not tracked by Git anymore

```
./cluster
├── ./apps
├── ./base
├── ./core
└── ./crds
```

## :robot: CI Things

- [Github Actions](https://docs.github.com/en/actions) for checking code formatting
- Rancher [System Upgrade Controller](https://github.com/rancher/system-upgrade-controller) to apply updates to k3s
- [Renovate](https://github.com/renovatebot/renovate) with the help of the [k8s-at-home/renovate-helm-releases](https://github.com/k8s-at-home/renovate-helm-releases) Github action keeps my application charts and container images up-to-date

## Hardware

| Device         | Count | OS Disk Size | Data Disk Size          | Ram  | Purpose                |
| -------------- | ----- | ------------ | ----------------------- | ---- | ---------------------- |
| Dell XPS 15    | 1     | 1TB NVMe     | Shared with 1TB NVMe OS | 32GB | k3s master and storage |
| Raspberry Pi 4 | 2     | 64 SD Card   | N/A                     | 8GB  | k3s workers            |

## :hammer: Tools

| Tool                                                   | Purpose                                                      |
| ------------------------------------------------------ | ------------------------------------------------------------ |
| [direnv](https://github.com/direnv/direnv)             | Sets environment variable based on present working directory |
| [go-task](https://github.com/go-task/task)             | Alternative to makefiles, who honestly likes that?           |
| [pre-commit](https://github.com/pre-commit/pre-commit) | Enforce code consistency and verifies no secrets are pushed  |
| [stern](https://github.com/stern/stern)                | Tail logs in Kubernetes                                      |
