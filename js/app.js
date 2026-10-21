/* RamsLoop mockup — front-end only, sample data, no backend. */

// ---------------- Sample data ----------------
const X_LABEL = { sell: "Sell", swap: "Swap", borrow: "Borrow", free: "Free", buy: "Buying" };
const X_COLOR = { sell: "#006144", swap: "#E56A54", borrow: "#008FB3", free: "#D9782D", buy: "#7E5475" };

const CATS = ["Textbooks & Supplies", "Furniture", "Home & Kitchen", "Electronics", "Bikes & Outdoor", "Clothing", "Appliances"];

const SELLERS = {
  maya:  { name: "Maya P.",  init: "MP", av: "b", rating: 4.9, n: 23 },
  jordan:{ name: "Jordan K.",init: "JK", av: "c", rating: 4.8, n: 11 },
  priya: { name: "Priya R.", init: "PR", av: "e", rating: 5.0, n: 8 },
  diego: { name: "Diego M.", init: "DM", av: "d", rating: 4.7, n: 15 },
  sam:   { name: "Sam T.",   init: "ST", av: "f", rating: 4.9, n: 31 },
  ava:   { name: "Ava L.",   init: "AL", av: "",  rating: 4.6, n: 5 },
  me:    { name: "Riley B.", init: "RB", av: "",  rating: 4.8, n: 9 },
};

// img: photo path, or ill: illustration symbol + bg/fg colors (brand palette)
const LISTINGS = [
  { id: 1,  title: "Intro to Statistics textbook (8th ed.)", price: 35, x: ["sell","swap"], cat: "Textbooks & Supplies", cond: "Like new", seller: "maya", ago: "12m", where: "Lory Student Center", ill: "book", bg: "#E3CDB1", fg: "#1E4D2B",
    desc: "Used for STAT 301 last spring. Light pencil notes in chapters 1–3, no highlighting. The unused online access code card is included. Happy to swap for a CS 165 or ECON 202 book." },
  { id: 2,  title: "Trek hybrid bike + U-lock", price: 180, x: ["sell"], cat: "Bikes & Outdoor", cond: "Good", seller: "diego", ago: "40m", where: "Corbett Hall", ill: "bike", bg: "#008FB3", fg: "#000",
    desc: "Medium frame (fits 5'6\"–6'0\"). New tubes this fall, with a rear rack and a Kryptonite U-lock. A great campus commuter. Can meet at the CSU PD lobby." },
  { id: 3,  title: "Pendant lamps (set of 2)", price: 25, x: ["sell","swap"], cat: "Home & Kitchen", cond: "Like new", seller: "me", ago: "1h", where: "Morgan Library", img: "assets/img/pendant-lamps.jpg",
    desc: "Two matching globe pendant lamps with warm LED bulbs. Plug-in cords, so no hardwiring. They work great in a dorm or an apartment." },
  { id: 4,  title: "TI-84 Plus graphing calculator", price: 0, unit: "$20 deposit", x: ["borrow"], cat: "Textbooks & Supplies", cond: "Good", seller: "priya", ago: "2h", where: "Morgan Library", ill: "calc", bg: "#FFC038", fg: "#000",
    borrow: { length: "Full semester", due: "Dec 12, 2026", deposit: "$20 refundable", late: "Reminder 3 days before; deposit kept if 3+ days late" },
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
    borrow: { length: "Weekend (Fri–Mon)", due: "Oct 19, 2026", deposit: "$15 refundable", late: "Reminder only" },
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
    borrow: { length: "1 week", due: "Flexible (set in chat)", deposit: "$25 refundable", late: "Reminder only" },
    desc: "Waxless classic skis (185 cm), boots size 9, and poles. Borrow for a Cameron Pass weekend, or buy them outright for $120." },
  { id: 16, title: "Organic chemistry model kit", price: 15, x: ["sell","borrow"], cat: "Textbooks & Supplies", cond: "Like new", seller: "me", ago: "3d", where: "Chemistry Building", ill: "flask", bg: "#C8C372", fg: "#1E4D2B",
    desc: "Complete molecular model kit for CHEM 341/343. Every piece is accounted for." },
];

