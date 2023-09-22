const someActionThatReturnsAPromise = async () => {
  return ["john", "fred", "anothony"];
};

const fetchById = async (array, shipmentId) => {
  const providerContracts = [];

  await Promise.all(
    array.map(async (provider) => {
      const names = await someActionThatReturnsAPromise();

      catalog.contractOffers
        .filter((offer) => {
          return offer.asset?.id.startsWith(shipmentId);
        })
        .forEach((offer) => {
          if (offer.asset?.id) {
            providerContracts.push({
              provider,
              assetId: offer.asset?.id,
              contractOffer: offer,
            });
          }
        });
    })
  );

  if (!providerContracts.length) throw new ContractNotFound();
};
