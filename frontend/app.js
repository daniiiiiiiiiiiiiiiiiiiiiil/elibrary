// Отключаем бэкенд для стабильной работы без сервера
const USE_BACKEND = false; 
const API_URL = "http://127.0.0.1:8000";

const EXTRA_BOOKS = [
  { id_books: 101, name: "Мастер и Маргарита", aftors: ["Михаил Булгаков"], dgarnu: ["Классика", "Фантастика"], data: "1967", price: 690, color: "#3b82f6", description: "Культовый роман о визите дьявола в Москву 1930-х годов, вечной любви и силе творчества." },
  { id_books: 102, name: "1984", aftors: ["Джордж Оруэлл"], dgarnu: ["Антиутопия", "Классика"], data: "1949", price: 580, color: "#ef4444", description: "Роман-предупреждение о тоталитарном обществе, Большом Брате и контроле над сознанием." },
  { id_books: 103, name: "Преступление и наказание", aftors: ["Фёдор Достоевский"], dgarnu: ["Классика", "Психология"], data: "1866", price: 620, color: "#8b5cf6", description: "Глубокий психологический триллер о теории Родиона Раскольникова и цене человеческой жизни." },
  { id_books: 104, name: "Дюна", aftors: ["Фрэнк Герберт"], dgarnu: ["Научная фантастика", "Приключения"], data: "1965", price: 950, color: "#d97706", description: "Эпическая сага о пустынной планете Арракис, политических интригах и борьбе за ценнейший ресурс Вселенной." },
  { id_books: 105, name: "Гарри Поттер и философский камень", aftors: ["Дж. К. Роулинг"], dgarnu: ["Фэнтези", "Приключения"], data: "1997", price: 840, color: "#10b981", description: "Первая книга о мальчике-волшебнике, который открывает для себя мир магии в школе Хогвартс." },
  { id_books: 106, name: "Три товарища", aftors: ["Эрих Мария Ремарк"], dgarnu: ["Классика", "Драма"], data: "1936", price: 650, color: "#6366f1", description: "Пронзительная история о настоящей мужской дружбе и любви на фоне послевоенной Германии." },
  { id_books: 107, name: "Ведьмак. Последнее желание", aftors: ["Анджей Сапковский"], dgarnu: ["Фэнтези"], data: "1993", price: 780, color: "#475569", description: "Приключения Геральта из Ривии — профессионального охотника на чудовищ в мрачном славянском мире." },
  { id_books: 108, name: "Чистый код", aftors: ["Роберт Мартин"], dgarnu: ["Программирование", "IT"], data: "2008", price: 1450, color: "#0284c7", description: "Настольная книга разработчика о том, как писать понятный, поддерживаемый и качественный программный код." },
  { id_books: 109, name: "Маленький принц", aftors: ["Антуан де Сент-Экзюпери"], dgarnu: ["Сказка", "Философия"], data: "1943", price: 490, color: "#eab308", description: "Мудрая притча о дружбе, ответственности, любви и умении видеть сердцем." },
  { id_books: 110, name: "Граф Монте-Кристо", aftors: ["Александр Дюма"], dgarnu: ["Приключения", "Классика"], data: "1844", price: 890, color: "#0d9488", description: "Захватывающая история несправедливо осуждённого моряка Эдмона Дантеса и его виртуозной мести." },
  { id_books: 111, name: "Автостопом по галактике", aftors: ["Дуглас Адамс"], dgarnu: ["Фантастика", "Юмор"], data: "1979", price: 610, color: "#ec4899", description: "Ироничное космическое путешествие последнего выжившего землянина с полотенцем в руках." },
  { id_books: 112, name: "Атомные привычки", aftors: ["Джеймс Клир"], dgarnu: ["Саморазвитие", "Психология"], data: "2018", price: 790, color: "#16a34a", description: "Практическое руководство о том, как маленькие ежедневные изменения приводят к большим результатам." }
];

let allBooks = [];
let catalogInitialized = false;

/* ================= УТИЛИТЫ ================= */

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str == null ? "" : String(str);
  return div.innerHTML;
}

function getUser() {
  try {
    return JSON.parse(localStorage.getItem("elibrary_user") || "null");
  } catch {
    return null;
  }
}

function setUser(user) {
  localStorage.setItem("elibrary_user", JSON.stringify(user));
}

function getOrders() {
  try {
    return JSON.parse(localStorage.getItem("elibrary_orders") || "[]");
  } catch {
    return [];
  }
}

function setOrders(orders) {
  localStorage.setItem("elibrary_orders", JSON.stringify(orders));
}

function getUserOrders() {
  const user = getUser();
  if (!user) return [];
  return getOrders().filter(o => o.userEmail === user.email);
}

function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3200);
}

function closeModals() {
  document.querySelectorAll(".modal-backdrop").forEach(m => m.classList.remove("open"));
}

/* ================= АВТОРИЗАЦИЯ ================= */

