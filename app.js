const weekdayElement = document.querySelector("#weekday");
const dateElement = document.querySelector("#dateLine");
const clockElement = document.querySelector("#clock");
const calendarWeekElement = document.querySelector("#calendarWeek");
const menuButton = document.querySelector(".menu-button");
const menuPanel = document.querySelector("#mainMenu");
const elapsedTimeElement = document.querySelector("#elapsedTime");
const startButton = document.querySelector(".start-button");
const timerScreen = document.querySelector(".timer-screen");
const timerStateElement = document.querySelector("#timerState");
const completionPanel = document.querySelector("#completionPanel");
const noteInput = document.querySelector("#note");
const activityInput = document.querySelector("#activity");
const categorySelect = document.querySelector("#category");
const saveButton = document.querySelector(".save-button");
const discardButton = document.querySelector(".discard-button");
const timerMessage = document.querySelector("#timerMessage");
const syncStatusMessage = document.querySelector("#syncStatusMessage");
const historyEmpty = document.querySelector("#historyEmpty");
const historyList = document.querySelector("#historyList");
const timerView = document.querySelector("#timerView");
const historyView = document.querySelector("#historyView");
const manualView = document.querySelector("#manualView");
const analyticsView = document.querySelector("#analyticsView");
const exportView = document.querySelector("#exportView");
const settingsView = document.querySelector("#settingsView");
const weekplanView = document.querySelector("#weekplanView");
const historyLink = document.querySelector('[data-view-link="history"]');
const manualLink = document.querySelector('[data-view-link="manual"]');
const analyticsLink = document.querySelector('[data-view-link="analytics"]');
const weekplanLink = document.querySelector('[data-view-link="weekplan"]');
const exportLink = document.querySelector('[data-view-link="export"]');
const settingsLink = document.querySelector('[data-view-link="settings"]');
const backButton = document.querySelector(".back-button");
const manualForm = document.querySelector("#manualForm");
const manualMessage = document.querySelector("#manualMessage");
const activitySuggestions = document.querySelector("#activitySuggestions");
const storageMessage = document.querySelector("#storageMessage");
const weeklyTotalElement = document.querySelector("#weeklyTotal");
const dailyAverageElement = document.querySelector("#dailyAverage");
const analyticsEmpty = document.querySelector("#analyticsEmpty");
const categoryBars = document.querySelector("#categoryBars");
const weekdayBars = document.querySelector("#weekdayBars");
const weekplanHours = document.querySelector("#weekplanHours");
const weekplanDays = document.querySelector("#weekplanDays");
const calendarViewModeSelect = document.querySelector("#calendarViewMode");
const calendarPrevButton = document.querySelector("#calendarPrevButton");
const calendarTodayButton = document.querySelector("#calendarTodayButton");
const calendarNextButton = document.querySelector("#calendarNextButton");
const calendarPeriodLabel = document.querySelector("#calendarPeriodLabel");
const exportSummary = document.querySelector("#exportSummary");
const exportScopeSelect = document.querySelector("#exportScopeSelect");
const exportCsvButton = document.querySelector("#exportCsvButton");
const exportMessage = document.querySelector("#exportMessage");
const reminderPanel = document.querySelector("#reminderPanel");
const reminderMessage = document.querySelector("#reminderMessage");
const notificationPermissionButton = document.querySelector("#notificationPermissionButton");
const testReminderNowButton = document.querySelector("#testReminderNowButton");
const testReminderUnderButton = document.querySelector("#testReminderUnderButton");
const testReminderFullButton = document.querySelector("#testReminderFullButton");
const scheduleReminderTestButton = document.querySelector("#scheduleReminderTestButton");
const reminderTestOutput = document.querySelector("#reminderTestOutput");
const reminderPopup = document.querySelector("#reminderPopup");
const reminderPopupMessage = document.querySelector("#reminderPopupMessage");
const reminderPopupClose = document.querySelector("#reminderPopupClose");
const reminderPopupManual = document.querySelector("#reminderPopupManual");
const reminderTestPanel = document.querySelector(".reminder-test-panel");
const developerModeToggle = document.querySelector("#developerModeToggle");
const activeUserSelect = document.querySelector("#activeUserSelect");
const userSettingsForm = document.querySelector("#userSettingsForm");
const userProfileMessage = document.querySelector("#userProfileMessage");
const userNameInputs = [
  document.querySelector("#userName1"),
  document.querySelector("#userName2"),
  document.querySelector("#userName3"),
];
const categorySettingsForm = document.querySelector("#categorySettingsForm");
const categorySettingsList = document.querySelector("#categorySettingsList");
const categorySettingsMessage = document.querySelector("#categorySettingsMessage");
const newCategoryNameInput = document.querySelector("#newCategoryName");
const cloudStorageStatus = document.querySelector("#cloudStorageStatus");
const cloudStorageDetail = document.querySelector("#cloudStorageDetail");
const cloudStorageMessage = document.querySelector("#cloudStorageMessage");
const cloudBackupButton = document.querySelector("#cloudBackupButton");
const cloudImportButton = document.querySelector("#cloudImportButton");
const cloudConflictPanel = document.querySelector("#cloudConflictPanel");
const settingsMessage = document.querySelector("#settingsMessage");
const deleteAllDataButton = document.querySelector("#deleteAllDataButton");
const csvImportInput = document.querySelector("#csvImportInput");
const reminderSettingsForm = document.querySelector("#reminderSettingsForm");
const remindersEnabledInput = document.querySelector("#remindersEnabled");
const reminderTextSettingInput = document.querySelector("#reminderTextSetting");
const reminderTimeInputs = [
  document.querySelector("#reminderTime1"),
  document.querySelector("#reminderTime2"),
  document.querySelector("#reminderTime3"),
];
const targetWorkHoursInput = document.querySelector("#targetWorkHours");
const restoreReminderDefaultsButton = document.querySelector("#restoreReminderDefaultsButton");

const STORAGE_KEY = "timekeeper.entries.v1";
const ACTIVE_TIMER_KEY = "timekeeper.activeTimer.v1";
const REMINDER_FIRED_KEY = "timekeeper.reminders.fired.v1";
const NOTIFICATION_PERMISSION_KEY = "timekeeper.notifications.permission.v1";
const DEVELOPER_MODE_KEY = "timekeeper.developerMode.v1";
const ACTIVE_USER_KEY = "timekeeper.activeUser.v1";
const USERS_KEY = "timekeeper.users.v1";
const CATEGORIES_KEY = "timekeeper.categories.v1";
const REMINDER_SETTINGS_KEY = "timekeeper.reminderSettings.v1";
const CALENDAR_VIEW_MODE_KEY = "timekeeper.calendar.viewMode.v1";
const CALENDAR_SELECTED_DATE_KEY = "timekeeper.calendar.selectedDate.v1";
const SUPABASE_TABLE_NAME = "time_entries";
const SUPABASE_USERS_TABLE_NAME = "users";
const SUPABASE_CATEGORIES_TABLE_NAME = "categories";
const SUPABASE_TIME_ENTRY_COLUMNS = [
  "id",
  "user_id",
  "activity",
  "category",
  "started_at",
  "ended_at",
  "date",
  "start_time",
  "end_time",
  "duration_minutes",
  "note",
  "edited",
  "manual",
  "uploaded",
  "created_at",
  "updated_at",
];
const SUPABASE_USER_COLUMNS = ["id", "name", "created_at", "updated_at"];
const SUPABASE_CATEGORY_COLUMNS = ["id", "user_id", "name", "sort_order", "created_at", "updated_at"];
const DEFAULT_REMINDER_SETTINGS = {
  enabled: true,
  text: "Was hast du mit deiner Zeit gemacht?",
  times: ["17:30", "19:30", "23:00"],
  targetWorkHours: 8,
};
const DEFAULT_USERS = [
  { id: "user_1", name: "Nutzer 1" },
  { id: "user_2", name: "Nutzer 2" },
  { id: "user_3", name: "Nutzer 3" },
];
const DEFAULT_CATEGORY_NAMES = [
  "Organisation",
  "Meetings",
  "Marketing Zentral",
  "Filialmarketing",
  "Eventplanung",
  "Administration",
  "Netzwerk",
  "Fläche",
  "Sonstiges",
];
const CALENDAR_VIEW_MODES = {
  day: 1,
  "3days": 3,
  "5days": 5,
  "7days": 7,
  month: 0,
};
let calendarViewMode = "7days";
let calendarSelectedDate = new Date();
let supabaseClient = null;
let timerStartedAt = null;
let timerStartedDate = null;
let timerStoppedDate = null;
let timerInterval = null;
let lastElapsedMilliseconds = 0;
let activeActivity = "";
let activeCategory = "";
let cloudImportConflicts = [];
let activeUserId = DEFAULT_USERS[0].id;
let users = DEFAULT_USERS.map((user) => ({ ...user }));
let categories = [];
const timeEntries = [];
const CATEGORY_COLORS = {
  Organisation: "#21675b",
  Meetings: "#4f6f9f",
  "Marketing Zentral": "#a45b7b",
  Filialmarketing: "#d08a3c",
  Eventplanung: "#6d5fa8",
  Administration: "#59706f",
  Netzwerk: "#4c8a6a",
  Fläche: "#8f6b3d",
  Sonstiges: "#6b7280",
};

function isValidReminderTime(value) {
  return /^\d{2}:\d{2}$/.test(value);
}

function normalizeReminderSettings(settings = {}) {
  const reminderTimes = Array.isArray(settings.times)
    ? settings.times
        .map((time) => String(time || "").trim())
        .filter(isValidReminderTime)
        .slice(0, 3)
    : [];
  const targetWorkHours = Number(settings.targetWorkHours);

  return {
    enabled: typeof settings.enabled === "boolean" ? settings.enabled : DEFAULT_REMINDER_SETTINGS.enabled,
    text: String(settings.text || DEFAULT_REMINDER_SETTINGS.text).trim() || DEFAULT_REMINDER_SETTINGS.text,
    times: [...reminderTimes, ...DEFAULT_REMINDER_SETTINGS.times].slice(0, 3),
    targetWorkHours:
      Number.isFinite(targetWorkHours) && targetWorkHours > 0
        ? Math.min(targetWorkHours, 24)
        : DEFAULT_REMINDER_SETTINGS.targetWorkHours,
  };
}

function getReminderSettings() {
  try {
    const storedSettings = localStorage.getItem(REMINDER_SETTINGS_KEY);

    if (!storedSettings) {
      return normalizeReminderSettings(DEFAULT_REMINDER_SETTINGS);
    }

    return normalizeReminderSettings(JSON.parse(storedSettings));
  } catch (error) {
    return normalizeReminderSettings(DEFAULT_REMINDER_SETTINGS);
  }
}

function getTargetWorkMinutes() {
  return getReminderSettings().targetWorkHours * 60;
}

function saveReminderSettings(settings) {
  const nextSettings = normalizeReminderSettings(settings);

  try {
    localStorage.setItem(REMINDER_SETTINGS_KEY, JSON.stringify(nextSettings));
    clearStorageError();
    return nextSettings;
  } catch (error) {
    showStorageError("Erinnerungseinstellungen konnten nicht gespeichert werden.");
    return nextSettings;
  }
}

function getValidUserId(userId) {
  return DEFAULT_USERS.some((user) => user.id === userId) ? userId : DEFAULT_USERS[0].id;
}

function normalizeUsers(savedUsers = []) {
  const savedUserMap = new Map(
    (Array.isArray(savedUsers) ? savedUsers : [])
      .filter((user) => user && getValidUserId(user.id) === user.id)
      .map((user) => [user.id, String(user.name || "").trim()]),
  );

  return DEFAULT_USERS.map((defaultUser) => ({
    id: defaultUser.id,
    name: savedUserMap.get(defaultUser.id) || defaultUser.name,
  }));
}

function getUserName(userId) {
  const validUserId = getValidUserId(userId);
  return users.find((user) => user.id === validUserId)?.name || DEFAULT_USERS[0].name;
}

function loadUserProfiles() {
  try {
    users = normalizeUsers(JSON.parse(localStorage.getItem(USERS_KEY) || "[]"));
    activeUserId = getValidUserId(localStorage.getItem(ACTIVE_USER_KEY));
  } catch (error) {
    users = normalizeUsers();
    activeUserId = DEFAULT_USERS[0].id;
  }
}

function saveUserProfiles() {
  try {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
    localStorage.setItem(ACTIVE_USER_KEY, activeUserId);
    return true;
  } catch (error) {
    return false;
  }
}

function showUserProfileMessage(message, type = "info") {
  userProfileMessage.textContent = message;
  userProfileMessage.dataset.type = type;
  userProfileMessage.hidden = false;
}

function clearUserProfileMessage() {
  userProfileMessage.textContent = "";
  userProfileMessage.removeAttribute("data-type");
  userProfileMessage.hidden = true;
}

function renderUserProfileSettings() {
  const canEditUserNames = isDeveloperModeEnabled();
  activeUserSelect.innerHTML = "";

  users.forEach((user) => {
    const option = document.createElement("option");
    option.value = user.id;
    option.textContent = user.name;
    activeUserSelect.append(option);
  });

  activeUserSelect.value = activeUserId;
  userSettingsForm.hidden = !canEditUserNames;
  userNameInputs.forEach((input, index) => {
    input.value = users[index]?.name || DEFAULT_USERS[index].name;
    input.disabled = !canEditUserNames;
  });
}

function saveActiveUserFromSettings() {
  activeUserId = getValidUserId(activeUserSelect.value);

  if (!saveUserProfiles()) {
    showUserProfileMessage("Nutzerprofil konnte nicht gespeichert werden. Bitte Browser-Speicher prüfen.", "error");
    return;
  }

  renderUserProfileSettings();
  renderCategorySettings();
  showUserProfileMessage(`${getUserName(activeUserId)} ist jetzt aktiv.`, "success");
  refreshEntryViews();
}

function saveUserNamesFromSettings() {
  if (!isDeveloperModeEnabled()) {
    renderUserProfileSettings();
    clearUserProfileMessage();
    return;
  }

  users = DEFAULT_USERS.map((defaultUser, index) => ({
    id: defaultUser.id,
    name: userNameInputs[index].value.trim() || defaultUser.name,
  }));

  if (!saveUserProfiles()) {
    showUserProfileMessage("Nutzernamen konnten nicht gespeichert werden. Bitte Browser-Speicher prüfen.", "error");
    return;
  }

  Array.from(activeUserSelect.options).forEach((option) => {
    option.textContent = getUserName(option.value);
  });
  activeUserSelect.value = activeUserId;
  refreshEntryViews();
  showUserProfileMessage("Nutzerprofile wurden gespeichert.", "success");
}

