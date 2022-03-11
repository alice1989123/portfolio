export const projects = [
  {
    title: "Metahagane NFT-Game (Front End) ",
    description:
      "Using NextJs I developed a NFT-Game in the Cardano Block-Chain where users can Buy random  pre-minted  NFTs, and use them for minting more special NFTs, and is posible for them to interchange them in the App Market Place. For Using the app you will need to download the Nami Wallet, then get some test Ada in the Cardano Faucet, and then you can buy NFTs in the the buying Page once your wallet is synced with the App. Then you can mint new Nfts in the Crafting page, and buy and sell your NFTs in the Market place.",
    tags: ["NextJs", "Tailwind", "IPFS"],
    image: "/images/metahagane.png",

    visit: "https://test-rust-alpha-35.vercel.app/ ",
    source: "https://github.com/alice1989123/metahagane.png ",
    id: 0,
  },

  {
    title: "Metahagane NFT-Game (NFT- Batch-Minter )",
    description:
      " Using NodeJs And Cardano-Serialization-Lib (the 'Web3js' of Cardano) I developed the needed back-end for minting 1000 unique NFTs in the Cardano Block-Chain, NFTs are minted in Batch, each batch contains 25 NFTs and pays about 0.2 ADA of fees, this process makes  posible to mint big quantities of NFTs at a low price. You can verify one minting transaction, as well as the metadata of the new minted NFTs in de link below",
    tags: ["NodeJs", "Cardano Serialization-Lib", "IPFS"],
    visit:
      "https://testnet.cardanoscan.io/transaction/ac1753dab21e7055e8918f713656c5698242f983bbb24074ac13aff54809e32b?tab=metadata  ",
    image: "/images/metadata.png",

    source: "https://github.com/alice1989123/Metahagane-Batch-Minter",
    id: 1,
  },
  {
    title: "Metahagane NFT-Game (Back-End) ",
    description:
      "Using NodeJs and Express I developed a basic back-end for the Metahagane App, the backend fetch all data from BlockFrost ( the 'Infura' of Cardano ) for showing the NFTs Images from IPFS and the metadata when needed. Also  makes the transactions that need to be signed by the special private Keys that distinguish the original NFTs, then they are sended back to the front end, so that the user can sign the transaction with the Nami Wallet ( the 'Metamask ' of Cardano.). Also the back-end uses mongo DB for a vending machine that fetch the block-chain 24/7 waiting for an order or purchase from a posible buyer, for testing the working back-end you can hit they buy button of the front-end in the link below. The back-end is hosted in an AWS EC-2 instance",
    tags: ["Express", "MongoDb", "NodeJs", "Amazon EC-2"],
    visit: "https://test-rust-alpha-35.vercel.app/buycards",
    image: "/images/buy.png",
    source: "https://github.com/alice1989123/tamahagane-CNFT-server/settings ",
    id: 2,
  },
  {
    title: "DEX interface",
    description:
      "Using React I created a basic UI implementation for a DEX from a Figma design",
    tags: ["AWS-Amplify", "React"],
    image: "/images/geniusYield.png",

    visit: "https://main.djo1wzd06yg2a.amplifyapp.com/ ",
    source: "https://github.com/alice1989123/genius-yield-exersice ",
    id: 3,
  },
  {
    title: "Paarka",
    description:
      "This project was build for the Cardano Hackathon Hack-Cardano 2021. It is a video streaming  dApp  that mints NFTs, we used as storage service STORJ, a decentralized plataform of storage, as well as IPFS for the image of the NFT. I set up the database-API of users as well as The Smart Contract for minting the NFT and the front-End of the App.",
    image: "/images/1.png",
    tags: ["React", "MongoDB", "Cardano", "Haskell", "NFT", "STORJ"],
    source: "https://hackcardano.cardstarter.io/project/paarka/",
    visit: "https://github.com/georgeos/paarka",
    id: 4,
  },
];

export const TimeLineData = [
  { year: 2012, text: "Finished my  Bachelor in Biochemistry" },
  { year: 2018, text: "Finished my  Bachelor this time in Maths" },
  { year: 2020, text: "Finished my  Master in Maths" },
  { year: 2020, text: "Started learning Python and Data Science" },
  {
    year: 2021,
    text: "I have continued my way into development around the crypto technologies",
  },
];
