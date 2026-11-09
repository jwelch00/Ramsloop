/* RamsLoop mockup — front-end only, sample data, no backend. */

// ---------------- Sample data ----------------
const X_LABEL = { sell: "Sell", swap: "Swap", borrow: "Borrow", free: "Free", buy: "Buying" };
const X_COLOR = { sell: "#006144", swap: "#E56A54", borrow: "#008FB3", free: "#D9782D", buy: "#7E5475" };

const CATS = ["Textbooks & Supplies", "Furniture", "Home & Kitchen", "Electronics", "Bikes & Outdoor", "Clothing", "Appliances"];

// dist = number of 5★, 4★, 3★, 2★, 1★ reviews (US 2). rating is computed from it.
const SELLERS = {
  maya:  { name: "Maya P.",  init: "MP", av: "b", n: 23, dist: [19, 2, 0, 0, 0], since: "Aug 2025", replies: "1 hr" },
  jordan:{ name: "Jordan K.",init: "JK", av: "c", n: 11, dist: [8, 2, 0, 0, 0],  since: "Jan 2026", replies: "2 hrs" },
  priya: { name: "Priya R.", init: "PR", av: "e", n: 8,  dist: [7, 0, 0, 0, 0],  since: "Aug 2025", replies: "30 min" },
  diego: { name: "Diego M.", init: "DM", av: "d", n: 15, dist: [10, 3, 1, 0, 0], since: "Sep 2024", replies: "3 hrs" },
  sam:   { name: "Sam T.",   init: "ST", av: "f", n: 31, dist: [27, 3, 0, 1, 0], since: "Aug 2023", replies: "1 hr" },
  ava:   { name: "Ava L.",   init: "AL", av: "",  n: 5,  dist: [3, 1, 0, 0, 0],  since: "Aug 2026", replies: "4 hrs" },
  knull: { name: "k.null22", init: "KN", av: "d", n: 0,  dist: [0, 0, 0, 0, 0],  since: "Nov 2026", replies: "—" },
  me:    { name: "Riley B.", init: "RB", av: "",  n: 9,  dist: [7, 2, 0, 0, 0],  since: "Aug 2025", replies: "1 hr" },
};
Object.values(SELLERS).forEach(s => {
  s.reviews = s.dist.reduce((a, b) => a + b, 0);
  s.rating = s.reviews ? Math.round(s.dist.reduce((a, c, i) => a + c * (5 - i), 0) / s.reviews * 10) / 10 : null;
});

// img: photo path, or ill: illustration symbol + bg/fg colors (brand palette)
// status: active (default) | paused | removed | sold. Only active listings appear in the marketplace.
const LISTINGS = [
  { id: 1,  title: "Intro to Statistics textbook (8th ed.)", price: 35, x: ["sell","swap"], cat: "Textbooks & Supplies", cond: "Like new", seller: "maya", ago: "12m", where: "Lory Student Center", ill: "book", bg: "#E3CDB1", fg: "#1E4D2B",
    desc: "Used for STAT 301 last spring. Light pencil notes in chapters 1–3, no highlighting. The unused online access code card is included. Happy to swap for a CS 165 or ECON 202 book." },
  { id: 2,  title: "Trek hybrid bike + U-lock", price: 180, x: ["sell"], cat: "Bikes & Outdoor", cond: "Good", seller: "diego", ago: "40m", where: "Corbett Hall", ill: "bike", bg: "#008FB3", fg: "#000",
    desc: "Medium frame (fits 5'6\"–6'0\"). New tubes this fall, with a rear rack and a Kryptonite U-lock. A great campus commuter. Can meet at the CSU PD lobby." },
  { id: 3,  title: "Pendant lamps (set of 2)", price: 25, x: ["sell","swap"], cat: "Home & Kitchen", cond: "Like new", seller: "me", ago: "1h", where: "Morgan Library", img: "assets/img/pendant-lamps.jpg",
    desc: "Two matching globe pendant lamps with warm LED bulbs. Plug-in cords, so no hardwiring. They work great in a dorm or an apartment." },
  { id: 4,  title: "TI-84 Plus graphing calculator", price: 0, unit: "$20 deposit", x: ["borrow"], cat: "Textbooks & Supplies", cond: "Good", seller: "priya", ago: "2h", where: "Morgan Library", ill: "calc", bg: "#FFC038", fg: "#000",
    desc: "Borrow my old TI-84 for the semester. Works perfectly, with fresh batteries and the USB cable included. Please return by the last day of classes." },
  { id: 5,  title: "Mini fridge, 3.1 cu ft", price: 0, x: ["free"], cat: "Appliances", cond: "Fair", seller: "sam", ago: "2h", where: "Durward Hall", ill: "fridge", bg: "#CFFC00", fg: "#1E4D2B",
    desc: "Works fine, but the freezer door is a little loose. Free to the first Ram who can pick it up from Durward this week. Bring a friend, since it’s awkward to carry." },
  { id: 6,  title: "Live-edge wood slab side table", price: 40, x: ["sell"], cat: "Furniture", cond: "Good", seller: "maya", ago: "3h", where: "Off campus, Prospect & Shields", img: "assets/img/tree-rings.jpg",
    desc: "Handmade side table from a beetle-kill pine round. Sealed and sturdy, about 20\" across. Some natural cracks add character." },
  { id: 7,  title: "Wood slice coasters & craft rounds", price: 0, x: ["free"], cat: "Home & Kitchen", cond: "New", seller: "ava", ago: "5h", where: "Lory Student Center", img: "assets/img/wood-slices.jpg",
    desc: "Leftovers from a club craft night: about 30 sanded wood rounds, good for coasters, ornaments, or plant stands." },
  { id: 8,  title: "Glass serving bowl", price: 0, x: ["free","swap"], cat: "Home & Kitchen", cond: "Like new", seller: "jordan", ago: "6h", where: "Allison Hall", img: "assets/img/glass-bowl.jpg",
    desc: "Big clear glass bowl, great for potlucks. Free, or I’d swap for a small cutting board." },
  { id: 9,  title: "Camping tent (2-person)", price: 0, unit: "$15 deposit", x: ["borrow"], cat: "Bikes & Outdoor", cond: "Good", seller: "sam", ago: "8h", where: "CSU PD lobby", ill: "tent", bg: "#105456", fg: "#CFFC00",
    desc: "Freestanding 2-person backpacking tent, 4 lb. Perfect for Horsetooth or a quick trip up the Poudre. Please return it dry!" },
  { id: 10, title: "Looking for: ergonomic desk chair", price: 40, unit: "budget", x: ["buy"], cat: "Furniture", cond: "Good", seller: "ava", ago: "9h", where: "Anywhere near campus", ill: "chair", bg: "#7E5475", fg: "#fff",
    desc: "My back is begging. Looking for an adjustable office chair in decent shape, up to $40. I can pick up anywhere in Fort Collins." },
  { id: 11, title: "Fleece jacket, men’s L (green)", price: 0, x: ["swap"], cat: "Clothing", cond: "Good", seller: "diego", ago: "1d", where: "Lory Student Center", ill: "jacket", bg: "#1E4D2B", fg: "#CFFC00",
    desc: "Warm, no holes, too big for me. Would swap for a size M, or for any winter gear." },
  { id: 12, title: "Potted coneflower (echinacea)", price: 0, x: ["free"], cat: "Home & Kitchen", cond: "New", seller: "priya", ago: "1d", where: "Plant Sciences Building", img: "assets/img/flower.jpg",
    desc: "Divided from my garden. Native, pollinator friendly, and hard to kill. Pot included." },
  { id: 13, title: "Wire-art fruit bowl (metal)", price: 8, x: ["sell"], cat: "Home & Kitchen", cond: "Good", seller: "jordan", ago: "1d", where: "Allison Hall", img: "assets/img/metal-bowl.jpg",
    desc: "Sculptural metal wire bowl. Looks great on a desk or counter, and it holds fruit or keys. Moving, so I’m downsizing." },
  { id: 14, title: "27\" monitor (1440p)", price: 90, x: ["sell","swap"], cat: "Electronics", cond: "Like new", seller: "me", ago: "2d", where: "Morgan Library", ill: "monitor", bg: "#82C503", fg: "#1E4D2B",
    desc: "27-inch 1440p IPS monitor with the stand and HDMI cable. No dead pixels. Upgrading, so it has to go." },
  { id: 15, title: "Cross-country skis + poles", price: 0, unit: "$25 deposit", x: ["borrow","sell"], cat: "Bikes & Outdoor", cond: "Good", seller: "maya", ago: "2d", where: "Rec Center", ill: "ski", bg: "#E56A54", fg: "#000",
    desc: "Waxless classic skis (185 cm), boots size 9, and poles. Borrow for a Cameron Pass weekend, or buy them outright for $120." },
  { id: 16, title: "Organic chemistry model kit", price: 15, x: ["sell","borrow"], cat: "Textbooks & Supplies", cond: "Like new", seller: "me", ago: "3d", where: "Chemistry Building", ill: "flask", bg: "#C8C372", fg: "#1E4D2B",
    desc: "Complete molecular model kit for CHEM 341/343. Every piece is accounted for." },
  // Sprint 2 sample data
  { id: 17, title: "IKEA Kallax shelf (2×4)", price: 30, x: ["sell"], cat: "Furniture", cond: "Good", seller: "me", ago: "6d", where: "Aggie Village", ill: "chair", bg: "#E3CDB1", fg: "#1E4D2B", status: "paused",
    desc: "White 2×4 cube shelf. Already taken apart, so it fits in a hatchback. Paused while I figure out my move-out date." },
  { id: 18, title: "Twin XL mattress topper", price: 15, x: ["sell"], cat: "Home & Kitchen", cond: "Good", seller: "jordan", ago: "4d", where: "Allison Hall", ill: "jacket", bg: "#008FB3", fg: "#000", status: "sold",
    desc: "3-inch memory foam topper. Washed cover." },
  { id: 19, title: "Brand new MacBook Air (sealed)", price: 150, x: ["sell"], cat: "Electronics", cond: "New", seller: "knull", ago: "2d", where: "Off campus, will drop off", ill: "monitor", bg: "#E3CDB1", fg: "#1E4D2B",
    desc: "Sealed in box. Need it gone fast. Send a gift card first and I’ll drop it off at your dorm." },
  { id: 20, title: "Futon frame (no mattress)", price: 20, x: ["sell"], cat: "Furniture", cond: "Fair", seller: "diego", ago: "4mo", where: "Corbett Hall", ill: "chair", bg: "#E56A54", fg: "#000",
    desc: "Metal futon frame. Some scuffs." },
];
const live = l => !l.status || l.status === "active";
const byId = id => LISTINGS.find(l => l.id === +id);