function createCategoryId(userId, name) {
  const slug = String(name || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "")
    .slice(0, 48);

  return `${getValidUserId(userId)}_${slug || Date.now()}`;
}

function createDefaultCategoriesForUser(userId) {
  return DEFAULT_CATEGORY_NAMES.map((name, index) => ({
    id: createCategoryId(userId, name),
    user_id: getValidUserId(userId),
    name,
    sort_order: index,
  }));
}

function normalizeCategory(category, index = 0) {
  const userId = getValidUserId(category?.user_id);
  const name = String(category?.name || "").trim();

  if (!name) {
    return null;
  }

  return {
    id: String(category?.id || createCategoryId(userId, name)),
    user_id: userId,
    name,
    sort_order: Number.isFinite(Number(category?.sort_order)) ? Number(category.sort_order) : index,
  };
}

function ensureDefaultCategoriesForAllUsers(nextCategories) {
  const normalized = nextCategories.map(normalizeCategory).filter(Boolean);

  DEFAULT_USERS.forEach((user) => {
    if (!normalized.some((category) => category.user_id === user.id)) {
      normalized.push(...createDefaultCategoriesForUser(user.id));
    }
  });

  return normalized;
}

function loadCategories() {
  try {
    categories = ensureDefaultCategoriesForAllUsers(JSON.parse(localStorage.getItem(CATEGORIES_KEY) || "[]"));
  } catch (error) {
    categories = ensureDefaultCategoriesForAllUsers([]);
  }
  saveCategories();
}

function saveCategories() {
  try {
    localStorage.setItem(CATEGORIES_KEY, JSON.stringify(categories));
    return true;
  } catch (error) {
    showStorageError("Kategorien konnten nicht gespeichert werden. Bitte Browser-Speicher prüfen.");
    return false;
  }
}

function getCategoriesForUser(userId = activeUserId) {
  const validUserId = getValidUserId(userId);
  const userCategories = categories
    .filter((category) => category.user_id === validUserId)
    .sort((a, b) => a.sort_order - b.sort_order || a.name.localeCompare(b.name, "de"));

  if (userCategories.length) {
    return userCategories;
  }

  const defaults = createDefaultCategoriesForUser(validUserId);
  categories.push(...defaults);
  saveCategories();
  return defaults;
}

function getCategoryNamesForActiveUser() {
  return getCategoriesForUser(activeUserId).map((category) => category.name);
}

function getCategoryNamesForActiveUserWithCurrent(currentCategory = "") {
  const names = getCategoryNamesForActiveUser();

  if (currentCategory && !names.includes(currentCategory)) {
    return [currentCategory, ...names];
  }

  return names;
}

function renderCategorySelect(select, selectedValue = "") {
  select.innerHTML = "";

  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.textContent = "Kategorie auswählen";
  select.append(placeholder);

  getCategoriesForUser(activeUserId).forEach((category) => {
    const option = document.createElement("option");
    option.value = category.name;
    option.textContent = category.name;
    select.append(option);
  });

  select.value = selectedValue;
}

function renderCategoryDropdowns() {
  renderCategorySelect(categorySelect, categorySelect.value);
  renderCategorySelect(manualForm.elements.category, manualForm.elements.category.value);
}

function showCategorySettingsMessage(message, type = "info") {
  categorySettingsMessage.textContent = message;
  categorySettingsMessage.dataset.type = type;
  categorySettingsMessage.hidden = false;
}

function clearCategorySettingsMessage() {
  categorySettingsMessage.textContent = "";
  categorySettingsMessage.removeAttribute("data-type");
  categorySettingsMessage.hidden = true;
}

function renderCategorySettings() {
  const userCategories = getCategoriesForUser(activeUserId);
  categorySettingsList.innerHTML = "";

  userCategories.forEach((category, index) => {
    const item = document.createElement("li");
    item.className = "category-settings-item";
    item.dataset.categoryId = category.id;
    item.innerHTML = `
      <span>${escapeHtml(category.name)}</span>
      <div class="category-settings-actions">
        <button class="settings-secondary-button" type="button" data-category-action="up" ${index === 0 ? "disabled" : ""}>Hoch</button>
        <button class="settings-secondary-button" type="button" data-category-action="down" ${index === userCategories.length - 1 ? "disabled" : ""}>Runter</button>
        <button class="settings-secondary-button" type="button" data-category-action="rename">Umbenennen</button>
        <button class="settings-danger-button" type="button" data-category-action="delete">Löschen</button>
      </div>
    `;
    categorySettingsList.append(item);
  });

  renderCategoryDropdowns();
}

function refreshCategoryViews() {
  renderCategorySettings();
  renderAnalytics();
  renderWeekplan();
}

function addCategory(event) {
  event.preventDefault();
  const name = newCategoryNameInput.value.trim();

  if (!name) {
    showCategorySettingsMessage("Bitte einen Kategorienamen eingeben.", "error");
    return;
  }

  if (getCategoryNamesForActiveUser().some((categoryName) => categoryName.toLowerCase() === name.toLowerCase())) {
    showCategorySettingsMessage("Diese Kategorie gibt es bereits.", "error");
    return;
  }

  const userCategories = getCategoriesForUser(activeUserId);
  categories.push({
    id: createCategoryId(activeUserId, name),
    user_id: activeUserId,
    name,
    sort_order: userCategories.length,
  });

  if (!saveCategories()) {
    showCategorySettingsMessage("Kategorie konnte nicht gespeichert werden.", "error");
    return;
  }

  newCategoryNameInput.value = "";
  refreshCategoryViews();
  showCategorySettingsMessage("Kategorie wurde hinzugefügt.", "success");
}

function updateEntriesForRenamedCategory(oldName, newName) {
  const shouldUpdateEntries = window.confirm("Bestehende Einträge mit dieser Kategorie ebenfalls umbenennen?");

  if (!shouldUpdateEntries) {
    return true;
  }

  const nextEntries = timeEntries.map((entry) =>
    getValidUserId(entry.user_id) === activeUserId && entry.category === oldName
      ? { ...entry, category: newName, edited: true, updated_at: getNowIsoString() }
      : entry,
  );

  if (!persistEntries(nextEntries)) {
    return false;
  }

  timeEntries.splice(0, timeEntries.length, ...nextEntries);
  return true;
}

function renameCategory(category) {
  const nextName = window.prompt("Neuer Kategoriename", category.name)?.trim();

  if (!nextName || nextName === category.name) {
    return;
  }

  if (getCategoryNamesForActiveUser().some((categoryName) => categoryName.toLowerCase() === nextName.toLowerCase())) {
    showCategorySettingsMessage("Diese Kategorie gibt es bereits.", "error");
    return;
  }

  const oldName = category.name;
  category.name = nextName;

  if (!updateEntriesForRenamedCategory(oldName, nextName)) {
    category.name = oldName;
    showCategorySettingsMessage("Einträge konnten nicht aktualisiert werden.", "error");
    return;
  }

  if (!saveCategories()) {
    category.name = oldName;
    showCategorySettingsMessage("Kategorie konnte nicht gespeichert werden.", "error");
    return;
  }

  refreshEntryViews();
  refreshCategoryViews();
  showCategorySettingsMessage("Kategorie wurde umbenannt.", "success");
}

function deleteCategory(category) {
  const usedEntries = timeEntries.filter(
    (entry) => getValidUserId(entry.user_id) === activeUserId && entry.category === category.name,
  );

  if (usedEntries.length) {
    const choice = window.prompt(
      `Diese Kategorie wird in ${usedEntries.length} Einträgen verwendet.\n1 = Kategorie löschen und alte Einträge behalten\n2 = Einträge auf andere Kategorie umstellen\n3 = Abbrechen`,
      "3",
    );

    if (choice === "2") {
      const replacement = window.prompt(
        `Neue Kategorie für bestehende Einträge:\n${getCategoryNamesForActiveUser()
          .filter((name) => name !== category.name)
          .join(", ")}`,
      )?.trim();

      if (!replacement) {
        return;
      }

      if (!getCategoryNamesForActiveUser().some((name) => name === replacement && name !== category.name)) {
        showCategorySettingsMessage("Bitte eine bestehende andere Kategorie eingeben.", "error");
        return;
      }

      const nextEntries = timeEntries.map((entry) =>
        getValidUserId(entry.user_id) === activeUserId && entry.category === category.name
          ? { ...entry, category: replacement, edited: true, updated_at: getNowIsoString() }
          : entry,
      );

      if (!persistEntries(nextEntries)) {
        showCategorySettingsMessage("Einträge konnten nicht aktualisiert werden.", "error");
        return;
      }

      timeEntries.splice(0, timeEntries.length, ...nextEntries);
    } else if (choice !== "1") {
      return;
    }
  } else if (!window.confirm("Kategorie wirklich löschen?")) {
    return;
  }

  categories = categories.filter((item) => item.id !== category.id);
  normalizeCategorySortOrders(activeUserId);

  if (!saveCategories()) {
    showCategorySettingsMessage("Kategorie konnte nicht gelöscht werden.", "error");
    return;
  }

  refreshEntryViews();
  refreshCategoryViews();
  showCategorySettingsMessage("Kategorie wurde gelöscht.", "success");
}

function normalizeCategorySortOrders(userId = activeUserId) {
  getCategoriesForUser(userId).forEach((category, index) => {
    category.sort_order = index;
  });
}

function moveCategory(category, direction) {
  const userCategories = getCategoriesForUser(activeUserId);
  const index = userCategories.findIndex((item) => item.id === category.id);
  const swapIndex = direction === "up" ? index - 1 : index + 1;

  if (index < 0 || swapIndex < 0 || swapIndex >= userCategories.length) {
    return;
  }

  const currentOrder = userCategories[index].sort_order;
  userCategories[index].sort_order = userCategories[swapIndex].sort_order;
  userCategories[swapIndex].sort_order = currentOrder;
  normalizeCategorySortOrders(activeUserId);

  if (!saveCategories()) {
    showCategorySettingsMessage("Reihenfolge konnte nicht gespeichert werden.", "error");
    return;
  }

  refreshCategoryViews();
  showCategorySettingsMessage("Reihenfolge wurde gespeichert.", "success");
}

function handleCategorySettingsAction(event) {
  const actionButton = event.target.closest("button[data-category-action]");

  if (!actionButton) {
    return;
  }

  const categoryId = actionButton.closest("[data-category-id]")?.dataset.categoryId;
  const category = categories.find((item) => item.id === categoryId && item.user_id === activeUserId);

  if (!category) {
    return;
  }

  const action = actionButton.dataset.categoryAction;

  if (action === "rename") {
    renameCategory(category);
  }

  if (action === "delete") {
    deleteCategory(category);
  }

  if (action === "up" || action === "down") {
    moveCategory(category, action);
  }
}

function getSupabaseConfig() {
  const config = globalThis.TIMEKEEPER_SUPABASE_CONFIG || {};

  return {
    url: String(config.SUPABASE_URL || "").trim(),
    anonKey: String(config.SUPABASE_ANON_KEY || "").trim(),
  };
}

function isSupabaseConfigured() {
  const config = getSupabaseConfig();

  return Boolean(config.url && config.anonKey);
}

function initializeSupabaseClient() {
  if (!isSupabaseConfigured()) {
    supabaseClient = null;
    return null;
  }

  if (!globalThis.supabase?.createClient) {
    supabaseClient = null;
    return null;
  }

  const config = getSupabaseConfig();

  try {
    supabaseClient = globalThis.supabase.createClient(config.url, config.anonKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    });
    return supabaseClient;
  } catch (error) {
    supabaseClient = null;
    return null;
  }
}

function getSupabaseStatus() {
  if (!isSupabaseConfigured()) {
    return {
      connected: false,
      message: "Cloudspeicherung nicht verbunden",
      detail: "SUPABASE_URL und SUPABASE_ANON_KEY sind noch nicht konfiguriert.",
    };
  }

  if (!supabaseClient) {
    return {
      connected: false,
      message: "Cloudspeicherung nicht verbunden",
      detail: "Supabase ist konfiguriert, aber der Client konnte nicht erstellt werden.",
    };
  }

  return {
    connected: true,
    message: "Cloudspeicherung verbunden",
    detail: `Tabelle vorbereitet: ${SUPABASE_TABLE_NAME}`,
  };
}

function renderSupabaseStatus() {
  const status = getSupabaseStatus();
  cloudStorageStatus.textContent = status.message;
  cloudStorageStatus.dataset.status = status.connected ? "connected" : "disconnected";
  cloudStorageDetail.textContent = status.detail;
  cloudBackupButton.disabled = !status.connected;
  cloudImportButton.disabled = !status.connected;
}

function toSupabaseTimeValue(date) {
  return date.toTimeString().slice(0, 8);
}

function createSupabaseTimeEntryRecord(entry) {
  const now = new Date().toISOString();
  const userId = getValidUserId(entry.user_id);
  const updatedAt = entry.updated_at || entry.updatedAt || now;
  const createdAt = entry.created_at || entry.createdAt || updatedAt;

  return {
    id: entry.id,
    user_id: userId,
    activity: entry.activity,
    category: entry.category,
    started_at: entry.startedAt.toISOString(),
    ended_at: entry.endedAt.toISOString(),
    date: toDateInputValue(entry.startedAt),
    start_time: toSupabaseTimeValue(entry.startedAt),
    end_time: toSupabaseTimeValue(entry.endedAt),
    duration_minutes: Math.max(0, Math.round((entry.endedAt.getTime() - entry.startedAt.getTime()) / 60000)),
    note: entry.note || "",
    edited: Boolean(entry.edited),
    manual: Boolean(entry.manual),
    uploaded: Boolean(entry.uploaded),
    created_at: createdAt instanceof Date ? createdAt.toISOString() : createdAt,
    updated_at: updatedAt instanceof Date ? updatedAt.toISOString() : updatedAt,
  };
}

