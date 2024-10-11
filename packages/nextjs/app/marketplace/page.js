import Image from "next/image";

const MarketplaceHome = () => {
  const nfts = [
    {
      id: 1,
      image: "https://ipfs.io/ipfs/QmTLwhjQNYpb393wJV8NLnq1LYC72YR8fcwvJAtfkRgbth",
      price: "0.5 ETH",
      title: "NFT 1",
    },
    {
      id: 2,
      image: "https://ipfs.io/ipfs/QmTLwhjQNYpb393wJV8NLnq1LYC72YR8fcwvJAtfkRgbth",
      price: "1.0 ETH",
      title: "NFT 2",
    },
    {
      id: 3,
      image: "https://ipfs.io/ipfs/QmTLwhjQNYpb393wJV8NLnq1LYC72YR8fcwvJAtfkRgbth",
      price: "0.75 ETH",
      title: "NFT 3",
    },
    {
      id: 4,
      image: "https://ipfs.io/ipfs/QmTLwhjQNYpb393wJV8NLnq1LYC72YR8fcwvJAtfkRgbth",
      price: "0.75 ETH",
      title: "NFT 4",
    },
    {
      id: 5,
      image: "https://ipfs.io/ipfs/QmTLwhjQNYpb393wJV8NLnq1LYC72YR8fcwvJAtfkRgbth",
      price: "0.75 ETH",
      title: "NFT 5",
    },
    {
      id: 6,
      image: "https://ipfs.io/ipfs/QmTLwhjQNYpb393wJV8NLnq1LYC72YR8fcwvJAtfkRgbth",
      price: "0.75 ETH",
      title: "NFT 6",
    },
  ];

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-4 mt-4">NFT Marketplace</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {nfts.map(nft => (
          <div key={nft.id} className="p-2 flex flex-col items-center">
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <h3 className="text-lg font-semibold">{nft.title}</h3>
              <Image
                src={nft.image}
                alt={`NFT ${nft.id}`}
                width={500}
                height={200}
                className="w-full h-48 object-cover mb-2 border rounded-md"
              />
              <p className="text-sm font-semibold">Price: {nft.price}</p>
              <button className="mt-2 px-4 py-2 bg-green-600 text-white rounded">Buy</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketplaceHome;