// Feature map. [US#, role, story, theme, epic, priority, route, screen, sprint]
const STORIES = [
  [9, "Seller", "Create and publish a listing with photos, a description, condition, price, and exchange method so that buyers can discover and evaluate my item.", "Listing & exchange management", "3.1 Listing management", 1, "sell", "Sell or share", 1],
  [6, "Buyer", "View item photos, descriptions, conditions, price, and availability so that I can make an informed decision.", "Item discovery", "2.1 Search & browse", 2, "item/1", "Listing detail", 1],
  [1, "User", "Verify my CSU affiliation with my university email so that I can use a trusted student-only marketplace.", "Trusted CSU community", "1.1 User verification", 3, "verify", "Verify account", 1],
  [11, "User", "Mark a listing as buy, sell, swap, borrow, or free so that other users understand the proposed exchange.", "Listing & exchange management", "3.2 Exchange options", 4, "sell", "Sell form + tags everywhere", 1],
  [5, "Buyer", "Search and filter listings by item type, price, condition, and exchange method so that I can find suitable items quickly.", "Item discovery", "2.1 Search & browse", 5, "browse", "Browse", 1],
  [17, "Site administrator", "Access performance indicators to monitor the health of the site.", "Platform administration", "6.1 Performance monitoring", 6, "admin", "Admin dashboard", 1],
  [13, "User", "Send and receive messages within RamsLoop so that I can coordinate an exchange without sharing my personal contact information.", "Communication & community engagement", "4.1 Student communication", 7, "messages", "Messages", 2],
  [10, "Seller", "Edit, pause, or remove my listing so that the item’s information and availability remain accurate and up to date.", "Listing & exchange management", "3.1 Listing management", 8, "my/listings", "My Loop → My listings", 2],
  [3, "User", "Report suspicious users or listings so that marketplace administrators can investigate potential safety concerns.", "Trusted CSU community", "1.2 Trust & safety", 9, "item/19", "Report link on listings, profiles, and messages", 2],
  [4, "Moderator", "Review reports and remove fraudulent, inactive, or prohibited listings so that RamsLoop remains a trusted and safe marketplace.", "Trusted CSU community", "1.2 Trust & safety", 10, "moderation", "Moderator console", 2],
  [2, "User", "View another user’s ratings and reviews from previous exchanges so that I can make a more informed decision before exchanging an item with that person.", "Trusted CSU community", "1.2 Trust & safety", 11, "profile/maya", "Seller profile", 2],
  [8, "User", "Save listings to a favorites list so that I can easily review items I am interested in later.", "Item discovery", "2.2 Personalized item discovery", 12, "my/saved", "My Loop → Favorites", 2],
];
// Sprint 2 backlog details: effort (story points), impact, acceptance criteria. null = still being written.
const STORY_DETAILS = {
  13: { pts: 89, impact: 4, ac: [["", [
    "Users can write text messages and attach photos. A message can be up to 1,000 characters and can’t be blank.",
    "Sent messages appear in the recipient’s inbox within 5 seconds.",
    "The messaging page shows no personal information, such as phone numbers or email addresses.",
    "If a message fails to send, the user is told and can try again without retyping it."]]] },
  10: { pts: 21, impact: 4, ac: [
    ["AC1 · Edit listing", ["Sellers can edit price, description, condition, photos, and exchange method.", "Sellers can’t change the listing ID, ownership, or another seller’s listings.", "Changes are saved and shown within 2 seconds.", "An error message appears within 1 second when required information is missing or invalid."]],
    ["AC2 · Pause and reactivate", ["Sellers can pause or reactivate a listing with 1 click.", "Paused listings leave active search results within 2 seconds.", "Reactivated listings return to active search results within 2 seconds."]],
    ["AC3 · Remove listing", ["Sellers confirm removal in 1 confirmation dialog.", "Removed listings leave the active marketplace within 2 seconds.", "Removed listings can’t be edited or reactivated.", "Canceling a removal leaves the listing unchanged in 100% of test cases."]],
    ["AC4 · Access control", ["Only the original seller can edit, pause, reactivate, or remove a listing.", "100% of unauthorized change attempts are blocked in security tests."]],
    ["Definition of done", ["Sellers can edit, pause, reactivate, and remove their own listings.", "Valid changes are saved and shown within 2 seconds.", "Input validation and error messages work.", "Paused and removed listings are hidden from active search results.", "Other users can’t change a seller’s listings.", "100% of acceptance criteria pass testing.", "Reviewed and approved by the Product Owner."]]] },
  3: { pts: 5, impact: 3, ac: null },
  4: { pts: 8, impact: 3, ac: null },
  2: { pts: 21, impact: 3, ac: null },
  8: { pts: 5, impact: 3, ac: [["", [
    "The favorites page shows each saved listing’s photo, title, price, condition, and exchange method.",
    "Favorites are still there after logging out and back in, on any device.",
    "Each user’s favorites are visible only to that user.",
    "Listings that become unavailable are removed from favorites automatically.",
    "Each user can save up to 100 listings at a time.",
    "A listing is added to favorites within 1 second of clicking save."]]] },
};

// Reviews from completed exchanges (US 2)
const REVIEW_POOL = [
  { by: "jordan", stars: 5, kind: "Bought", when: "Oct 2026", text: "Exactly as pictured, and they helped me carry it out to my car. Would loop again." },
  { by: "diego",  stars: 5, kind: "Swapped", when: "Sep 2026", text: "Easy swap at the LSC. Showed up on time and the item was in great shape." },
  { by: "priya",  stars: 4, kind: "Borrowed", when: "Aug 2026", text: "Clear return instructions, and flexible when I ran a day late." },
  { by: "sam",    stars: 5, kind: "Bought", when: "Aug 2026", text: "Fair price and super quick replies. Met at the PD lobby, no issues." },
  { by: "maya",   stars: 5, kind: "Got free", when: "May 2026", text: "Gave away a whole box of kitchen stuff before move-out. So nice." },
  { by: "ava",    stars: 4, kind: "Bought", when: "Apr 2026", text: "Good communication. Item had a bit more wear than described, but still worth it." },
];

// Messages (US 13). Personal contact info is never stored on or shown in a conversation.
const CONVOS = [
  { id: 1, who: "maya", listing: 1, unread: true, ago: "2m", reply: "Perfect, see you Thursday at the LSC!", msgs: [
    { me: true,  text: "Hi! Is the stats book still available? I’m in STAT 301 this semester.", t: "10:14 AM" },
    { me: false, text: "Yes, still have it! Barely any highlighting. The access code card is included too (unused).", t: "10:21 AM" },
    { me: true,  text: "Amazing. Would you take $30?", t: "10:22 AM" },
    { me: false, text: "Deal 👍 Does Thursday after 2 work? I can do the LSC.", t: "10:30 AM" }] },
  { id: 2, who: "jordan", listing: 3, unread: true, ago: "1h", reply: "Cool, I’ll bring it Friday.", msgs: [
    { me: false, text: "Hey! Would you swap the pendant lamps for a plant + $10?", t: "9:02 AM" },
    { me: false, text: "Here’s the plant. It’s a coneflower, super easy to keep alive.", img: "assets/img/flower.jpg", t: "9:03 AM" }] },
  { id: 3, who: "priya", listing: 4, ago: "3h", reply: "Sounds good!", msgs: [
    { me: true,  text: "Thanks for lending the calculator! When should I bring it back?", t: "Yesterday" },
    { me: false, text: "Last day of classes is fine. Morgan Library works for me.", t: "8:40 AM" }] },
  { id: 4, who: "diego", listing: 2, ago: "Tue", reply: "Sure thing.", msgs: [
    { me: true,  text: "Is the bike lock included?", t: "Tue" },
    { me: false, text: "Yep, the U-lock and both keys.", t: "Tue" }] },
  { id: 5, who: "sam", listing: 9, ago: "Sep 22", reply: "No problem!", msgs: [
    { me: false, text: "Got the tent back. Thanks for returning it dry!", t: "Sep 22" }] },
];

// Favorites (US 8). Saved to the account (here: this browser) and visible only to the signed-in user.
const FAV_KEY = "ramsloop.favorites.rbennett";
const FAV_MAX = 100;
const saved = (() => {
  try { const v = JSON.parse(localStorage.getItem(FAV_KEY)); if (Array.isArray(v)) return new Set(v); } catch (e) {}
  return new Set([2, 6, 9, 12, 18]); // 18 has already sold, so it is cleared on first view
})();
function persistFavs() { try { localStorage.setItem(FAV_KEY, JSON.stringify([...saved])); } catch (e) {} }

