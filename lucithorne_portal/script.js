
const launchBtn = document.getElementById('launchBtn');
const gameSection = document.getElementById('gameSection');
const sigilResult = document.getElementById('sigilResult');
const loreBox = document.getElementById('loreBox');

launchBtn.addEventListener('click', () => {
  gameSection.style.display = 'block';
  launchBtn.style.display = 'none';
});

const validSigils = {
  "ABYSS-FIRE-001": "Unlocked: Ember Blade (+25 DMG)",
  "ABYSS-FROST-002": "Unlocked: Glacial Shield (+20 DEF)",
  "ABYSS-SHADOW-003": "Unlocked: Umbral Cloak (Stealth Bonus)"
};

function checkSigil() {
  const input = document.getElementById('sigilInput').value.trim().toUpperCase();
  sigilResult.textContent = validSigils[input] || "❌ Invalid Sigil Code.";
}

function showLore(type) {
  const lore = {
    fire: "Forged in the heart of the Abyss, the Ember Blade ignites enemies with a single strike.",
    frost: "The Glacial Shield once belonged to Lyra the Coldborn. It repels all heat and evil.",
    shadow: "Zane's Umbral Cloak grants invisibility in the dark corridors of Lucithorne."
  };
  loreBox.textContent = lore[type] || "";
}