function createSupabaseUserRecord(user) {
  const now = new Date().toISOString();

  return {
    id: getValidUserId(user.id),
    name: String(user.name || getUserName(user.id)).trim() || getUserName(user.id),
    created_at: now,
    updated_at: now,
  };
}

function createSupabaseCategoryRecord(category) {
  const now = new Date().toISOString();

  return {
    id: category.id,
    user_id: getValidUserId(category.user_id),
    name: category.name,
    sort_order: Number(category.sort_order) || 0,
    created_at: now,
    updated_at: now,
  };
}

function ensureLocalTimeEntriesHaveUserIds() {
  let changed = false;

  timeEntries.forEach((entry) => {
    if (!entry.user_id) {
      entry.user_id = DEFAULT_USERS[0].id;
      changed = true;
      return;
    }

    const validUserId = getValidUserId(entry.user_id);
    if (validUserId !== entry.user_id) {
      entry.user_id = validUserId;
      changed = true;
    }
  });

  if (changed) {
    persistEntries(timeEntries);
  }
}

function showCloudStorageMessage(message, type = "info") {
  cloudStorageMessage.textContent = message;
  cloudStorageMessage.dataset.type = type;
  cloudStorageMessage.hidden = false;
}

function clearCloudStorageMessage() {
  cloudStorageMessage.textContent = "";
  cloudStorageMessage.removeAttribute("data-type");
  cloudStorageMessage.hidden = true;
}

function clearCloudConflictPanel() {
  cloudImportConflicts = [];
  cloudConflictPanel.innerHTML = "";
  cloudConflictPanel.hidden = true;
}

function getSupabaseErrorMessage(error) {
  if (!error) {
    return "Supabase-Fehler: Die Daten konnten nicht verarbeitet werden.";
  }

  return [
    "Supabase-Fehler:",
    error.message,
    error.details,
    error.hint,
    error.code,
  ]
    .filter(Boolean)
    .join(" ");
}

function isMissingSupabaseUserIdColumnError(error) {
  const message = `${error?.message || ""} ${error?.details || ""}`.toLowerCase();
  return message.includes("user_id") && (message.includes("column") || message.includes("schema"));
}

function isMissingSupabaseColumnError(error) {
  const message = `${error?.message || ""} ${error?.details || ""}`.toLowerCase();
  return message.includes("column") || message.includes("schema cache") || message.includes("schema");
}

function removeOptionalSupabaseTimeEntryColumns(records) {
  return records.map(({ date, start_time: startTime, end_time: endTime, ...record }) => record);
}

function keepRequestedSupabaseTimeEntryColumns(records) {
  return records.map((record) => ({
    id: record.id,
    user_id: record.user_id,
    date: record.date,
    start_time: record.start_time,
    end_time: record.end_time,
    duration_minutes: record.duration_minutes,
    category: record.category,
    note: record.note,
    created_at: record.created_at,
    updated_at: record.updated_at,
  }));
}

async function upsertSupabaseTimeEntryRecords(records) {
  const result = await supabaseClient
    .from(SUPABASE_TABLE_NAME)
    .upsert(records, { onConflict: "id" });

  if (result.error && isMissingSupabaseColumnError(result.error) && !isMissingSupabaseUserIdColumnError(result.error)) {
    const requestedStructureResult = await supabaseClient
      .from(SUPABASE_TABLE_NAME)
      .upsert(keepRequestedSupabaseTimeEntryColumns(records), { onConflict: "id" });

    if (!requestedStructureResult.error) {
      return requestedStructureResult;
    }

    if (isMissingSupabaseColumnError(requestedStructureResult.error)) {
      return supabaseClient
        .from(SUPABASE_TABLE_NAME)
        .upsert(removeOptionalSupabaseTimeEntryColumns(records), { onConflict: "id" });
    }

    return requestedStructureResult;
  }

  return result;
}

async function upsertSupabaseUserProfiles() {
  return supabaseClient
    .from(SUPABASE_USERS_TABLE_NAME)
    .upsert(users.map(createSupabaseUserRecord), { onConflict: "id" });
}

async function upsertSupabaseCategories() {
  return supabaseClient
    .from(SUPABASE_CATEGORIES_TABLE_NAME)
    .upsert(categories.map(createSupabaseCategoryRecord), { onConflict: "id" });
}

async function loadSupabaseUserProfiles() {
  const { data, error } = await supabaseClient
    .from(SUPABASE_USERS_TABLE_NAME)
    .select(SUPABASE_USER_COLUMNS.join(","));

  if (error) {
    return { error, updated: false };
  }

  const cloudUserMap = new Map(
    (data || [])
      .filter((user) => user && getValidUserId(user.id) === user.id)
      .map((user) => [user.id, String(user.name || "").trim()]),
  );

  if (!cloudUserMap.size) {
    return { error: null, updated: false };
  }

  const nextUsers = DEFAULT_USERS.map((defaultUser) => ({
    id: defaultUser.id,
    name: cloudUserMap.get(defaultUser.id) || getUserName(defaultUser.id),
  }));
  const changed = nextUsers.some((user) => user.name !== getUserName(user.id));

  if (changed) {
    users = nextUsers;
    saveUserProfiles();
    renderUserProfileSettings();
    renderHistory();
  }

  return { error: null, updated: changed };
}

async function loadSupabaseCategories() {
  const { data, error } = await supabaseClient
    .from(SUPABASE_CATEGORIES_TABLE_NAME)
    .select(SUPABASE_CATEGORY_COLUMNS.join(","));

  if (error) {
    return { error, updated: false };
  }

  const cloudCategories = (data || []).map(normalizeCategory).filter(Boolean);

  if (!cloudCategories.length) {
    return { error: null, updated: false };
  }

  const cloudUserIds = new Set(cloudCategories.map((category) => category.user_id));
  categories = [
    ...categories.filter((category) => !cloudUserIds.has(category.user_id)),
    ...cloudCategories,
  ];
  categories = ensureDefaultCategoriesForAllUsers(categories);

  if (!saveCategories()) {
    return { error: { message: "Kategorien konnten nicht lokal gespeichert werden." }, updated: false };
  }

  renderCategorySettings();
  refreshEntryViews();
  return { error: null, updated: true };
}

async function loadSupabaseTimeEntryRecords() {
  const result = await supabaseClient
    .from(SUPABASE_TABLE_NAME)
    .select(SUPABASE_TIME_ENTRY_COLUMNS.join(","));

  if (result.error && isMissingSupabaseColumnError(result.error) && !isMissingSupabaseUserIdColumnError(result.error)) {
    const fallbackColumns = ["id", "user_id", "date", "start_time", "end_time", "duration_minutes", "category", "note", "created_at", "updated_at"];
    return supabaseClient
      .from(SUPABASE_TABLE_NAME)
      .select(fallbackColumns.join(","));
  }

  return result;
}

function mergeCloudEntriesIntoLocal(cloudEntries) {
  const nextEntries = [...timeEntries];
  let addedCount = 0;
  let updatedCount = 0;

  cloudEntries.forEach((cloudEntry) => {
    const sameIdIndex = nextEntries.findIndex((entry) => entry.id === cloudEntry.id);

    if (sameIdIndex >= 0) {
      const localEntry = nextEntries[sameIdIndex];

      if (areEntriesDifferent(localEntry, cloudEntry) && getEntryUpdatedAtTime(cloudEntry) > getEntryUpdatedAtTime(localEntry)) {
        nextEntries[sameIdIndex] = cloudEntry;
        updatedCount += 1;
      }
      return;
    }

    const duplicate = nextEntries.find((entry) => getCloudEntryDuplicateKey(entry) === getCloudEntryDuplicateKey(cloudEntry));

    if (!duplicate) {
      nextEntries.push(cloudEntry);
      addedCount += 1;
    }
  });

  if (addedCount || updatedCount) {
    const sortedEntries = nextEntries.sort((a, b) => b.startedAt.getTime() - a.startedAt.getTime());

    if (!persistEntries(sortedEntries)) {
      return { addedCount: 0, updatedCount: 0, error: { message: "Synchronisierte Daten konnten nicht lokal gespeichert werden." } };
    }

    timeEntries.splice(0, timeEntries.length, ...sortedEntries);
  }

  return { addedCount, updatedCount, error: null };
}

function showStartupSyncMessage(message, type = "info") {
  syncStatusMessage.textContent = message;
  syncStatusMessage.dataset.type = type;
  syncStatusMessage.hidden = false;

  window.setTimeout(() => {
    if (syncStatusMessage.textContent === message) {
      syncStatusMessage.hidden = true;
      syncStatusMessage.removeAttribute("data-type");
    }
  }, 5000);
}

async function synchronizeWithSupabaseOnStartup() {
  const status = getSupabaseStatus();

  if (!status.connected) {
    showStartupSyncMessage("Keine Supabase-Verbindung - lokale Daten werden verwendet");
    return;
  }

  try {
    ensureLocalTimeEntriesHaveUserIds();

    const userResult = await loadSupabaseUserProfiles();

    if (userResult.error) {
      showStartupSyncMessage(getSupabaseErrorMessage(userResult.error), "error");
      return;
    }

    const categoryResult = await loadSupabaseCategories();

    if (categoryResult.error) {
      showStartupSyncMessage(getSupabaseErrorMessage(categoryResult.error), "error");
      return;
    }

    const { data, error } = await loadSupabaseTimeEntryRecords();

    if (error) {
      showStartupSyncMessage(getSupabaseErrorMessage(error), "error");
      return;
    }

    const cloudEntries = (data || []).map(createLocalEntryFromSupabaseRecord).filter(Boolean);
    const mergeResult = mergeCloudEntriesIntoLocal(cloudEntries);

    if (mergeResult.error) {
      showStartupSyncMessage(getSupabaseErrorMessage(mergeResult.error), "error");
      return;
    }

    const userUploadResult = await upsertSupabaseUserProfiles();

    if (userUploadResult.error) {
      showStartupSyncMessage(getSupabaseErrorMessage(userUploadResult.error), "error");
      return;
    }

    const categoryUploadResult = await upsertSupabaseCategories();

    if (categoryUploadResult.error) {
      showStartupSyncMessage(getSupabaseErrorMessage(categoryUploadResult.error), "error");
      return;
    }

    if (timeEntries.length) {
      const entryUploadResult = await upsertSupabaseTimeEntryRecords(timeEntries.map(createSupabaseTimeEntryRecord));

      if (entryUploadResult.error) {
        showStartupSyncMessage(getSupabaseErrorMessage(entryUploadResult.error), "error");
        return;
      }
    }

    refreshEntryViews();
    renderUserProfileSettings();
    renderCategorySettings();
    showStartupSyncMessage("Synchronisierung abgeschlossen", "success");
  } catch (error) {
    showStartupSyncMessage(getSupabaseErrorMessage(error), "error");
  }
}

async function backupLocalEntriesToCloud() {
  const status = getSupabaseStatus();
  renderSupabaseStatus();

  if (!status.connected) {
    showCloudStorageMessage("Keine Cloud-Verbindung", "error");
    return;
  }

  try {
    const userResult = await upsertSupabaseUserProfiles();

    if (userResult.error) {
      showCloudStorageMessage(getSupabaseErrorMessage(userResult.error), "error");
      return;
    }

    const categoryResult = await upsertSupabaseCategories();

    if (categoryResult.error) {
      showCloudStorageMessage(getSupabaseErrorMessage(categoryResult.error), "error");
      return;
    }

    if (!timeEntries.length) {
      showCloudStorageMessage("Nutzerprofile und Kategorien in Cloud gesichert. Keine lokalen Einträge vorhanden", "success");
      return;
    }

    ensureLocalTimeEntriesHaveUserIds();
    const records = timeEntries.map((entry) =>
      createSupabaseTimeEntryRecord({ ...entry, user_id: getValidUserId(entry.user_id) }),
    );
    const { error } = await upsertSupabaseTimeEntryRecords(records);

    if (error) {
      showCloudStorageMessage(getSupabaseErrorMessage(error), "error");
      return;
    }

    showCloudStorageMessage(`Nutzerprofile und Kategorien in Cloud gesichert. ${records.length} Zeiteinträge in Cloud gesichert`, "success");
  } catch (error) {
    showCloudStorageMessage(getSupabaseErrorMessage(error), "error");
  } finally {
    renderSupabaseStatus();
  }
}

function createLocalEntryFromSupabaseRecord(record) {
  const startedAt = record.started_at ? new Date(record.started_at) : parseCloudDateTime(record.date, record.start_time);
  const endedAt = record.ended_at ? new Date(record.ended_at) : parseCloudDateTime(record.date, record.end_time);

  if (!record.id || Number.isNaN(startedAt.getTime()) || Number.isNaN(endedAt.getTime())) {
    return null;
  }

  return {
    id: record.id,
    activity: record.activity || record.description || record.note || "Zeiteintrag",
    category: record.category || "",
    startedAt,
    endedAt,
    note: record.note || "",
    edited: Boolean(record.edited),
    manual: Boolean(record.manual),
    uploaded: Boolean(record.uploaded),
    user_id: getValidUserId(record.user_id),
    created_at: record.created_at || startedAt.toISOString(),
    updated_at: record.updated_at || endedAt.toISOString(),
    cloud_saved: true,
  };
}

function getEntryDuplicateKey(entry) {
  return [
    String(entry.activity || "").trim(),
    String(entry.category || "").trim(),
    entry.startedAt.toISOString(),
    entry.endedAt.toISOString(),
  ].join("|");
}

function getCloudEntryDuplicateKey(entry) {
  return [
    getValidUserId(entry.user_id),
    toDateInputValue(entry.startedAt),
    toSupabaseTimeValue(entry.startedAt),
    toSupabaseTimeValue(entry.endedAt),
    String(entry.category || "").trim(),
    String(entry.note || "").trim(),
  ].join("|");
}

function findDuplicateLocalEntries(cloudEntry, localEntries = timeEntries) {
  const cloudDuplicateKey = getEntryDuplicateKey(cloudEntry);
  const cloudDetailedDuplicateKey = getCloudEntryDuplicateKey(cloudEntry);

  return localEntries.filter(
    (localEntry) =>
      localEntry.id === cloudEntry.id ||
      getEntryDuplicateKey(localEntry) === cloudDuplicateKey ||
      getCloudEntryDuplicateKey(localEntry) === cloudDetailedDuplicateKey,
  );
}