// Moderation queue (US 4). New reports from the report dialog (US 3) are added here.
const REPORTS = [
  { id: 2291, kind: "listing", listing: 19, reason: "Suspected scam", count: 4, status: "open",
    quote: "Price is way too low, and the seller asked me to pay with a gift card before meeting.",
    evidence: "Seller joined 2 days ago with 0 exchanges. Photo matches a stock image.",
    log: ["10:02 · Auto-flagged: price 82% below category average", "10:40 · 4th user report received"] },
  { id: 2290, kind: "user", user: "tx_resale", init: "TX", reason: "Asked to pay off-platform", count: 2, status: "open",
    quote: "Kept asking me to text him and pay through a payment app before I saw the item.",
    evidence: "3 listings, 1 exchange. 2 reports from different users this week.",
    log: ["Yesterday · Report received", "09:15 · 2nd report received"] },
  { id: 2288, kind: "listing", listing: 20, reason: "Inactive (124 days old)", count: 0, status: "open",
    quote: "No messages or edits in 124 days.",
    evidence: "Automatic flag for listings with no activity in 90+ days.",
    log: ["06:00 · Auto-flagged: inactive 90+ days"] },
  { id: 2285, kind: "listing", title: "Lab chemicals, assorted", ill: "flask", bg: "#FFC038", owner: "b.lee", reason: "Prohibited item", count: 1, status: "review",
    quote: "Selling leftover reagents from a lab course.",
    evidence: "Matches prohibited keyword “chemicals”.",
    log: ["Mon · Report received", "Mon · Assigned to you"] },
  { id: 2279, kind: "listing", title: "Road bike, cheap", ill: "bike", bg: "#008FB3", owner: "anon.ram", reason: "Possibly stolen", count: 3, status: "removed",
    quote: "This is my roommate’s bike that was stolen last week.",
    evidence: "Serial number matched a CSUPD stolen-bike report.",
    log: ["Oct 30 · Report received", "Oct 30 · Listing removed and seller suspended"] },
];
let modTab = "open", modSel = 2291;

// ---------------- Helpers ----------------
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const now = () => new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
const stars = r => r == null ? "" : "★★★★★".slice(0, Math.round(r)) + "☆☆☆☆☆".slice(0, 5 - Math.round(r));

function media(l, cls = "") {
  if (l.img) return `<img src="${l.img}" alt="${esc(l.title)}" class="${cls}">`;
  return `<div class="ill ${cls}" style="background:${l.bg}; color:${l.fg}"><svg aria-hidden="true"><use href="#ill-${l.ill}"/></svg></div>`;
}
function tags(l) { return l.x.map(x => `<span class="xtag ${x}">${X_LABEL[x]}</span>`).join(""); }
function priceText(l) {
  if (l.x.includes("buy")) return `Up to $${l.price}`;
  if (l.x[0] === "free" || (l.price === 0 && l.x.includes("free"))) return "Free";
  if (l.x[0] === "borrow" && l.price === 0) return `Borrow <span class="unit">· ${l.unit || "deposit"}</span>`;
  if (l.price === 0 && l.x.includes("swap")) return "Swap only";
  return `$${l.price}`;
}
function ratingText(s) { return s.rating == null ? "New · no reviews yet" : `<span class="stars">★</span> ${s.rating.toFixed(1)} (${s.reviews})`; }
function favBtn(l) {
  if (l.seller === "me") return "";
  const on = saved.has(l.id);
  return `<button class="fav ${on ? "on" : ""}" data-fav="${l.id}" aria-pressed="${on}" aria-label="${on ? "Remove from" : "Save to"} favorites" title="${on ? "Remove from" : "Save to"} favorites"><svg><use href="#i-heart"/></svg></button>`;
}
function card(l) {
  const s = SELLERS[l.seller];
  return `<article class="card">
    ${favBtn(l)}
    <a class="cover" href="#/item/${l.id}"><div class="thumb">${media(l)}<div class="tags">${tags(l)}</div></div></a>
    <div class="card-body">
      <div class="price">${priceText(l)}</div>
      <a class="card-title" href="#/item/${l.id}">${esc(l.title)}</a>
      <div><span class="cond">${l.cond}</span></div>
      <div class="meta"><span class="verified" style="font-weight:500; color:inherit">${s.name} <svg aria-label="CSU verified"><use href="#i-verified"/></svg></span><span>${s.rating == null ? "New" : `<span class="stars" style="font-size:12px">★</span>${s.rating.toFixed(1)}`}</span></div>
    </div></article>`;
}
function toast(msg) {
  const t = $("#toast"); $("span", t).textContent = msg; t.classList.add("on");
  clearTimeout(toast._t); toast._t = setTimeout(() => t.classList.remove("on"), 2600);
}
window.toast = toast;

// ---------------- Renderers ----------------
function renderHome() {
  $("#homeGrid").innerHTML = LISTINGS.filter(live).slice(0, 8).map(card).join("");
}
// Browse + filters
function renderCatFilters() {
  $("#catFilters").innerHTML = CATS.map(c => `<label class="opt"><input type="checkbox" name="cat" value="${esc(c)}">${esc(c)}<span class="ct" data-cat-ct="${esc(c)}"></span></label>`).join("");
}
function updateCounts() {
  const on = LISTINGS.filter(live);
  $$("[data-cat-ct]").forEach(el => el.textContent = on.filter(l => l.cat === el.dataset.catCt).length);
  $$("[data-ct]").forEach(el => el.textContent = on.filter(l => l.x.includes(el.dataset.ct)).length);
}
function applyFilters() {
  updateCounts();
  const xs = $$('input[name="x"]:checked').map(i => i.value);
  const cats = $$('input[name="cat"]:checked').map(i => i.value);
  const conds = $$('input[name="c"]:checked').map(i => i.value);
  const q = $("#browseQ").value.trim().toLowerCase();
  const min = parseFloat($("#pMin").value.replace(/[^0-9.]/g, "")), max = parseFloat($("#pMax").value.replace(/[^0-9.]/g, ""));
  const out = LISTINGS.filter(l => live(l) &&
    (!xs.length || l.x.some(x => xs.includes(x))) &&
    (!cats.length || cats.includes(l.cat)) &&
    (!conds.length || conds.includes(l.cond)) &&
    (!q || (l.title + " " + l.desc + " " + l.cat).toLowerCase().includes(q)) &&
    (isNaN(min) || l.price >= min) && (isNaN(max) || l.price <= max));
  $("#browseGrid").innerHTML = out.length ? out.map(card).join("") : `<div class="empty" style="grid-column:1/-1"><h3>No matches yet</h3><p>Try fewer filters or a different search.</p></div>`;
  $("#resultCount").textContent = `${out.length} result${out.length === 1 ? "" : "s"}`;
  $("#showResults").textContent = `Show ${out.length} result${out.length === 1 ? "" : "s"}`;
  filterCount();
  const chips = [...xs.map(x => X_LABEL[x]), ...cats, ...conds, q && `“${q}”`, !isNaN(min) && `≥ $${min}`, !isNaN(max) && `≤ $${max}`].filter(Boolean);
  $("#activeFilters").innerHTML = chips.map(c => `<span class="pill">${esc(c)}</span>`).join("");
}

// Detail
const STATUS_TEXT = { paused: "Paused", removed: "Removed", sold: "No longer available" };
function renderDetail(id) {
  const l = byId(id) || LISTINGS[0];
  const s = SELLERS[l.seller];
  const mine = l.seller === "me";
  const views = ["", "v1", "v2"];
  $("#crumbs").innerHTML = `<a href="#/home">Home</a> / <a href="#/browse">${esc(l.cat)}</a> / ${esc(l.title)}`;
  const cta = l.x.includes("borrow") ? "Request to borrow" : l.x.includes("buy") ? "I have one" : l.x.includes("free") ? "Request item" : l.x.includes("swap") && l.price === 0 ? "Propose a swap" : "Message seller";
  const banner = !live(l) ? `<div class="notice warn">${mine
      ? (l.status === "paused" ? "This listing is paused, so it’s hidden from search. Reactivate it from My listings." : "You removed this listing. It can’t be edited or reactivated.")
      : "This listing is no longer available."}</div>` : "";
  const actions = mine
    ? (l.status === "removed" ? "" : `<div class="d-actions us-wrap">
        <button class="btn btn-primary" type="button" data-edit="${l.id}"><svg class="arrow"><use href="#i-edit"/></svg> Edit</button>
        <button class="btn btn-quiet" type="button" data-pause="${l.id}"><svg class="arrow"><use href="#i-${l.status === "paused" ? "play" : "pause"}"/></svg> ${l.status === "paused" ? "Reactivate" : "Pause"}</button>
        <button class="btn btn-danger" type="button" data-remove="${l.id}"><svg class="arrow"><use href="#i-trash"/></svg> Remove</button>
        <span class="us">US 10</span></div>`)
    : (!live(l) ? "" : `<div class="d-actions">
        <button class="btn btn-primary" type="button" data-msg-listing="${l.id}"><svg class="arrow"><use href="#i-chat"/></svg> ${cta}</button>
        <button class="btn btn-quiet fav-btn ${saved.has(l.id) ? "on" : ""}" type="button" data-fav="${l.id}" aria-pressed="${saved.has(l.id)}"><svg class="arrow"><use href="#i-heart"/></svg> ${saved.has(l.id) ? "Saved" : "Save"}</button>
        <span class="us">US 8, 13</span></div>`);
  $("#detail").innerHTML = `
    <div class="gallery us-wrap">
      <span class="us">US 6 · Photos, description, condition, price &amp; availability</span>
      <div class="main">${media(l)}</div>
      <div class="thumbs">${views.map((v, i) => `<button class="${v} ${i === 0 ? "on" : ""}" aria-label="Photo ${i + 1}">${media(l)}</button>`).join("")}<button class="more" aria-label="More photos">+2 more</button></div>
    </div>
    <div class="d-info">
      ${banner}
      <div style="display:flex; gap:6px; flex-wrap:wrap; margin-bottom:14px">${tags(l)} <span class="us">US 11</span></div>
      <h1>${esc(l.title)}</h1>
      <div class="d-price">${priceText(l)}</div>
      <div class="d-facts">
        <div><div class="k">Condition</div><div class="v">${l.cond}</div></div>
        <div><div class="k">Availability</div><div class="v ${live(l) ? "avail" : ""}">${live(l) ? "Available" : STATUS_TEXT[l.status]}</div></div>
        <div><div class="k">Listed</div><div class="v">${l.ago} ago</div></div>
      </div>
      <p style="margin:0 0 16px">${esc(l.desc)}</p>
      ${actions}
      <a class="seller-card us-wrap" href="#/profile/${l.seller}" style="text-decoration:none; color:inherit">
        <span class="avatar ${s.av}">${s.init}</span>
        <div><strong>${s.name}</strong> <span class="verified"><svg><use href="#i-verified"/></svg> Verified Ram</span>
          <div class="small">${s.rating == null ? `<span class="muted">New member · no reviews yet</span>` : `<span class="stars">${stars(s.rating)}</span> <strong>${s.rating.toFixed(1)}</strong> <span class="muted">· ${s.reviews} reviews · ${s.n} exchanges</span>`}</div></div>
        <span class="small" style="color:var(--oval-green); font-weight:600; margin-left:auto">Reviews →</span>
        <span class="us">US 2</span>
      </a>
      <div class="meet"><svg><use href="#i-pin"/></svg><div><strong>Pickup: ${esc(l.where)}</strong><br><span class="small muted">Meet in a public campus spot. Never pay before you see the item.</span></div></div>
      <div style="margin-top:18px; display:flex; justify-content:space-between; align-items:center; gap:12px; flex-wrap:wrap">
        <span class="small muted">Listing #RL-${1000 + l.id} · 128 views</span>
        ${mine ? "" : `<span class="us-wrap"><button class="report-link" type="button" data-report="listing" data-id="${l.id}"><svg><use href="#i-flag"/></svg>Report this listing</button><span class="us">US 3</span></span>`}
      </div>
    </div>`;
  $("#relatedGrid").innerHTML = LISTINGS.filter(o => o.id !== l.id && live(o)).slice(0, 4).map(card).join("");
  // thumb swap
  $$(".gallery .thumbs button:not(.more)").forEach(b => b.onclick = () => {
    $$(".gallery .thumbs button").forEach(x => x.classList.remove("on")); b.classList.add("on");
  });
}

