import Btc from "@/components/welcome/Btc";
import Commodities from "@/components/welcome/Commodities";
import CrowdLending from "@/components/welcome/CrowdLending";
import CrowdRealEsate from "@/components/welcome/CrowdRealEsate";
import Crypto from "@/components/welcome/Crypto";
import Efts from "@/components/welcome/Efts";

export const items = [
  {
    title: "btc",
    item: <Btc />,
  },
  {
    title: "crowdRealEstate",
    item: <CrowdRealEsate />,
  },
  {
    title: "etfs",
    item: <Efts />,
  },
  {
    title: "commodities",
    item: <Commodities />,
  },
  {
    title: "crowdLending",
    item: <CrowdLending />,
  },
  {
    title: "crypto",
    item: <Crypto />,
  },
];