function cloneCloudEntryForLocalConflict(entry, forceNewId = false) {
  return {
    ...entry,
    id: forceNewId ? `${entry.id}-cloud-${Date.now()}` : entry.id,
    startedAt: new Date(entry.startedAt),
    endedAt: new Date(entry.endedAt),
  };
}

function renderCloudConflictEntry(entry, sourceLabel) {
  const flags = [
    entry.edited ? "bearbeitet" : "nicht bearbeitet",
    entry.manual ? "nachgetragen" : "nicht nachgetragen",
  ].join(", ");

  return `
    <article class="cloud-conflict-entry">
      <strong>${sourceLabel}</strong>
      <dl>
        <div><dt>Tätigkeit</dt><dd>${escapeHtml(entry.activity || "-")}</dd></div>
        <div><dt>Kategorie</dt><dd>${escapeHtml(entry.category || "-")}</dd></div>
        <div><dt>Arbeitsbeginn</dt><dd>${formatDate(entry.startedAt)} ${formatTime(entry.startedAt)}</dd></div>
        <div><dt>Arbeitsende</dt><dd>${formatDate(entry.endedAt)} ${formatTime(entry.endedAt)}</dd></div>
        <div><dt>Dauer</dt><dd>${getEntryDurationMinutes(entry)} Min.</dd></div>
        <div><dt>Notiz</dt><dd>${escapeHtml(entry.note || "-")}</dd></div>
        <div><dt>Markierung</dt><dd>${flags}</dd></div>
        <div><dt>Herkunft</dt><dd>${sourceLabel}</dd></div>
      </dl>
    </article>
  `;
}

function renderCloudConflictPanel() {
  if (!cloudImportConflicts.length) {
    clearCloudConflictPanel();
    return;
  }

  cloudConflictPanel.hidden = false;
  cloudConflictPanel.innerHTML = `
    <div class="cloud-conflict-header">
      <h4>${cloudImportConflicts.length} Konflikte gefunden</h4>
      <div class="cloud-conflict-actions">
        <button class="settings-secondary-button" type="button" data-cloud-conflict-action="keep-local-all">
          Für alle lokale Einträge behalten
        </button>
        <button class="settings-secondary-button" type="button" data-cloud-conflict-action="use-cloud-all">
          Für alle Cloud-Einträge übernehmen
        </button>
      </div>
    </div>
    ${cloudImportConflicts
      .map(
        (conflict, index) => `
          <section class="cloud-conflict-card" data-conflict-index="${index}">
            <div class="cloud-conflict-versions">
              ${renderCloudConflictEntry(conflict.localEntry, "Lokal")}
              ${renderCloudConflictEntry(conflict.cloudEntry, "Cloud")}
            </div>
            <div class="cloud-conflict-actions">
              <button class="settings-secondary-button" type="button" data-cloud-conflict-action="keep-local" data-conflict-index="${index}">
                Lokalen Eintrag behalten
              </button>
              <button class="settings-secondary-button" type="button" data-cloud-conflict-action="use-cloud" data-conflict-index="${index}">
                Cloud-Eintrag übernehmen
              </button>
              <button class="settings-secondary-button" type="button" data-cloud-conflict-action="keep-both" data-conflict-index="${index}">
                Beide behalten
              </button>
            </div>
          </section>
        `,
      )
      .join("")}
  `;
}

function saveCloudImportEntries(nextEntries, successMessage) {
  const sortedEntries = [...nextEntries].sort((a, b) => b.startedAt.getTime() - a.startedAt.getTime());

  if (!persistEntries(sortedEntries)) {
    showCloudStorageMessage("Cloud-Daten konnten nicht lokal gespeichert werden. Bitte Browser-Speicher prüfen.", "error");
    return false;
  }

  timeEntries.splice(0, timeEntries.length, ...sortedEntries);
  refreshEntryViews();
  showCloudStorageMessage(successMessage, "success");
  return true;
}

function resolveCloudConflict(index, decision) {
  const conflict = cloudImportConflicts[index];

  if (!conflict) {
    return;
  }

  let nextEntries = [...timeEntries];

  if (decision === "use-cloud") {
    const duplicateIds = new Set(conflict.duplicates.map((entry) => entry.id));
    nextEntries = nextEntries.filter((entry) => !duplicateIds.has(entry.id));
    nextEntries.push(cloneCloudEntryForLocalConflict(conflict.cloudEntry));
  }

  if (decision === "keep-both") {
    const hasSameId = nextEntries.some((entry) => entry.id === conflict.cloudEntry.id);
    nextEntries.push(cloneCloudEntryForLocalConflict(conflict.cloudEntry, hasSameId));
  }

  if (!saveCloudImportEntries(nextEntries, "Cloud-Daten wurden übernommen")) {
    return;
  }

  cloudImportConflicts.splice(index, 1);
  renderCloudConflictPanel();
}

function resolveAllCloudConflicts(decision) {
  let nextEntries = [...timeEntries];

  if (decision === "use-cloud") {
    cloudImportConflicts.forEach((conflict) => {
      const duplicateIds = new Set(conflict.duplicates.map((entry) => entry.id));
      nextEntries = nextEntries.filter((entry) => !duplicateIds.has(entry.id));
      nextEntries.push(cloneCloudEntryForLocalConflict(conflict.cloudEntry));
    });
  }

  if (!saveCloudImportEntries(nextEntries, "Cloud-Daten wurden übernommen")) {
    return;
  }

  clearCloudConflictPanel();
}

async function importCloudEntriesToApp() {
  const status = getSupabaseStatus();
  renderSupabaseStatus();
  clearCloudConflictPanel();

  if (!status.connected) {
    showCloudStorageMessage("Keine Cloud-Verbindung", "error");
    return;
  }

  try {
    const userResult = await loadSupabaseUserProfiles();

    if (userResult.error) {
      showCloudStorageMessage(getSupabaseErrorMessage(userResult.error), "error");
      return;
    }

    const categoryResult = await loadSupabaseCategories();

    if (categoryResult.error) {
      showCloudStorageMessage(getSupabaseErrorMessage(categoryResult.error), "error");
      return;
    }

    const { data, error } = await loadSupabaseTimeEntryRecords();

    if (error) {
      showCloudStorageMessage(getSupabaseErrorMessage(error), "error");
      return;
    }

    const cloudEntries = (data || []).map(createLocalEntryFromSupabaseRecord).filter(Boolean);

    if (!cloudEntries.length) {
      showCloudStorageMessage(userResult.updated || categoryResult.updated ? "Cloud-Daten geladen" : "Keine Cloud-Einträge gefunden");
      return;
    }

    const newEntries = [];
    const conflicts = [];
    const comparisonEntries = [...timeEntries];

    cloudEntries.forEach((cloudEntry) => {
      const duplicates = findDuplicateLocalEntries(cloudEntry, comparisonEntries);

      if (duplicates.length) {
        conflicts.push({
          localEntry: duplicates[0],
          cloudEntry,
          duplicates,
        });
        return;
      }

      newEntries.push(cloudEntry);
      comparisonEntries.push(cloudEntry);
    });

    if (newEntries.length) {
      const imported = saveCloudImportEntries([...newEntries, ...timeEntries], `${newEntries.length} neue Einträge wurden geladen. Cloud-Daten geladen`);

      if (!imported) {
        return;
      }
    }

    if (conflicts.length) {
      cloudImportConflicts = conflicts;
      renderCloudConflictPanel();
      showCloudStorageMessage(
        newEntries.length
          ? `${newEntries.length} neue Einträge wurden geladen. ${conflicts.length} Konflikte gefunden`
          : `${conflicts.length} Konflikte gefunden`,
        "info",
      );
      return;
    }

    if (!newEntries.length) {
      showCloudStorageMessage(userResult.updated || categoryResult.updated ? "Cloud-Daten geladen" : "Keine neuen Cloud-Einträge gefunden");
    }
  } catch (error) {
    showCloudStorageMessage(getSupabaseErrorMessage(error), "error");
  } finally {
    renderSupabaseStatus();
  }
}

function getCalendarWeek(date) {
  const currentDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNumber = currentDate.getUTCDay() || 7;
  currentDate.setUTCDate(currentDate.getUTCDate() + 4 - dayNumber);
  const yearStart = new Date(Date.UTC(currentDate.getUTCFullYear(), 0, 1));

  return Math.ceil(((currentDate - yearStart) / 86400000 + 1) / 7);
}

function getWeekStart(date) {
  const weekStart = new Date(date);
  const dayNumber = weekStart.getDay() || 7;
  weekStart.setHours(0, 0, 0, 0);
  weekStart.setDate(weekStart.getDate() - dayNumber + 1);

  return weekStart;
}

function getWeekEnd(date) {
  const weekEnd = getWeekStart(date);
  weekEnd.setDate(weekEnd.getDate() + 7);

  return weekEnd;
}

function startOfDay(date) {
  const day = new Date(date);
  day.setHours(0, 0, 0, 0);

  return day;
}

function addDays(date, days) {
  const nextDate = new Date(date);
  nextDate.setDate(nextDate.getDate() + days);

  return nextDate;
}

function getMonthStart(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function getMonthEnd(date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 1);
}

function addMonths(date, months) {
  return new Date(date.getFullYear(), date.getMonth() + months, 1);
}