// ---------------- My Loop: my listings (US 10) + favorites (US 8) ----------------
const VIEWS = { 3: 128, 14: 210, 16: 37, 17: 64 };
function renderMy(tab) {
  const mine = LISTINGS.filter(l => l.seller === "me");
  $("#myCt").textContent = mine.filter(l => l.status !== "removed").length;
  $("#myListings").innerHTML = mine.map(l => {
    const s = l.status || "active";
    const label = { active: "Active", paused: "Paused", removed: "Removed" }[s];
    const acts = s === "removed"
      ? `<span class="small muted">Removed listings can’t be edited or reactivated</span>`
      : `<button class="btn btn-quiet btn-sm" data-edit="${l.id}"><svg class="arrow"><use href="#i-edit"/></svg>Edit</button>
         <button class="btn btn-quiet btn-sm" data-pause="${l.id}"><svg class="arrow"><use href="#i-${s === "paused" ? "play" : "pause"}"/></svg>${s === "paused" ? "Reactivate" : "Pause"}</button>
         <button class="btn btn-danger btn-sm" data-remove="${l.id}" aria-label="Remove ${esc(l.title)}"><svg class="arrow"><use href="#i-trash"/></svg>Remove</button>`;
    return `<tr class="${s === "removed" ? "is-removed" : ""}"><td><div class="item-cell"><div class="mini">${media(l)}</div><div><a href="#/item/${l.id}"><strong>${esc(l.title)}</strong></a><div class="small muted">${priceText(l)} · ${l.cond} · #RL-${1000 + l.id}</div></div></div></td>
      <td>${tags(l)}</td><td><span class="status ${s === "removed" ? "sold" : s}">${label}</span></td><td>${VIEWS[l.id] || 0}</td>
      <td><div class="row-actions">${acts}</div></td></tr>`;
  }).join("");
  renderSaved();
  $$(".tab[data-tab]").forEach(t => { t.classList.toggle("on", t.dataset.tab === tab); t.setAttribute("aria-selected", t.dataset.tab === tab); });
  $$(".tabpane[data-pane]").forEach(p => p.classList.toggle("on", p.dataset.pane === tab));
  labelTables();
}
function renderSaved() {
  // Unavailable listings are dropped from favorites automatically.
  const goneIds = [...saved].filter(id => { const l = byId(id); return !l || !live(l); });
  goneIds.forEach(id => saved.delete(id));
  const gone = goneIds.map(byId);
  if (gone.length) {
    persistFavs();
    $("#savedNotice").hidden = false;
    $("#savedNotice").innerHTML = `<svg><use href="#i-check"/></svg> We removed ${gone.length === 1 ? "1 listing" : gone.length + " listings"} that ${gone.length === 1 ? "is" : "are"} no longer available: ${gone.filter(Boolean).map(l => `<strong>${esc(l.title)}</strong>`).join(", ")}.`;
  }
  const list = [...saved].map(byId).filter(Boolean);
  $("#savedGrid").innerHTML = list.length ? list.map(card).join("")
    : `<div class="empty" style="grid-column:1/-1"><h3>No favorites yet</h3><p>Tap the heart on any listing to save it here.</p><a class="btn btn-ghost" href="#/browse">Browse listings</a></div>`;
  $("#savedCt").textContent = saved.size;
  $("#savedCap").textContent = `${saved.size} of ${FAV_MAX} saved`;
}
function toggleFav(id) {
  const l = byId(id);
  if (!l || l.seller === "me") return;
  if (saved.has(id)) saved.delete(id);
  else if (saved.size >= FAV_MAX) { toast(`Favorites are full (${FAV_MAX} max). Remove one to save another.`); return; }
  else if (!live(l)) { toast("This listing is no longer available."); return; }
  else saved.add(id);
  persistFavs();
  $$(`[data-fav="${id}"]`).forEach(b => {
    const on = saved.has(id);
    b.classList.toggle("on", on); b.setAttribute("aria-pressed", on);
    if (b.classList.contains("fav-btn")) b.innerHTML = `<svg class="arrow"><use href="#i-heart"/></svg> ${on ? "Saved" : "Save"}`;
  });
  toast(saved.has(id) ? "Saved to your favorites" : "Removed from favorites");
  if (location.hash.startsWith("#/my")) renderSaved();
  else $("#savedCt").textContent = saved.size;
}

// Access control: only the original seller can change a listing (AC4).
function canManage(l) { return !!l && l.seller === "me" && l.status !== "removed"; }
function denied() { toast("Only the original seller can change this listing."); }

