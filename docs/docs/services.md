---
sidebar_position: 3
---

# Services

## Plex

## Monica

MySQL: https://kubernetes.io/docs/tasks/run-application/run-single-instance-stateful-application/

## TrueNAS

### NFS

Make sure to set `all dirs` true and mappall user to `root` and mapall group to `wheel`.

https://www.reddit.com/r/freenas/comments/ew9kbn/how_are_nfs_permissions_handled_by_freenas/

## Longhorn

I had issues with rook-ceph, and swapped to longhorn, which works great.

Longhorn handles:

- creating storage for pvcs
- backing up data to NFS on NAS (TrueNAS)