function updateCurrentDateTime() {
  const now = new Date();

  weekdayElement.textContent = new Intl.DateTimeFormat("de-DE", {
    weekday: "long",
  }).format(now);

  dateElement.textContent = new Intl.DateTimeFormat("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(now);

  clockElement.textContent = new Intl.DateTimeFormat("de-DE", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(now);

  calendarWeekElement.textContent = `Kalenderwoche ${getCalendarWeek(now)}`;
}

function formatDuration(milliseconds) {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
  const seconds = String(totalSeconds % 60).padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
}

function formatDate(date) {
  return new Intl.DateTimeFormat("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(date);
}

function formatTime(date) {
  return new Intl.DateTimeFormat("de-DE", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

function formatDurationInMinutes(milliseconds) {
  const minutes = milliseconds / 60000;
  const roundedMinutes = Math.round(minutes * 10) / 10;

  return new Intl.NumberFormat("de-DE", {
    maximumFractionDigits: 1,
    minimumFractionDigits: Number.isInteger(roundedMinutes) ? 0 : 1,
  }).format(roundedMinutes);
}

function formatMinutes(minutes) {
  return `${new Intl.NumberFormat("de-DE", {
    maximumFractionDigits: 1,
    minimumFractionDigits: Number.isInteger(minutes) ? 0 : 1,
  }).format(minutes)} Min.`;
}

function formatAnalyticsDuration(minutes) {
  const totalMinutes = Math.round(minutes);
  const hours = Math.floor(totalMinutes / 60);
  const remainingMinutes = totalMinutes % 60;

  return `${hours} Std. ${remainingMinutes} Min.`;
}

function toDateTimeInputValue(date) {
  const offsetDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);

  return offsetDate.toISOString().slice(0, 16);
}

function toDateInputValue(date) {
  const offsetDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);

  return offsetDate.toISOString().slice(0, 10);
}

function formatFileDate(date) {
  return toDateInputValue(date);
}

function formatReminderTime(date) {
  return new Intl.DateTimeFormat("de-DE", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

function getEntryDurationMinutes(entry) {
  return formatDurationInMinutes(entry.endedAt.getTime() - entry.startedAt.getTime());
}

function getNowIsoString() {
  return new Date().toISOString();
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function createEntryId() {
  return globalThis.crypto?.randomUUID ? globalThis.crypto.randomUUID() : String(Date.now());
}

function parseCloudDateTime(dateValue, timeValue) {
  if (!dateValue || !timeValue) {
    return null;
  }

  const date = new Date(`${dateValue}T${String(timeValue).slice(0, 8)}`);
  return Number.isNaN(date.getTime()) ? null : date;
}

function getEntryUpdatedAtTime(entry) {
  const updatedAt = new Date(entry.updated_at || entry.updatedAt || entry.endedAt || 0);
  return Number.isNaN(updatedAt.getTime()) ? 0 : updatedAt.getTime();
}

function areEntriesDifferent(firstEntry, secondEntry) {
  return [
    "user_id",
    "activity",
    "category",
    "note",
    "edited",
    "manual",
    "uploaded",
  ].some((key) => String(firstEntry[key] ?? "") !== String(secondEntry[key] ?? "")) ||
    firstEntry.startedAt?.toISOString() !== secondEntry.startedAt?.toISOString() ||
    firstEntry.endedAt?.toISOString() !== secondEntry.endedAt?.toISOString();
}

function isEntryForActiveUser(entry) {
  return getValidUserId(entry.user_id) === activeUserId;
}

function getEntriesForActiveUser(entries = timeEntries) {
  return entries.filter(isEntryForActiveUser);
}

function getExportEntries() {
  return exportScopeSelect.value === "all" ? [...timeEntries] : getEntriesForActiveUser();
}

function serializeEntry(entry) {
  const now = getNowIsoString();

  return {
    id: entry.id,
    activity: entry.activity,
    category: entry.category,
    startedAt: entry.startedAt.toISOString(),
    endedAt: entry.endedAt.toISOString(),
    note: entry.note,
    edited: entry.edited,
    manual: entry.manual,
    uploaded: entry.uploaded,
    user_id: getValidUserId(entry.user_id),
    created_at: entry.created_at || entry.createdAt || now,
    updated_at: entry.updated_at || entry.updatedAt || now,
    cloud_saved: Boolean(entry.cloud_saved || entry.cloudSaved),
  };
}

function deserializeEntry(entry) {
  const startedAt = new Date(entry.startedAt);
  const endedAt = new Date(entry.endedAt);

  if (!entry.id || Number.isNaN(startedAt.getTime()) || Number.isNaN(endedAt.getTime())) {
    return null;
  }

  return {
    id: entry.id,
    activity: entry.activity || "",
    category: entry.category || "",
    startedAt,
    endedAt,
    note: entry.note || "",
    edited: Boolean(entry.edited),
    manual: Boolean(entry.manual),
    uploaded: Boolean(entry.uploaded),
    user_id: getValidUserId(entry.user_id),
    created_at: entry.created_at || entry.createdAt || entry.startedAt || new Date().toISOString(),
    updated_at: entry.updated_at || entry.updatedAt || entry.endedAt || new Date().toISOString(),
    cloud_saved: Boolean(entry.cloud_saved || entry.cloudSaved),
  };
}

function showStorageError(message) {
  storageMessage.textContent = message;
  storageMessage.hidden = false;
}

function clearStorageError() {
  storageMessage.textContent = "";
  storageMessage.hidden = true;
}

function loadPersistedEntries() {
  try {
    const storedEntries = localStorage.getItem(STORAGE_KEY);

    if (!storedEntries) {
      return;
    }

    const parsedEntries = JSON.parse(storedEntries);
    const entries = parsedEntries.map(deserializeEntry).filter(Boolean);
    timeEntries.splice(0, timeEntries.length, ...entries);
    if (parsedEntries.some((entry) => !entry.user_id)) {
      persistEntries(entries);
    }
    clearStorageError();
  } catch (error) {
    showStorageError("Gespeicherte Einträge konnten nicht geladen werden.");
  }
}

function persistEntries(entries = timeEntries) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries.map(serializeEntry)));
    clearStorageError();
    return true;
  } catch (error) {
    showStorageError("Einträge konnten nicht dauerhaft gespeichert werden. Bitte Browser-Speicher prüfen.");
    return false;
  }
}

function isTimerRunning() {
  return Boolean(timerStartedDate && !timerStoppedDate);
}

function serializeActiveTimer() {
  if (!isTimerRunning()) {
    return null;
  }

  return {
    activity: activeActivity,
    category: activeCategory,
    startedAt: timerStartedDate.toISOString(),
    status: "running",
  };
}

function persistActiveTimer() {
  const activeTimer = serializeActiveTimer();

  if (!activeTimer) {
    return true;
  }

  try {
    localStorage.setItem(ACTIVE_TIMER_KEY, JSON.stringify(activeTimer));
    clearStorageError();
    return true;
  } catch (error) {
    showStorageError("Laufender Timer konnte nicht gesichert werden. Bitte Browser-Speicher prüfen.");
    return false;
  }
}

function clearActiveTimer() {
  try {
    localStorage.removeItem(ACTIVE_TIMER_KEY);
    clearStorageError();
  } catch (error) {
    showStorageError("Laufender Timer konnte nicht vollständig entfernt werden.");
  }
}

function getPersistedActiveTimer() {
  try {
    const storedTimer = localStorage.getItem(ACTIVE_TIMER_KEY);

    if (!storedTimer) {
      return null;
    }

    const activeTimer = JSON.parse(storedTimer);
    const startedAt = new Date(activeTimer.startedAt);

    if (
      activeTimer.status !== "running" ||
      !activeTimer.activity ||
      !activeTimer.category ||
      Number.isNaN(startedAt.getTime())
    ) {
      clearActiveTimer();
      return null;
    }

    return {
      activity: activeTimer.activity,
      category: activeTimer.category,
      startedAt,
    };
  } catch (error) {
    clearActiveTimer();
    showStorageError("Laufender Timer konnte nicht wiederhergestellt werden.");
    return null;
  }
}

function startVisibleTimerInterval() {
  clearInterval(timerInterval);
  updateElapsedTime();
  timerInterval = setInterval(updateElapsedTime, 1000);
}

function restoreActiveTimer() {
  const activeTimer = getPersistedActiveTimer();

  if (!activeTimer) {
    return;
  }

  activeActivity = activeTimer.activity;
  activeCategory = activeTimer.category;
  timerStartedDate = activeTimer.startedAt;
  timerStoppedDate = null;
  timerStartedAt = timerStartedDate.getTime();
  lastElapsedMilliseconds = Date.now() - timerStartedAt;
  activityInput.value = activeActivity;
  categorySelect.value = activeCategory;
  elapsedTimeElement.textContent = formatDuration(lastElapsedMilliseconds);
  clearTimerMessage();
  setTimerState("running");
  startVisibleTimerInterval();
}

function refreshEntryViews() {
  renderHistory();
  renderAnalytics();
  renderWeekplan();
  renderExportSummary();
  updateActivitySuggestions();

  if (getTodayTotalMinutes() >= getTargetWorkMinutes()) {
    hideInAppReminder();
  }
}

function updateElapsedTime() {
  if (!timerStartedDate) {
    elapsedTimeElement.textContent = "00:00:00";
    return;
  }

  elapsedTimeElement.textContent = formatDuration(Date.now() - timerStartedDate.getTime());
}

function showTimerMessage(message, type) {
  timerMessage.textContent = message;
  timerMessage.dataset.type = type;
  timerMessage.hidden = false;
}

function clearTimerMessage() {
  timerMessage.textContent = "";
  timerMessage.removeAttribute("data-type");
  timerMessage.hidden = true;
}

function getEntryValidationMessage() {
  const activity = activityInput.value.trim();
  const category = categorySelect.value;

  if (!activity && !category) {
    return "Bitte Tätigkeit und Kategorie eingeben oder auswählen.";
  }

  if (!activity) {
    return "Bitte eine Tätigkeit eingeben.";
  }

  if (!category) {
    return "Bitte eine Kategorie auswählen.";
  }

  return "";
}

function setTimerState(state) {
  timerScreen.dataset.state = state;

  if (state === "neutral") {
    timerStateElement.textContent = "Bereit zum Starten";
    elapsedTimeElement.hidden = true;
    completionPanel.hidden = true;
    startButton.textContent = "Start";
    startButton.classList.remove("is-running");
    startButton.setAttribute("aria-pressed", "false");
    return;
  }

  if (state === "running") {
    timerStateElement.textContent = activeActivity;
    elapsedTimeElement.hidden = false;
    completionPanel.hidden = true;
    startButton.textContent = "Stop";
    startButton.classList.add("is-running");
    startButton.setAttribute("aria-pressed", "true");
    return;
  }

  timerStateElement.textContent = "Tätigkeit beendet";
  elapsedTimeElement.hidden = false;
  completionPanel.hidden = false;
  startButton.textContent = "Start";
  startButton.classList.remove("is-running");
  startButton.setAttribute("aria-pressed", "false");
}

function startTimer() {
  if (isTimerRunning()) {
    showTimerMessage(
      "Es läuft bereits eine Tätigkeit. Möchtest du diese beenden und eine neue starten?",
      "warning",
    );
    return;
  }

  const validationMessage = getEntryValidationMessage();

  if (validationMessage) {
    showTimerMessage(validationMessage, "error");
    return;
  }

  clearTimerMessage();
  activeActivity = activityInput.value.trim();
  activeCategory = categorySelect.value;
  timerStartedDate = new Date();
  timerStoppedDate = null;
  timerStartedAt = timerStartedDate.getTime();
  lastElapsedMilliseconds = 0;
  elapsedTimeElement.textContent = "00:00:00";

  if (!persistActiveTimer()) {
    timerStartedAt = null;
    timerStartedDate = null;
    activeActivity = "";
    activeCategory = "";
    showTimerMessage("Timer konnte nicht dauerhaft gestartet werden. Bitte Browser-Speicher prüfen.", "error");
    setTimerState("neutral");
    return;
  }

  setTimerState("running");
  startVisibleTimerInterval();
}

function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  timerStoppedDate = new Date();
  lastElapsedMilliseconds = timerStartedDate ? timerStoppedDate.getTime() - timerStartedDate.getTime() : 0;
  elapsedTimeElement.textContent = formatDuration(lastElapsedMilliseconds);
  timerStartedAt = null;
  clearActiveTimer();
  clearTimerMessage();
  setTimerState("stopped");
}

function resetTimerScreen(options = {}) {
  const { keepStoredActiveTimer = false } = options;

  clearInterval(timerInterval);
  timerStartedAt = null;
  timerStartedDate = null;
  timerStoppedDate = null;
  timerInterval = null;
  lastElapsedMilliseconds = 0;
  elapsedTimeElement.textContent = "00:00:00";
  noteInput.value = "";
  activityInput.value = "";
  categorySelect.value = "";
  renderCategoryDropdowns();
  activeActivity = "";
  activeCategory = "";
  if (!keepStoredActiveTimer) {
    clearActiveTimer();
  }
  clearTimerMessage();
  setTimerState("neutral");
}

function showTimerView() {
  timerView.hidden = false;
  historyView.hidden = true;
  manualView.hidden = true;
  analyticsView.hidden = true;
  exportView.hidden = true;
  settingsView.hidden = true;
  weekplanView.hidden = true;
}

function showHistoryView() {
  timerView.hidden = true;
  historyView.hidden = false;
  manualView.hidden = true;
  analyticsView.hidden = true;
  exportView.hidden = true;
  settingsView.hidden = true;
  weekplanView.hidden = true;
  menuButton.setAttribute("aria-expanded", "false");
  menuPanel.hidden = true;
  window.location.hash = "verlauf";
}

function showManualView() {
  timerView.hidden = true;
  historyView.hidden = true;
  manualView.hidden = false;
  analyticsView.hidden = true;
  exportView.hidden = true;
  settingsView.hidden = true;
  weekplanView.hidden = true;
  manualMessage.hidden = true;
  manualForm.elements.date.value ||= toDateInputValue(new Date());
  menuButton.setAttribute("aria-expanded", "false");
  menuPanel.hidden = true;
  window.location.hash = "nachtragen";
}

function showAnalyticsView() {
  renderAnalytics();
  timerView.hidden = true;
  historyView.hidden = true;
  manualView.hidden = true;
  analyticsView.hidden = false;
  exportView.hidden = true;
  settingsView.hidden = true;
  weekplanView.hidden = true;
  menuButton.setAttribute("aria-expanded", "false");
  menuPanel.hidden = true;
  window.location.hash = "auswertungen";
}

function showExportView() {
  renderExportSummary();
  timerView.hidden = true;
  historyView.hidden = true;
  manualView.hidden = true;
  analyticsView.hidden = true;
  exportView.hidden = false;
  settingsView.hidden = true;
  weekplanView.hidden = true;
  exportMessage.hidden = true;
  menuButton.setAttribute("aria-expanded", "false");
  menuPanel.hidden = true;
  window.location.hash = "exportieren";
}

function showSettingsView() {
  renderUserProfileSettings();
  renderCategorySettings();
  renderReminderSettingsForm();
  renderSupabaseStatus();
  timerView.hidden = true;
  historyView.hidden = true;
  manualView.hidden = true;
  analyticsView.hidden = true;
  exportView.hidden = true;
  settingsView.hidden = false;
  weekplanView.hidden = true;
  clearSettingsMessage();
  clearCloudStorageMessage();
  clearCloudConflictPanel();
  clearUserProfileMessage();
  clearCategorySettingsMessage();
  menuButton.setAttribute("aria-expanded", "false");
  menuPanel.hidden = true;
  window.location.hash = "einstellungen";
}

function showWeekplanView() {
  renderWeekplan();
  timerView.hidden = true;
  historyView.hidden = true;
  manualView.hidden = true;
  analyticsView.hidden = true;
  exportView.hidden = true;
  settingsView.hidden = true;
  weekplanView.hidden = false;
  menuButton.setAttribute("aria-expanded", "false");
  menuPanel.hidden = true;
  window.location.hash = "wochenplan";
}

function isDeveloperModeEnabled() {
  try {
    return localStorage.getItem(DEVELOPER_MODE_KEY) === "true";
  } catch (error) {
    return false;
  }
}

function setDeveloperMode(enabled) {
  reminderTestPanel.hidden = !enabled;
  developerModeToggle.checked = enabled;
  renderUserProfileSettings();

  try {
    localStorage.setItem(DEVELOPER_MODE_KEY, String(enabled));
  } catch (error) {
    // Developer mode is temporary and should not affect core app behavior.
  }
}

function initializeDeveloperMode() {
  setDeveloperMode(isDeveloperModeEnabled());
}

function updateActivitySuggestions() {
  const activities = [...new Set(getEntriesForActiveUser().map((entry) => entry.activity))];
  activitySuggestions.innerHTML = "";

  activities.forEach((activity) => {
    const option = document.createElement("option");
    option.value = activity;
    activitySuggestions.append(option);
  });
}

function renderHistory() {
  const visibleEntries = getEntriesForActiveUser();
  historyEmpty.hidden = visibleEntries.length > 0;
  historyList.innerHTML = "";

  visibleEntries.sort((a, b) => b.startedAt.getTime() - a.startedAt.getTime());

  visibleEntries.forEach((entry) => {
    const item = document.createElement("li");
    item.className = "history-entry";
    item.dataset.entryId = entry.id;

    const title = document.createElement("h3");
    title.textContent = entry.activity;
    item.append(title);

    const userBadge = document.createElement("p");
    userBadge.className = "history-badge history-badge-user";
    userBadge.textContent = getUserName(entry.user_id);
    item.append(userBadge);

    if (entry.edited) {
      const badge = document.createElement("p");
      badge.className = "history-badge";
      badge.textContent = "bearbeitet";
      item.append(badge);
    }

    if (entry.manual) {
      const badge = document.createElement("p");
      badge.className = "history-badge";
      badge.textContent = "nachgetragen";
      item.append(badge);
    }

    if (entry.uploaded) {
      const badge = document.createElement("p");
      badge.className = "history-badge history-badge-uploaded";
      badge.textContent = "hochgeladen";
      item.append(badge);
    }

    const meta = document.createElement("p");
    meta.className = "history-meta";
    meta.textContent = `Datum: ${formatDate(entry.startedAt)} · Kategorie: ${entry.category} · Beginn: ${formatTime(entry.startedAt)} · Ende: ${formatTime(entry.endedAt)} · Dauer: ${getEntryDurationMinutes(entry)} Min.`;
    item.append(meta);

    if (entry.note) {
      const note = document.createElement("p");
      note.className = "history-note";
      note.textContent = entry.note;
      item.append(note);
    }

    const actions = document.createElement("div");
    actions.className = "history-actions";

    const editButton = document.createElement("button");
    editButton.type = "button";
    editButton.className = "history-edit-button";
    editButton.textContent = "Bearbeiten";
    editButton.dataset.action = "edit";
    editButton.dataset.entryId = entry.id;
    actions.append(editButton);

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "history-delete-button";
    deleteButton.textContent = "Löschen";
    deleteButton.dataset.action = "delete";
    deleteButton.dataset.entryId = entry.id;
    actions.append(deleteButton);
    item.append(actions);

    historyList.append(item);
  });
}

function getCurrentWeekEntries() {
  const now = new Date();
  const weekStart = getWeekStart(now);
  const weekEnd = getWeekEnd(now);

  return getEntriesForActiveUser().filter((entry) => entry.startedAt >= weekStart && entry.startedAt < weekEnd);
}

function renderAnalytics() {
  const weekEntries = getCurrentWeekEntries();
  const categoryMinutes = new Map();
  const weekdayMinutes = new Map();
  const weekdayCategoryMinutes = new Map();
  const workdays = new Set();
  let totalMinutes = 0;

  weekEntries.forEach((entry) => {
    const minutes = Math.max(0, (entry.endedAt.getTime() - entry.startedAt.getTime()) / 60000);
    const weekdayKey = toDateInputValue(entry.startedAt);
    totalMinutes += minutes;
    workdays.add(weekdayKey);
    categoryMinutes.set(entry.category, (categoryMinutes.get(entry.category) || 0) + minutes);
    weekdayMinutes.set(weekdayKey, (weekdayMinutes.get(weekdayKey) || 0) + minutes);

    if (!weekdayCategoryMinutes.has(weekdayKey)) {
      weekdayCategoryMinutes.set(weekdayKey, new Map());
    }

    const dayCategories = weekdayCategoryMinutes.get(weekdayKey);
    dayCategories.set(entry.category, (dayCategories.get(entry.category) || 0) + minutes);
  });

  const averageMinutes = workdays.size ? totalMinutes / workdays.size : 0;
  weeklyTotalElement.textContent = formatAnalyticsDuration(totalMinutes);
  dailyAverageElement.textContent = formatAnalyticsDuration(averageMinutes);
  analyticsEmpty.hidden = categoryMinutes.size > 0;
  categoryBars.innerHTML = "";

  const maxCategoryMinutes = Math.max(...categoryMinutes.values(), 0);
  const sortedCategories = [...categoryMinutes.entries()].sort((a, b) => b[1] - a[1]);

  sortedCategories.forEach(([category, minutes]) => {
    const row = document.createElement("div");
    row.className = "category-bar-row";

    const header = document.createElement("div");
    header.className = "category-bar-header";

    const label = document.createElement("span");
    label.textContent = category;
    header.append(label);

    const value = document.createElement("span");
    value.textContent = formatAnalyticsDuration(minutes);
    header.append(value);
    row.append(header);

    const track = document.createElement("div");
    track.className = "category-bar-track";

    const fill = document.createElement("div");
    fill.className = "category-bar-fill";
    fill.style.width = `${maxCategoryMinutes ? (minutes / maxCategoryMinutes) * 100 : 0}%`;
    fill.style.background = CATEGORY_COLORS[category] || CATEGORY_COLORS.Sonstiges;
    track.append(fill);
    row.append(track);

    categoryBars.append(row);
  });

  weekdayBars.innerHTML = "";
  const weekStart = getWeekStart(new Date());
  const maxWeekdayMinutes = Math.max(...weekdayMinutes.values(), 0);

  for (let index = 0; index < 7; index += 1) {
    const day = new Date(weekStart);
    day.setDate(weekStart.getDate() + index);
    const dayKey = toDateInputValue(day);
    const minutes = weekdayMinutes.get(dayKey) || 0;
    const dayCategories = weekdayCategoryMinutes.get(dayKey) || new Map();
    const row = document.createElement("div");
    row.className = "weekday-bar-row";

    const header = document.createElement("div");
    header.className = "weekday-bar-header";

    const label = document.createElement("span");
    label.textContent = new Intl.DateTimeFormat("de-DE", { weekday: "short" }).format(day);
    header.append(label);

    const value = document.createElement("span");
    value.textContent = formatAnalyticsDuration(minutes);
    header.append(value);
    row.append(header);

    const track = document.createElement("div");
    track.className = "weekday-bar-track";

    const totalWidth = maxWeekdayMinutes ? (minutes / maxWeekdayMinutes) * 100 : 0;
    const segments = [...dayCategories.entries()].sort((a, b) => b[1] - a[1]);

    segments.forEach(([category, categoryMinute]) => {
      const fill = document.createElement("div");
      fill.className = "weekday-bar-fill";
      fill.style.width = `${minutes ? (categoryMinute / minutes) * totalWidth : 0}%`;
      fill.style.background = CATEGORY_COLORS[category] || CATEGORY_COLORS.Sonstiges;
      fill.title = `${category}: ${formatAnalyticsDuration(categoryMinute)}`;
      track.append(fill);
    });

    row.append(track);

    weekdayBars.append(row);
  }
}

function getMinutesSinceDayStart(date) {
  return date.getHours() * 60 + date.getMinutes();
}

function loadCalendarState() {
  try {
    const storedMode = localStorage.getItem(CALENDAR_VIEW_MODE_KEY);
    const storedDate = localStorage.getItem(CALENDAR_SELECTED_DATE_KEY);
    const parsedDate = storedDate ? new Date(`${storedDate}T00:00`) : null;

    if (storedMode && Object.prototype.hasOwnProperty.call(CALENDAR_VIEW_MODES, storedMode)) {
      calendarViewMode = storedMode;
    }

    if (parsedDate && !Number.isNaN(parsedDate.getTime())) {
      calendarSelectedDate = parsedDate;
    }
  } catch (error) {
    calendarViewMode = "7days";
    calendarSelectedDate = new Date();
  }
}

function saveCalendarState() {
  try {
    localStorage.setItem(CALENDAR_VIEW_MODE_KEY, calendarViewMode);
    localStorage.setItem(CALENDAR_SELECTED_DATE_KEY, toDateInputValue(calendarSelectedDate));
  } catch (error) {
    // Calendar state is helpful, but not critical for time tracking.
  }
}

function getCalendarRange() {
  if (calendarViewMode === "month") {
    return {
      start: getMonthStart(calendarSelectedDate),
      end: getMonthEnd(calendarSelectedDate),
    };
  }

  const dayCount = CALENDAR_VIEW_MODES[calendarViewMode] || 7;
  const start = calendarViewMode === "7days" ? getWeekStart(calendarSelectedDate) : startOfDay(calendarSelectedDate);

  return {
    start,
    end: addDays(start, dayCount),
  };
}

function getEntriesForRange(start, end) {
  return getEntriesForActiveUser().filter((entry) => entry.startedAt >= start && entry.startedAt < end);
}

function formatCalendarPeriod(start, end) {
  if (calendarViewMode === "month") {
    return new Intl.DateTimeFormat("de-DE", {
      month: "long",
      year: "numeric",
    }).format(start);
  }

  const lastVisibleDay = addDays(end, -1);

  if (toDateInputValue(start) === toDateInputValue(lastVisibleDay)) {
    return new Intl.DateTimeFormat("de-DE", {
      weekday: "long",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).format(start);
  }

  return `${formatDate(start)} bis ${formatDate(lastVisibleDay)}`;
}

function updateCalendarToolbar(start, end) {
  calendarViewModeSelect.value = calendarViewMode;
  calendarPeriodLabel.textContent = formatCalendarPeriod(start, end);
}

function renderWeekplan() {
  const { start, end } = getCalendarRange();
  const dayCount = calendarViewMode === "month" ? 0 : Math.round((end - start) / 86400000);
  const visibleStart = 6 * 60;
  const visibleEnd = 24 * 60;
  const visibleMinutes = visibleEnd - visibleStart;
  const calendarEntries = getEntriesForRange(start, end);
  updateCalendarToolbar(start, end);
  weekplanDays.innerHTML = "";
  weekplanDays.className = "weekplan-days";
  weekplanDays.dataset.viewMode = calendarViewMode;
  weekplanDays.classList.add(`weekplan-days-${calendarViewMode}`);
  weekplanHours.hidden = calendarViewMode === "month";

  if (calendarViewMode === "month") {
    renderMonthCalendar(start, end, calendarEntries);
    return;
  }

  for (let index = 0; index < dayCount; index += 1) {
    const day = addDays(start, index);
    const dayKey = toDateInputValue(day);
    const dayEntries = calendarEntries
      .filter((entry) => toDateInputValue(entry.startedAt) === dayKey)
      .sort((a, b) => a.startedAt.getTime() - b.startedAt.getTime());
    const dayColumn = document.createElement("section");
    dayColumn.className = "weekplan-day";

    const title = document.createElement("h3");
    title.textContent = new Intl.DateTimeFormat("de-DE", {
      weekday: "short",
      day: "2-digit",
      month: "2-digit",
    }).format(day);
    dayColumn.append(title);

    const timeline = document.createElement("div");
    timeline.className = "weekplan-timeline";

    if (!dayEntries.length) {
      const empty = document.createElement("p");
      empty.className = "weekplan-empty";
      empty.textContent = "Keine Einträge";
      timeline.append(empty);
    }

    dayEntries.forEach((entry) => {
      const startMinute = Math.max(visibleStart, getMinutesSinceDayStart(entry.startedAt));
      const endMinute = Math.min(visibleEnd, getMinutesSinceDayStart(entry.endedAt));

      if (endMinute <= visibleStart || startMinute >= visibleEnd || endMinute <= startMinute) {
        return;
      }

      const block = document.createElement("article");
      block.className = `weekplan-entry weekplan-entry-${calendarViewMode}`;
      block.style.top = `${((startMinute - visibleStart) / visibleMinutes) * 100}%`;
      block.style.height = `${((endMinute - startMinute) / visibleMinutes) * 100}%`;
      block.style.background = CATEGORY_COLORS[entry.category] || CATEGORY_COLORS.Sonstiges;
      block.title = `${entry.activity} · ${entry.category} · ${formatTime(entry.startedAt)} bis ${formatTime(entry.endedAt)}`;

      const label = document.createElement("strong");
      label.textContent = entry.activity;
      block.append(label);

      const time = document.createElement("span");
      time.textContent =
        calendarViewMode === "day"
          ? `${entry.category} · ${formatTime(entry.startedAt)}-${formatTime(entry.endedAt)} · ${getEntryDurationMinutes(entry)} Min.`
          : `${formatTime(entry.startedAt)}-${formatTime(entry.endedAt)}`;
      block.append(time);
      timeline.append(block);
    });

    dayColumn.append(timeline);
    weekplanDays.append(dayColumn);
  }
}

function renderMonthCalendar(monthStart, monthEnd, monthEntries) {
  weekplanDays.classList.add("calendar-month-grid");
  const gridStart = getWeekStart(monthStart);
  const gridEnd = addDays(getWeekStart(addDays(monthEnd, 6)), 7);

  for (let day = new Date(gridStart); day < gridEnd; day = addDays(day, 1)) {
    const currentDay = new Date(day);
    const dayKey = toDateInputValue(currentDay);
    const dayEntries = monthEntries.filter((entry) => toDateInputValue(entry.startedAt) === dayKey);
    const totalMinutes = dayEntries.reduce(
      (total, entry) => total + Math.max(0, (entry.endedAt.getTime() - entry.startedAt.getTime()) / 60000),
      0,
    );
    const categorySet = [...new Set(dayEntries.map((entry) => entry.category))].slice(0, 4);
    const dayButton = document.createElement("button");
    dayButton.type = "button";
    dayButton.className = "calendar-month-day";
    dayButton.dataset.date = dayKey;

    if (currentDay.getMonth() !== monthStart.getMonth()) {
      dayButton.classList.add("is-outside-month");
    }

    const dayNumber = document.createElement("strong");
    dayNumber.textContent = new Intl.DateTimeFormat("de-DE", { day: "2-digit" }).format(currentDay);
    dayButton.append(dayNumber);

    const total = document.createElement("span");
    total.textContent = totalMinutes ? formatAnalyticsDuration(totalMinutes) : "";
    dayButton.append(total);

    const indicators = document.createElement("span");
    indicators.className = "calendar-category-indicators";
    categorySet.forEach((category) => {
      const indicator = document.createElement("i");
      indicator.style.background = CATEGORY_COLORS[category] || CATEGORY_COLORS.Sonstiges;
      indicators.append(indicator);
    });
    dayButton.append(indicators);

    weekplanDays.append(dayButton);
  }
}

function shiftCalendarPeriod(direction) {
  if (calendarViewMode === "month") {
    calendarSelectedDate = addMonths(calendarSelectedDate, direction);
  } else {
    const dayCount = CALENDAR_VIEW_MODES[calendarViewMode] || 7;
    calendarSelectedDate = addDays(calendarSelectedDate, dayCount * direction);
  }

  saveCalendarState();
  renderWeekplan();
}

function showTodayInCalendar() {
  handleCalendarViewModeChange();
  calendarSelectedDate = new Date();
  saveCalendarState();
  renderWeekplan();
}

function changeCalendarViewMode(nextMode) {
  if (!Object.prototype.hasOwnProperty.call(CALENDAR_VIEW_MODES, nextMode)) {
    return;
  }

  calendarViewMode = nextMode;
  saveCalendarState();
  renderWeekplan();
}

function handleCalendarViewModeChange() {
  changeCalendarViewMode(calendarViewModeSelect.value);
}

function openCalendarDay(dateValue) {
  const selectedDate = new Date(`${dateValue}T00:00`);

  if (Number.isNaN(selectedDate.getTime())) {
    return;
  }

  calendarViewMode = "day";
  calendarSelectedDate = selectedDate;
  saveCalendarState();
  renderWeekplan();
}

function escapeCsvValue(value) {
  const text = String(value ?? "");

  return `"${text.replaceAll('"', '""')}"`;
}

function renderExportSummary() {
  const activeCount = getEntriesForActiveUser().length;
  const totalCount = timeEntries.length;

  exportSummary.textContent =
    exportScopeSelect.value === "all"
      ? `${totalCount} Einträge von allen Nutzern werden als CSV exportiert.`
      : `${activeCount} Einträge von ${getUserName(activeUserId)} werden als CSV exportiert.`;
}

function createCsvExport(entries = getExportEntries()) {
  const header = [
    "Nutzer-ID",
    "Nutzername",
    "Datum",
    "Tätigkeit",
    "Kategorie",
    "Arbeitsbeginn",
    "Arbeitsende",
    "Dauer in Minuten",
    "Notiz",
    "bearbeitet",
    "nachgetragen",
  ];
  const rows = [...entries]
    .sort((a, b) => b.startedAt.getTime() - a.startedAt.getTime())
    .map((entry) => [
      getValidUserId(entry.user_id),
      getUserName(entry.user_id),
      formatDate(entry.startedAt),
      entry.activity,
      entry.category,
      formatTime(entry.startedAt),
      formatTime(entry.endedAt),
      getEntryDurationMinutes(entry),
      entry.note,
      entry.edited ? "ja" : "nein",
      entry.manual ? "ja" : "nein",
    ]);

  return [header, ...rows].map((row) => row.map(escapeCsvValue).join(";")).join("\r\n");
}

function downloadCsvExport() {
  const exportEntries = getExportEntries();

  if (!exportEntries.length) {
    exportMessage.textContent =
      exportScopeSelect.value === "all"
        ? "Es gibt noch keine Zeiteinträge für den Export."
        : `Es gibt noch keine Zeiteinträge für ${getUserName(activeUserId)}.`;
    exportMessage.hidden = false;
    return;
  }

  const csv = `\uFEFF${createCsvExport(exportEntries)}`;
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `timekeeper_export_${formatFileDate(new Date())}.csv`;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  exportMessage.hidden = true;
}

function showSettingsMessage(message, type = "info") {
  settingsMessage.textContent = message;
  settingsMessage.dataset.type = type;
  settingsMessage.hidden = false;
}

function clearSettingsMessage() {
  settingsMessage.textContent = "";
  settingsMessage.removeAttribute("data-type");
  settingsMessage.hidden = true;
}

function renderReminderSettingsForm() {
  const settings = getReminderSettings();
  remindersEnabledInput.checked = settings.enabled;
  reminderTextSettingInput.value = settings.text;
  reminderTimeInputs.forEach((input, index) => {
    input.value = settings.times[index] || DEFAULT_REMINDER_SETTINGS.times[index];
  });
  targetWorkHoursInput.value = String(settings.targetWorkHours);
}

function collectReminderSettingsFromForm() {
  return {
    enabled: remindersEnabledInput.checked,
    text: reminderTextSettingInput.value,
    times: reminderTimeInputs.map((input) => input.value),
    targetWorkHours: Number(targetWorkHoursInput.value),
  };
}

function saveReminderSettingsFromForm() {
  saveReminderSettings(collectReminderSettingsFromForm());

  if (!getReminderSettings().enabled || getTodayTotalMinutes() >= getTargetWorkMinutes()) {
    hideInAppReminder();
  }
}

function restoreDefaultReminderSettings() {
  saveReminderSettings(DEFAULT_REMINDER_SETTINGS);
  renderReminderSettingsForm();
  hideInAppReminder();
  showSettingsMessage("Erinnerungen wurden auf Standardwerte zurückgesetzt.", "success");
}

function parseCsvRows(text) {
  const rows = [];
  let row = [];
  let field = "";
  let isQuoted = false;
  const normalizedText = text.replace(/^\uFEFF/, "");

  for (let index = 0; index < normalizedText.length; index += 1) {
    const character = normalizedText[index];
    const nextCharacter = normalizedText[index + 1];

    if (character === '"') {
      if (isQuoted && nextCharacter === '"') {
        field += '"';
        index += 1;
      } else {
        isQuoted = !isQuoted;
      }
      continue;
    }

    if (character === ";" && !isQuoted) {
      row.push(field);
      field = "";
      continue;
    }

    if ((character === "\n" || character === "\r") && !isQuoted) {
      if (character === "\r" && nextCharacter === "\n") {
        index += 1;
      }
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
      continue;
    }

    field += character;
  }

  if (field || row.length) {
    row.push(field);
    rows.push(row);
  }

  return rows.filter((currentRow) => currentRow.some((value) => value.trim()));
}

function normalizeCsvHeader(value) {
  return value
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ");
}

function getCsvValue(row, headerMap, headerName) {
  const columnIndex = headerMap.get(headerName);

  return columnIndex === undefined ? "" : (row[columnIndex] || "").trim();
}

function parseCsvBoolean(value) {
  return ["ja", "true", "1", "x"].includes(value.trim().toLowerCase());
}

function parseCsvDate(value) {
  const trimmedValue = value.trim();
  const germanMatch = trimmedValue.match(/^(\d{1,2})\.(\d{1,2})\.(\d{4})$/);
  const isoMatch = trimmedValue.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);

  if (germanMatch) {
    return {
      year: Number(germanMatch[3]),
      month: Number(germanMatch[2]) - 1,
      day: Number(germanMatch[1]),
    };
  }

  if (isoMatch) {
    return {
      year: Number(isoMatch[1]),
      month: Number(isoMatch[2]) - 1,
      day: Number(isoMatch[3]),
    };
  }

  return null;
}

function parseCsvTime(value) {
  const match = value.trim().match(/^(\d{1,2}):(\d{2})$/);

  if (!match) {
    return null;
  }

  const hours = Number(match[1]);
  const minutes = Number(match[2]);

  if (hours > 23 || minutes > 59) {
    return null;
  }

  return {
    hours,
    minutes,
  };
}

function createDateFromCsvParts(dateParts, timeParts) {
  if (!dateParts || !timeParts) {
    return null;
  }

  const date = new Date(dateParts.year, dateParts.month, dateParts.day, timeParts.hours, timeParts.minutes);

  if (
    Number.isNaN(date.getTime()) ||
    date.getFullYear() !== dateParts.year ||
    date.getMonth() !== dateParts.month ||
    date.getDate() !== dateParts.day
  ) {
    return null;
  }

  return date;
}

function entriesFromCsvText(text) {
  const rows = parseCsvRows(text);

  if (rows.length < 2) {
    return [];
  }

  const headerMap = new Map(rows[0].map((header, index) => [normalizeCsvHeader(header), index]));
  const importedEntries = [];

  rows.slice(1).forEach((row, index) => {
    const activity = getCsvValue(row, headerMap, "tatigkeit");
    const category = getCsvValue(row, headerMap, "kategorie");
    const dateParts = parseCsvDate(getCsvValue(row, headerMap, "datum"));
    const startParts = parseCsvTime(getCsvValue(row, headerMap, "arbeitsbeginn"));
    const endParts = parseCsvTime(getCsvValue(row, headerMap, "arbeitsende"));
    const startedAt = createDateFromCsvParts(dateParts, startParts);
    const endedAt = createDateFromCsvParts(dateParts, endParts);

    if (!activity || !category || !startedAt || !endedAt || endedAt <= startedAt) {
      return;
    }

    importedEntries.push({
      id: `${createEntryId()}-${index}`,
      activity,
      category,
      startedAt,
      endedAt,
      note: getCsvValue(row, headerMap, "notiz"),
      edited: parseCsvBoolean(getCsvValue(row, headerMap, "bearbeitet")),
      manual: parseCsvBoolean(getCsvValue(row, headerMap, "nachgetragen")),
      uploaded: true,
      user_id: activeUserId,
      created_at: getNowIsoString(),
      updated_at: getNowIsoString(),
    });
  });

  return importedEntries;
}

function deleteAllEntries() {
  const shouldDelete = window.confirm("Alle lokal gespeicherten Zeiteinträge wirklich löschen?");

  if (!shouldDelete) {
    showSettingsMessage("Löschen abgebrochen.");
    return;
  }

  if (!persistEntries([])) {
    showSettingsMessage("Daten konnten nicht gelöscht werden. Bitte Browser-Speicher prüfen.", "error");
    return;
  }

  timeEntries.splice(0, timeEntries.length);
  refreshEntryViews();
  showSettingsMessage("Alle Zeiteinträge wurden gelöscht.", "success");
}

function importCsvEntries(event) {
  const file = event.target.files?.[0];

  if (!file) {
    return;
  }

  const reader = new FileReader();

  reader.addEventListener("load", () => {
    const importedEntries = entriesFromCsvText(String(reader.result || ""));

    if (!importedEntries.length) {
      showSettingsMessage("Keine gültigen Zeiteinträge in der CSV gefunden.", "error");
      csvImportInput.value = "";
      return;
    }

    const nextEntries = [...importedEntries, ...timeEntries].sort(
      (a, b) => b.startedAt.getTime() - a.startedAt.getTime(),
    );

    if (!persistEntries(nextEntries)) {
      showSettingsMessage("CSV konnte nicht dauerhaft gespeichert werden. Bitte Browser-Speicher prüfen.", "error");
      csvImportInput.value = "";
      return;
    }

    timeEntries.splice(0, timeEntries.length, ...nextEntries);
    refreshEntryViews();
    showSettingsMessage(`${importedEntries.length} Einträge wurden hochgeladen und markiert.`, "success");
    csvImportInput.value = "";
  });

  reader.addEventListener("error", () => {
    showSettingsMessage("CSV-Datei konnte nicht gelesen werden.", "error");
    csvImportInput.value = "";
  });

  reader.readAsText(file, "utf-8");
}

function getTodayTotalMinutes() {
  const today = toDateInputValue(new Date());

  return getEntriesForActiveUser()
    .filter((entry) => toDateInputValue(entry.startedAt) === today)
    .reduce((total, entry) => total + Math.max(0, (entry.endedAt.getTime() - entry.startedAt.getTime()) / 60000), 0);
}

function getFiredReminderIds() {
  try {
    return JSON.parse(localStorage.getItem(REMINDER_FIRED_KEY)) || [];
  } catch (error) {
    return [];
  }
}

function markReminderAsFired(reminderId) {
  try {
    const firedReminderIds = new Set(getFiredReminderIds());
    firedReminderIds.add(reminderId);
    localStorage.setItem(REMINDER_FIRED_KEY, JSON.stringify([...firedReminderIds]));
  } catch (error) {
    // Reminder delivery should not block the rest of the app.
  }
}

function showInAppReminder(message = getReminderSettings().text, showPermissionButton = false) {
  reminderMessage.textContent = message;
  notificationPermissionButton.hidden = !showPermissionButton;
  reminderPanel.hidden = false;
  showReminderPopup(message);
}

function hideInAppReminder() {
  reminderPanel.hidden = true;
  hideReminderPopup();
}

function showReminderPopup(message = getReminderSettings().text) {
  reminderPopupMessage.textContent = message;
  reminderPopup.hidden = false;
}

function hideReminderPopup() {
  reminderPopup.hidden = true;
}

function canUseBrowserNotifications() {
  return "Notification" in window && window.isSecureContext;
}

function saveNotificationPermissionState(permission) {
  try {
    localStorage.setItem(NOTIFICATION_PERMISSION_KEY, permission);
  } catch (error) {
    // Permission memory is helpful, but not critical for time tracking.
  }
}

function getSavedNotificationPermissionState() {
  try {
    return localStorage.getItem(NOTIFICATION_PERMISSION_KEY);
  } catch (error) {
    return null;
  }
}

function syncNotificationPermissionState() {
  if (!canUseBrowserNotifications()) {
    saveNotificationPermissionState("unavailable");
    return;
  }

  saveNotificationPermissionState(Notification.permission);
}

function initializeNotificationPermissionState() {
  const savedPermission = getSavedNotificationPermissionState();

  if (!canUseBrowserNotifications()) {
    if (savedPermission === "granted") {
      showInAppReminder("Der Browser hat die gespeicherte Benachrichtigungserlaubnis nicht wiederhergestellt.");
    }
    saveNotificationPermissionState("unavailable");
    return;
  }

  syncNotificationPermissionState();
}

async function requestNotificationPermission() {
  if (!canUseBrowserNotifications()) {
    saveNotificationPermissionState("unavailable");
    showInAppReminder(`Browser-Benachrichtigungen sind hier nicht möglich. ${getReminderSettings().text}`);
    return;
  }

  const permission = await Notification.requestPermission();
  saveNotificationPermissionState(permission);

  if (permission === "granted") {
    hideInAppReminder();
    return;
  }

  showInAppReminder(`Benachrichtigungen sind nicht erlaubt. ${getReminderSettings().text}`);
}

function deliverReminder(reminderId, totalMinutes = getTodayTotalMinutes(), markAsFired = true) {
  const reminderSettings = getReminderSettings();

  if (!reminderSettings.enabled) {
    hideInAppReminder();
    return "disabled";
  }

  if (totalMinutes >= reminderSettings.targetWorkHours * 60) {
    return "suppressed";
  }

  if (canUseBrowserNotifications() && Notification.permission === "granted") {
    new Notification(reminderSettings.text);
    hideInAppReminder();
    if (markAsFired) {
      markReminderAsFired(reminderId);
    }
    return "notification";
  }

  if (canUseBrowserNotifications() && Notification.permission === "default") {
    showInAppReminder(reminderSettings.text, true);
    if (markAsFired) {
      markReminderAsFired(reminderId);
    }
    return "in-app";
  }

  showInAppReminder(reminderSettings.text);
  if (markAsFired) {
    markReminderAsFired(reminderId);
  }
  return "in-app";
}

function checkReminders() {
  const reminderSettings = getReminderSettings();

  if (!reminderSettings.enabled) {
    hideInAppReminder();
    return;
  }

  const now = new Date();
  const today = toDateInputValue(now);
  const currentTime = formatReminderTime(now);
  const firedReminderIds = new Set(getFiredReminderIds());

  reminderSettings.times.forEach((reminderTime) => {
    const reminderId = `${today}-${reminderTime}`;

    if (currentTime === reminderTime && !firedReminderIds.has(reminderId)) {
      deliverReminder(reminderId);
    }
  });
}

function updateReminderTestOutput(result) {
  if (result === "disabled") {
    reminderTestOutput.textContent = "Reminder deaktiviert";
    return;
  }

  if (result === "suppressed") {
    reminderTestOutput.textContent = "Reminder unterdrückt wegen erreichter Ziel-Arbeitszeit";
    return;
  }

  reminderTestOutput.textContent = "Reminder ausgelöst";
  showReminderPopup(getReminderSettings().text);
}

function runReminderTest(totalMinutes = getTodayTotalMinutes()) {
  const result = deliverReminder(`test-${Date.now()}`, totalMinutes, false);
  updateReminderTestOutput(result);
}

function scheduleReminderTest() {
  const scheduledAt = new Date(Date.now() + 60000);
  reminderTestOutput.textContent = `Reminder-Test geplant für ${formatReminderTime(scheduledAt)}.`;

  setTimeout(() => {
    runReminderTest();
  }, 60000);
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) {
    return;
  }

  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./service-worker.js")
      .then((registration) => registration.update())
      .catch(() => {
        // PWA support should never block time tracking.
      });
  });
}