const EVENTS = [
  { m: "OCT", d: "24", title: "Move-Out Swap Meet", where: "Lory Student Center Plaza", img: "assets/img/bonfire.jpg", going: 184, type: "Swap" },
  { m: "NOV", d: "04", title: "Textbook Exchange Day", where: "Morgan Library, Event Hall", img: "assets/img/lecture-hall.jpg", going: 97, type: "Sell" },
  { m: "NOV", d: "14", title: "Winter Gear Swap & Ski Tune Clinic", where: "Campus Recreation Center", img: "assets/img/mountain-lake.jpg", going: 63, type: "Swap" },
  { m: "DEC", d: "10", title: "Free Store Pop-Up: Finals Week", where: "LSC Sunken Lounge", img: "assets/img/gardener.jpg", going: 141, type: "Donate" },
  { m: "JAN", d: "22", title: "Spring Bike Swap & Repair Clinic", where: "Transportation Center", img: "assets/img/campus-aerial.jpg", going: 38, type: "Workshop" },
  { m: "FEB", d: "07", title: "Dorm Decor Swap Night", where: "Braiden Hall Lounge", img: "assets/img/star-trails.jpg", going: 52, type: "Swap" },
];

const THREADS = [
  { c: "pin", label: "Pinned", title: "Welcome to the RamsLoop board: read this first", by: "RamsLoop Team", av: "", init: "RL", ago: "Aug 20", body: "How the board works, what belongs in a listing instead of a thread, and how to report problems.", replies: 12, views: "1.9k" },
  { c: "iso", label: "Request", title: "ISO: CS 165 textbook (any edition works)", by: "Ava L.", av: "", init: "AL", ago: "25m", body: "Professor said older editions are fine. Can pay ~$20 or swap for a CHEM 111 lab manual.", replies: 4, views: 88 },
  { c: "ev", label: "Events", title: "Who’s bringing furniture to the Oct 24 swap meet?", by: "Diego M.", av: "d", init: "DM", ago: "2h", body: "Trying to gauge if it’s worth hauling my futon over. Anyone know if there’s truck help?", replies: 17, views: 402 },
  { c: "tip", label: "Tips", title: "PSA: meet at the CSU PD lobby for big-ticket items", by: "Sam T.", av: "f", init: "ST", ago: "5h", body: "It’s open 24/7, has cameras, and the officers are chill about it. Did my bike sale there last week.", replies: 9, views: 316 },
  { c: "move", label: "Move-out", title: "December grads: what are you doing with your stuff?", by: "Maya P.", av: "b", init: "MP", ago: "1d", body: "Thinking of organizing a building-wide giveaway in Aggie Village before winter break. Interested?", replies: 23, views: 611 },
  { c: "iso", label: "Request", title: "Borrowing a Nikon/Canon DSLR for a photo assignment?", by: "Jordan K.", av: "c", init: "JK", ago: "1d", body: "Need one for JTC 300 on Nov 2–3. Will leave a deposit and return it cleaned.", replies: 6, views: 140 },
];