let editing = null, pendingImg = null;
function openEdit(id, opener) {
  const l = byId(id);
  if (!canManage(l)) return denied();
  editing = l; pendingImg = null;
  $("#edId").textContent = "#RL-" + (1000 + l.id);
  $("#edName").value = l.title;
  $("#edPrice").value = l.price ? l.price : "";
  $("#edCond").value = l.cond;
  $("#edDesc").value = l.desc;
  $$("#edX input").forEach(i => i.checked = l.x.includes(i.value));
  renderEdPhotos();
  $$("#editForm .field-err").forEach(e => { e.hidden = true; e.textContent = ""; });
  $$("#editForm .input").forEach(i => i.classList.remove("bad"));
  Overlay.open($("#editModal"), opener);
}
function renderEdPhotos() {
  const l = editing, cover = pendingImg ? { img: pendingImg, title: l.title } : l;
  $("#edPhotos").innerHTML = `<div class="ph">${media(cover)}<span class="cover-tag">COVER</span></div>
    <label class="ph ph-add">Replace photo<input type="file" accept="image/*" id="edPhotoIn" hidden></label>`;
}
function editErrors() {
  const name = $("#edName").value.trim(), desc = $("#edDesc").value.trim(), priceRaw = $("#edPrice").value.trim();
  const xs = $$("#edX input:checked").map(i => i.value);
  const price = Number(priceRaw.replace(/^\$/, ""));
  const err = {};
  if (!name) err.name = "Add an item name.";
  else if (name.length < 3) err.name = "Item name needs at least 3 characters.";
  if (!desc) err.desc = "Add a description so buyers know what they’re getting.";
  if (!xs.length) err.x = "Pick at least one exchange method.";
  if (xs.includes("sell")) {
    if (!priceRaw) err.price = "Listings for sale need a price.";
    else if (!isFinite(price) || price <= 0) err.price = "Enter a price as a number, like 25.";
    else if (price > 10000) err.price = "Price can’t be more than $10,000.";
  } else if (priceRaw && (!isFinite(price) || price < 0)) err.price = "Enter a price as a number, like 25.";
  return { err, name, desc, xs, price: isFinite(price) && priceRaw ? price : 0 };
}
function showEditErrors(err, only) {
  $$("#editForm [data-err]").forEach(p => {
    const k = p.dataset.err; if (only && k !== only) return;
    p.hidden = !err[k]; p.textContent = err[k] || "";
    const input = { name: "#edName", price: "#edPrice", desc: "#edDesc" }[k];
    if (input) $(input).classList.toggle("bad", !!err[k]);
  });
}
function saveEdit(e) {
  e.preventDefault();
  if (!canManage(editing)) { Overlay.close(); return denied(); }
  const { err, name, desc, xs, price } = editErrors();
  showEditErrors(err);
  if (Object.keys(err).length) { const first = $("#editForm .bad, #editForm [data-err]:not([hidden])"); (first && first.matches("input,textarea") ? first : $("#edX input")).focus(); return; }
  Object.assign(editing, { title: name, desc, x: xs, price: xs.includes("sell") ? price : 0, cond: $("#edCond").value });
  if (pendingImg) { editing.img = pendingImg; }
  Overlay.close();
  refreshListingViews();
  toast("Changes saved. Your listing is updated.");
}
function togglePause(id) {
  const l = byId(id);
  if (!canManage(l)) return denied();
  l.status = l.status === "paused" ? "active" : "paused";
  refreshListingViews();
  toast(l.status === "paused" ? "Listing paused. It’s hidden from search." : "Listing reactivated. It’s back in search.");
}
let removing = null;
function askRemove(id, opener) {
  const l = byId(id);
  if (!canManage(l)) return denied();
  removing = l;
  $("#rmBody").innerHTML = `<strong>${esc(l.title)}</strong> will be taken off RamsLoop. Removed listings can’t be edited or reactivated.`;
  Overlay.open($("#removeModal"), opener);
}
function confirmRemove() {
  if (!canManage(removing)) { Overlay.close(); return denied(); }
  removing.status = "removed";
  removing = null;
  Overlay.close();
  refreshListingViews();
  toast("Listing removed from the marketplace.");
}
function refreshListingViews() {
  renderHome(); updateCounts();
  const [page, arg] = (location.hash || "#/home").replace(/^#\//, "").split("/");
  if (page === "my") renderMy(arg || "listings");
  if (page === "item") renderDetail(arg);
  if (page === "browse") applyFilters();
  if (page === "profile") renderProfile(arg);
  if (page === "moderation") renderModeration();
}

// ---------------- Messages (US 13) ----------------
let activeConvo = 1;
const drafts = {}; let draftImg = null;
const PII = /([\w.+-]+@[\w-]+\.[\w.]+)|(\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4})/;
function convoFor(listingId) {
  const l = byId(listingId);
  let c = CONVOS.find(c => c.listing === l.id);
  if (!c) { c = { id: Math.max(...CONVOS.map(c => c.id)) + 1, who: l.seller, listing: l.id, ago: "now", reply: "Hi! Yes, it’s still available.", msgs: [] }; CONVOS.unshift(c); }
  return c;
}
function renderConvos() {
  const q = $("#convoQ").value.trim().toLowerCase();
  $("#convoList").innerHTML = CONVOS.filter(c => !q || (SELLERS[c.who].name + " " + byId(c.listing).title).toLowerCase().includes(q)).map(c => {
    const s = SELLERS[c.who], l = byId(c.listing), last = c.msgs[c.msgs.length - 1];
    const snip = last ? (last.me ? "You: " : "") + (last.text || "📷 Photo") : "No messages yet";
    return `<a class="convo ${c.id === activeConvo ? "on" : ""} ${c.unread ? "unread" : ""}" href="#/messages/${c.id}" data-convo="${c.id}"><span class="avatar ${s.av}">${s.init}</span><div><div class="top"><strong>${s.name}</strong><span>${c.ago}</span></div><div class="re">Re: ${esc(l.title)}</div><div class="snip">${esc(snip)}</div></div></a>`;
  }).join("") || `<p class="small muted" style="padding:16px">No conversations match.</p>`;
  const unread = CONVOS.filter(c => c.unread).length;
  [$("#msgBadge"), $("#tabMsgBadge")].forEach(b => { b.textContent = unread; b.hidden = !unread; });
}
function msgHtml(m, i) {
  const state = !m.me ? "" : m.state === "sending" ? "Sending…" : m.state === "failed" ? "" : m.ms ? `Delivered · ${(m.ms / 1000).toFixed(1)}s` : "";
  const fail = m.state === "failed" ? `<span class="fail-row"><svg><use href="#i-x"/></svg> Not sent. <button type="button" data-retry="${i}">Try again</button></span>` : "";
  return `<div class="msg ${m.me ? "me" : "them"} ${m.state === "failed" ? "failed" : ""}">${m.img ? `<img class="msg-img" src="${m.img}" alt="Photo attachment">` : ""}${m.text ? `<span class="msg-text">${esc(m.text)}</span>` : ""}<span class="t">${m.t}${state ? " · " + state : ""}</span>${fail}</div>`;
}
function renderThread() {
  const c = CONVOS.find(c => c.id === activeConvo) || CONVOS[0];
  activeConvo = c.id;
  const s = SELLERS[c.who], l = byId(c.listing);
  $("#tpAvatar").className = "avatar " + s.av; $("#tpAvatar").textContent = s.init;
  $("#tpName").textContent = s.name;
  $("#tpRating").innerHTML = s.rating == null ? "New member · no reviews yet" : `<span class="stars">${stars(s.rating)}</span> ${s.rating.toFixed(1)} · ${s.n} exchanges`;
  $("#tpProfile").href = "#/profile/" + c.who;
  $("[data-report='user']", $(".tp-head")).dataset.who = c.who;
  $("#tpListing").innerHTML = `<div class="mini">${media(l)}</div><div style="flex:1; min-width:0"><strong>${esc(l.title)}</strong> · ${priceText(l)} ${tags(l)}</div><a href="#/item/${l.id}">View listing</a>`;
  $("#msgs").innerHTML = `<span class="sys"><svg><use href="#i-lock"/></svg> Messages stay in RamsLoop. Phone numbers and personal emails are never shown.</span>`
    + c.msgs.map(msgHtml).join("")
    + (c.typing ? `<div class="msg them typing" aria-label="${s.name} is typing"><i></i><i></i><i></i></div>` : "");
  $("#msgInput").value = drafts[c.id] || "";
  updateComposer();
  requestAnimationFrame(() => { const m = $("#msgs"); m.scrollTop = m.scrollHeight; });
}
function updateComposer(showBlank) {
  const v = $("#msgInput").value, n = v.length, blank = !v.trim() && !draftImg;
  $("#charCt").textContent = `${n.toLocaleString()} / 1,000`;
  $("#charCt").classList.toggle("near", n >= 900);
  $("#sendBtn").disabled = blank;
  const hint = $("#msgHint");
  hint.classList.remove("err", "warn");
  if (showBlank && blank) { hint.textContent = "Messages can’t be blank. Type something or attach a photo."; hint.classList.add("err"); }
  else if (PII.test(v)) { hint.textContent = "Tip: you don’t need to share a phone number or email. Plan the exchange right here."; hint.classList.add("warn"); }
  else hint.textContent = "Text and photos. Up to 1,000 characters.";
  $("#attachPreview").hidden = !draftImg;
  $("#attachPreview").innerHTML = draftImg ? `<img src="${draftImg}" alt="Photo to send"><button type="button" class="icon-btn" id="attachClear" aria-label="Remove photo"><svg><use href="#i-x"/></svg></button>` : "";
}
function deliver(c, m) {
  m.state = "sending";
  const fail = m.willFail; m.willFail = false;
  const start = performance.now();
  renderThread(); renderConvos();
  setTimeout(() => {
    if (fail) m.state = "failed";
    else { m.state = "sent"; m.ms = Math.round(performance.now() - start); }
    if (c.id === activeConvo && location.hash.startsWith("#/messages")) renderThread();
    renderConvos();
    if (fail) { toast("Message didn’t send. Tap “Try again”, no need to retype."); return; }
    // Simulated reply so the "receive" side of the story is visible
    if (!c.replied && c.reply) {
      c.replied = true;
      setTimeout(() => { c.typing = true; if (c.id === activeConvo) renderThread(); }, 900);
      setTimeout(() => {
        c.typing = false; c.msgs.push({ me: false, text: c.reply, t: now() }); c.ago = "now";
        const viewing = c.id === activeConvo && location.hash.startsWith("#/messages");
        if (!viewing) c.unread = true;
        if (viewing) renderThread();
        renderConvos();
      }, 2600);
    }
  }, 450 + Math.random() * 500);
}
function sendMessage(e) {
  e.preventDefault();
  const c = CONVOS.find(c => c.id === activeConvo);
  const text = $("#msgInput").value.trim();
  if (!text && !draftImg) { updateComposer(true); $("#msgInput").focus(); return; }
  if (text.length > 1000) return;
  const m = { me: true, text, img: draftImg, t: now(), willFail: $("#failNext").checked };
  $("#failNext").checked = false;
  c.msgs.push(m); c.ago = "now";
  drafts[c.id] = ""; draftImg = null; $("#msgPhoto").value = "";
  deliver(c, m);
  $("#msgInput").focus();
}

// ---------------- Seller profile · ratings & reviews (US 2) ----------------
function renderProfile(who) {
  const key = SELLERS[who] && who !== "me" ? who : "maya";
  const s = SELLERS[key];
  const c = CONVOS.find(c => c.who === key);
  $("#profileHead").innerHTML = `<span class="avatar lg ${s.av}">${s.init}</span>
    <div><p class="eyebrow" style="margin-bottom:4px">Seller profile</p><h1 style="font-size:48px">${s.name}</h1>
      <div class="badges" style="margin-top:12px">
        <span class="badge"><svg><use href="#i-verified"/></svg> CSU verified</span>
        <span class="badge"><svg><use href="#i-leaf"/></svg> ${s.n} exchanges</span>
        <span class="badge"><svg><use href="#i-clock"/></svg> Usually replies in ${s.replies}</span>
        <span class="badge"><svg><use href="#i-cal"/></svg> Member since ${s.since}</span>
      </div></div>
    <div style="display:flex; gap:10px; flex-wrap:wrap">
      <a class="btn btn-energy" href="#/messages${c ? "/" + c.id : ""}"><svg class="arrow"><use href="#i-chat"/></svg> Message</a>
      <button class="btn btn-ghost" type="button" data-report="user" data-who="${key}"><svg class="arrow"><use href="#i-flag"/></svg> Report</button>
    </div>`;
  if (!s.reviews) {
    $("#ratingPanel").innerHTML = `<div class="empty" style="padding:24px 0"><h3>No reviews yet</h3><p>${s.name} hasn’t completed an exchange on RamsLoop. Take extra care: meet in a public campus spot and never pay before you see the item.</p></div>`;
    $("#reviewList").hidden = true;
  } else {
    $("#reviewList").hidden = false;
    const max = Math.max(...s.dist);
    $("#ratingPanel").innerHTML = `<div class="rating-summary">
        <div><div class="rating-big">${s.rating.toFixed(1)}</div><div class="stars" aria-label="${s.rating} out of 5 stars">${stars(s.rating)}</div><div class="small muted">${s.reviews} reviews</div></div>
        <div class="bars">${s.dist.map((n, i) => `<div class="b"><span>${5 - i}★</span><div class="track"><div class="fill" style="width:${max ? n / max * 100 : 0}%"></div></div><span>${n}</span></div>`).join("")}</div>
      </div>
      <p class="small muted" style="margin:16px 0 0"><svg class="inline-ico"><use href="#i-check"/></svg> Only people who completed an exchange with ${s.name} can leave a review.</p>`;
    const revs = REVIEW_POOL.filter(r => r.by !== key).slice(0, 3);
    $("#reviewList").innerHTML = revs.map((r, i) => { const b = SELLERS[r.by];
      return `<div class="review" ${i === 0 ? 'style="border-top:0; padding-top:0"' : ""}><span class="avatar ${b.av}">${b.init}</span><div><div class="r-top"><strong>${b.name}</strong><span class="stars" aria-label="${r.stars} stars">${stars(r.stars)}</span><span class="small muted">${r.kind} · ${r.when}</span></div><p>${esc(r.text)}</p></div></div>`; }).join("")
      + `<button class="btn btn-quiet btn-sm" style="margin-top:12px" type="button" onclick="toast('Showing all ${s.reviews} reviews')">Show all ${s.reviews} reviews</button>`;
  }
  const theirs = LISTINGS.filter(l => l.seller === key && live(l));
  $("#profileGrid").innerHTML = theirs.length ? theirs.map(card).join("") : `<div class="empty" style="grid-column:1/-1">No active listings.</div>`;
}