function renderEditForm(entry) {
  const item = historyList.querySelector(`[data-entry-id="${entry.id}"]`);

  if (!item) {
    return;
  }

  item.innerHTML = "";

  const form = document.createElement("form");
  form.className = "history-edit-form";
  form.dataset.entryId = entry.id;

  form.innerHTML = `
    <label>
      Tätigkeit
      <input name="activity" type="text" value="${escapeHtml(entry.activity)}" required />
    </label>
    <label>
      Kategorie
      <select name="category" required>
        ${getCategoryNamesForActiveUserWithCurrent(entry.category)
          .map(
            (category) =>
              `<option value="${escapeHtml(category)}" ${category === entry.category ? "selected" : ""}>${escapeHtml(category)}</option>`,
          )
          .join("")}
      </select>
    </label>
    <label>
      Arbeitsbeginn
      <input name="startedAt" type="datetime-local" value="${toDateTimeInputValue(entry.startedAt)}" required />
    </label>
    <label>
      Arbeitsende
      <input name="endedAt" type="datetime-local" value="${toDateTimeInputValue(entry.endedAt)}" required />
    </label>
    <label>
      Notiz
      <textarea name="note" rows="3" placeholder="Notiz ergänzen">${escapeHtml(entry.note)}</textarea>
    </label>
    <p class="history-edit-message" hidden></p>
    <div class="history-actions">
      <button class="history-save-edit-button" type="submit">Änderung speichern</button>
      <button class="history-cancel-edit-button" type="button" data-action="cancel-edit">Abbrechen</button>
    </div>
  `;

  item.append(form);
}