const STORIES = [
  [1, "User", "Verify my CSU affiliation with my university email so that I can use a trusted student-only marketplace.", "Trusted CSU community", "1.1 User verification", 3, "verify", "Verify account"],
  [2, "User", "View another user’s ratings and reviews from previous exchanges so that I can make a more informed decision before exchanging an item with that person.", "Trusted CSU community", "1.2 Trust & safety", 11, "profile", "Seller profile"],
  [3, "User", "Report suspicious users or listings so that marketplace administrators can investigate safety concerns.", "Trusted CSU community", "1.2 Trust & safety", 9, "item/2", "Report dialog (listing, profile, chat)"],
  [4, "Moderator", "Review reports and remove fraudulent, inactive, or prohibited listings so that RamsLoop remains trusted and safe.", "Trusted CSU community", "1.2 Trust & safety", 10, "moderation", "Moderation console"],
  [5, "Buyer", "Search and filter listings by item type, price, condition, and exchange method so that I can find suitable items quickly.", "Item discovery", "2.1 Search & browse", 5, "browse", "Browse"],
  [6, "Buyer", "View item photos, descriptions, conditions, price, and availability so that I can make an informed decision.", "Item discovery", "2.1 Search & browse", 2, "item/1", "Listing detail"],
  [7, "Buyer", "Create alerts for specific items based on keywords, category, price range, or condition so that I can be notified when an item that meets my needs becomes available on RamsLoop.", "Item discovery", "2.2 Personalized item discovery", 13, "my/alerts", "My Loop → Item alerts"],
  [8, "User", "Save listings to a favorites list so that I can review them later.", "Item discovery", "2.2 Personalized item discovery", 12, "my/saved", "My Loop → Saved"],
  [9, "Seller", "Create and publish a listing with photos, a description, condition, price, and exchange method so that buyers can discover and evaluate my item.", "Listing & exchange management", "3.1 Listing management", 1, "sell", "Sell or share"],
  [10, "Seller", "Edit, pause, or remove my listing so that the item’s information and availability remain accurate and up to date.", "Listing & exchange management", "3.1 Listing management", 8, "my/listings", "My Loop → My listings"],
  [11, "User", "Mark a listing as buy, sell, swap, borrow, or free so that other users understand the proposed exchange.", "Listing & exchange management", "3.2 Exchange options", 4, "sell", "Sell form + tags everywhere"],
  [12, "Borrower", "See borrowing terms and return dates so that I understand my responsibilities before requesting an item.", "Listing & exchange management", "3.2 Exchange options", 14, "item/4", "Borrow listing + My Loop → Borrowing"],
  [13, "User", "Send and receive messages within RamsLoop so that I can coordinate an exchange without sharing personal contact details.", "Communication & engagement", "4.1 Student communication", 7, "messages", "Messages"],
  [14, "User", "Post on a general discussion board so that I can request items or discuss events with other CSU students.", "Communication & engagement", "4.2 Community discussion", 15, "board", "Community board"],
  [15, "Event host", "Facilitate events for students to buy, sell, exchange, or donate items.", "Community events", "5.1 Event management & communication", 16, "events", "Events + host tools"],
  [16, "Event host", "Send event announcements and updates to interested community members so that students can stay informed about upcoming RamsLoop events.", "Community events", "5.1 Event management & communication", 17, "events", "Events → Event announcements"],
  [17, "Site administrator", "Access performance indicators to monitor the health of the site.", "Platform administration", "6.1 Performance monitoring", 6, "admin", "Admin dashboard"],
];

const saved = new Set([2, 6, 9, 12]);
const myStatus = { 3: "active", 14: "active", 16: "paused" };

// ---------------- Helpers ----------------
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

