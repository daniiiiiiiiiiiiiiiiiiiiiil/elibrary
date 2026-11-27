// Отключаем бэкенд для стабильной работы без сервера
const USE_BACKEND = false;
const API_URL = "http://127.0.0.1:8000";

// Данные для входа в админку
const ADMIN_LOGIN = "Admin";
const ADMIN_PASSWORD = "vhyt57FG";

const EXTRA_BOOKS = [
  // --- КЛАССИЧЕСКИЕ КНИГИ ---
  { id_books: 101, name: "Мастер и Маргарита", aftors: ["Михаил Булгаков"], dgarnu: ["Классика", "Фантастика"], data: "1967", price: 690, color: "#3b82f6", type: "Книга", rating: 4.8, description: "Культовый роман о визите дьявола в Москву 1930-х годов, вечной любви и силе творчества." },
  { id_books: 102, name: "1984", aftors: ["Джордж Оруэлл"], dgarnu: ["Антиутопия", "Классика"], data: "1949", price: 580, color: "#ef4444", type: "Книга", rating: 4.9, description: "Роман-предупреждение о тоталитарном обществе, Большом Брате и контроле над сознанием." },
  { id_books: 103, name: "Преступление и наказание", aftors: ["Фёдор Достоевский"], dgarnu: ["Классика", "Психология"], data: "1866", price: 620, color: "#8b5cf6", type: "Книга", rating: 4.7, description: "Глубокий психологический триллер о теории Родиона Раскольникова и цене человеческой жизни." },
  { id_books: 104, name: "Дюна", aftors: ["Фрэнк Герберт"], dgarnu: ["Научная фантастика", "Приключения"], data: "1965", price: 950, color: "#d97706", type: "Книга", rating: 4.6, description: "Эпическая сага о пустынной планете Арракис, политических интригах и борьбе за ценнейший ресурс Вселенной." },
  { id_books: 105, name: "Гарри Поттер и философский камень", aftors: ["Дж. К. Роулинг"], dgarnu: ["Фэнтези", "Приключения"], data: "1997", price: 840, color: "#10b981", type: "Книга", rating: 4.9, description: "Первая книга о мальчике-волшебнике, который открывает для себя мир магии в школе Хогвартс." },
  { id_books: 106, name: "Три товарища", aftors: ["Эрих Мария Ремарк"], dgarnu: ["Классика", "Драма"], data: "1936", price: 650, color: "#6366f1", type: "Книга", rating: 4.8, description: "Пронзительная история о настоящей мужской дружбе и любви на фоне послевоенной Германии." },
  { id_books: 107, name: "Ведьмак. Последнее желание", aftors: ["Анджей Сапковский"], dgarnu: ["Фэнтези"], data: "1993", price: 780, color: "#475569", type: "Книга", rating: 4.8, description: "Приключения Геральта из Ривии — профессионального охотника на чудовищ в мрачном славянском мире." },
  { id_books: 108, name: "Чистый код", aftors: ["Роберт Мартин"], dgarnu: ["Программирование", "IT"], data: "2008", price: 1450, color: "#0284c7", type: "Книга", rating: 4.5, description: "Настольная книга разработчика о том, как писать понятный, поддерживаемый и качественный программный код." },
  { id_books: 109, name: "Маленький принц", aftors: ["Антуан де Сент-Экзюпери"], dgarnu: ["Сказка", "Философия"], data: "1943", price: 490, color: "#eab308", type: "Книга", rating: 5.0, description: "Мудрая притча о дружбе, ответственности, любви и умении видеть сердцем." },
  { id_books: 110, name: "Граф Монте-Кристо", aftors: ["Александр Дюма"], dgarnu: ["Приключения", "Классика"], data: "1844", price: 890, color: "#0d9488", type: "Книга", rating: 4.9, description: "Захватывающая история несправедливо осуждённого моряка Эдмона Дантеса и его виртуозной мести." },
  { id_books: 111, name: "Автостопом по галактике", aftors: ["Дуглас Адамс"], dgarnu: ["Фантастика", "Юмор"], data: "1979", price: 610, color: "#ec4899", type: "Книга", rating: 4.7, description: "Ироничное космическое путешествие последнего выжившего землянина с полотенцем в руках." },
  { id_books: 112, name: "Атомные привычки", aftors: ["Джеймс Клир"], dgarnu: ["Саморазвитие", "Психология"], data: "2018", price: 790, color: "#16a34a", type: "Книга", rating: 4.8, description: "Практическое руководство о том, как маленькие ежедневные изменения приводят к большим результатам." },

  // --- ВАША КНИГА ---
  { id_books: 200, name: "Моя кочалка", aftors: ["Даниил Попов"], dgarnu: ["Современная проза", "Юмор"], data: "2026", price: 999, color: "#f43f5e", type: "Книга", rating: 5.0, description: "Остросюжетный роман о приключениях, неожиданных поворотах судьбы и... кочалке. Премьера 2026 года!" },

  // --- МАНГА ---
  { id_books: 201, name: "Наруто", aftors: ["Масаси Кисимото"], dgarnu: ["Манга", "Сёнэн", "Приключения"], data: "1999", price: 750, color: "#f97316", type: "Манга", rating: 4.8, description: "История о молодом ниндзя Наруто Узумаки, который мечтает стать Хокаге." },
  { id_books: 202, name: "Атака Титанов", aftors: ["Хадзимэ Исаяма"], dgarnu: ["Манга", "Сэйнэн", "Тёмное фэнтези"], data: "2009", price: 890, color: "#451a03", type: "Манга", rating: 4.9, description: "Человечество сражается за выживание против гигантских титанов за стенами." },
  { id_books: 203, name: "Тетрадь смерти", aftors: ["Цугуми Оба"], dgarnu: ["Манга", "Триллер", "Детектив"], data: "2003", price: 820, color: "#1e293b", type: "Манга", rating: 4.9, description: "Школьник находит тетрадь, способную убивать людей, и вступает в битву с гением-детективом L." },
  { id_books: 204, name: "Ван-Пис", aftors: ["Эйитиро Ода"], dgarnu: ["Манга", "Сёнэн", "Приключения"], data: "1997", price: 790, color: "#0284c7", type: "Манга", rating: 4.9, description: "Пират Монки Д. Луффи и его команда ищут легендарное сокровище Ван-Пис." },
  { id_books: 205, name: "Моя геройская академия", aftors: ["Кохэй Хорикоси"], dgarnu: ["Манга", "Сёнэн", "Супергерои"], data: "2014", price: 710, color: "#eab308", type: "Манга", rating: 4.7, description: "Мидория мечтает стать героем, несмотря на отсутствие суперспособностей." },
  { id_books: 206, name: "Клинок, рассекающий демонов", aftors: ["Коёхару Готогэ"], dgarnu: ["Манга", "Сёнэн", "Мистика"], data: "2016", price: 830, color: "#166534", type: "Манга", rating: 4.8, description: "Танджиро становится истребителем демонов, чтобы спасти сестру." },
  { id_books: 207, name: "Магическая битва", aftors: ["Гэгэ Акутами"], dgarnu: ["Манга", "Сёнэн", "Фэнтези"], data: "2018", price: 780, color: "#4c1d95", type: "Манга", rating: 4.6, description: "Юдзи Итадори поглощает палец демона и попадает в мир магов." },
  { id_books: 208, name: "Берсерк", aftors: ["Кэнтаро Миура"], dgarnu: ["Манга", "Сэйнэн", "Тёмное фэнтези"], data: "1989", price: 990, color: "#7f1d1d", type: "Манга", rating: 4.9, description: "Мрачная история наёмника Гатса и его борьбы с демонами." },
  { id_books: 209, name: "Евангелион", aftors: ["Ёсиюки Садамото"], dgarnu: ["Манга", "Сэйнэн", "Меха"], data: "1994", price: 870, color: "#6d28d9", type: "Манга", rating: 4.7, description: "Синдзи Икари пилотирует биомеханического робота для защиты Земли." },
  { id_books: 210, name: "Токийский гуль", aftors: ["Суи Исида"], dgarnu: ["Манга", "Сэйнэн", "Ужасы"], data: "2011", price: 760, color: "#111827", type: "Манга", rating: 4.6, description: "Кэн Канэки становится полугулем после операции и пытается выжить." },
  { id_books: 228, name: "Человек-бензопила", aftors: ["Тацуки Фудзимото"], dgarnu: ["Манга", "Сэйнэн", "Ужасы"], data: "2018", price: 820, color: "#ca8a04", type: "Манга", rating: 4.8, description: "Дэндзи сливается с демоном-бензопилой и становится охотником на демонов." },

  // --- АНИМЕ / РАНОБЭ ---
  { id_books: 211, name: "Ранобэ: О моём перерождении в слизь", aftors: ["Фусэ"], dgarnu: ["Ранобэ", "Аниме", "Исекай"], data: "2013", price: 850, color: "#0ea5e9", type: "Аниме", rating: 4.7, description: "Сансай перерождается в слизь и строит свою страну монстров." },
  { id_books: 212, name: "Ранобэ: Re:Zero", aftors: ["Таппэй Нагацуки"], dgarnu: ["Ранобэ", "Аниме", "Фэнтези"], data: "2012", price: 920, color: "#9d174d", type: "Аниме", rating: 4.8, description: "Субару Нацуки попадает в другой мир и получает способность возвращаться после смерти." },
  { id_books: 213, name: "Ранобэ: Sword Art Online", aftors: ["Рэки Кавахара"], dgarnu: ["Ранобэ", "Аниме", "VRMMO"], data: "2009", price: 880, color: "#1d4ed8", type: "Аниме", rating: 4.5, description: "Кирито и другие игроки оказываются в ловушке внутри виртуальной игры." },
  { id_books: 214, name: "Ранобэ: Стальной алхимик", aftors: ["Хирому Аракава"], dgarnu: ["Ранобэ", "Аниме", "Сёнэн"], data: "2001", price: 810, color: "#b45309", type: "Аниме", rating: 4.9, description: "Братья Элрики ищут философский камень, чтобы вернуть свои тела." },
  { id_books: 215, name: "Ранобэ: Ванпанчмен", aftors: ["ONE"], dgarnu: ["Ранобэ", "Аниме", "Супергерои"], data: "2012", price: 730, color: "#ca8a04", type: "Аниме", rating: 4.8, description: "Сайтама — герой, который может победить любого врага одним ударом." },
  { id_books: 216, name: "Ранобэ: Доктор Стоун", aftors: ["Риитиро Инагаки"], dgarnu: ["Ранобэ", "Аниме", "Научный"], data: "2017", price: 790, color: "#15803d", type: "Аниме", rating: 4.7, description: "Человечество окаменело, и Сэнку пытается возродить цивилизацию." },
  { id_books: 217, name: "Ранобэ: Класс превосходства", aftors: ["Сёго Кинугаса"], dgarnu: ["Ранобэ", "Аниме", "Психология"], data: "2015", price: 840, color: "#312e81", type: "Аниме", rating: 4.6, description: "Киётака Аянокодзи скрывает свой гений в элитной школе." },
  { id_books: 218, name: "Ранобэ: Коносуба", aftors: ["Нацумэ Акацуки"], dgarnu: ["Ранобэ", "Аниме", "Исекай"], data: "2013", price: 770, color: "#be185d", type: "Аниме", rating: 4.5, description: "Кадзума Сато перерождается в фэнтези-мире с богиней Аквой." },
  { id_books: 219, name: "Ранобэ: Врата", aftors: ["Такуми Янай"], dgarnu: ["Ранобэ", "Аниме", "Военный"], data: "2006", price: 800, color: "#14532d", type: "Аниме", rating: 4.3, description: "В Токио открываются врата в другой мир, и армия Японии отправляется туда." },
  { id_books: 220, name: "Ранобэ: Повелитель Тьмы", aftors: ["Синки Наказо"], dgarnu: ["Ранобэ", "Аниме", "Исекай"], data: "2017", price: 860, color: "#3b0764", type: "Аниме", rating: 4.4, description: "Тэмма — повелитель тьмы, который решает переродиться в человеческом мире." },
  { id_books: 221, name: "Ранобэ: Повелитель Тайн", aftors: ["Юань Тун"], dgarnu: ["Ранобэ", "Аниме", "Культивация"], data: "2011", price: 910, color: "#0f766e", type: "Аниме", rating: 4.6, description: "Ван Линь становится бессмертным культиватором, чтобы отомстить за семью." },

  // --- АНИМЕ-ФИЛЬМЫ И АРТБУКИ ---
  { id_books: 223, name: "Аниме: Твое имя", aftors: ["Макото Синкай"], dgarnu: ["Аниме", "Романтика", "Драма"], data: "2016", price: 1200, color: "#831843", type: "Аниме", rating: 4.9, description: "Двое подростков обнаруживают, что могут меняться телами, и ищут друг друга." },
  { id_books: 224, name: "Аниме: Унесенные призраками", aftors: ["Хаяо Миядзаки"], dgarnu: ["Аниме", "Фэнтези", "Приключения"], data: "2001", price: 1100, color: "#a21caf", type: "Аниме", rating: 5.0, description: "Тихиро попадает в мир духов и должна работать в бане, чтобы спасти родителей." },
  { id_books: 225, name: "Артбук: Истребитель демонов", aftors: ["Ufotable"], dgarnu: ["Аниме", "Сёнэн", "Фэнтези"], data: "2019", price: 1050, color: "#065f46", type: "Аниме", rating: 4.8, description: "Артбук и новеллизация по мотивам популярного аниме о истребителях демонов." },
  { id_books: 226, name: "Аниме: Евангелион 3.0+1.0", aftors: ["Хидэаки Анно"], dgarnu: ["Аниме", "Меха", "Психология"], data: "2021", price: 1300, color: "#4c1d95", type: "Аниме", rating: 4.9, description: "Завершающий фильм тетралогии Евангелион, финальная битва." },
  { id_books: 227, name: "Аниме: Ковбой Бибоп", aftors: ["Синъитиро Ватанабэ"], dgarnu: ["Аниме", "Космос", "Джаз"], data: "1998", price: 980, color: "#b91c1c", type: "Аниме", rating: 4.9, description: "Экипаж корабля «Бибоп» охотится за головами преступников в космосе." },
  { id_books: 229, name: "Манга: Истребитель демонов (Том 1-23)", aftors: ["Коёхару Готогэ"], dgarnu: ["Манга", "Сёнэн", "Фэнтези"], data: "2016", price: 1500, color: "#166534", type: "Манга", rating: 4.9, description: "Полное коллекционное издание манги Клинок, рассекающий демонов." },
  { id_books: 230, name: "Манга: Мое перерождение в слизь (Том 1-20)", aftors: ["Фусэ"], dgarnu: ["Манга", "Исекай", "Комедия"], data: "2015", price: 1200, color: "#0ea5e9", type: "Манга", rating: 4.7, description: "Манга-адаптация популярной ранобэ о перерождении в слизь." }
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

/* ================= ПРОФИЛЬ ================= */

window.openProfileModal = function() {
  const user = getUser();
  if (!user) return;

  document.getElementById("profileName").value = user.name || "";
  document.getElementById("profileEmail").value = user.email || "";
  document.getElementById("profilePassword").value = "";

  document.getElementById("profileModal").classList.add("open");
};

window.submitProfile = function(e) {
  e.preventDefault();

  const newName = document.getElementById("profileName").value.trim();
  const newEmail = document.getElementById("profileEmail").value.trim();

  if (!newName || !newEmail) {
    showToast("Имя и email не могут быть пустыми");
    return;
  }

  const oldUser = getUser();

  const updatedUser = {
    name: newName,
    email: newEmail
  };

  setUser(updatedUser);

  if (oldUser && oldUser.email !== newEmail) {
    const orders = getOrders();
    let updatedCount = 0;
    orders.forEach(order => {
      if (order.userEmail === oldUser.email) {
        order.userEmail = newEmail;
        updatedCount++;
      }
    });
    if (updatedCount > 0) {
      setOrders(orders);
    }
  }

  document.getElementById("userNameDisplay").textContent = "👤 " + newName;
  closeModals();
  showToast("Профиль успешно обновлен!");
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
  const savedAdminBooks = JSON.parse(localStorage.getItem("elibrary_custom_books") || "[]");
  allBooks = [...EXTRA_BOOKS, ...savedAdminBooks];

  if (USE_BACKEND) {
    try {
      const res = await fetch(API_URL + "/books/");
      if (res.ok) {
        const data = await res.json();
        const apiBooks = data.map((b, i) => ({
          ...b,
          id_books: Number(b.id_books),
          price: b.price || (550 + i * 70),
          color: "#2563eb",
          type: "Книга",
          rating: 4.5
        }));
        allBooks = [...apiBooks, ...allBooks];
      }
    } catch (e) {}
  }

  updateGenres();
  renderCatalog(allBooks);
}

function updateGenres() {
  const genres = new Set();
  allBooks.forEach(b => (b.dgarnu || []).forEach(g => genres.add(g)));

  const genreSelect = document.getElementById("genreFilter");
  if (genreSelect) {
    const current = genreSelect.value;
    genreSelect.innerHTML = '<option value="">Все жанры</option>' +
      Array.from(genres).sort().map(g => `<option value="${escapeHtml(g)}">${escapeHtml(g)}</option>`).join("");
    genreSelect.value = current;
  }
}

window.filterBooks = function() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const genre = document.getElementById("genreFilter").value;
  const type = document.getElementById("typeFilter").value;
  const minRating = parseFloat(document.getElementById("ratingFilter").value) || 0;
  const sortType = document.getElementById("priceSort").value;

  let filtered = allBooks.filter(book => {
    const matchesText = book.name.toLowerCase().includes(query) ||
      (book.aftors || []).join(" ").toLowerCase().includes(query);
    const matchesGenre = !genre || (book.dgarnu || []).includes(genre);
    const matchesType = !type || book.type === type;
    const matchesRating = (book.rating || 0) >= minRating;

    return matchesText && matchesGenre && matchesType && matchesRating;
  });

  if (sortType === "asc") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortType === "desc") {
    filtered.sort((a, b) => b.price - a.price);
  }

  renderCatalog(filtered);
};

