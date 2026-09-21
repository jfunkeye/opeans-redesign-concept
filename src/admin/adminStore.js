/**
 * Admin data store — uses localStorage for persistence.
 * Replace with real API calls when backend is ready.
 */

const KEYS = {
  AUTH: "opeans_admin_auth",
  COURSES: "opeans_admin_courses",
  CALENDAR: "opeans_admin_calendar",
  REGISTRATIONS: "opeans_admin_registrations",
  CLIENTS: "opeans_admin_clients",
  TESTIMONIALS: "opeans_admin_testimonials",
  FAQ: "opeans_admin_faq",
  MESSAGES: "opeans_admin_messages",
  SETTINGS: "opeans_admin_settings",
};

// ---------------- AUTH ----------------
// Default admin password — change this in real use
const ADMIN_PASSWORD = "opeans2026";

export function login(password) {
  if (password === ADMIN_PASSWORD) {
    localStorage.setItem(KEYS.AUTH, JSON.stringify({ loggedIn: true, at: Date.now() }));
    return true;
  }
  return false;
}

export function logout() {
  localStorage.removeItem(KEYS.AUTH);
}

export function isLoggedIn() {
  try {
    const raw = localStorage.getItem(KEYS.AUTH);
    if (!raw) return false;
    const { loggedIn, at } = JSON.parse(raw);
    // Session expires after 8 hours
    const expiresIn = 8 * 60 * 60 * 1000;
    return loggedIn && Date.now() - at < expiresIn;
  } catch {
    return false;
  }
}

// ---------------- Generic helpers ----------------
function read(key, fallback = []) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function write(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

// ---------------- Courses ----------------
export function getCourses() {
  return read(KEYS.COURSES, []);
}

export function saveCourses(courses) {
  write(KEYS.COURSES, courses);
}

export function addCourse(course) {
  const list = getCourses();
  list.push({ ...course, id: crypto.randomUUID(), createdAt: Date.now() });
  saveCourses(list);
}

export function updateCourse(id, updates) {
  const list = getCourses().map((c) => (c.id === id ? { ...c, ...updates } : c));
  saveCourses(list);
}

export function deleteCourse(id) {
  saveCourses(getCourses().filter((c) => c.id !== id));
}

// ---------------- Calendar ----------------
export function getCalendar() {
  return read(KEYS.CALENDAR, []);
}

export function saveCalendar(entries) {
  write(KEYS.CALENDAR, entries);
}

export function addCalendarEntry(entry) {
  const list = getCalendar();
  list.push({ ...entry, id: crypto.randomUUID() });
  saveCalendar(list);
}

export function deleteCalendarEntry(id) {
  saveCalendar(getCalendar().filter((e) => e.id !== id));
}

// ---------------- Registrations ----------------
export function getRegistrations() {
  return read(KEYS.REGISTRATIONS, []);
}

export function saveRegistrations(list) {
  write(KEYS.REGISTRATIONS, list);
}

export function addRegistration(reg) {
  const list = getRegistrations();
  list.unshift({
    ...reg,
    id: crypto.randomUUID(),
    status: "pending",
    createdAt: Date.now(),
  });
  saveRegistrations(list);
}

export function updateRegistrationStatus(id, status) {
  saveRegistrations(
    getRegistrations().map((r) => (r.id === id ? { ...r, status } : r))
  );
}

// ---------------- Clients ----------------
export function getClients() {
  return read(KEYS.CLIENTS, []);
}

export function saveClients(clients) {
  write(KEYS.CLIENTS, clients);
}

export function addClient(client) {
  const list = getClients();
  list.push({ ...client, id: crypto.randomUUID() });
  saveClients(list);
}

export function deleteClient(id) {
  saveClients(getClients().filter((c) => c.id !== id));
}

// ---------------- Testimonials ----------------
export function getTestimonials() {
  return read(KEYS.TESTIMONIALS, []);
}

export function saveTestimonials(list) {
  write(KEYS.TESTIMONIALS, list);
}

export function addTestimonial(t) {
  const list = getTestimonials();
  list.push({ ...t, id: crypto.randomUUID(), published: false });
  saveTestimonials(list);
}

export function toggleTestimonialPublished(id) {
  saveTestimonials(
    getTestimonials().map((t) =>
      t.id === id ? { ...t, published: !t.published } : t
    )
  );
}

export function deleteTestimonial(id) {
  saveTestimonials(getTestimonials().filter((t) => t.id !== id));
}

// ---------------- FAQ ----------------
export function getFAQ() {
  return read(KEYS.FAQ, []);
}

export function saveFAQ(list) {
  write(KEYS.FAQ, list);
}

export function addFAQ(item) {
  const list = getFAQ();
  list.push({ ...item, id: crypto.randomUUID() });
  saveFAQ(list);
}

export function deleteFAQ(id) {
  saveFAQ(getFAQ().filter((f) => f.id !== id));
}

// ---------------- Messages ----------------
export function getMessages() {
  return read(KEYS.MESSAGES, []);
}

export function saveMessages(list) {
  write(KEYS.MESSAGES, list);
}

export function addMessage(msg) {
  const list = getMessages();
  list.unshift({
    ...msg,
    id: crypto.randomUUID(),
    read: false,
    createdAt: Date.now(),
  });
  saveMessages(list);
}

export function markMessageRead(id) {
  saveMessages(getMessages().map((m) => (m.id === id ? { ...m, read: true } : m)));
}

export function deleteMessage(id) {
  saveMessages(getMessages().filter((m) => m.id !== id));
}

// ---------------- Settings ----------------
const DEFAULT_SETTINGS = {
  phone: "+234 803 312 3456",
  email: "info@opeansafety.com",
  address: "32 Jessy & Jenny Road, off Odidli Road, Trans-Amadi Industrial Layout, P.O. Box 2243, Port Harcourt, Rivers State",
  website: "www.opeansafety.com",
  officeHours: "Mon – Fri: 8:00 AM – 5:00 PM",
};

export function getSettings() {
  return read(KEYS.SETTINGS, DEFAULT_SETTINGS);
}

export function saveSettings(settings) {
  write(KEYS.SETTINGS, settings);
}