function media(l, cls = "") {
  if (l.img) return `<img src="${l.img}" alt="${esc(l.title)}" class="${cls}">`;
  return `<div class="ill ${cls}" style="background:${l.bg}; color:${l.fg}"><svg aria-hidden="true"><use href="#ill-${l.ill}"/></svg></div>`;
}
function tags(l) { return l.x.map(x => `<span class="xtag ${x}">${X_LABEL[x]}</span>`).join(""); }
function priceText(l) {
  if (l.x.includes("buy")) return `Up to $${l.price}`;
  if (l.x[0] === "free" || (l.price === 0 && l.x.includes("free"))) return "Free";
  if (l.x[0] === "borrow" && l.price === 0) return `Borrow <span class="unit">· ${l.unit}</span>`;
  if (l.price === 0 && l.x.includes("swap")) return "Swap only";
  return `$${l.price}`;
}
function card(l) {
  const s = SELLERS[l.seller];
  return `<article class="card">
    <button class="fav ${saved.has(l.id) ? "on" : ""}" data-fav="${l.id}" aria-label="Save listing" title="Save to favorites"><svg><use href="#i-heart"/></svg></button>
    <a class="cover" href="#/item/${l.id}"><div class="thumb">${media(l)}<div class="tags">${tags(l)}</div></div></a>
    <div class="card-body">
      <div class="price">${priceText(l)}</div>
      <a class="card-title" href="#/item/${l.id}">${esc(l.title)}</a>
      <div><span class="cond">${l.cond}</span></div>
      <div class="meta"><span>${s.name} <span class="stars" style="font-size:12px">★</span>${s.rating}</span><span>${l.ago}</span></div>
    </div></article>`;
}
function toast(msg) {
  const t = $("#toast"); $("span", t).textContent = msg; t.classList.add("on");
  clearTimeout(toast._t); toast._t = setTimeout(() => t.classList.remove("on"), 2600);
}
window.toast = toast;

// ---------------- Renderers ----------------
function renderHome() {
  $("#homeGrid").innerHTML = LISTINGS.slice(0, 8).map(card).join("");
  $("#homeEvents").innerHTML = EVENTS.slice(0, 3).map(eventCard).join("");
  $("#homeThreads").innerHTML = THREADS.slice(1, 4).map(thread).join("");
}
function eventCard(e) {
  return `<article class="event-card"><div class="e-img"><img src="${e.img}" alt=""><div class="date"><span class="m">${e.m}</span><span class="d">${e.d}</span></div></div>
  <div class="e-body"><span class="pill" style="align-self:flex-start">${e.type}</span><h3>${esc(e.title)}</h3><div class="where"><svg><use href="#i-pin"/></svg>${esc(e.where)}</div>
  <div class="e-foot"><span class="going"><span class="stack"><span class="avatar b">MP</span><span class="avatar c">JK</span><span class="avatar d">DM</span></span>${e.going} going</span><button class="btn btn-quiet btn-sm" onclick="this.textContent='✓ Going'; toast('RSVP saved')">RSVP</button></div></div></article>`;
}
function thread(t) {
  return `<article class="thread" data-c="${t.c}"><span class="avatar ${t.av}">${t.init}</span><div><span class="pill ${t.c}">${t.label}</span><h4><a href="#/board">${esc(t.title)}</a></h4><p>${esc(t.body)}</p>
  <div class="t-meta"><span>${t.by}</span><span>${t.ago}</span><a href="#/board">Reply</a><button class="report-link" data-open="reportModal"><svg><use href="#i-flag"/></svg>Report</button></div></div>
  <div class="t-stats"><strong>${t.replies}</strong>replies<br>${t.views} views</div></article>`;
}

// Browse + filters
function renderCatFilters() {
  $("#catFilters").innerHTML = CATS.map(c => `<label class="opt"><input type="checkbox" name="cat" value="${esc(c)}">${esc(c)}<span class="ct">${LISTINGS.filter(l => l.cat === c).length}</span></label>`).join("");
  $$("[data-ct]").forEach(el => el.textContent = LISTINGS.filter(l => l.x.includes(el.dataset.ct)).length);
}
function applyFilters() {
  const xs = $$('input[name="x"]:checked').map(i => i.value);
  const cats = $$('input[name="cat"]:checked').map(i => i.value);
  const conds = $$('input[name="c"]:checked').map(i => i.value);
  const q = $("#browseQ").value.trim().toLowerCase();
  const min = parseFloat($("#pMin").value.replace(/[^0-9.]/g, "")), max = parseFloat($("#pMax").value.replace(/[^0-9.]/g, ""));
  const out = LISTINGS.filter(l =>
    (!xs.length || l.x.some(x => xs.includes(x))) &&
    (!cats.length || cats.includes(l.cat)) &&
    (!conds.length || conds.includes(l.cond)) &&
    (!q || (l.title + " " + l.desc + " " + l.cat).toLowerCase().includes(q)) &&
    (isNaN(min) || l.price >= min) && (isNaN(max) || l.price <= max));
  $("#browseGrid").innerHTML = out.length ? out.map(card).join("") : `<div class="empty" style="grid-column:1/-1"><h3>No matches yet</h3><p>Try fewer filters, or create an alert below.</p></div>`;
  $("#resultCount").textContent = `${out.length} result${out.length === 1 ? "" : "s"}`;
  $("#showResults").textContent = `Show ${out.length} result${out.length === 1 ? "" : "s"}`;
  filterCount();
  const chips = [...xs.map(x => X_LABEL[x]), ...cats, ...conds, q && `“${q}”`, !isNaN(min) && `≥ $${min}`, !isNaN(max) && `≤ $${max}`].filter(Boolean);
  $("#activeFilters").innerHTML = chips.map(c => `<span class="pill">${esc(c)}</span>`).join("");
}