function updateHistoryEntry(form) {
  const entry = timeEntries.find((item) => item.id === form.dataset.entryId);

  if (!entry) {
    return;
  }

  const formData = new FormData(form);
  const startedAt = new Date(formData.get("startedAt"));
  const endedAt = new Date(formData.get("endedAt"));
  const activity = formData.get("activity").trim();
  const message = form.querySelector(".history-edit-message");

  if (!activity) {
    message.textContent = "Bitte eine Tätigkeit eingeben.";
    message.hidden = false;
    return;
  }

  if (Number.isNaN(startedAt.getTime()) || Number.isNaN(endedAt.getTime())) {
    message.textContent = "Bitte Arbeitsbeginn und Arbeitsende vollständig eingeben.";
    message.hidden = false;
    return;
  }

  if (endedAt <= startedAt) {
    message.textContent = "Das Arbeitsende muss nach dem Arbeitsbeginn liegen.";
    message.hidden = false;
    return;
  }

  const nextEntries = timeEntries.map((item) =>
    item.id === entry.id
      ? {
          ...item,
          activity,
          category: formData.get("category"),
          startedAt,
          endedAt,
          note: formData.get("note").trim(),
          edited: true,
          updated_at: getNowIsoString(),
        }
      : item,
  );

  if (!persistEntries(nextEntries)) {
    return;
  }

  timeEntries.splice(0, timeEntries.length, ...nextEntries);
  renderHistory();
  renderAnalytics();
  renderWeekplan();
  if (getTodayTotalMinutes() >= getTargetWorkMinutes()) {
    hideInAppReminder();
  }
  updateActivitySuggestions();
}