function renderCatalog(books) {
  const grid = document.getElementById("booksGrid");
  if (!grid) return;

  if (!books.length) {
    grid.innerHTML = '<div class="empty-state">По вашему запросу книги не найдены.</div>';
    return;
  }

  grid.innerHTML = books.map(book => {
    const coverStyle = `background: linear-gradient(135deg, ${book.color || '#2563eb'}, ${book.color || '#2563eb'}dd);`;

    return `
    <div class="card">
      <div>
        <div class="book-cover" style="${coverStyle}; position: relative; padding: 15px; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center;">
          <span style="position:absolute; top:10px; right:10px; background:rgba(0,0,0,0.6); color:white; padding:2px 8px; border-radius:4px; font-size:12px; backdrop-filter: blur(4px);">${book.type || 'Книга'}</span>
          <span style="color: white; font-weight: 800; font-size: 1.1rem; line-height: 1.2; text-shadow: 0 2px 4px rgba(0,0,0,0.3);">${escapeHtml(book.name)}</span>
          <span style="color: rgba(255,255,255,0.8); font-size: 0.8rem; margin-top: 5px;">${escapeHtml((book.aftors || [])[0] || "Автор")}</span>
        </div>
        <h3 style="display: flex; justify-content: space-between; align-items: flex-start; gap: 10px;">
          <span>${escapeHtml(book.name)}</span>
          <span style="color: #f59e0b; font-size: 14px; white-space: nowrap;">★ ${book.rating || '4.5'}</span>
        </h3>
        <div class="meta">${escapeHtml((book.aftors || []).join(", ") || "Автор не указан")} • ${escapeHtml(book.data)} г.</div>
        <div class="tags">${(book.dgarnu || []).map(g => `<span class="tag">${escapeHtml(g)}</span>`).join("")}</div>
        <p class="desc">${escapeHtml(book.description)}</p>
      </div>
      <div class="card-footer">
        <span class="price">${book.price} ₽</span>
        <button type="button" class="btn-primary" onclick="openOrderModal(${book.id_books})">В корзину</button>
      </div>
    </div>
  `}).join("");
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

/* ================= АДМИН-ПАНЕЛЬ ================= */

// Слушатель горячих клавиш (изменено на Ctrl + N)
document.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.key.toLowerCase() === 'b' || e.ctrlKey && e.key.toLowerCase() === 'и') {
    e.preventDefault();
    // Открываем окно входа в админку
    const adminScreen = document.getElementById("adminScreen");
    if (adminScreen.style.display === "none") {
      document.getElementById("adminLoginModal").classList.add("open");
    }
  }
});