// Detail
function renderDetail(id) {
  const l = LISTINGS.find(x => x.id === +id) || LISTINGS[0];
  const s = SELLERS[l.seller];
  const views = ["", "v1", "v2"];
  $("#crumbs").innerHTML = `<a href="#/home">Home</a> / <a href="#/browse">${esc(l.cat)}</a> / ${esc(l.title)}`;
  const borrow = l.borrow ? `
    <div class="borrow-terms us-wrap" style="margin-top:4px">
      <strong>Borrowing terms</strong> <span class="us">US 12</span>
      <div class="bt-grid">
        <div><div class="k">Loan length</div><div class="v">${l.borrow.length}</div></div>
        <div><div class="k">Return by</div><div class="v">${l.borrow.due}</div></div>
        <div><div class="k">Deposit</div><div class="v">${l.borrow.deposit}</div></div>
        <div><div class="k">Late policy</div><div class="v" style="font-size:14px; font-weight:500">${l.borrow.late}</div></div>
      </div>
      <label style="display:flex; gap:10px; align-items:center; margin-top:12px; font-size:14px"><input type="checkbox" style="accent-color:var(--csu-green)"> I’ve read and agree to these terms</label>
    </div>` : "";
  const cta = l.x.includes("borrow") ? "Request to borrow" : l.x.includes("buy") ? "I have one" : l.x.includes("free") ? "Request item" : l.x.includes("swap") && l.price === 0 ? "Propose a swap" : "Message seller";
  $("#detail").innerHTML = `
    <div class="gallery us-wrap">
      <span class="us">US 6 · Photos, description, condition, price &amp; availability</span>
      <div class="main">${media(l)}</div>
      <div class="thumbs">${views.map((v, i) => `<button class="${v} ${i === 0 ? "on" : ""}" aria-label="Photo ${i + 1}">${media(l)}</button>`).join("")}<button class="more" aria-label="More photos">+2 more</button></div>
    </div>
    <div class="d-info">
      <div style="display:flex; gap:6px; flex-wrap:wrap; margin-bottom:14px">${tags(l)} <span class="us">US 11</span></div>
      <h1>${esc(l.title)}</h1>
      <div class="d-price">${priceText(l)}</div>
      <div class="d-facts">
        <div><div class="k">Condition</div><div class="v">${l.cond}</div></div>
        <div><div class="k">Availability</div><div class="v avail">Available</div></div>
        <div><div class="k">Listed</div><div class="v">${l.ago} ago</div></div>
      </div>
      <p style="margin:0 0 16px">${esc(l.desc)}</p>
      ${borrow}
      <div class="d-actions">
        <a class="btn btn-primary" href="#/messages"><svg class="arrow"><use href="#i-chat"/></svg> ${cta}</a>
        <button class="btn btn-quiet ${saved.has(l.id) ? "on" : ""}" data-fav="${l.id}"><svg class="arrow"><use href="#i-heart"/></svg> ${saved.has(l.id) ? "Saved" : "Save"}</button>
        <span class="us">US 8, 13</span>
      </div>
      <a class="seller-card us-wrap" href="#/profile" style="text-decoration:none; color:inherit">
        <span class="avatar ${s.av}">${s.init}</span>
        <div><strong>${s.name}</strong> <span class="verified"><svg><use href="#i-verified"/></svg> Verified Ram</span>
          <div class="small"><span class="stars">★★★★★</span> <strong>${s.rating}</strong> <span class="muted">· ${s.n} exchanges · replies in ~1 hr</span></div></div>
        <span class="small" style="color:var(--oval-green); font-weight:600">Reviews →</span>
        <span class="us">US 2</span>
      </a>
      <div class="meet"><svg><use href="#i-pin"/></svg><div><strong>Pickup: ${esc(l.where)}</strong><br><span class="small muted">Meet in a public campus spot. Never pay before you see the item.</span></div></div>
      <div style="margin-top:18px; display:flex; justify-content:space-between; align-items:center">
        <span class="small muted">Listing #RL-${1000 + l.id} · 128 views · 6 saves</span>
        <button class="report-link" data-open="reportModal"><svg><use href="#i-flag"/></svg>Report this listing</button><span class="us">US 3</span>
      </div>
    </div>`;
  $("#relatedGrid").innerHTML = LISTINGS.filter(o => o.id !== l.id).slice(0, 4).map(card).join("");
  // thumb swap
  $$(".gallery .thumbs button:not(.more)").forEach(b => b.onclick = () => {
    $$(".gallery .thumbs button").forEach(x => x.classList.remove("on")); b.classList.add("on");
  });
}

