package main

import (
	"fmt"

	. "github.com/iotaledger/iota.go/api"
)

var endpoint = ""

func main() {
	// compose a new API instance
	api, err := ComposeAPI(HTTPClientSettings{URI: endpoint})
	must(err)

	nodeInfo, err := api.GetNodeInfo()
	must(err)
	fmt.Println("latest milestone index:", nodeInfo)

	fmt.Println("latest milestone index:", nodeInfo.LatestMilestoneIndex)
}

func must(err error) {
	if err != nil {
		panic(err)
	}
}