window.handleAdminLogin = function(e) {
  e.preventDefault();
  const login = document.getElementById("adminLogin").value.trim();
  const password = document.getElementById("adminPassword").value;

  if (login === ADMIN_LOGIN && password === ADMIN_PASSWORD) {
    closeModals();
    document.getElementById("authScreen").style.display = "none";
    document.getElementById("appScreen").style.display = "none";
    document.getElementById("adminScreen").style.display = "block";

    renderAdminBooksList();
    document.getElementById("adminLogin").value = "";
    document.getElementById("adminPassword").value = "";
    showToast("Добро пожаловать в админ-панель!");
  } else {
    showToast("Неверный логин или пароль!");
  }
};

window.logoutAdmin = function() {
  document.getElementById("adminScreen").style.display = "none";
  checkAuth();
  showToast("Вы вышли из админ-панели");
};

// Функция добавления новой книги
window.addNewBook = function(e) {
  e.preventDefault();

  const newBook = {
    id_books: Date.now(), // Уникальный ID на основе времени
    name: document.getElementById("newBookName").value.trim(),
    aftors: [document.getElementById("newBookAuthor").value.trim()],
    dgarnu: document.getElementById("newBookGenres").value.split(",").map(g => g.trim()).filter(g => g),
    data: document.getElementById("newBookYear").value,
    price: Number(document.getElementById("newBookPrice").value),
    color: "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0'), // Случайный цвет
    type: document.getElementById("newBookType").value,
    rating: Number(document.getElementById("newBookRating").value),
    description: document.getElementById("newBookDesc").value.trim()
  };

  // Получаем текущие добавленные книги из localStorage
  const customBooks = JSON.parse(localStorage.getItem("elibrary_custom_books") || "[]");
  customBooks.push(newBook);
  localStorage.setItem("elibrary_custom_books", JSON.stringify(customBooks));

  // Обновляем текущий каталог
  allBooks.push(newBook);

  // Перерисовываем список в админке и в каталоге
  renderAdminBooksList();
  updateGenres();
  filterBooks(); // Применяем текущие фильтры

  // Очищаем форму
  e.target.reset();
  showToast("Книга успешно добавлена!");
};