// My Loop
function renderMy(tab) {
  const mine = LISTINGS.filter(l => l.seller === "me").concat([{ id: 99, title: "IKEA Kallax shelf (2×4)", price: 30, x: ["sell"], cond: "Good", ill: "chair", bg: "#E3CDB1", fg: "#1E4D2B" }, { id: 98, title: "Desk lamp", price: 0, x: ["free"], cond: "Good", ill: "monitor", bg: "#CCCCCC", fg: "#1E4D2B" }]);
  const st = id => myStatus[id] || (id === 99 ? "sold" : "active");
  $("#myListings").innerHTML = mine.map((l, i) => {
    const s = st(l.id);
    return `<tr><td><div class="item-cell"><div class="mini">${media(l)}</div><div><strong>${esc(l.title)}</strong><div class="small muted">${priceText(l)} · ${l.cond}</div></div></div></td>
      <td>${tags(l)}</td><td><span class="status ${s}">${s[0].toUpperCase() + s.slice(1)}</span></td><td>${[128, 64, 37, 210, 22][i]}</td><td>${[3, 1, 0, 6, 0][i]}</td>
      <td><div class="row-actions">
        <button class="btn btn-quiet btn-sm" data-edit="${l.id}"><svg class="arrow"><use href="#i-edit"/></svg>Edit</button>
        ${s === "sold" ? `<button class="btn btn-quiet btn-sm" onclick="toast('Relisted')">Relist</button>` : `<button class="btn btn-quiet btn-sm" data-pause="${l.id}"><svg class="arrow"><use href="#i-${s === "paused" ? "play" : "pause"}"/></svg>${s === "paused" ? "Resume" : "Pause"}</button>`}
        <button class="btn btn-danger btn-sm" data-remove aria-label="Remove"><svg class="arrow"><use href="#i-trash"/></svg></button>
      </div></td></tr>`;
  }).join("");
  $("#savedGrid").innerHTML = LISTINGS.filter(l => saved.has(l.id)).map(card).join("") || `<div class="empty" style="grid-column:1/-1">No saved listings yet.</div>`;
  $("#savedCt").textContent = saved.size;
  $("#borrowMini").innerHTML = media(LISTINGS[3]);
  $$(".tab[data-tab]").forEach(t => t.classList.toggle("on", t.dataset.tab === tab));
  $$(".tabpane[data-pane]").forEach(p => p.classList.toggle("on", p.dataset.pane === tab));
}