// ---------------- Report a user or listing (US 3) ----------------
let reportTarget = null;
function openReport(btn) {
  if (btn.dataset.report === "listing") {
    const l = byId(btn.dataset.id);
    reportTarget = { kind: "listing", listing: l.id };
    $("#repTarget").textContent = `Reporting the listing “${l.title}”. Reports are reviewed by a RamsLoop moderator, usually within a few hours.`;
  } else {
    const who = btn.dataset.who || "maya";
    reportTarget = { kind: "user", who };
    $("#repTarget").textContent = `Reporting ${SELLERS[who].name}. Reports are reviewed by a RamsLoop moderator, usually within a few hours.`;
  }
  $("#reportForm").reset(); $("#repErr").hidden = true;
  Overlay.open($("#reportModal"), btn);
}
function submitReport(e) {
  e.preventDefault();
  const r = $('input[name="rr"]:checked');
  if (!r) { $("#repErr").hidden = false; $("#repReasons input").focus(); return; }
  const t = reportTarget, note = $("#repNote").value.trim();
  const match = REPORTS.find(x => x.status !== "removed" && x.status !== "dismissed" && (t.kind === "listing" ? x.listing === t.listing : x.who === t.who));
  if (match) { match.count++; match.log.push(`${now()} · Another report received (${r.value})`); }
  else REPORTS.unshift({ id: Math.max(...REPORTS.map(x => x.id)) + 1, kind: t.kind, listing: t.listing, who: t.who,
    user: t.who ? SELLERS[t.who].name : undefined, init: t.who ? SELLERS[t.who].init : undefined,
    reason: r.value, count: 1, status: "open", quote: note || "No extra details given.", evidence: "New report from a verified user.", log: [`${now()} · Report received`] });
  Overlay.close();
  toast("Thanks. A moderator will review your report.");
}

// ---------------- Moderation console (US 4) ----------------
const isOpen = r => r.status === "open" || r.status === "review";
const R_STATUS = { open: ["open", "Open"], review: ["review", "In review"], removed: ["closed", "Listing removed"], suspended: ["closed", "User suspended"], warned: ["closed", "Warning sent"], dismissed: ["sold", "Dismissed"] };
function repTitle(r) { return r.kind === "listing" ? (r.listing ? byId(r.listing).title : r.title) : r.user; }
function repSub(r) {
  if (r.kind === "user") return "User";
  if (r.listing) { const l = byId(r.listing); return `Listing · ${SELLERS[l.seller].name}`; }
  return `Listing · ${r.owner}`;
}
function repThumb(r) {
  if (r.kind === "user") return `<span class="avatar d">${r.init}</span>`;
  const l = r.listing ? byId(r.listing) : { ill: r.ill, bg: r.bg, fg: "#1E4D2B", title: r.title };
  return `<div class="mini">${media(l)}</div>`;
}
function renderModeration() {
  const open = REPORTS.filter(isOpen), done = REPORTS.filter(r => !isOpen(r));
  $("#mtOpen").textContent = open.length; $("#mtDone").textContent = done.length;
  $$("#modTabs .tab").forEach(t => t.classList.toggle("on", t.dataset.mtab === modTab));
  $("#modKpis").innerHTML = `<div><div class="n">${REPORTS.filter(r => r.status === "open").length}</div><div class="l">Open reports</div></div>
    <div><div class="n">${REPORTS.filter(r => r.status === "review").length}</div><div class="l">In review</div></div>
    <div><div class="n">${done.length}</div><div class="l">Resolved</div></div>
    <div><div class="n">4.2h</div><div class="l">Median time to resolve</div></div>`;
  const rows = modTab === "open" ? open : done;
  if (!rows.some(r => r.id === modSel)) modSel = rows[0] ? rows[0].id : null;
  $("#modRows").innerHTML = rows.map(r => `<tr class="${r.id === modSel ? "sel" : ""}"><td><div class="item-cell">${repThumb(r)}<div><strong>${esc(repTitle(r))}</strong><div class="small muted">${esc(repSub(r))}</div></div></div></td>
    <td>${esc(r.reason)}</td><td>${r.count || "Auto"}</td><td><span class="status ${R_STATUS[r.status][0]}">${R_STATUS[r.status][1]}</span></td><td><button class="btn btn-quiet btn-sm" data-mod="${r.id}">${isOpen(r) ? "Review" : "View"}</button></td></tr>`).join("")
    || `<tr><td colspan="5" class="muted" style="padding:24px">Nothing here. Nice work.</td></tr>`;
  labelTables();
  const r = REPORTS.find(x => x.id === modSel);
  if (!r) { $("#modPanel").innerHTML = `<p class="muted">Select a report to review it.</p>`; return; }
  const l = r.listing && byId(r.listing);
  const acts = !isOpen(r) ? `<p class="small muted" style="margin:0">This case is closed.</p>` : r.kind === "listing"
    ? `<button class="btn btn-danger" data-mod-act="removed"><svg class="arrow"><use href="#i-trash"/></svg> Remove listing</button>
       <button class="btn btn-quiet" data-mod-act="warned"><svg class="arrow"><use href="#i-flag"/></svg> Warn seller</button>
       <button class="btn btn-quiet" data-mod-act="dismissed"><svg class="arrow"><use href="#i-x"/></svg> Dismiss</button>`
    : `<button class="btn btn-danger" data-mod-act="suspended"><svg class="arrow"><use href="#i-lock"/></svg> Suspend user</button>
       <button class="btn btn-quiet" data-mod-act="warned"><svg class="arrow"><use href="#i-flag"/></svg> Send warning</button>
       <button class="btn btn-quiet" data-mod-act="dismissed"><svg class="arrow"><use href="#i-x"/></svg> Dismiss</button>`;
  $("#modPanel").innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; gap:10px"><span class="status ${R_STATUS[r.status][0]}">${R_STATUS[r.status][1]}${r.count ? ` · ${r.count} report${r.count === 1 ? "" : "s"}` : ""}</span><span class="small muted">Case #RL-${r.id}</span></div>
    <h3 style="margin-top:10px">${esc(repTitle(r))}</h3>
    <div class="evidence">${repThumb(r)}<div class="small">${l ? `<strong>Seller:</strong> ${SELLERS[l.seller].name} <span class="muted">(${SELLERS[l.seller].n} exchanges)</span><br><strong>Price:</strong> ${priceText(l)} · <strong>Listed:</strong> ${l.ago} ago<br>${l ? `<a href="#/item/${l.id}">Open listing</a><br>` : ""}` : ""}${esc(r.evidence)}</div></div>
    <div class="flag-reason"><strong>${esc(r.reason)}:</strong> “${esc(r.quote)}”</div>
    ${isOpen(r) ? `<div class="field" style="margin-top:16px"><label for="modNote">Moderator note</label><textarea class="input" id="modNote" style="min-height:80px" placeholder="Why you’re taking this action"></textarea></div>` : ""}
    <div class="mod-actions">${acts}</div>
    <div class="log">${r.log.map(x => `<div>${esc(x)}</div>`).join("")}</div>`;
}
function modAction(act) {
  const r = REPORTS.find(x => x.id === modSel);
  if (!r || !isOpen(r)) return;
  const note = ($("#modNote") && $("#modNote").value.trim()) || "";
  r.status = act;
  const what = { removed: "Listing removed and seller notified", suspended: "User suspended pending review", warned: "Warning sent", dismissed: "Report dismissed" }[act];
  r.log.push(`${now()} · ${what}${note ? ` · Note: ${note}` : ""}`);
  if (act === "removed" && r.listing) byId(r.listing).status = "removed";
  toast(act === "removed" ? "Listing removed. It’s gone from search and favorites." : what);
  refreshListingViews();
}

// Sell preview
function renderSellPreview() {
  const xs = $$("#xChecks input:checked").map(i => i.value);
  const price = parseFloat(($("#sPrice").value || "").replace(/[^0-9.]/g, "")) || 0;
  const l = { id: 3, title: $("#sName").value || "Untitled item", price, x: xs.length ? xs : ["sell"], cat: $("#sCat").value, cond: $("#sCond").value, seller: "me", ago: "Just now", img: "assets/img/pendant-lamps.jpg", unit: "$10 deposit" };
  $("#sellPreview").innerHTML = card(l);
}

// Admin charts
function renderAdmin() {
  // Line chart: single series, CSU green, crosshair + tooltip
  const data = [48, 55, 61, 58, 72, 80, 77, 94, 101, 97, 118, 126];
  const labels = ["Jul 13", "Jul 20", "Jul 27", "Aug 3", "Aug 10", "Aug 17", "Aug 24", "Aug 31", "Sep 7", "Sep 14", "Sep 21", "Sep 28"];
  const W = 640, H = 240, P = { l: 36, r: 12, t: 12, b: 26 }, maxY = 140;
  const x = i => P.l + i * (W - P.l - P.r) / (data.length - 1);
  const y = v => P.t + (1 - v / maxY) * (H - P.t - P.b);
  const pts = data.map((v, i) => `${x(i)},${y(v)}`).join(" ");
  const grid = [0, 35, 70, 105, 140].map(v => `<line class="gridline" x1="${P.l}" x2="${W - P.r}" y1="${y(v)}" y2="${y(v)}"/><text class="axis-t" x="${P.l - 8}" y="${y(v) + 4}" text-anchor="end">${v}</text>`).join("");
  const xl = labels.map((t, i) => i % 2 === 0 ? `<text class="axis-t" x="${x(i)}" y="${H - 6}" text-anchor="middle">${t}</text>` : "").join("");
  const area = `M${x(0)},${y(0)} L${pts.replace(/ /g, " L")} L${x(data.length - 1)},${y(0)} Z`;
  $("#lineChart").innerHTML = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Weekly exchanges rising from 48 to 126 over 12 weeks">
    ${grid}${xl}
    <path d="${area}" fill="#CFFC00" opacity=".28"/>
    <polyline points="${pts}" fill="none" stroke="#1E4D2B" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>
    <line id="xh" x1="0" x2="0" y1="${P.t}" y2="${H - P.b}" stroke="#59595B" stroke-width="1" stroke-dasharray="3 3" opacity="0"/>
    <circle id="xd" r="5" fill="#1E4D2B" stroke="#fff" stroke-width="2" opacity="0"/>
    <circle cx="${x(data.length - 1)}" cy="${y(data[data.length - 1])}" r="5" fill="#1E4D2B" stroke="#fff" stroke-width="2"/>
    <text x="${x(data.length - 1) - 8}" y="${y(data[data.length - 1]) - 12}" text-anchor="end" style="font:600 12px Poppins, sans-serif; fill:#0f1f14">126 this week</text>
    <rect class="hit" x="${P.l}" y="0" width="${W - P.l - P.r}" height="${H}"/></svg>`;
  const svg = $("#lineChart svg"), tip = $("#lineTip"), card = $("#lineChart").closest(".chart-card");
  $(".hit", svg).addEventListener("mousemove", ev => {
    const r = svg.getBoundingClientRect(), sx = (ev.clientX - r.left) * W / r.width;
    const i = Math.max(0, Math.min(data.length - 1, Math.round((sx - P.l) / ((W - P.l - P.r) / (data.length - 1)))));
    $("#xh", svg).setAttribute("x1", x(i)); $("#xh", svg).setAttribute("x2", x(i)); $("#xh", svg).setAttribute("opacity", 1);
    $("#xd", svg).setAttribute("cx", x(i)); $("#xd", svg).setAttribute("cy", y(data[i])); $("#xd", svg).setAttribute("opacity", 1);
    const cr = card.getBoundingClientRect();
    tip.innerHTML = `<strong>Week of ${labels[i]}</strong><br>${data[i]} exchanges`;
    tip.style.left = (r.left - cr.left + x(i) * r.width / W) + "px"; tip.style.top = (r.top - cr.top + y(data[i]) * r.height / H) + "px"; tip.classList.add("on");
  });
  $(".hit", svg).addEventListener("mouseleave", () => { tip.classList.remove("on"); $("#xh", svg).setAttribute("opacity", 0); $("#xd", svg).setAttribute("opacity", 0); });

  // Mix bar (categorical, fixed order; colors = exchange-method tags)
  const mix = [["sell", 46], ["free", 21], ["swap", 14], ["borrow", 12], ["buy", 7]];
  $("#mixBar").innerHTML = mix.map(([k, v]) => `<i style="width:${v}%; background:${X_COLOR[k]}" title="${X_LABEL[k]}: ${v}%"></i>`).join("");
  $("#mixLegend").innerHTML = mix.map(([k, v]) => `<span><i style="background:${X_COLOR[k]}"></i>${X_LABEL[k]} ${v}%</span>`).join("");
  $("#mixTable").innerHTML = `<thead><tr><th>Method</th><th style="text-align:right">Exchanges</th></tr></thead><tbody>${mix.map(([k, v]) => `<tr><td>${X_LABEL[k]}</td><td style="text-align:right">${Math.round(1284 * v / 100)}</td></tr>`).join("")}</tbody>`;

  // Horizontal bars — single series
  const cats = [["Textbooks", 214], ["Furniture", 168], ["Home & Kitchen", 131], ["Electronics", 97], ["Bikes & Outdoor", 88], ["Clothing", 73]];
  const m = 214;
  $("#catBars").innerHTML = cats.map(([k, v]) => `<div class="hbar" title="${k}: ${v} new listings"><span>${k}</span><div class="track"><div class="fill" style="width:${v / m * 100}%"></div></div><span class="v">${v}</span></div>`).join("");
}