// Отрисовка списка книг в админке с кнопками удаления
function renderAdminBooksList() {
  const list = document.getElementById("adminBooksList");
  if (!list) return;

  // Показываем только книги, которые добавили через админку
  const customBooks = JSON.parse(localStorage.getItem("elibrary_custom_books") || "[]");

  if (!customBooks.length) {
    list.innerHTML = '<div style="color: var(--muted); text-align: center; padding: 1rem;">Вы еще не добавили ни одной книги.</div>';
    return;
  }

  list.innerHTML = customBooks.map(book => `
    <div class="admin-book-row">
      <div class="admin-book-info">
        <span class="admin-book-title">${escapeHtml(book.name)}</span>
        <span class="admin-book-meta">${escapeHtml((book.aftors || []).join(", "))} • ${book.price} ₽ • ${book.type}</span>
      </div>
      <button type="button" class="btn-danger" style="padding: 0.4rem 0.8rem; font-size: 0.8rem;" onclick="deleteBook(${book.id_books})">Удалить</button>
    </div>
  `).join("");
}

window.deleteBook = function(bookId) {
  if (!confirm("Вы уверены, что хотите удалить эту книгу?")) return;

  // Удаляем из localStorage
  let customBooks = JSON.parse(localStorage.getItem("elibrary_custom_books") || "[]");
  customBooks = customBooks.filter(b => b.id_books !== bookId);
  localStorage.setItem("elibrary_custom_books", JSON.stringify(customBooks));

  // Удаляем из текущего массива
  allBooks = allBooks.filter(b => b.id_books !== bookId);

  // Перерисовываем
  renderAdminBooksList();
  updateGenres();
  filterBooks();
  showToast("Книга удалена!");
};

/* ================= ИНИЦИАЛИЗАЦИЯ ================= */

document.addEventListener("DOMContentLoaded", () => {
  const btnReg = document.getElementById("btnShowReg");
  const btnLogin = document.getElementById("btnShowLogin");

  if (btnReg) btnReg.addEventListener("click", () => toggleAuthMode('register'));
  if (btnLogin) btnLogin.addEventListener("click", () => toggleAuthMode('login'));

  checkAuth();
});