// Board
function renderBoard(c = "all") {
  $("#boardThreads").innerHTML = THREADS.filter(t => c === "all" || t.c === c || t.c === "pin").map(thread).join("");
}

// Sell preview
function renderSellPreview() {
  const xs = $$("#xChecks input:checked").map(i => i.value);
  const price = parseFloat(($("#sPrice").value || "").replace(/[^0-9.]/g, "")) || 0;
  const l = { id: 3, title: $("#sName").value || "Untitled item", price, x: xs.length ? xs : ["sell"], cat: $("#sCat").value, cond: $("#sCond").value, seller: "me", ago: "Just now", img: "assets/img/pendant-lamps.jpg", unit: "$10 deposit" };
  $("#sellPreview").innerHTML = card(l);
  $("#borrowFields").style.display = xs.includes("borrow") ? "block" : "none";
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
  $("#storyRows").innerHTML = STORIES.map(([n, role, text, theme, epic, prio, route, screen]) =>
    `<tr><td>US ${n}</td><td><div class="role">${role}</div>${esc(text)}</td><td class="small" data-label="Theme · Epic">${theme}<div class="muted">Epic ${esc(epic)}</div></td><td data-label="Priority"><strong>${prio}</strong>${prio <= 6 ? ` <span class="pill mvp">MVP</span>` : ""}</td><td data-label="Screen"><a href="#/${route}">${screen} →</a></td></tr>`).join("");
}

