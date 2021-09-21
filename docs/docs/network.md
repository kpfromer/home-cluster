# Networking

## DNS

### Internal

Internal DNS is handled by a separate pihole instance that uses dnsmasq to route traffic to the metallb load balancer. This might change in the future by using a kubernetes DNS server like blocky or coreDNS.

### External

External DNS is handled by `external-dns`. External dns handles updating the CloudFlare settings.

To make a service publicly available add the following annotations to the ingress:

```
external-dns.alpha.kubernetes.io/target: "ipv4.${SECRET_DOMAIN}"
external-dns/is-public: "true"
```

**Note** an two authentication system is still being worked on!