function renderStories() {
  $("#storyRows").innerHTML = STORIES.map(([n, role, text, theme, epic, prio, route, screen, sprint]) => {
    const d = STORY_DETAILS[n];
    const more = d ? `<details class="ac"><summary>${d.pts} story points · impact ${d.impact} · acceptance criteria</summary>${d.ac
      ? d.ac.map(([h, items]) => `${h ? `<h5>${esc(h)}</h5>` : ""}<ul>${items.map(i => `<li>${esc(i)}</li>`).join("")}</ul>`).join("")
      : `<p class="muted">Acceptance criteria are still being written.</p>`}</details>` : "";
    return `<tr><td>US ${n}</td><td><div class="role">${role}</div>${esc(text)}${more}</td><td class="small" data-label="Theme · Epic">${theme}<div class="muted">Epic ${esc(epic)}</div></td><td data-label="Priority"><strong>${prio}</strong></td><td data-label="Sprint"><span class="pill ${sprint === 2 ? "mvp" : ""}">Sprint ${sprint}</span></td><td data-label="Screen"><a href="#/${route}">${screen} →</a></td></tr>`;
  }).join("");
}

// ---------------- Verify steps ----------------
function vStep(n) {
  $$(".v-step").forEach(s => s.classList.toggle("on", +s.dataset.step === n));
  $$(".v-steps i").forEach(i => i.classList.toggle("on", +i.dataset.vs <= n));
}
window.vStep = vStep;

// ---------------- Roles ----------------
function setRole(r) {
  document.body.className = document.body.className.replace(/role-\w+/g, "").trim() + " role-" + r;
  $("#roleSelect").value = r;
  const names = { student: "Student", moderator: "Moderator", admin: "Site administrator" };
  toast(`Now viewing as: ${names[r]}`);
}
window.setRole = setRole;

// ---------------- Overlays: modals + bottom sheets ----------------
// One manager for every dialog-like layer. Each open overlay pushes a history
// entry, so the browser/phone back button closes it instead of leaving the page.
// Handles focus trap, Esc, backdrop tap, aria-expanded and focus return.
const mqMobile = window.matchMedia("(max-width: 860px)");
const Overlay = (() => {
  const stack = [];            // [{ el, opener }]
  const bd = $("#sheetBackdrop");
  let pendingHash = null;      // navigation requested from inside an overlay
  const isModal = el => el.classList.contains("modal-backdrop");
  const panelOf = el => (isModal(el) ? $(".modal", el) : el);
  const focusables = el => $$('a[href], button:not([disabled]), input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])', el)
    .filter(x => x.getClientRects().length && getComputedStyle(x).visibility !== "hidden");
  const top = () => stack[stack.length - 1];

  function show(el, opener) {
    if (isModal(el)) el.classList.add("on");
    else {
      el.classList.add("open"); bd.classList.add("on");
      if (el.id === "filterSheet") { el.setAttribute("role", "dialog"); el.setAttribute("aria-modal", "true"); el.setAttribute("aria-labelledby", "filterTitle"); }
    }
    if (opener && opener.hasAttribute("aria-controls")) opener.setAttribute("aria-expanded", "true");
    document.body.classList.add("overlay-open");
    const f = focusables(panelOf(el));
    const first = f.find(x => !x.matches("[data-close], [data-sheet-close]")) || f[0];
    setTimeout(() => (first || panelOf(el)).focus({ preventScroll: true }), 30);
  }
  function hide(entry, restore = true) {
    const { el, opener } = entry;
    if (isModal(el)) el.classList.remove("on");
    else {
      el.classList.remove("open");
      if (el.id === "filterSheet") { el.removeAttribute("role"); el.removeAttribute("aria-modal"); el.removeAttribute("aria-labelledby"); }
    }
    if (opener && opener.hasAttribute("aria-controls")) opener.setAttribute("aria-expanded", "false");
    if (!stack.some(s => !isModal(s.el))) bd.classList.remove("on");
    if (!stack.length) document.body.classList.remove("overlay-open");
    if (restore && opener && document.contains(opener)) opener.focus({ preventScroll: true });
  }
  function open(el, opener = document.activeElement) {
    if (!el || stack.some(s => s.el === el)) return;
    stack.push({ el, opener });
    history.pushState({ overlay: el.id }, "");
    show(el, opener);
  }
  // UI-initiated close: step back through history so the entry we pushed is consumed.
  function close() {
    if (!stack.length) return;
    if (history.state && history.state.overlay === top().el.id) history.back();
    else hide(stack.pop());
  }
  function closeAll() { if (stack.length) close(); }
  // Close without touching history (viewport change, route change).
  function reset() { while (stack.length) hide(stack.pop(), false); }
  // Follow a link from inside an overlay: pop our history entry first, then navigate.
  function navigate(hash) { pendingHash = hash; close(); if (!stack.length && pendingHash) { const h = pendingHash; pendingHash = null; location.hash = h; } }

  window.addEventListener("popstate", () => {
    const want = history.state && history.state.overlay;
    while (stack.length && top().el.id !== want) hide(stack.pop(), !pendingHash);
    if (pendingHash && !stack.length) { const h = pendingHash; pendingHash = null; location.hash = h; }
  });
  document.addEventListener("keydown", e => {
    const t = top(); if (!t) return;
    if (e.key === "Escape") { e.preventDefault(); close(); return; }
    if (e.key !== "Tab") return;
    const f = focusables(panelOf(t.el)); if (!f.length) return;
    const first = f[0], last = f[f.length - 1];
    if (!panelOf(t.el).contains(document.activeElement)) { e.preventDefault(); first.focus(); }
    else if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });
  bd.addEventListener("click", close);
  return { open, close, closeAll, reset, navigate, get isOpen() { return stack.length > 0; }, contains: el => stack.some(s => s.el === el) };
})();

