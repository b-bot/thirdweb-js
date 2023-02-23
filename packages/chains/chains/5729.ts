export default {
  "name": "Hika Network",
  "title": "Hika Network Testnet",
  "chain": "HIK",
  "icon": {
    "url": "ipfs://QmW44FPm3CMM2JDs8BQxLNvUtykkUtrGkQkQsUDJSi3Gmp",
    "width": 350,
    "height": 84,
    "format": "png"
  },
  "rpc": [
    "https://hika-network.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://rpc-testnet.hika.network/"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Hik Token",
    "symbol": "HIK",
    "decimals": 18
  },
  "infoURL": "https://hika.network/",
  "shortName": "hik",
  "chainId": 5729,
  "networkId": 5729,
  "explorers": [
    {
      "name": "Hika Network Testnet Explorer",
      "url": "https://scan-testnet.hika.network",
      "standard": "none"
    }
  ],
  "testnet": true,
  "slug": "hika-network"
} as const;