function fillMinis() {
  $$("[data-ill]").forEach(el => { el.innerHTML = `<div class="ill" style="background:${el.dataset.bg}; color:#1E4D2B; width:100%; height:100%; display:grid; place-items:center"><svg style="width:60%;height:60%"><use href="#ill-${el.dataset.ill}"/></svg></div>`; });
  $("#msgMini").innerHTML = media(LISTINGS[0]);
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
  const names = { student: "Student", host: "Event host", moderator: "Moderator", admin: "Site administrator" };
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
function openModal(id, opener) { Overlay.open($("#" + id), opener); }
function closeModals() { Overlay.closeAll(); }
window.closeModals = closeModals;

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
let prevRoute = "";
function route() {
  const h = (location.hash || "#/home").replace(/^#\//, "");
  const [page, arg] = h.split("/");
  const pages = $$(".page").map(p => p.dataset.page);
  const target = pages.includes(page) ? page : "home";
  if (Overlay.isOpen) { Overlay.reset(); }
  $$(".page").forEach(p => p.classList.toggle("active", p.dataset.page === target));
  $$(".main-nav a").forEach(a => a.classList.toggle("active", a.dataset.nav === target || (target === "item" && a.dataset.nav === "browse") || (target === "my" && false)));
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
  if (target === "my") { renderMy(arg || "listings"); labelTables(); }
  if (target === "browse") applyFilters();
  if (target === "admin") renderAdmin();
  if (target === "messages") {
    const id = arg || "1";
    $$(".convo").forEach(c => c.classList.toggle("on", c.dataset.convo === id));
    if (arg) { const c = $(`.convo[data-convo="${arg}"]`); if (c) c.classList.remove("unread"); }
    const thread = !!arg && mqMobile.matches;
    $(".inbox").classList.toggle("show-thread", thread);
    document.body.classList.toggle("in-thread", thread);
    requestAnimationFrame(() => { const m = $(".msgs"); m.scrollTop = m.scrollHeight; });
  } else document.body.classList.remove("in-thread");
  // auto-switch role when visiting role-gated pages directly (demo convenience)
  if (target === "moderation" && !/role-(moderator|admin)/.test(document.body.className)) setRole("moderator");
  if (target === "admin" && !/role-admin/.test(document.body.className)) setRole("admin");
  window.scrollTo({ top: 0 });
  prevRoute = h;
}

// ---------------- Events ----------------
document.addEventListener("click", e => {
  // links inside an open sheet/modal: close it cleanly (history-wise), then navigate
  const link = e.target.closest('a[href^="#/"]');
  if (link && Overlay.isOpen && link.closest(".sheet, .filters, .modal-backdrop")) {
    e.preventDefault(); Overlay.navigate(link.getAttribute("href")); return;
  }
  // thread back button: real history back when we came from the list
  const back = e.target.closest("[data-back-to]");
  if (back && prevRouteWas(back.dataset.backTo)) { e.preventDefault(); history.back(); return; }
  const fav = e.target.closest("[data-fav]");
  if (fav) {
    e.preventDefault();
    const id = +fav.dataset.fav;
    saved.has(id) ? saved.delete(id) : saved.add(id);
    $$(`[data-fav="${id}"]`).forEach(b => b.classList.toggle("on", saved.has(id)));
    toast(saved.has(id) ? "Saved to your favorites" : "Removed from favorites");
    if (location.hash.startsWith("#/item")) renderDetail(id);
    return;
  }
  const op = e.target.closest("[data-open]");
  if (op) { e.preventDefault(); openModal(op.dataset.open, op); return; }
  if (e.target.closest("[data-close], [data-sheet-close]") || e.target.classList.contains("modal-backdrop")) { Overlay.close(); return; }
  if (e.target.closest("#moreBtn")) { Overlay.open($("#moreSheet"), $("#moreBtn")); return; }
  if (e.target.closest("#filterBtn")) { Overlay.open($("#filterSheet"), $("#filterBtn")); return; }
  const ed = e.target.closest("[data-edit]");
  if (ed) { const l = LISTINGS.find(x => x.id === +ed.dataset.edit) || { title: "IKEA Kallax shelf (2×4)", price: 30 }; $("#edName").value = l.title; $("#edPrice").value = "$" + l.price; openModal("editModal", ed); return; }
  const pa = e.target.closest("[data-pause]");
  if (pa) { const id = +pa.dataset.pause; myStatus[id] = myStatus[id] === "paused" ? "active" : "paused"; renderMy("listings"); labelTables(); toast(myStatus[id] === "paused" ? "Listing paused. It’s hidden from search." : "Listing is live again"); return; }
  if (e.target.closest("[data-remove]")) { e.target.closest("tr").remove(); toast("Listing removed"); return; }
  if (e.target.closest("[data-remove-alert]")) { e.target.closest(".alert-item").remove(); toast("Alert removed"); return; }
  const tab = e.target.closest(".tab[data-tab]");
  if (tab) { location.hash = "#/my/" + tab.dataset.tab; return; }
  const bf = e.target.closest("#boardFilter button");
  if (bf) { $$("#boardFilter button").forEach(b => b.classList.toggle("on", b === bf)); renderBoard(bf.dataset.c); return; }
  const seg = e.target.closest(".seg-ctl button");
  if (seg) { $$("button", seg.parentElement).forEach(b => b.classList.toggle("on", b === seg)); return; }
});
function prevRouteWas(page) { return history.length > 1 && prevRouteStack.length > 1 && prevRouteStack[prevRouteStack.length - 2] === page; }
const prevRouteStack = [];
window.addEventListener("hashchange", () => { prevRouteStack.push((location.hash || "#/home").replace(/^#\//, "")); if (prevRouteStack.length > 20) prevRouteStack.shift(); });

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
mqMobile.addEventListener("change", onViewportChange);

// ---------------- Init ----------------
renderHome(); renderCatFilters(); renderBoard(); renderSellPreview(); renderStories(); fillMinis();
$("#eventsGrid").innerHTML = EVENTS.slice(1).map(eventCard).join("");
$("#profileGrid").innerHTML = LISTINGS.filter(l => l.seller === "maya").map(card).join("");
labelTables();
placeDemoControls();
prevRouteStack.push((location.hash || "#/home").replace(/^#\//, ""));
window.addEventListener("hashchange", route);
route();
