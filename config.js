module.exports = {
  dao: {
    name: "Krause House",
    description: "A community just crazy enough to buy an NBA team as a DAO.",
    memberName: "Jerry",
    treasury: "0xe4762eacebdb7585d32079fdcba5bb94eb5d76f2",
    gnosisSafes: [
      {
        name: "Main Treasury",
        network: 1,
        address: "0xe4762eacebdb7585d32079fdcba5bb94eb5d76f2",
      },
    ],
  },
  tokenGating: {
    status: true,
    filters: [
      {
        address: "0x9",
        gt: 0,
      },
    ],
  },
  snapshotSpace: "krausehouse.eth",
  snapshotUrl: "https://snapshot.org/#/krausehouse.eth",
  defaultAvatar: "/coachrick.png",
  userTags: [
    {
      name: "Steward",
      description: "Responsible for proposal process and Snapshot space.",
    },
    {
      name: "Contributor",
      description: "Active or previous full- or part-time contributor.",
    },
    {
      name: "Full-Time",
      description: "Currently full-time.",
    },
    {
      name: "Media Team",
      description: "Meme'ing it up.",
    },
    {
      name: "Dev Team",
      description: "",
    },
    {
      name: "Pig Pen",
      description: "Contributes to Ball Hogs operations.",
    },
  ],
  proposalTags: [
    "Compensation",
    "Ball Hogs",
    "Big3",
    "Community",
    "Full-Time",
    "Project",
    "Investment",
    "Treasury",
    "Important",
    "Major Expense",
  ],
  commands: {
    links: [
      {
        name: "Add a resource to HouseOS",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSe5UxKw3qC7wOuTVi454TbWjNPmhAPdLRyJ8VWn77Gu7ojaAg/viewform?usp=sf_link",
        keywords: ["Search"],
      },
      {
        name: "Calendar",
        link: "https://calendar.google.com/calendar/u/0?cid=dTRobTU2NDQ4NWZoN201MHR0Z2N2NTNlNmdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ",
        favorite: true,
      },
      {
        name: "Submit a Proposal",
        keywords: ["Proposals", "Governance"],
        link: "https://krausehousework.notion.site/Submit-a-Proposal-fcf858c80a0c40b6a2a83aec5ed588dc",
        favorite: true,
      },
      {
        name: "Proposals Database",
        keywords: ["Proposals", "Governance", "Stewards"],
        link: "https://www.notion.so/a5d990ad04624d9daa70366b88e88ce4?v=62daad62e62a4395a7be0edaa26e630c",
      },
      {
        name: "Contributor Dashboard",
        keywords: ["Work"],
        link: "https://krausehousework.notion.site/Krause-House-Contributor-Dashboard-a00860761dd4486792aed12cc8187ce2",
        favorite: true,
      },
      {
        name: "Bounty Board (Dework)",
        keywords: ["Dework"],
        link: "https://app.dework.xyz/krause-house",
      },
      {
        name: "Mainnet Transactions",
        keywords: [
          "Treasury",
          "Multisig",
          "Spending",
          "Budget",
          "Assets",
          "Spending",
          "0xe4762eacebdb7585d32079fdcba5bb94eb5d76f2",
        ],
        link: "https://krausehousework.notion.site/e44eec07c098494ea9a8468395af50f9?v=8d44b9d251d241a6b7d3d204082f08a6",
        favorite: true,
      },
      {
        name: "Governance Docs",
        keywords: ["Governance", "Docs", "Delegation"],
        link: "https://krausehousework.notion.site/Governance-Philosophy-3aa7d188a9974559a591ec5e2cf98aa3",
      },

      {
        name: "$KRAUSE Token Contract",
        keywords: ["Contract", "$KRAUSE", "Docs"],
        link: "https://etherscan.io/address/0x9f6f91078a5072a8b54695dafa2374ab3ccd603b",
      },
      {
        name: "Main Treasury",
        keywords: [
          "Multisig",
          "Gnosis",
          "Funding",
          "Wallet",
          "Account",
          "Balances",
          "Accounting",
          "Assets",
        ],
        link: "https://etherscan.io/address/0xe4762eacebdb7585d32079fdcba5bb94eb5d76f2",
        favorite: true,
      },
      {
        name: "Gnosis Chain Treasury",
        keywords: [
          "Multisig",
          "Gnosis",
          "Funding",
          "Wallet",
          "Account",
          "Balances",
          "Accounting",
          "Assets",
        ],
        network: 1,
        address: "gno:0x5844c36D6f803213Ca3f7fDac39A0d78f918ee3c",
        link: "https://blockscout.com/xdai/mainnet/address/0x5844c36D6f803213Ca3f7fDac39A0d78f918ee3c/transactions",
      },
      {
        name: "Polygon Treasury",
        keywords: [
          "Multisig",
          "Gnosis",
          "Funding",
          "Wallet",
          "Account",
          "Balances",
          "Accounting",
          "Assets",
        ],
        network: 1,
        address: "matic:0x40eDBC75C543954CDD9c5ae7398342788F46A85B",
        link: "https://polygonscan.com/address/0x40eDBC75C543954CDD9c5ae7398342788F46A85B",
      },
      {
        name: "Optimism Treasury",
        keywords: [
          "Multisig",
          "Gnosis",
          "Funding",
          "Wallet",
          "Account",
          "Balances",
          "Accounting",
          "Assets",
        ],
        network: 1,
        address: "matic:0x40eDBC75C543954CDD9c5ae7398342788F46A85B",
        link: "https://optimistic.etherscan.io/address/0xe245d82DDeDfB95ccaf68B9B609F1717B1A14A54",
      },
      // {
      //   name: "Forefront Dashboard",
      //   keywords: ["Info", "Metrics"],
      //   link: "https://www.terminal.co/community/social/krausehouse.eth",
      //   favorite: false,
      // },
      {
        name: "Forefront Dashboard",
        keywords: ["Info", "Metrics"],
        link: "https://www.terminal.co/community/social/krausehouse.eth",
        favorite: false,
      },
      {
        name: "Discord",
        link: "https://discord.com/channels/847908414981275648/899496354416574524",
      },
      {
        name: "Gather",
        link: "https://app.gather.town/app/ZM9PmXOsVoIxvzgO/KrauseHouse",
      },
      {
        name: "Twitter",
        keywords: ["Social", "Community"],
        link: "https://twitter.com/krausehousedao",
        favorite: true,
      },
      {
        name: "Website",
        link: "https://krausehouse.club",
      },

      {
        name: "Brand Guidelines",
        keywords: ["Design"],
        link: "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c46e9a4e-d30f-4842-9909-7c7c9c0571ab/KrauseHouse_BrandGuidelines-V1_lo.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T072540Z&X-Amz-Expires=86400&X-Amz-Signature=80eef746bfc7d43dcd890ab0fefbb875d8bcfd71b636fe47162bffea5b31bb77&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Krause%2520House%2520Brand%2520Guidelines%252004.2022.pdf%22&x-id=GetObject",
      },
      {
        name: "Youtube",
        keywords: ["Social", "Media"],
        link: "https://www.youtube.com/channel/UCtiCOIi2V5U8EixchY01VVQ/videos",
      },
      {
        name: "Permissions",
        keywords: ["Delegation", "Governance", "Powers"],
        link: "https://krausehousework.notion.site/4589c7e790134019bc4e29753a225d09?v=168036c795544f3fb0e56bbabae42433",
      },

      {
        name: "MyJerry",
        link: "https://myjerry-app.vercel.app/earn",
      },
      {
        name: "Github",
        keywords: ["Code", "Dev"],
        link: "https://github.com/krause-house",
      },
    ],
  },
  themes: [
    // {
    //   dark: {
    //     ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
    //     primary: "blue",
    //     "primary-focus": "mediumblue",
    //     "base-content": "white",
    //   },
    // },
    {
      mytheme: {
        primary: "green",
        "primary-focus": "#24143D",
        "primary-content": "#F4F0FA",

        secondary: "#F72585",
        "secondary-focus": "#760438",
        // "secondary-content": "",

        accent: "teal",
        // "accent-focus": "#760438",
        // "accent-content": "",

        neutral: "#F4F0FA",
        "neutral-focus": "#760438",
        // "neutral-content": "",

        "base-100": "#FFFFFF",
        "base-200": "#F4EFE9",
        "base-300": "#B9B5A6",
        "base-content": "#170B2B",

        info: "#2463EB",
        // "info-content": "",

        success: "#16A249",
        // "success-content": "",

        warning: "orange",
        // "warning-content": "",

        error: "red",
        // "error-content": "",

        "--app-bg": "#F3F1EA",
      },
    },
    // "light",
    // "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
  ],
};
