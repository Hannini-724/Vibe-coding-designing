const form = document.querySelector(".signup-form");
const toast = document.querySelector(".toast");
const stateButtons = document.querySelectorAll("[data-demo-state]");
const languageTabs = document.querySelector(".language-tabs");
const languageButtons = document.querySelectorAll("[data-lang]");

let currentLang = "zh";

const translations = {
  zh: {
    documentTitle: "BM Wallet 拉新活动落地页",
    mainLabel: "BM Wallet 拉新活动落地页",
    languageLabel: "语言切换",
    closeToast: "关闭提示",
    eyebrow: "BM Wallet 新用户专享福利",
    pageTitle: "完成任务，每日抽 <span>100 USDT</span>",
    heroSubtitle:
      "完成推特互动，创建或绑定钱包并存入 ≥ $100 等值资产，验证通过后自动进入当天抽奖池。",
    activityTitle: "完成 4 步，自动入池",
    activityDescription: "X 互动 → 绑定 / 创建钱包 → 资产沉淀 → 校验钱包地址和余额。",
    activityCta: "开始报名",
    joinTitle: "报名并验证钱包资产",
    signupTitle: "填写参与信息",
    xLabel: "X / 推特账号",
    xPlaceholder: "@yourhandle",
    walletLabel: "钱包地址",
    walletPlaceholder: "0x... 或 Solana 钱包地址",
    terms: "我已阅读并同意活动规则与风险提示",
    submit: "验证并加入今日抽奖池",
    walletLink: "创建或导入钱包",
    validationTitle: "等待验证",
    validationDescription: "提交后将校验钱包地址格式与钱包余额。",
    poolTitle: "今日奖池",
    poolNote: "每日一名链上发放",
    drawCountdown: "距次日 12:00 开奖",
    currentEntries: "当前入池人数",
    tableDate: "日期",
    tableAddress: "中奖地址",
    tableReward: "奖励",
    processTitle: "四步完成参与",
    step1Title: "X 互动",
    step1Description: "点赞并转发指定活动推文。",
    step2Title: "绑定 / 创建钱包",
    step2Description: "填写钱包地址，或前往创建钱包。",
    step3Title: "资产沉淀",
    step3Description: "存入 ≥ $100 等值资产。",
    step4Title: "验证入池",
    step4Description: "校验钱包地址和余额后进入当天奖池。",
    faqTitle: "常见问题",
    faq1Question: "未中奖用户次日是否需要重新互动？",
    faq1Answer: "不需要。同一推文互动可以复用，未中奖用户次日只需在开奖时仍满足钱包余额门槛。",
    faq2Question: "钱包余额什么时候校验？",
    faq2Answer: "提交报名时校验一次，开奖时再次校验；开奖前撤资导致余额低于 $100 视为自动放弃。",
    faq3Question: "支持哪些资产？",
    faq3Answer: "当前页面先按 USDT、USDC、ETH 设计，最终支持资产和计价口径以上线配置为准。",
    faq4Question: "如何避免重复参与？",
    faq4Answer: "每个推特账号、钱包地址、设备指纹仅计一个有效参与名额，异常参与会被风控排除。",
    toast: {
      success: {
        title: "验证成功",
        description: "已加入今日抽奖池。",
      },
      error: {
        title: "验证失败",
        description: "钱包余额暂未达到活动门槛。",
      },
    },
  },
  en: {
    documentTitle: "BM Wallet Rewards Campaign",
    mainLabel: "BM Wallet rewards campaign landing page",
    languageLabel: "Language switcher",
    closeToast: "Close notification",
    eyebrow: "New User Exclusive",
    pageTitle: "Complete Tasks, Win <span>100 USDT</span> Daily",
    heroSubtitle:
      "Engage on X, create or link a wallet, and deposit ≥ $100 in assets. Once verified, you're entered into today's draw.",
    activityTitle: "4 Steps to Enter",
    activityDescription:
      "Engage on X → Link/create wallet → Deposit assets → Verify address & balance.",
    activityCta: "Get Started",
    joinTitle: "Register & Verify Assets",
    signupTitle: "Your Details",
    xLabel: "X / Twitter Handle",
    xPlaceholder: "@yourhandle",
    walletLabel: "Wallet Address",
    walletPlaceholder: "0x... or Solana address",
    terms: "I've read and agree to the campaign rules and risk disclosure",
    submit: "Verify & Join Today's Draw",
    walletLink: "Create or import wallet",
    validationTitle: "Awaiting Verification",
    validationDescription: "We'll check your address format and balance after you submit.",
    poolTitle: "Today's Prize Pool",
    poolNote: "One winner daily, paid on-chain",
    drawCountdown: "Draw at 12:00 tomorrow",
    currentEntries: "Entries so far",
    tableDate: "Date",
    tableAddress: "Winner",
    tableReward: "Reward",
    processTitle: "Four Steps to Join",
    step1Title: "Engage on X",
    step1Description: "Like and retweet the campaign post.",
    step2Title: "Link / Create Wallet",
    step2Description: "Enter your address or create a new wallet.",
    step3Title: "Deposit Assets",
    step3Description: "Deposit ≥ $100 in assets.",
    step4Title: "Verify & Enter",
    step4Description: "Verified entries join today's pool.",
    faqTitle: "FAQ",
    faq1Question: "Do non-winners need to re-engage the next day?",
    faq1Answer:
      "No. Your engagement carries over — you just need to still meet the balance threshold at draw time.",
    faq2Question: "When is my balance checked?",
    faq2Answer:
      "Once at signup and again at draw time. Dropping below $100 before the draw counts as forfeiting.",
    faq3Question: "Which assets are supported?",
    faq3Answer:
      "USDT, USDC, and ETH for now. Final supported assets and pricing follow the live configuration.",
    faq4Question: "How is duplicate entry prevented?",
    faq4Answer:
      "Each X account, wallet address, and device counts once. Abnormal entries are filtered by risk control.",
    toast: {
      success: {
        title: "Verification Successful",
        description: "You have joined today’s draw pool.",
      },
      error: {
        title: "Verification Failed",
        description: "Your wallet balance has not reached the activity threshold.",
      },
    },
  },
};

