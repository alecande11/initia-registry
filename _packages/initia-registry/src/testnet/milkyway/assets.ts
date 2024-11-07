import { AssetList } from "@initia/initia-registry-types";
const info: AssetList = {
  $schema: "../../assetlist.schema.json",
  chain_name: "milkyway",
  assets: [
    {
      description: "The native token of MilkyWay",
      denom_units: [
        {
          denom: "umilk",
          exponent: 0,
        },
        {
          denom: "MILK",
          exponent: 6,
        },
      ],
      base: "umilk",
      display: "MILK",
      name: "MilkyWay Native Token",
      symbol: "MILK",
      coingecko_id: "",
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/milkyway/images/MILK.png",
          svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/milkyway/images/MILK.svg",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/milkyway/images/MILK.png",
        svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/milkyway/images/MILK.svg",
      },
    },
    {
      description: "The INIT Liquid Staking Token",
      denom_units: [
        {
          denom: "milkuinit",
          exponent: 0,
        },
        {
          denom: "milkINIT",
          exponent: 6,
        },
      ],
      base: "milkuinit",
      display: "milkINIT",
      name: "INIT Liquid Staking Token",
      symbol: "milkINIT",
      coingecko_id: "",
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/milkyway/images/milkINIT.png",
          svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/milkyway/images/milkINIT.svg",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/milkyway/images/milkINIT.png",
        svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/milkyway/images/milkINIT.svg",
      },
    },
    {
      description: "The native token of Initia (IBC-Bridged)",
      denom_units: [
        {
          denom:
            "ibc/37A3FB4FED4CA04ED6D9E5DA36C6D27248645F0E22F585576A1488B8A89C5A50",
          exponent: 0,
        },
        {
          denom: "INIT",
          exponent: 6,
        },
      ],
      base: "ibc/37A3FB4FED4CA04ED6D9E5DA36C6D27248645F0E22F585576A1488B8A89C5A50",
      display: "INIT",
      name: "Initia IBC INIT",
      symbol: "INIT",
      coingecko_id: "",
      traces: [
        {
          type: "ibc",
          counterparty: {
            chain_name: "initia",
            base_denom: "uinit",
            channel_id: "channel-310",
          },
          chain: {
            channel_id: "channel-0",
            path: "transfer/channel-0/uinit",
          },
        },
      ],
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/INIT.png",
          svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/INIT.svg",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/INIT.png",
        svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/INIT.svg",
      },
    },
    {
      description: "BSC LayerZero Test Token",
      denom_units: [
        {
          denom:
            "ibc/665CCAFA2768242D74D8CB2E9F5167261B6B75646E2EF2546E0707C0BFC7CDAF",
          exponent: 0,
        },
        {
          denom: "TEST LZ",
          exponent: 8,
        },
      ],
      base: "ibc/665CCAFA2768242D74D8CB2E9F5167261B6B75646E2EF2546E0707C0BFC7CDAF",
      display: "TEST LZ",
      name: "BSC LayerZero Test Token",
      symbol: "TEST LZ",
      coingecko_id: "",
      traces: [
        {
          type: "ibc",
          counterparty: {
            chain_name: "initia",
            base_denom:
              "move/7dfcccb8d69af29d585165531eae5c558061d3e3bded2a121be3ef5e189e6b01",
            channel_id: "channel-0",
          },
          chain: {
            channel_id: "channel-0",
            path: "transfer/channel-0/move/7dfcccb8d69af29d585165531eae5c558061d3e3bded2a121be3ef5e189e6b01",
          },
        },
      ],
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/bsc-test-lz.png",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/bsc-test-lz.png",
      },
    },
  ],
};
export default info;
