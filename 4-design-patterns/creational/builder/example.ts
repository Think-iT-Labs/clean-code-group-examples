// The edc-connector-client https://github.com/Think-iT-Labs/edc-connector-client/blob/main/src/client.ts

import { EdcConnectorClient } from "@think-it-labs/edc-connector-client";

const builder = new EdcConnectorClient.Builder();

const connectorAddresses = {
  management: "http://some-host.com/management",
  public: "http://some-host.com/public",
  connectorToken: "some-token",
};

builder.managementUrl(connectorAddresses.management);
builder.publicUrl(connectorAddresses.public);
builder.apiToken(connectorAddresses.connectorToken);

const connectorClient = builder.build();

connectorClient.management.assets.queryAll();