const textBindings = [
  [".landing-page", "mainLabel", "aria-label"],
  [".eyebrow", "eyebrow"],
  ["#page-title", "pageTitle", "html"],
  [".hero-subtitle", "heroSubtitle"],
  [".activity-strip h2", "activityTitle"],
  [".activity-strip p", "activityDescription"],
  [".activity-strip .btn-web3", "activityCta"],
  ["#join-title", "joinTitle"],
  ["#signup-title", "signupTitle"],
  [".signup-form .field:nth-of-type(1) > span", "xLabel"],
  ['[name="xAccount"]', "xPlaceholder", "placeholder"],
  [".signup-form .field:nth-of-type(2) > span", "walletLabel"],
  ['[name="walletAddress"]', "walletPlaceholder", "placeholder"],
  [".check-row span", "terms"],
  [".form-submit", "submit"],
  [".wallet-link", "walletLink"],
  [".validation-result h3", "validationTitle"],
  [".validation-result p", "validationDescription"],
  ["#pool-title", "poolTitle"],
  [".pool-panel .panel-heading span", "poolNote"],
  [".pool-stats div:nth-child(1) span", "drawCountdown"],
  [".pool-stats div:nth-child(2) span", "currentEntries"],
  [".table-head span:nth-child(1)", "tableDate"],
  [".table-head span:nth-child(2)", "tableAddress"],
  [".table-head span:nth-child(3)", "tableReward"],
  ["#process-title", "processTitle"],
  [".process-list article:nth-child(1) h3", "step1Title"],
  [".process-list article:nth-child(1) p", "step1Description"],
  [".process-list article:nth-child(2) h3", "step2Title"],
  [".process-list article:nth-child(2) p", "step2Description"],
  [".process-list article:nth-child(3) h3", "step3Title"],
  [".process-list article:nth-child(3) p", "step3Description"],
  [".process-list article:nth-child(4) h3", "step4Title"],
  [".process-list article:nth-child(4) p", "step4Description"],
  ["#rules-title", "faqTitle"],
  [".rule-list details:nth-child(1) summary", "faq1Question"],
  [".rule-list details:nth-child(1) p", "faq1Answer"],
  [".rule-list details:nth-child(2) summary", "faq2Question"],
  [".rule-list details:nth-child(2) p", "faq2Answer"],
  [".rule-list details:nth-child(3) summary", "faq3Question"],
  [".rule-list details:nth-child(3) p", "faq3Answer"],
  [".rule-list details:nth-child(4) summary", "faq4Question"],
  [".rule-list details:nth-child(4) p", "faq4Answer"],
];

function hideToast() {
  toast.dataset.toast = "hidden";
}

function showToast(state) {
  const content = translations[currentLang].toast[state];
  if (!content) return;

  const icon = document.createElement("span");
  icon.className = "toast-icon";
  icon.setAttribute("aria-hidden", "true");

  const copy = document.createElement("span");
  copy.className = "toast-copy";

  const title = document.createElement("strong");
  title.textContent = content.title;

  const description = document.createElement("span");
  description.textContent = content.description;

  const closeButton = document.createElement("button");
  closeButton.className = "toast-close";
  closeButton.type = "button";
  closeButton.setAttribute("aria-label", translations[currentLang].closeToast);
  closeButton.textContent = "×";
  closeButton.addEventListener("click", hideToast);

  copy.append(title, description);
  toast.replaceChildren(icon, copy, closeButton);
  toast.dataset.kind = state;
  toast.dataset.toast = "visible";
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    hideToast();
  }, 2400);
}

function applyLanguage(lang) {
  const dictionary = translations[lang] || translations.zh;
  currentLang = translations[lang] ? lang : "zh";
  document.documentElement.lang = currentLang === "zh" ? "zh-CN" : "en";
  document.title = dictionary.documentTitle;
  languageTabs?.setAttribute("aria-label", dictionary.languageLabel);

  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === currentLang;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  textBindings.forEach(([selector, key, mode]) => {
    const element = document.querySelector(selector);
    const value = dictionary[key];
    if (!element || value === undefined) return;

    if (mode === "html") {
      element.innerHTML = value;
      return;
    }

    if (mode) {
      element.setAttribute(mode, value);
      return;
    }

    element.textContent = value;
  });

  hideToast();
}

function hasWalletLikeAddress(value) {
  const input = value.trim();
  const evm = /^0x[a-fA-F0-9]{40}$/.test(input);
  const svm = /^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(input);
  return evm || svm;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const walletAddress = new FormData(form).get("walletAddress") || "";
  const termsChecked = form.querySelector('[name="terms"]').checked;

  if (hasWalletLikeAddress(walletAddress) && termsChecked) {
    showToast("success");
    return;
  }

  showToast("error");
});

stateButtons.forEach((button) => {
  button.addEventListener("click", () => {
    showToast(button.dataset.demoState);
  });
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.lang);
  });
});

applyLanguage(currentLang);