// ---------------- Mobile helpers ----------------
// Demo controls (role switcher + story toggle) live in the utility bar on desktop
// and move into the More sheet in mobile mode. Same nodes, so ids stay unique.
const demoNodes = [$(".role-switch"), $("#storyToggle")];
const demoHome = { parent: $(".utility-right"), before: $('.utility-right a[href="#/stories"]') };
function placeDemoControls() {
  if (mqMobile.matches) demoNodes.forEach(n => $("#moreDemo").appendChild(n));
  else demoNodes.forEach(n => demoHome.parent.insertBefore(n, demoHome.before));
}
function onViewportChange() {
  if (!mqMobile.matches && Overlay.isOpen && ($("#moreSheet").classList.contains("open") || $("#filterSheet").classList.contains("open"))) {
    Overlay.reset(); history.replaceState(null, "");
  }
  placeDemoControls();
  route();
}
// Copy each column header into data-label so stacked (card) rows stay labelled.
function labelTables() {
  $$("table.stack-sm").forEach(t => {
    const heads = $$("thead th", t).map(th => th.textContent.trim());
    $$("tbody tr", t).forEach(tr => [...tr.children].forEach((td, i) => td.setAttribute("data-label", heads[i] || "")));
  });
}
function filterCount() {
  const n = $$('.filters input[type="checkbox"]:checked').length + ($("#pMin").value.trim() ? 1 : 0) + ($("#pMax").value.trim() ? 1 : 0);
  const c = $("#filterCount"); c.textContent = n; c.hidden = !n;
}

// ---------------- Router ----------------
function route() {
  const h = (location.hash || "#/home").replace(/^#\//, "");
  const [page, arg] = h.split("/");
  const pages = $$(".page").map(p => p.dataset.page);
  const target = pages.includes(page) ? page : "home";
  if (Overlay.isOpen) { Overlay.reset(); }
  $$(".page").forEach(p => p.classList.toggle("active", p.dataset.page === target));
  $$(".main-nav a").forEach(a => a.classList.toggle("active", a.dataset.nav === target || (target === "item" && a.dataset.nav === "browse")));
  // mobile tab bar + More sheet state
  const tabKey = { home: "home", browse: "browse", item: "browse", sell: "sell", messages: "messages" }[target] || "more";
  $$(".tabbar [data-tabnav]").forEach(t => {
    const on = t.dataset.tabnav === tabKey;
    t.classList.toggle("is-active", on);
    if (t.tagName === "A") on ? t.setAttribute("aria-current", "page") : t.removeAttribute("aria-current");
  });
  const moreKey = target === "my" ? "my/" + (arg || "listings") : target;
  $$(".more-list a").forEach(a => a.dataset.more === moreKey ? a.setAttribute("aria-current", "page") : a.removeAttribute("aria-current"));
  if (target === "item") renderDetail(arg || 1);
  if (target === "browse") applyFilters();
  if (target === "my") renderMy(arg === "saved" ? "saved" : "listings");
  if (target === "profile") renderProfile(arg);
  if (target === "moderation") renderModeration();
  if (target === "admin") renderAdmin();
  if (target === "messages") {
    if (arg && CONVOS.some(c => c.id === +arg)) activeConvo = +arg;
    const c = CONVOS.find(c => c.id === activeConvo);
    if (arg && c) c.unread = false;
    renderConvos(); renderThread();
    const thread = !!arg && mqMobile.matches;
    $(".inbox").classList.toggle("show-thread", thread);
    document.body.classList.toggle("in-thread", thread);
  } else document.body.classList.remove("in-thread");
  // auto-switch role when visiting role-gated pages directly (demo convenience)
  if (target === "moderation" && !/role-(moderator|admin)/.test(document.body.className)) setRole("moderator");
  if (target === "admin" && !/role-admin/.test(document.body.className)) setRole("admin");
  window.scrollTo({ top: 0 });
}

// ---------------- Events ----------------
document.addEventListener("click", e => {
  // links inside an open sheet/modal: close it cleanly (history-wise), then navigate
  const link = e.target.closest('a[href^="#/"]');
  if (link && Overlay.isOpen && link.closest(".sheet, .filters, .modal-backdrop")) {
    e.preventDefault(); Overlay.navigate(link.getAttribute("href")); return;
  }
  const fav = e.target.closest("[data-fav]");
  if (fav) { e.preventDefault(); toggleFav(+fav.dataset.fav); return; }
  const ed = e.target.closest("[data-edit]");
  if (ed) { openEdit(+ed.dataset.edit, ed); return; }
  const pa = e.target.closest("[data-pause]");
  if (pa) { togglePause(+pa.dataset.pause); return; }
  const rm = e.target.closest("[data-remove]");
  if (rm) { askRemove(+rm.dataset.remove, rm); return; }
  if (e.target.closest("#rmConfirm")) { confirmRemove(); return; }
  const rep = e.target.closest("[data-report]");
  if (rep) { openReport(rep); return; }
  const ml = e.target.closest("[data-msg-listing]");
  if (ml) { const c = convoFor(+ml.dataset.msgListing); location.hash = "#/messages/" + c.id; return; }
  const rt = e.target.closest("[data-retry]");
  if (rt) { const c = CONVOS.find(c => c.id === activeConvo); deliver(c, c.msgs[+rt.dataset.retry]); return; }
  if (e.target.closest("#attachClear")) { draftImg = null; $("#msgPhoto").value = ""; updateComposer(); return; }
  const mod = e.target.closest("[data-mod]");
  if (mod) { modSel = +mod.dataset.mod; renderModeration(); if (mqMobile.matches) $("#modPanel").scrollIntoView({ behavior: "smooth" }); return; }
  const ma = e.target.closest("[data-mod-act]");
  if (ma) { modAction(ma.dataset.modAct); return; }
  const mt = e.target.closest("[data-mtab]");
  if (mt) { modTab = mt.dataset.mtab; modSel = null; renderModeration(); return; }
  const tab = e.target.closest(".tab[data-tab]");
  if (tab) { location.hash = "#/my/" + tab.dataset.tab; return; }
  if (e.target.closest("[data-close], [data-sheet-close]") || e.target.classList.contains("modal-backdrop")) { Overlay.close(); return; }
  if (e.target.closest("#moreBtn")) { Overlay.open($("#moreSheet"), $("#moreBtn")); return; }
  if (e.target.closest("#filterBtn")) { Overlay.open($("#filterSheet"), $("#filterBtn")); return; }
  const seg = e.target.closest(".seg-ctl button");
  if (seg) { $$("button", seg.parentElement).forEach(b => b.classList.toggle("on", b === seg)); return; }
});
$("#storyToggle").addEventListener("click", function () {
  const on = document.body.classList.toggle("show-stories");
  this.setAttribute("aria-pressed", on);
});
$("#roleSelect").addEventListener("change", e => setRole(e.target.value));
$(".filters").addEventListener("change", applyFilters);
$("#browseQ").addEventListener("input", applyFilters);
$("#pMin").addEventListener("input", applyFilters);
$("#pMax").addEventListener("input", applyFilters);
$("#clearFilters").addEventListener("click", () => { $$(".filters input").forEach(i => { i.type === "checkbox" ? (i.checked = false) : (i.value = ""); }); $("#browseQ").value = ""; applyFilters(); });
$("#heroQ").form.addEventListener("submit", () => { $("#browseQ").value = $("#heroQ").value; });
["#sName", "#sPrice", "#sCat", "#sCond"].forEach(s => $(s).addEventListener("input", renderSellPreview));
$("#xChecks").addEventListener("change", renderSellPreview);
// Messages
$("#composer").addEventListener("submit", sendMessage);
$("#msgInput").addEventListener("input", e => { drafts[activeConvo] = e.target.value; updateComposer(); });
$("#msgInput").addEventListener("keydown", e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); $("#composer").requestSubmit(); } });
$("#msgPhoto").addEventListener("change", e => { const f = e.target.files[0]; if (f) { draftImg = URL.createObjectURL(f); updateComposer(); } });
$("#convoQ").addEventListener("input", renderConvos);
// Edit / remove listing
$("#editForm").addEventListener("submit", saveEdit);
$("#editForm").addEventListener("input", e => {
  const k = { edName: "name", edPrice: "price", edDesc: "desc" }[e.target.id] || (e.target.closest("#edX") ? "x" : null);
  if (k) showEditErrors(editErrors().err, k);
});
$("#editForm").addEventListener("change", e => {
  if (e.target.id === "edPhotoIn" && e.target.files[0]) { pendingImg = URL.createObjectURL(e.target.files[0]); renderEdPhotos(); }
});
// Report
$("#reportForm").addEventListener("submit", submitReport);
$("#reportForm").addEventListener("change", () => { $("#repErr").hidden = true; });
mqMobile.addEventListener("change", onViewportChange);

// ---------------- Init ----------------
renderHome(); renderCatFilters(); updateCounts(); renderSellPreview(); renderStories(); renderConvos();
labelTables();
placeDemoControls();
window.addEventListener("hashchange", route);
route();