window.toggleAuthMode = function(mode) {
  const isRegister = mode === "register";
  
  const regForm = document.getElementById("registerForm");
  const loginForm = document.getElementById("loginForm");
  const btnReg = document.getElementById("btnShowReg");
  const btnLogin = document.getElementById("btnShowLogin");

  if (regForm && loginForm) {
    regForm.style.display = isRegister ? "block" : "none";
    loginForm.style.display = isRegister ? "none" : "block";
  }
  
  if (btnReg && btnLogin) {
    btnReg.classList.toggle("active", isRegister);
    btnLogin.classList.toggle("active", !isRegister);
  }
};

window.checkAuth = function() {
  const user = getUser();
  if (user) {
    document.getElementById("authScreen").style.display = "none";
    document.getElementById("appScreen").style.display = "block";
    document.getElementById("userNameDisplay").textContent = "👤 " + (user.name || user.email);

    if (!catalogInitialized) {
      initCatalog();
      catalogInitialized = true;
    }
    updateMyBooksBadge();
  } else {
    document.getElementById("authScreen").style.display = "flex";
    document.getElementById("appScreen").style.display = "none";
  }
};

// Упрощенный вход без сервера
window.handleRegister = async function(e) {
  e.preventDefault();
  const name = document.getElementById("regName").value.trim();
  const email = document.getElementById("regEmail").value.trim();
  const password = document.getElementById("regPassword").value;

  if (!name || !email || !password) {
    showToast("Пожалуйста, заполните все поля");
    return;
  }

  setUser({ name, email });
  showToast("Добро пожаловать, " + name + "!");
  checkAuth();
};

window.handleLogin = async function(e) {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value;

  if (!email || !password) {
    showToast("Введите email и пароль");
    return;
  }

  // Просто берем имя из email (до собачки)
  const shortName = email.split("@")[0];
  setUser({ name: shortName, email });
  showToast("Вы успешно вошли в систему!");
  checkAuth();
};

window.logout = function() {
  localStorage.removeItem("elibrary_user");
  catalogInitialized = false;
  checkAuth();
  showToast("Вы вышли из аккаунта");
};

/* ================= НАВИГАЦИЯ ================= */

window.switchTab = function(tabName) {
  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
  const activeTab = document.querySelector(`.tab[data-tab="${tabName}"]`);
  if (activeTab) activeTab.classList.add("active");

  document.getElementById("catalogView").style.display = tabName === "catalog" ? "block" : "none";
  document.getElementById("myBooksView").style.display = tabName === "my-books" ? "block" : "none";

  if (tabName === "my-books") renderMyBooks();
};

/* ================= КАТАЛОГ ================= */

async function initCatalog() {
  allBooks = [...EXTRA_BOOKS];

  if (USE_BACKEND) {
    try {
      const res = await fetch(API_URL + "/books/");
      if (res.ok) {
        const data = await res.json();
        const apiBooks = data.map((b, i) => ({
          ...b,
          id_books: Number(b.id_books),
          price: b.price || (550 + i * 70),
          color: "#2563eb"
        }));
        allBooks = [...apiBooks, ...EXTRA_BOOKS];
      }
    } catch (e) {}
  }

  const genres = new Set();
  allBooks.forEach(b => (b.dgarnu || []).forEach(g => genres.add(g)));

  const genreSelect = document.getElementById("genreFilter");
  if (genreSelect) {
    const current = genreSelect.value;
    genreSelect.innerHTML = '<option value="">Все жанры</option>' +
      Array.from(genres).map(g => `<option value="${escapeHtml(g)}">${escapeHtml(g)}</option>`).join("");
    genreSelect.value = current;
  }

  renderCatalog(allBooks);
}

window.filterBooks = function() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const genre = document.getElementById("genreFilter").value;

  const filtered = allBooks.filter(book => {
    const matchesText = book.name.toLowerCase().includes(query) ||
      (book.aftors || []).join(" ").toLowerCase().includes(query);
    const matchesGenre = !genre || (book.dgarnu || []).includes(genre);
    return matchesText && matchesGenre;
  });

  renderCatalog(filtered);
};

function renderCatalog(books) {
  const grid = document.getElementById("booksGrid");
  if (!grid) return;
  
  if (!books.length) {
    grid.innerHTML = '<div class="empty-state">По вашему запросу книги не найдены.</div>';
    return;
  }

  grid.innerHTML = books.map(book => `
    <div class="card">
      <div>
        <div class="book-cover" style="background: ${book.color || '#2563eb'}">📘</div>
        <h3>${escapeHtml(book.name)}</h3>
        <div class="meta">${escapeHtml((book.aftors || []).join(", ") || "Автор не указан")} • ${escapeHtml(book.data)} г.</div>
        <div class="tags">${(book.dgarnu || []).map(g => `<span class="tag">${escapeHtml(g)}</span>`).join("")}</div>
        <p class="desc">${escapeHtml(book.description)}</p>
      </div>
      <div class="card-footer">
        <span class="price">${book.price} ₽</span>
        <button type="button" class="btn-primary" onclick="openOrderModal(${book.id_books})">Заказать книгу</button>
      </div>
    </div>
  `).join("");
}

/* ================= ЗАКАЗ ================= */

