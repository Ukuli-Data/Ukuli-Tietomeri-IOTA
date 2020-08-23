package main

import (
    . "github.com/iotaledger/iota.go/api"
    "fmt"
)

var node = "https://nodes.devnet.iota.org:443"

func main() {
    // Create a new instance of the IOTA API object
    // and specify which node to connect to
    api, err := ComposeAPI(HTTPClientSettings{URI: node})
    must(err)

    // Call the `getNodeInfo()` method for information about the IOTA node and the Tangle
    nodeInfo, err := api.GetNodeInfo()
    must(err)

    fmt.Println(nodeInfo)

}

func must(err error) {
    if err != nil {
        panic(err)
    }
}