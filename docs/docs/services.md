# Services

## Plex

## Monica

MySQL: https://kubernetes.io/docs/tasks/run-application/run-single-instance-stateful-application/

## TrueNAS

### NFS

Make sure to set `all dirs` true and mappall user to `root` and mapall group to `wheel`.

https://www.reddit.com/r/freenas/comments/ew9kbn/how_are_nfs_permissions_handled_by_freenas/

## rook-ceph

Current date is Sept 14 2021.

Many of the people in the k8s at home communitiy are deploying rook ceph using crds and yamls instead the newly release helm chart ([link to news article](https://blog.rook.io/rook-v1-7-storage-enhancements-6ae647aa5d97), released August 4 2021).

My setup is based on paulkiernan ([link](https://github.com/paulkiernan/homelab-cluster/blob/0248950604b08f37506038e79406550b5ecd92fa/cluster/core/rook-ceph/ceph-operator/helm-release.yaml)).

There are two things used to setup the rook ceph system:

1. [rook ceph operator helm chart](https://rook.io/docs/rook/v1.7/helm-operator.html)
2. [rook ceph cluster helm chart](https://rook.io/docs/rook/v1.7/helm-ceph-cluster.html). It depends on the operators (aka the above chart)

See [examples here](https://github.com/search?q=%22chart%3A+rook-ceph-cluster%22&type=code)

### Rook Ceph Cluster Helm Chart

Note the defaults:

> - If the operator was installed in a namespace other than rook-ceph, the namespace must be set in the operatorNamespace variable.
> - Set the desired settings in the cephClusterSpec. The defaults are only an example and not likely to apply to your cluster.
> - The monitoring section should be removed from the cephClusterSpec, as it is specified separately in the helm settings.
> - The default values for cephBlockPools, cephFileSystems, and CephObjectStores will create one of each, and their corresponding storage classes.
