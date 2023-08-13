import { createRef } from "react"
import { Vector3 } from "three"

const state = {
  sections: 9,
  pages: 8,
  zoom: 75,
  paragraphs: [
    {
      offset: 1,
      factor: 1.75,
      header: "nft marketplace",
      image: "/photo-1515036551567-bf1198cccc35.jpeg",
      aspect: 1.51,
      text: "An NFT marketplace dedicated to AI generated images and art that also supports fractional ownership"
    },
    {
      offset: 2,
      factor: 2.0,
      header: "Generate NFTs",
      image: "/photo-1519608487953-e999c86e7455.jpeg",
      aspect: 1.5,
      text: "Easily generate NFTs from prompts using our NFT generation feature, ENGINE, then mint and sell them on the marketplace."
    },
    {
      offset: 3,
      factor: 2.25,
      header: "fractional ownership",
      image: "/ph1.jpg",
      aspect: 1.5037,
      text:
        "Making NFT ownership accessible to all. Utilizing our AI portfolio manager, users can also create NFT trading bots, creating the world's first fractional treding NFT market. "
    },
    {
      offset: 4,
      factor: 2.0,
      header: "on-chain nft storage",
      image: "/ph3.jpg",
      aspect: 0.665,
      text: "Thanks to leveraging SKALE's filestorage feature, NFTs (up to 100MB) can be stored on-chain"
    },
    {
      offset: 5,
      factor: 1.75,
      header: "zero gas fees",
      image: "/photo-1533577116850-9cc66cad8a9b.jpeg",
      aspect: 1.55,
      text: "Thanks again to building the project on the SKALE Ethereum layer2."
    },
    {
      offset: 7,
      factor: 1.05,
      header: "And of course",
      image: "/photo-1548191265-cc70d3d45ba1.jpeg",
      aspect: 1.77,
      text: "The full features any NFT marketplace offers. Including scheduling drops, leaderboards, NFTs for unlocking content, and more."
    }
  ],
  stripes: [
    { offset: 0, color: "#000", height: 13 },
    { offset: 6.3, color: "#000", height: 20 }
  ],
  diamonds: [
    { x: 0, offset: 0.15, pos: new Vector3(), scale: 14, factor: 4 },
    { x: 2, offset: 1.1, pos: new Vector3(), scale: 1.8, factor: 2.1 },
    { x: -5, offset: 2, pos: new Vector3(), scale: 1.8, factor: 2.5 },
    { x: 0, offset: 3.2, pos: new Vector3(), scale: 1.8, factor: 1.75 },
    { x: 0, offset: 4, pos: new Vector3(), scale: 1.8, factor: 2.5 },
    { x: 2, offset: 5.5, pos: new Vector3(), scale: 2.25, factor: 0.85 },
    { x: -5, offset: 7, pos: new Vector3(), scale: 1.8, factor: 2 },
    { x: 0, offset: 8, pos: new Vector3(), scale: 2.5, factor: 6 }
  ],
  top: createRef()
}

export default state