function deleteHistoryEntry(entryId) {
  const entryIndex = timeEntries.findIndex((entry) => entry.id === entryId);

  if (entryIndex === -1) {
    return;
  }

  const shouldDelete = window.confirm("Diesen Eintrag wirklich löschen?");

  if (!shouldDelete) {
    return;
  }

  const nextEntries = timeEntries.filter((entry) => entry.id !== entryId);

  if (!persistEntries(nextEntries)) {
    return;
  }

  timeEntries.splice(0, timeEntries.length, ...nextEntries);
  renderHistory();
  renderAnalytics();
  renderWeekplan();
  if (getTodayTotalMinutes() >= getTargetWorkMinutes()) {
    hideInAppReminder();
  }
  updateActivitySuggestions();
}

function saveCurrentEntry() {
  if (!timerStartedDate || !timerStoppedDate) {
    resetTimerScreen();
    return;
  }

  const nextEntries = [
    {
      id: createEntryId(),
      activity: activeActivity,
      category: activeCategory,
      startedAt: timerStartedDate,
      endedAt: timerStoppedDate,
      note: noteInput.value.trim(),
      edited: false,
      manual: false,
      uploaded: false,
      user_id: activeUserId,
      created_at: getNowIsoString(),
      updated_at: getNowIsoString(),
    },
    ...timeEntries,
  ];

  if (!persistEntries(nextEntries)) {
    showTimerMessage("Eintrag konnte nicht dauerhaft gespeichert werden. Bitte Browser-Speicher prüfen.", "error");
    return;
  }

  clearActiveTimer();
  timeEntries.splice(0, timeEntries.length, ...nextEntries);

  renderHistory();
  renderAnalytics();
  renderWeekplan();
  if (getTodayTotalMinutes() >= getTargetWorkMinutes()) {
    hideInAppReminder();
  }
  updateActivitySuggestions();
  resetTimerScreen();
  showHistoryView();
}

function showManualMessage(message) {
  manualMessage.textContent = message;
  manualMessage.hidden = false;
}

function clearManualForm() {
  manualForm.reset();
  manualMessage.hidden = true;
}

function saveManualEntry(event) {
  event.preventDefault();

  const formData = new FormData(manualForm);
  const activity = formData.get("activity").trim();
  const category = formData.get("category");
  const date = formData.get("date");
  const start = formData.get("start");
  const end = formData.get("end");
  const note = formData.get("note").trim();

  if (!activity || !category || !date || !start || !end) {
    showManualMessage("Bitte Tätigkeit, Kategorie, Datum, Arbeitsbeginn und Arbeitsende ausfüllen.");
    return;
  }

  const startedAt = new Date(`${date}T${start}`);
  const endedAt = new Date(`${date}T${end}`);

  if (Number.isNaN(startedAt.getTime()) || Number.isNaN(endedAt.getTime())) {
    showManualMessage("Bitte Datum, Arbeitsbeginn und Arbeitsende vollständig eingeben.");
    return;
  }

  if (endedAt <= startedAt) {
    showManualMessage("Das Arbeitsende muss nach dem Arbeitsbeginn liegen.");
    return;
  }

  const nextEntries = [
    {
      id: createEntryId(),
      activity,
      category,
      startedAt,
      endedAt,
      note,
      edited: false,
      manual: true,
      uploaded: false,
      user_id: activeUserId,
      created_at: getNowIsoString(),
      updated_at: getNowIsoString(),
    },
    ...timeEntries,
  ];

  if (!persistEntries(nextEntries)) {
    showManualMessage("Eintrag konnte nicht dauerhaft gespeichert werden. Bitte Browser-Speicher prüfen.");
    return;
  }

  timeEntries.splice(0, timeEntries.length, ...nextEntries);

  renderHistory();
  renderAnalytics();
  renderWeekplan();
  if (getTodayTotalMinutes() >= getTargetWorkMinutes()) {
    hideInAppReminder();
  }
  updateActivitySuggestions();
  clearManualForm();
  showHistoryView();
}

function warnIfRunningEntryChanges() {
  if (!isTimerRunning()) {
    clearTimerMessage();
    return;
  }

  const activityChanged = activityInput.value.trim() !== activeActivity;
  const categoryChanged = categorySelect.value !== activeCategory;

  if (activityChanged || categoryChanged) {
    showTimerMessage(
      "Es läuft bereits eine Tätigkeit. Möchtest du diese beenden und eine neue starten?",
      "warning",
    );
    return;
  }

  clearTimerMessage();
}

updateCurrentDateTime();
setInterval(updateCurrentDateTime, 30000);

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";

  menuButton.setAttribute("aria-expanded", String(!isOpen));
  menuPanel.hidden = isOpen;
});

startButton.addEventListener("click", () => {
  if (isTimerRunning()) {
    stopTimer();
    return;
  }

  startTimer();
});

activityInput.addEventListener("input", warnIfRunningEntryChanges);
categorySelect.addEventListener("change", warnIfRunningEntryChanges);
saveButton.addEventListener("click", saveCurrentEntry);
discardButton.addEventListener("click", resetTimerScreen);
historyLink.addEventListener("click", (event) => {
  event.preventDefault();
  showHistoryView();
});
analyticsLink.addEventListener("click", (event) => {
  event.preventDefault();
  showAnalyticsView();
});
weekplanLink.addEventListener("click", (event) => {
  event.preventDefault();
  showWeekplanView();
});
calendarViewModeSelect.addEventListener("input", handleCalendarViewModeChange);
calendarViewModeSelect.addEventListener("change", handleCalendarViewModeChange);
weekplanView.addEventListener("input", (event) => {
  if (event.target === calendarViewModeSelect) {
    handleCalendarViewModeChange();
  }
});
weekplanView.addEventListener("change", (event) => {
  if (event.target === calendarViewModeSelect) {
    handleCalendarViewModeChange();
  }
});
calendarPrevButton.addEventListener("click", () => {
  handleCalendarViewModeChange();
  shiftCalendarPeriod(-1);
});
calendarTodayButton.addEventListener("click", showTodayInCalendar);
calendarNextButton.addEventListener("click", () => {
  handleCalendarViewModeChange();
  shiftCalendarPeriod(1);
});
weekplanDays.addEventListener("click", (event) => {
  const monthDay = event.target.closest(".calendar-month-day");

  if (monthDay) {
    openCalendarDay(monthDay.dataset.date);
  }
});
exportLink.addEventListener("click", (event) => {
  event.preventDefault();
  showExportView();
});
settingsLink.addEventListener("click", (event) => {
  event.preventDefault();
  showSettingsView();
});
manualLink.addEventListener("click", (event) => {
  event.preventDefault();
  showManualView();
});
historyList.addEventListener("click", (event) => {
  const actionButton = event.target.closest("[data-action]");

  if (!actionButton) {
    return;
  }

  const entry = timeEntries.find((item) => item.id === actionButton.dataset.entryId);

  if (actionButton.dataset.action === "edit" && entry) {
    renderEditForm(entry);
    return;
  }

  if (actionButton.dataset.action === "delete") {
    deleteHistoryEntry(actionButton.dataset.entryId);
    return;
  }

  if (actionButton.dataset.action === "cancel-edit") {
    renderHistory();
  }
});
historyList.addEventListener("submit", (event) => {
  event.preventDefault();
  updateHistoryEntry(event.target);
});
backButton.addEventListener("click", () => {
  showTimerView();
  window.location.hash = "";
});
manualForm.addEventListener("submit", saveManualEntry);
exportCsvButton.addEventListener("click", downloadCsvExport);
exportScopeSelect.addEventListener("change", () => {
  renderExportSummary();
  exportMessage.hidden = true;
});
categorySettingsForm.addEventListener("submit", addCategory);
categorySettingsList.addEventListener("click", handleCategorySettingsAction);
cloudBackupButton.addEventListener("click", backupLocalEntriesToCloud);
cloudImportButton.addEventListener("click", importCloudEntriesToApp);
cloudConflictPanel.addEventListener("click", (event) => {
  const actionButton = event.target.closest("button[data-cloud-conflict-action]");

  if (!actionButton) {
    return;
  }

  const action = actionButton.dataset.cloudConflictAction;

  if (action === "keep-local-all") {
    resolveAllCloudConflicts("keep-local");
    return;
  }

  if (action === "use-cloud-all") {
    resolveAllCloudConflicts("use-cloud");
    return;
  }

  const conflictIndex = Number(actionButton.dataset.conflictIndex);

  if (!Number.isInteger(conflictIndex)) {
    return;
  }

  if (action === "keep-local") {
    resolveCloudConflict(conflictIndex, "keep-local");
  }

  if (action === "use-cloud") {
    resolveCloudConflict(conflictIndex, "use-cloud");
  }

  if (action === "keep-both") {
    resolveCloudConflict(conflictIndex, "keep-both");
  }
});
deleteAllDataButton.addEventListener("click", deleteAllEntries);
csvImportInput.addEventListener("change", importCsvEntries);
reminderSettingsForm.addEventListener("input", saveReminderSettingsFromForm);
reminderSettingsForm.addEventListener("change", saveReminderSettingsFromForm);
restoreReminderDefaultsButton.addEventListener("click", restoreDefaultReminderSettings);
notificationPermissionButton.addEventListener("click", requestNotificationPermission);
reminderPopupClose.addEventListener("click", hideReminderPopup);
reminderPopupManual.addEventListener("click", () => {
  hideReminderPopup();
  showManualView();
});
developerModeToggle.addEventListener("change", () => {
  setDeveloperMode(developerModeToggle.checked);
  window.location.reload();
});
activeUserSelect.addEventListener("change", saveActiveUserFromSettings);
userSettingsForm.addEventListener("input", saveUserNamesFromSettings);
userSettingsForm.addEventListener("change", saveUserNamesFromSettings);
testReminderNowButton.addEventListener("click", () => runReminderTest());
testReminderUnderButton.addEventListener("click", () => runReminderTest(Math.max(0, getTargetWorkMinutes() - 1)));
testReminderFullButton.addEventListener("click", () => runReminderTest(getTargetWorkMinutes()));
scheduleReminderTestButton.addEventListener("click", scheduleReminderTest);
document.querySelectorAll('[data-view-link="timer"]').forEach((link) => {
  link.addEventListener("click", () => {
    showTimerView();
    window.location.hash = "";
  });
});
loadUserProfiles();
loadCategories();
loadPersistedEntries();
initializeSupabaseClient();
loadCalendarState();
renderHistory();
renderAnalytics();
renderWeekplan();
updateActivitySuggestions();
renderUserProfileSettings();
renderCategorySettings();
renderReminderSettingsForm();
renderSupabaseStatus();
renderExportSummary();
restoreActiveTimer();
registerServiceWorker();
initializeDeveloperMode();
initializeNotificationPermissionState();
checkReminders();
synchronizeWithSupabaseOnStartup();
setInterval(checkReminders, 30000);

if (window.location.hash === "#verlauf") {
  showHistoryView();
}

if (window.location.hash === "#auswertungen") {
  showAnalyticsView();
}

if (window.location.hash === "#wochenplan") {
  showWeekplanView();
}

if (window.location.hash === "#exportieren") {
  showExportView();
}

if (window.location.hash === "#einstellungen") {
  showSettingsView();
}

if (window.location.hash === "#nachtragen") {
  showManualView();
}
