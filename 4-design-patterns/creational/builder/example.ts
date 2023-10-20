// The edc-connector-client https://github.com/Think-iT-Labs/edc-connector-client/blob/main/src/client.ts

import { EdcConnectorClient } from "@think-it-labs/edc-connector-client";

const builder = new EdcConnectorClient.Builder();

builder.managementUrl("http://some-host.com/management");
builder.apiToken("some-token");

const connectorClient = builder.build();

connectorClient.management.assets.queryAll();