window.openOrderModal = function(bookId) {
  const book = allBooks.find(b => Number(b.id_books) === Number(bookId));
  if (!book) return;

  const user = getUser() || {};
  document.getElementById("orderBookId").value = book.id_books;
  document.getElementById("orderBookTitle").textContent = `Книга: «${book.name}» (${book.price} ₽)`;

  const fullNameInput = document.getElementById("orderFullName");
  if (user.name && !fullNameInput.value) fullNameInput.value = user.name;

  document.getElementById("orderModal").classList.add("open");
};

window.submitOrder = async function(e) {
  e.preventDefault();

  const bookId = Number(document.getElementById("orderBookId").value);
  const book = allBooks.find(b => Number(b.id_books) === bookId);
  if (!book) return;

  const user = getUser() || {};

  const order = {
    orderId: Date.now(),
    userEmail: user.email,
    bookId: book.id_books,
    bookName: book.name,
    authors: (book.aftors || []).join(", "),
    price: book.price,
    fullName: document.getElementById("orderFullName").value,
    phone: document.getElementById("orderPhone").value,
    city: document.getElementById("orderCity").value,
    address: document.getElementById("orderAddress").value,
    delivery: document.getElementById("orderDelivery").value,
    payment: document.getElementById("orderPayment").value,
    comment: document.getElementById("orderComment").value,
    date: new Date().toLocaleDateString("ru-RU"),
    status: "Куплена / В доставке"
  };

  const orders = getOrders();
  orders.unshift(order);
  setOrders(orders);

  closeModals();
  updateMyBooksBadge();
  showToast(`Книга «${book.name}» успешно заказана!`);
  switchTab("my-books");
};

/* ================= МОИ КНИГИ ================= */

function updateMyBooksBadge() {
  const activeCount = getUserOrders().filter(o => o.status !== "Возвращена").length;
  const badge = document.getElementById("myBooksCount");
  if (badge) badge.textContent = activeCount;
}

function renderMyBooks() {
  const grid = document.getElementById("myBooksGrid");
  if (!grid) return;

  const orders = getUserOrders();

  if (!orders.length) {
    grid.innerHTML = '<div class="empty-state">У вас пока нет купленных книг. Перейдите в «Каталог книг», чтобы оформить первый заказ!</div>';
    return;
  }

  grid.innerHTML = orders.map(o => {
    const isReturned = o.status === "Возвращена";
    const statusClass = isReturned ? "order-status returned" : "order-status";
    return `
      <div class="order-card">
        <div class="${statusClass}">${escapeHtml(o.status)}</div>
        <h3>${escapeHtml(o.bookName)}</h3>
        <div class="meta">${escapeHtml(o.authors)} • Заказ от ${escapeHtml(o.date)} • ${o.price} ₽</div>
        <div class="meta">Получатель: ${escapeHtml(o.fullName)} (${escapeHtml(o.phone)})</div>
        <div class="meta">Адрес: г. ${escapeHtml(o.city)}, ${escapeHtml(o.address)}</div>
        <div class="meta">Доставка: ${escapeHtml(o.delivery)} (${escapeHtml(o.payment)})</div>
        ${o.returnReason
          ? `<p style="color: var(--danger); margin-top: 4px;"><strong>Причина возврата:</strong> ${escapeHtml(o.returnReason)}</p>`
          : ""}
        ${!isReturned
          ? `<button type="button" class="btn-danger w-full" onclick="openReturnModal(${o.orderId})">Вернуть книгу</button>`
          : `<button type="button" class="btn-outline w-full" disabled style="opacity: 0.6; cursor: default;">Возврат оформлен</button>`}
      </div>
    `;
  }).join("");
}

/* ================= ВОЗВРАТ ================= */

window.openReturnModal = function(orderId) {
  const order = getUserOrders().find(o => o.orderId === orderId);
  if (!order) return;

  document.getElementById("returnOrderId").value = order.orderId;
  document.getElementById("returnBookTitle").textContent =
    `Книга: «${order.bookName}» (заказ от ${order.date})`;
  document.getElementById("returnModal").classList.add("open");
};

window.submitReturn = function(e) {
  e.preventDefault();

  const orderId = Number(document.getElementById("returnOrderId").value);
  const reason = document.getElementById("returnReason").value;
  const method = document.getElementById("returnMethod").value;

  const allOrders = getOrders();
  const idx = allOrders.findIndex(o => o.orderId === orderId);

  if (idx !== -1) {
    allOrders[idx].status = "Возвращена";
    allOrders[idx].returnReason = `${reason} (${method})`;
    setOrders(allOrders);
  }

  closeModals();
  updateMyBooksBadge();
  renderMyBooks();
  showToast("Заявка на возврат книги успешно оформлена!");
};

/* ================= ИНИЦИАЛИЗАЦИЯ ================= */

document.addEventListener("DOMContentLoaded", () => {
  const btnReg = document.getElementById("btnShowReg");
  const btnLogin = document.getElementById("btnShowLogin");
  
  if (btnReg) btnReg.addEventListener("click", () => toggleAuthMode('register'));
  if (btnLogin) btnLogin.addEventListener("click", () => toggleAuthMode('login'));

  checkAuth();
});