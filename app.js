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
const timerUserSelect = document.querySelector("#timerUserSelect");
const timerSyncStatus = document.querySelector("#timerSyncStatus");
const timerReminderStatus = document.querySelector("#timerReminderStatus");
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
const capacityStatus = document.querySelector("#capacityStatus");
const capacityProgressFill = document.querySelector("#capacityProgressFill");
const capacityProgressPercent = document.querySelector("#capacityProgressPercent");
const capacityStats = document.querySelector("#capacityStats");
const focusStats = document.querySelector("#focusStats");
const weekComparisonStats = document.querySelector("#weekComparisonStats");
const interruptionStats = document.querySelector("#interruptionStats");
const fragmentationCard = document.querySelector("#fragmentationCard");
const analyticsDaySelect = document.querySelector("#analyticsDaySelect");
const dayTimelineTrack = document.querySelector("#dayTimelineTrack");
const dayTimelineEmpty = document.querySelector("#dayTimelineEmpty");
const dayQualityStats = document.querySelector("#dayQualityStats");
const weekplanHours = document.querySelector("#weekplanHours");
const weekplanDays = document.querySelector("#weekplanDays");
const calendarDayDetail = document.querySelector("#calendarDayDetail");
const calendarDayDetailDate = document.querySelector("#calendarDayDetailDate");
const calendarDayDetailTotal = document.querySelector("#calendarDayDetailTotal");
const calendarDayDetailList = document.querySelector("#calendarDayDetailList");
const calendarDayDetailClose = document.querySelector("#calendarDayDetailClose");
const calendarDayDetailAdd = document.querySelector("#calendarDayDetailAdd");
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
const developerSettingsPanel = document.querySelector(".settings-panel-developer");
const developerModeToggle = document.querySelector("#developerModeToggle");
const activeUserSelect = document.querySelector("#activeUserSelect");
const userSettingsForm = document.querySelector("#userSettingsForm");
const userProfileMessage = document.querySelector("#userProfileMessage");
const userSettingsList = document.querySelector("#userSettingsList");
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
const resetSelectedUserLocalButton = document.querySelector("#resetSelectedUserLocalButton");
const resetSelectedUserCloudButton = document.querySelector("#resetSelectedUserCloudButton");
const resetAllLocalButton = document.querySelector("#resetAllLocalButton");
const resetAllCloudButton = document.querySelector("#resetAllCloudButton");
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
const LAST_SYNC_KEY = "timekeeper.cloud.lastSync.v1";
const REMINDER_SETTINGS_KEY = "timekeeper.reminderSettings.v1";
const CALENDAR_VIEW_MODE_KEY = "timekeeper.calendar.viewMode.v1";
const CALENDAR_SELECTED_DATE_KEY = "timekeeper.calendar.selectedDate.v1";
const NAVIGATION_VISIBLE_KEY = "timekeeper.navigation.visible.v1";
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
const MAX_USER_COUNT = 25;
const DEFAULT_USERS = Array.from({ length: MAX_USER_COUNT }, (_, index) => ({
  id: `user_${index + 1}`,
  name: `Person ${index + 1}`,
  created_at: "2026-01-01T00:00:00.000Z",
  updated_at: "2026-01-01T00:00:00.000Z",
}));
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
const CALENDAR_VISIBLE_START = 6 * 60;
const CALENDAR_VISIBLE_END = 24 * 60;
const CALENDAR_VISIBLE_MINUTES = CALENDAR_VISIBLE_END - CALENDAR_VISIBLE_START;
const CALENDAR_HOUR_MARKERS = [6, 9, 12, 15, 18, 21, 24];
let calendarViewMode = "7days";
let calendarSelectedDate = new Date();
let calendarDetailDate = null;
let supabaseClient = null;
let timerStartedAt = null;
let timerStartedDate = null;
let timerStoppedDate = null;
let timerInterval = null;
let lastElapsedMilliseconds = 0;
let activeActivity = "";
let activeCategory = "";
let cloudImportConflicts = [];
let analyticsSelectedDay = null;
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
      .map((user) => [user.id, user]),
  );

  return DEFAULT_USERS.map((defaultUser) => ({
    id: defaultUser.id,
    name: String(savedUserMap.get(defaultUser.id)?.name || "").trim() || defaultUser.name,
    created_at: savedUserMap.get(defaultUser.id)?.created_at || defaultUser.created_at,
    updated_at:
      savedUserMap.get(defaultUser.id)?.updated_at ||
      savedUserMap.get(defaultUser.id)?.updatedAt ||
      (String(savedUserMap.get(defaultUser.id)?.name || "").trim() &&
      String(savedUserMap.get(defaultUser.id)?.name || "").trim() !== defaultUser.name
        ? getNowIsoString()
        : defaultUser.updated_at),
  }));
}

function getUserName(userId) {
  const validUserId = getValidUserId(userId);
  return users.find((user) => user.id === validUserId)?.name || DEFAULT_USERS[0].name;
}

function getDefaultUserName(userId) {
  const validUserId = getValidUserId(userId);
  return DEFAULT_USERS.find((user) => user.id === validUserId)?.name || DEFAULT_USERS[0].name;
}

function getUserUpdatedAtTime(user) {
  const updatedAt = new Date(user?.updated_at || user?.updatedAt || 0);
  return Number.isNaN(updatedAt.getTime()) ? 0 : updatedAt.getTime();
}

function loadUserProfiles() {
  try {
    users = normalizeUsers(JSON.parse(localStorage.getItem(USERS_KEY) || "[]"));
    activeUserId = getValidUserId(localStorage.getItem(ACTIVE_USER_KEY));
    saveUserProfiles();
  } catch (error) {
    users = normalizeUsers();
    activeUserId = DEFAULT_USERS[0].id;
    saveUserProfiles();
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

function renderTimerContext() {
  timerUserSelect.innerHTML = "";

  users.forEach((user) => {
    const option = document.createElement("option");
    option.value = user.id;
    option.textContent = user.name;
    timerUserSelect.append(option);
  });

  timerUserSelect.value = activeUserId;

  const cloudStatus = getSupabaseStatus();
  timerSyncStatus.textContent = cloudStatus.connected ? cloudStatus.message : "Nur lokal";
  timerSyncStatus.dataset.status = cloudStatus.connected ? "connected" : "local";

  const reminderSettings = getReminderSettings();
  timerReminderStatus.textContent = reminderSettings.enabled ? "Reminder aktiv" : "Reminder aus";
  timerReminderStatus.dataset.status = reminderSettings.enabled ? "active" : "inactive";
}

function renderUserProfileSettings() {
  activeUserSelect.innerHTML = "";
  userSettingsList.innerHTML = "";

  users.forEach((user) => {
    const option = document.createElement("option");
    option.value = user.id;
    option.textContent = user.name;
    activeUserSelect.append(option);

    const defaultUser = DEFAULT_USERS.find((item) => item.id === user.id);
    const label = document.createElement("label");
    label.className = "user-settings-item";
    label.htmlFor = `userName-${user.id}`;

    const labelText = document.createElement("span");
    labelText.textContent = defaultUser?.name || user.id;
    label.append(labelText);

    const input = document.createElement("input");
    input.id = `userName-${user.id}`;
    input.name = user.id;
    input.type = "text";
    input.value = user.name;
    input.maxLength = 60;
    input.placeholder = defaultUser?.name || user.id;
    input.dataset.userNameInput = user.id;
    label.append(input);

    userSettingsList.append(label);
  });

  activeUserSelect.value = activeUserId;
  renderTimerContext();
  userSettingsForm.hidden = false;
  userSettingsForm.removeAttribute("aria-hidden");
}

function setActiveUserProfile(userId, { showMessage = false } = {}) {
  activeUserId = getValidUserId(userId);
  analyticsSelectedDay = null;

  if (!saveUserProfiles()) {
    if (showMessage) {
      showUserProfileMessage("Nutzerprofil konnte nicht gespeichert werden.", "error");
    }
    return;
  }

  renderTimerContext();
  renderUserProfileSettings();
  renderCategorySettings();
  if (showMessage) {
    showUserProfileMessage(`${getUserName(activeUserId)} ist jetzt aktiv.`, "success");
  }
  refreshEntryViews();
}

function saveActiveUserFromSettings() {
  setActiveUserProfile(activeUserSelect.value, { showMessage: true });
}

function saveActiveUserFromStartscreen() {
  setActiveUserProfile(timerUserSelect.value);
}

function saveUserNamesFromSettings({ showMessage = false } = {}) {
  const now = getNowIsoString();
  const inputMap = new Map(
    Array.from(userSettingsList.querySelectorAll("[data-user-name-input]")).map((input) => [input.dataset.userNameInput, input]),
  );
  const previousUserMap = new Map(users.map((user) => [user.id, user]));

  users = DEFAULT_USERS.map((defaultUser) => {
    const previousUser = previousUserMap.get(defaultUser.id);
    const input = inputMap.get(defaultUser.id);
    const nextName = String(input?.value || "").trim() || defaultUser.name;
    const previousName = previousUser?.name || defaultUser.name;

    return {
      id: defaultUser.id,
      name: nextName,
      created_at: previousUser?.created_at || defaultUser.created_at,
      updated_at: nextName !== previousName ? now : previousUser?.updated_at || defaultUser.updated_at,
    };
  });

  if (!saveUserProfiles()) {
    showUserProfileMessage("Nutzernamen konnten nicht gespeichert werden. Bitte Browser-Speicher prüfen.", "error");
    return;
  }

  Array.from(activeUserSelect.options).forEach((option) => {
    option.textContent = getUserName(option.value);
  });
  activeUserSelect.value = activeUserId;
  renderTimerContext();
  refreshEntryViews();
  if (showMessage) {
    showUserProfileMessage("Nutzerprofile wurden gespeichert.", "success");
  } else {
    clearUserProfileMessage();
  }
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
  const now = getNowIsoString();

  return DEFAULT_CATEGORY_NAMES.map((name, index) => ({
    id: createCategoryId(userId, name),
    user_id: getValidUserId(userId),
    name,
    sort_order: index,
    created_at: now,
    updated_at: now,
  }));
}

function normalizeCategory(category, index = 0) {
  const userId = getValidUserId(category?.user_id);
  const name = String(category?.name || "").trim();
  const now = getNowIsoString();

  if (!name) {
    return null;
  }

  return {
    id: String(category?.id || createCategoryId(userId, name)),
    user_id: userId,
    name,
    sort_order: Number.isFinite(Number(category?.sort_order)) ? Number(category.sort_order) : index,
    created_at: category?.created_at || category?.createdAt || now,
    updated_at: category?.updated_at || category?.updatedAt || now,
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

function getCategoryUpdatedAtTime(category) {
  const updatedAt = new Date(category?.updated_at || category?.updatedAt || 0);
  return Number.isNaN(updatedAt.getTime()) ? 0 : updatedAt.getTime();
}

function areCategoriesDifferent(firstCategory, secondCategory) {
  return [
    "id",
    "user_id",
    "name",
    "sort_order",
    "created_at",
    "updated_at",
  ].some((key) => String(firstCategory[key] ?? "") !== String(secondCategory[key] ?? ""));
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
        <button class="settings-secondary-button" type="button" data-category-action="up" aria-label="${escapeHtml(category.name)} nach oben" ${index === 0 ? "disabled" : ""}>↑</button>
        <button class="settings-secondary-button" type="button" data-category-action="down" aria-label="${escapeHtml(category.name)} nach unten" ${index === userCategories.length - 1 ? "disabled" : ""}>↓</button>
        <button class="settings-secondary-button" type="button" data-category-action="rename">Ändern</button>
        <button class="settings-danger-button" type="button" data-category-action="delete">Entfernen</button>
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
  const now = getNowIsoString();
  categories.push({
    id: createCategoryId(activeUserId, name),
    user_id: activeUserId,
    name,
    sort_order: userCategories.length,
    created_at: now,
    updated_at: now,
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
  const oldUpdatedAt = category.updated_at;
  category.name = nextName;
  category.updated_at = getNowIsoString();

  if (!updateEntriesForRenamedCategory(oldName, nextName)) {
    category.name = oldName;
    category.updated_at = oldUpdatedAt;
    showCategorySettingsMessage("Einträge konnten nicht aktualisiert werden.", "error");
    return;
  }

  if (!saveCategories()) {
    category.name = oldName;
    category.updated_at = oldUpdatedAt;
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
  const now = getNowIsoString();
  getCategoriesForUser(userId).forEach((category, index) => {
    if (category.sort_order !== index) {
      category.sort_order = index;
      category.updated_at = now;
    }
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
  const now = getNowIsoString();
  userCategories[index].sort_order = userCategories[swapIndex].sort_order;
  userCategories[swapIndex].sort_order = currentOrder;
  userCategories[index].updated_at = now;
  userCategories[swapIndex].updated_at = now;
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
    key: String(config.SUPABASE_KEY || config.SUPABASE_ANON_KEY || "").trim(),
  };
}

function isSupabaseConfigured() {
  const config = getSupabaseConfig();

  return Boolean(config.url && config.key);
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
    supabaseClient = globalThis.supabase.createClient(config.url, config.key, {
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

function getLastSyncDate() {
  try {
    const lastSync = localStorage.getItem(LAST_SYNC_KEY);
    const date = lastSync ? new Date(lastSync) : null;

    return date && !Number.isNaN(date.getTime()) ? date : null;
  } catch (error) {
    return null;
  }
}

function markCloudSyncCompleted() {
  try {
    localStorage.setItem(LAST_SYNC_KEY, new Date().toISOString());
  } catch (error) {
    // Cloud status is helpful UI state, not core user data.
  }
}

function formatLastSyncTime(date) {
  return date.toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" });
}

function getSupabaseStatus() {
  if (!isSupabaseConfigured()) {
    return {
      connected: false,
      message: "Offline",
      detail: "Cloudspeicherung ist noch nicht eingerichtet.",
    };
  }

  if (!supabaseClient) {
    return {
      connected: false,
      message: "Offline",
      detail: "Supabase ist konfiguriert, aber der Client konnte nicht erstellt werden.",
    };
  }

  const lastSync = getLastSyncDate();

  return {
    connected: true,
    message: lastSync ? "Synchronisiert" : "Cloud verbunden",
    detail: "",
  };
}

function renderSupabaseStatus() {
  const status = getSupabaseStatus();
  cloudStorageStatus.textContent = status.message;
  cloudStorageStatus.dataset.status = status.connected ? "connected" : "local";
  cloudStorageDetail.textContent = status.detail;
  cloudStorageDetail.hidden = !status.detail;
  cloudBackupButton.disabled = !status.connected;
  cloudImportButton.disabled = !status.connected;
  resetSelectedUserCloudButton.disabled = !status.connected;
  resetAllCloudButton.disabled = !status.connected;
  renderTimerContext();
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
  const validUserId = getValidUserId(user.id);

  return {
    id: validUserId,
    name: String(user.name || getUserName(validUserId)).trim() || getUserName(validUserId),
    created_at: user.created_at || user.createdAt || now,
    updated_at: user.updated_at || user.updatedAt || now,
  };
}

function createSupabaseCategoryRecord(category) {
  const now = new Date().toISOString();

  return {
    id: category.id,
    user_id: getValidUserId(category.user_id),
    name: category.name,
    sort_order: Number(category.sort_order) || 0,
    created_at: category.created_at || category.createdAt || now,
    updated_at: category.updated_at || category.updatedAt || now,
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
      .map((user) => [user.id, user]),
  );

  if (!cloudUserMap.size) {
    return { error: null, updated: false };
  }

  const nextUsers = DEFAULT_USERS.map((defaultUser) => {
    const localUser = users.find((user) => user.id === defaultUser.id) || defaultUser;
    const cloudUser = cloudUserMap.get(defaultUser.id);
    const cloudName = String(cloudUser?.name || "").trim();
    const localName = String(localUser.name || defaultUser.name).trim() || defaultUser.name;
    const localIsCustom = localName !== defaultUser.name;
    const cloudIsDefault = !cloudName || cloudName === defaultUser.name;

    if (cloudName && !localIsCustom && !cloudIsDefault) {
      return {
        id: defaultUser.id,
        name: cloudName,
        created_at: cloudUser.created_at || localUser.created_at || defaultUser.created_at,
        updated_at: cloudUser.updated_at || cloudUser.updatedAt || localUser.updated_at || defaultUser.updated_at,
      };
    }

    return {
      id: defaultUser.id,
      name: localName,
      created_at: localUser.created_at || defaultUser.created_at,
      updated_at: localUser.updated_at || localUser.updatedAt || defaultUser.updated_at,
    };
  });
  const changed = nextUsers.some(
    (user) =>
      user.name !== getUserName(user.id) ||
      user.updated_at !== (users.find((localUser) => localUser.id === user.id)?.updated_at || DEFAULT_USERS.find((defaultUser) => defaultUser.id === user.id)?.updated_at),
  );

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

  const categoryMap = new Map();

  [...categories, ...cloudCategories].forEach((category) => {
    const existingCategory = categoryMap.get(category.id);

    if (!existingCategory) {
      categoryMap.set(category.id, category);
    }
  });

  const mergedCategories = [];
  const categoryNameMap = new Map();

  categoryMap.forEach((category) => {
    const nameKey = `${category.user_id}|${category.name.toLowerCase()}`;
    const existingIndex = categoryNameMap.get(nameKey);

    if (existingIndex === undefined) {
      categoryNameMap.set(nameKey, mergedCategories.length);
      mergedCategories.push(category);
      return;
    }

  });

  const nextCategories = ensureDefaultCategoriesForAllUsers(mergedCategories);
  const changed =
    nextCategories.length !== categories.length ||
    nextCategories.some((category, index) => areCategoriesDifferent(category, categories[index] || {}));

  categories = nextCategories;

  if (!saveCategories()) {
    return { error: { message: "Kategorien konnten nicht lokal gespeichert werden." }, updated: false };
  }

  if (changed) {
    renderCategorySettings();
    refreshEntryViews();
  }

  return { error: null, updated: changed };
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
  let skippedCount = 0;

  cloudEntries.forEach((cloudEntry) => {
    const sameIdIndex = nextEntries.findIndex((entry) => entry.id === cloudEntry.id);

    if (sameIdIndex >= 0) {
      skippedCount += 1;
      return;
    }

    const duplicate = nextEntries.find((entry) => getCloudEntryDuplicateKey(entry) === getCloudEntryDuplicateKey(cloudEntry));

    if (!duplicate) {
      nextEntries.push(cloudEntry);
      addedCount += 1;
      return;
    }

    skippedCount += 1;
  });

  if (addedCount) {
    const sortedEntries = nextEntries.sort((a, b) => b.startedAt.getTime() - a.startedAt.getTime());

    if (!persistEntries(sortedEntries)) {
      return { addedCount: 0, skippedCount: 0, error: { message: "Synchronisierte Daten konnten nicht lokal gespeichert werden." } };
    }

    timeEntries.splice(0, timeEntries.length, ...sortedEntries);
  }

  return { addedCount, skippedCount, error: null };
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
    showStartupSyncMessage("Offline");
    renderSupabaseStatus();
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
    markCloudSyncCompleted();
    renderSupabaseStatus();
    showStartupSyncMessage("Synchronisiert", "success");
  } catch (error) {
    showStartupSyncMessage(getSupabaseErrorMessage(error), "error");
  } finally {
    renderSupabaseStatus();
  }
}

async function backupLocalEntriesToCloud() {
  const status = getSupabaseStatus();
  renderSupabaseStatus();

  if (!status.connected) {
    showCloudStorageMessage("Offline", "error");
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
      markCloudSyncCompleted();
      showCloudStorageMessage("Gesichert", "success");
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

    markCloudSyncCompleted();
    showCloudStorageMessage("Gesichert", "success");
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
  const cloudDetailedDuplicateKey = getCloudEntryDuplicateKey(cloudEntry);

  return localEntries.filter(
    (localEntry) =>
      localEntry.id === cloudEntry.id ||
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
  markCloudSyncCompleted();
  renderSupabaseStatus();
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
    showCloudStorageMessage("Offline", "error");
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
      showCloudStorageMessage(userResult.updated || categoryResult.updated ? "Geladen" : "Nichts Neues");
      return;
    }

    const newEntries = [];
    const conflicts = [];
    const comparisonEntries = [...timeEntries];

    cloudEntries.forEach((cloudEntry) => {
      const duplicates = findDuplicateLocalEntries(cloudEntry, comparisonEntries);

      if (duplicates.length) {
        const hasConflict = duplicates.some(
          (duplicate) => duplicate.id !== cloudEntry.id || areEntriesDifferent(duplicate, cloudEntry),
        );

        if (!hasConflict) {
          return;
        }

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
      const imported = saveCloudImportEntries([...newEntries, ...timeEntries], "Geladen");

      if (!imported) {
        return;
      }
    }

    if (conflicts.length) {
      cloudImportConflicts = conflicts;
      renderCloudConflictPanel();
      showCloudStorageMessage(
        newEntries.length
          ? `${conflicts.length} Konflikte`
          : `${conflicts.length} Konflikte gefunden`,
        "info",
      );
      return;
    }

    if (!newEntries.length) {
      showCloudStorageMessage(userResult.updated || categoryResult.updated ? "Geladen" : "Nichts Neues");
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
      Number.isNaN(startedAt.getTime())
    ) {
      clearActiveTimer();
      return null;
    }

    return {
      activity: typeof activeTimer.activity === "string" ? activeTimer.activity : "",
      category: typeof activeTimer.category === "string" ? activeTimer.category : "",
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
    timerStateElement.textContent = activeActivity || "Timer läuft";
    elapsedTimeElement.hidden = false;
    completionPanel.hidden = true;
    startButton.textContent = "Stoppen";
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

function setActiveNavigation(viewName) {
  menuPanel.querySelectorAll("[data-view-link]").forEach((link) => {
    if (link.dataset.viewLink === viewName) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

const navigationLayoutQuery = window.matchMedia("(max-width: 719px)");
let isNavigationVisible = getStoredNavigationVisibility();

function getStoredNavigationVisibility() {
  try {
    const storedValue = localStorage.getItem(NAVIGATION_VISIBLE_KEY);
    return storedValue === null ? true : storedValue === "true";
  } catch (error) {
    return true;
  }
}

function persistNavigationVisibility() {
  try {
    localStorage.setItem(NAVIGATION_VISIBLE_KEY, String(isNavigationVisible));
  } catch (error) {
    // Navigation visibility is a UI preference; storage failures should not block the app.
  }
}

function usesPersistentNavigation() {
  return isNavigationVisible;
}

function applyNavigationVisibility() {
  document.documentElement.dataset.navigation = isNavigationVisible ? "visible" : "hidden";
  document.documentElement.dataset.navigationLayout = navigationLayoutQuery.matches ? "mobile" : "desktop";
  menuButton.hidden = false;
  menuButton.textContent = isNavigationVisible ? "–" : "Menü";
  menuButton.setAttribute("aria-expanded", String(isNavigationVisible));
  menuButton.setAttribute("aria-label", isNavigationVisible ? "Navigation ausblenden" : "Navigation einblenden");
  menuPanel.hidden = !isNavigationVisible;
}

function setNavigationVisibility(nextVisible, options = {}) {
  const { persist = true } = options;
  isNavigationVisible = Boolean(nextVisible);

  if (persist) {
    persistNavigationVisibility();
  }

  applyNavigationVisibility();
}

function closeNavigationMenu() {
  applyNavigationVisibility();
}

function showTimerView() {
  setActiveNavigation("timer");
  timerView.hidden = false;
  historyView.hidden = true;
  manualView.hidden = true;
  analyticsView.hidden = true;
  exportView.hidden = true;
  settingsView.hidden = true;
  weekplanView.hidden = true;
  closeNavigationMenu();
}

function showHistoryView() {
  setActiveNavigation("history");
  timerView.hidden = true;
  historyView.hidden = false;
  manualView.hidden = true;
  analyticsView.hidden = true;
  exportView.hidden = true;
  settingsView.hidden = true;
  weekplanView.hidden = true;
  closeNavigationMenu();
  window.location.hash = "verlauf";
}

function showManualView() {
  setActiveNavigation("timer");
  timerView.hidden = true;
  historyView.hidden = true;
  manualView.hidden = false;
  analyticsView.hidden = true;
  exportView.hidden = true;
  settingsView.hidden = true;
  weekplanView.hidden = true;
  manualMessage.hidden = true;
  manualForm.elements.date.value ||= toDateInputValue(new Date());
  closeNavigationMenu();
  window.location.hash = "nachtragen";
}

function showAnalyticsView() {
  setActiveNavigation("analytics");
  renderAnalytics();
  timerView.hidden = true;
  historyView.hidden = true;
  manualView.hidden = true;
  analyticsView.hidden = false;
  exportView.hidden = true;
  settingsView.hidden = true;
  weekplanView.hidden = true;
  closeNavigationMenu();
  window.location.hash = "auswertungen";
}

function showExportView() {
  setActiveNavigation("settings");
  renderExportSummary();
  timerView.hidden = true;
  historyView.hidden = true;
  manualView.hidden = true;
  analyticsView.hidden = true;
  exportView.hidden = false;
  settingsView.hidden = true;
  weekplanView.hidden = true;
  exportMessage.hidden = true;
  closeNavigationMenu();
  window.location.hash = "exportieren";
}

function showSettingsView() {
  setActiveNavigation("settings");
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
  closeNavigationMenu();
  window.location.hash = "einstellungen";
}

function showWeekplanView() {
  setActiveNavigation("weekplan");
  renderWeekplan();
  timerView.hidden = true;
  historyView.hidden = true;
  manualView.hidden = true;
  analyticsView.hidden = true;
  exportView.hidden = true;
  settingsView.hidden = true;
  weekplanView.hidden = false;
  closeNavigationMenu();
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
  developerSettingsPanel.hidden = !enabled;
  developerModeToggle.checked = enabled;

  try {
    localStorage.setItem(DEVELOPER_MODE_KEY, String(enabled));
  } catch (error) {
    // Developer mode is temporary and should not affect core app behavior.
  }

  if (!enabled) {
    clearUserProfileMessage();
  }
  renderUserProfileSettings();
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

function getEntriesForWeek(date, entries = getEntriesForActiveUser()) {
  const weekStart = getWeekStart(date);
  const weekEnd = getWeekEnd(date);

  return entries.filter((entry) => entry.startedAt >= weekStart && entry.startedAt < weekEnd);
}

function getPreviousWeekEntries(date = new Date(), entries = getEntriesForActiveUser()) {
  return getEntriesForWeek(addDays(getWeekStart(date), -1), entries);
}

function getEntryMinutes(entry) {
  return Math.max(0, (entry.endedAt.getTime() - entry.startedAt.getTime()) / 60000);
}

function getTotalMinutes(entries) {
  return entries.reduce((total, entry) => total + getEntryMinutes(entry), 0);
}

function getCategoryMinutes(entries) {
  const categoryMinutes = new Map();

  entries.forEach((entry) => {
    const category = entry.category || "Ohne Kategorie";
    categoryMinutes.set(category, (categoryMinutes.get(category) || 0) + getEntryMinutes(entry));
  });

  return categoryMinutes;
}

function sortEntriesByStart(entries) {
  return [...entries]
    .filter((entry) => entry?.startedAt instanceof Date && entry?.endedAt instanceof Date)
    .filter((entry) => !Number.isNaN(entry.startedAt.getTime()) && !Number.isNaN(entry.endedAt.getTime()))
    .filter((entry) => entry.endedAt > entry.startedAt)
    .sort((a, b) => a.startedAt.getTime() - b.startedAt.getTime());
}

function getEntriesGroupedByDay(entries) {
  const groupedEntries = new Map();

  sortEntriesByStart(entries).forEach((entry) => {
    const dayKey = toDateInputValue(entry.startedAt);

    if (!groupedEntries.has(dayKey)) {
      groupedEntries.set(dayKey, []);
    }

    groupedEntries.get(dayKey).push(entry);
  });

  return groupedEntries;
}

function getFocusEntries(entries) {
  return entries.filter((entry) => getEntryMinutes(entry) >= 45);
}

function getFocusStats(entries) {
  const focusEntries = getFocusEntries(entries);
  const focusMinutes = getTotalMinutes(focusEntries);
  const totalMinutes = getTotalMinutes(entries);
  const longestSession = focusEntries.reduce((longest, entry) => Math.max(longest, getEntryMinutes(entry)), 0);
  const dayMinutes = new Map();

  focusEntries.forEach((entry) => {
    const dayKey = toDateInputValue(entry.startedAt);
    dayMinutes.set(dayKey, (dayMinutes.get(dayKey) || 0) + getEntryMinutes(entry));
  });

  const strongestDay = [...dayMinutes.entries()].sort((a, b) => b[1] - a[1])[0];

  return {
    focusEntries,
    focusMinutes,
    focusShare: totalMinutes ? (focusMinutes / totalMinutes) * 100 : 0,
    longestSession,
    sessionCount: focusEntries.length,
    strongestDay: strongestDay ? new Date(`${strongestDay[0]}T00:00`) : null,
  };
}

function getEntryGapMinutes(previousEntry, nextEntry) {
  if (!previousEntry || !nextEntry || toDateInputValue(previousEntry.startedAt) !== toDateInputValue(nextEntry.startedAt)) {
    return null;
  }

  const gapMinutes = (nextEntry.startedAt.getTime() - previousEntry.endedAt.getTime()) / 60000;

  return gapMinutes > 0 ? gapMinutes : null;
}

function getDayGapStats(entries) {
  const sortedEntries = sortEntriesByStart(entries);
  const stats = {
    short: 0,
    medium: 0,
    long: 0,
  };

  sortedEntries.forEach((entry, index) => {
    if (index === 0) {
      return;
    }

    const gapMinutes = getEntryGapMinutes(sortedEntries[index - 1], entry);

    if (!gapMinutes) {
      return;
    }

    if (gapMinutes <= 15) {
      stats.short += 1;
    } else if (gapMinutes <= 60) {
      stats.medium += 1;
    } else {
      stats.long += 1;
    }
  });

  return stats;
}

function getContextSwitchCount(entries) {
  let switchCount = 0;

  getEntriesGroupedByDay(entries).forEach((dayEntries) => {
    const sortedEntries = sortEntriesByStart(dayEntries);

    sortedEntries.forEach((entry, index) => {
      if (index === 0) {
        return;
      }

      const previousEntry = sortedEntries[index - 1];
      const categoryChanged = String(previousEntry.category || "") !== String(entry.category || "");
      const activityChanged = String(previousEntry.activity || "") !== String(entry.activity || "");

      if (categoryChanged || activityChanged) {
        switchCount += 1;
      }
    });
  });

  return switchCount;
}

function getShortSessionCount(entries, thresholdMinutes = 15) {
  return entries.filter((entry) => getEntryMinutes(entry) < thresholdMinutes).length;
}

function getFocusSessionCount(entries, thresholdMinutes = 45) {
  return entries.filter((entry) => getEntryMinutes(entry) >= thresholdMinutes).length;
}

function getLongestSessionMinutes(entries) {
  return entries.reduce((longest, entry) => Math.max(longest, getEntryMinutes(entry)), 0);
}

function getAverageSessionMinutes(entries) {
  return entries.length ? getTotalMinutes(entries) / entries.length : 0;
}

function getRawFragmentationScore(entries) {
  const gapStats = getDayGapStats(entries);
  const averageSessionMinutes = getAverageSessionMinutes(entries);
  const shortAveragePenalty = entries.length && averageSessionMinutes < 25 ? 12 : 0;
  const rawScore =
    getShortSessionCount(entries) * 10 +
    getContextSwitchCount(entries) * 8 +
    gapStats.short * 4 +
    gapStats.medium * 2 +
    shortAveragePenalty -
    getFocusSessionCount(entries) * 5;

  return Math.min(100, Math.max(0, Math.round(rawScore)));
}

function getFragmentationScore(entries) {
  const groupedEntries = getEntriesGroupedByDay(entries);

  if (!groupedEntries.size) {
    return 0;
  }

  const dayScores = [...groupedEntries.values()].map(getRawFragmentationScore);
  return Math.round(dayScores.reduce((total, score) => total + score, 0) / dayScores.length);
}

function getFragmentationLabel(score) {
  if (score <= 30) {
    return "ruhig";
  }

  if (score <= 60) {
    return "moderat fragmentiert";
  }

  return "stark fragmentiert";
}

function getFragmentationStatusClass(score) {
  if (score <= 30) {
    return "is-calm";
  }

  if (score <= 60) {
    return "is-mixed";
  }

  return "is-fragmented";
}

function getFragmentationInsight(score, stats = {}) {
  if (!stats.sessionCount) {
    return "Noch keine Arbeitsmuster für diese Woche erkennbar.";
  }

  if (score <= 30) {
    return "Diese Woche war überwiegend ruhig strukturiert.";
  }

  if (score <= 60) {
    const dayText = stats.mostFragmentedDay ? ` Besonders viele Wechsel gab es am ${formatWeekdayName(stats.mostFragmentedDay.date)}.` : "";
    return `Deine Woche war teilweise fragmentiert.${dayText}`;
  }

  return "Diese Woche war stark unterbrochen. Kurze Sessions und viele Kontextwechsel prägen die Auswertung.";
}

function getStrongestCategory(entries) {
  const categoryMinutes = getCategoryMinutes(entries);
  return [...categoryMinutes.entries()].sort((a, b) => b[1] - a[1])[0]?.[0] || "Noch offen";
}

function getDayQualityStats(entries) {
  const sortedEntries = sortEntriesByStart(entries);
  const totalMinutes = getTotalMinutes(sortedEntries);
  const focusMinutes = getTotalMinutes(getFocusEntries(sortedEntries));
  const fragmentationScore = getRawFragmentationScore(sortedEntries);
  let rating = "keine Einträge";

  if (sortedEntries.length && totalMinutes < 120) {
    rating = "kurzer Arbeitstag";
  } else if (sortedEntries.length && fragmentationScore <= 30 && focusMinutes >= 120) {
    rating = "ruhiger Fokus-Tag";
  } else if (sortedEntries.length && fragmentationScore >= 61) {
    rating = "stark fragmentierter Tag";
  } else if (sortedEntries.length) {
    rating = "gemischter Arbeitstag";
  }

  return {
    entries: sortedEntries,
    totalMinutes,
    firstStart: sortedEntries[0]?.startedAt || null,
    lastEnd: sortedEntries[sortedEntries.length - 1]?.endedAt || null,
    sessionCount: sortedEntries.length,
    longestSession: getLongestSessionMinutes(sortedEntries),
    averageSession: getAverageSessionMinutes(sortedEntries),
    focusMinutes,
    strongestCategory: getStrongestCategory(sortedEntries),
    contextSwitches: getContextSwitchCount(sortedEntries),
    fragmentationScore,
    fragmentationLabel: getFragmentationLabel(fragmentationScore),
    rating,
  };
}

function getWeekInterruptionStats(entries) {
  const groupedEntries = getEntriesGroupedByDay(entries);
  const dayStats = [];
  const weekStart = getWeekStart(new Date());
  const gapStats = {
    short: 0,
    medium: 0,
    long: 0,
  };

  for (let index = 0; index < 7; index += 1) {
    const date = addDays(weekStart, index);
    const dayKey = toDateInputValue(date);
    const dayEntries = groupedEntries.get(dayKey) || [];
    const dayGapStats = getDayGapStats(dayEntries);
    const qualityStats = getDayQualityStats(dayEntries);

    gapStats.short += dayGapStats.short;
    gapStats.medium += dayGapStats.medium;
    gapStats.long += dayGapStats.long;

    dayStats.push({
      date,
      dayKey,
      entries: dayEntries,
      sessionCount: dayEntries.length,
      shortSessionCount: getShortSessionCount(dayEntries),
      contextSwitchCount: getContextSwitchCount(dayEntries),
      averageSession: getAverageSessionMinutes(dayEntries),
      focusSessionCount: getFocusSessionCount(dayEntries),
      fragmentationScore: qualityStats.fragmentationScore,
      fragmentationLabel: qualityStats.fragmentationLabel,
      strongestCategory: qualityStats.strongestCategory,
      gapStats: dayGapStats,
    });
  }

  const daysWithEntries = dayStats.filter((day) => day.sessionCount > 0);
  const quietestDay = daysWithEntries
    .slice()
    .sort((a, b) => a.fragmentationScore - b.fragmentationScore || b.averageSession - a.averageSession)[0] || null;
  const mostFragmentedDay = daysWithEntries
    .slice()
    .sort((a, b) => b.fragmentationScore - a.fragmentationScore || b.sessionCount - a.sessionCount)[0] || null;
  const fragmentationScore = daysWithEntries.length
    ? Math.round(daysWithEntries.reduce((total, day) => total + day.fragmentationScore, 0) / daysWithEntries.length)
    : 0;

  return {
    dayStats,
    quietestDay,
    mostFragmentedDay,
    sessionCount: entries.length,
    averageSession: getAverageSessionMinutes(entries),
    shortSessionCount: getShortSessionCount(entries),
    contextSwitchCount: getContextSwitchCount(entries),
    gapStats,
    fragmentationScore,
    fragmentationLabel: getFragmentationLabel(fragmentationScore),
  };
}

function getLastEntryDay(entries) {
  const sortedEntries = sortEntriesByStart(entries);
  const lastEntry = sortedEntries[sortedEntries.length - 1];

  return lastEntry ? startOfDay(lastEntry.startedAt) : null;
}

function getSelectedAnalyticsDay(entries = getCurrentWeekEntries()) {
  const selectedDay = analyticsSelectedDay ? startOfDay(analyticsSelectedDay) : null;
  const weekStart = getWeekStart(new Date());
  const weekEnd = getWeekEnd(new Date());

  if (selectedDay && selectedDay >= weekStart && selectedDay < weekEnd) {
    return selectedDay;
  }

  const today = startOfDay(new Date());
  const todayEntries = getEntriesForDay(today, entries);

  if (todayEntries.length) {
    analyticsSelectedDay = today;
    return today;
  }

  const lastEntryDay = getLastEntryDay(entries);

  if (lastEntryDay) {
    analyticsSelectedDay = lastEntryDay;
    return lastEntryDay;
  }

  analyticsSelectedDay = today >= weekStart && today < weekEnd ? today : weekStart;
  return analyticsSelectedDay;
}

function setSelectedAnalyticsDay(date) {
  analyticsSelectedDay = startOfDay(date);
}

function formatWeekdayName(date) {
  return new Intl.DateTimeFormat("de-DE", { weekday: "long" }).format(date);
}

function formatDaySelectorLabel(date) {
  return `${formatWeekdayName(date)}, ${formatDate(date)}`;
}

function getRemainingWorkdays(date = new Date()) {
  const dayNumber = date.getDay() || 7;

  if (dayNumber > 5) {
    return 0;
  }

  return 6 - dayNumber;
}

function getCapacityStats(entries) {
  const dailyTargetMinutes = getTargetWorkMinutes() || DEFAULT_REMINDER_SETTINGS.targetWorkHours * 60;
  const weeklyTargetMinutes = dailyTargetMinutes * 5;
  const trackedMinutes = getTotalMinutes(entries);
  const remainingMinutes = Math.max(0, weeklyTargetMinutes - trackedMinutes);
  const remainingWorkdays = getRemainingWorkdays();
  const remainingPerWorkday = remainingMinutes && remainingWorkdays ? remainingMinutes / remainingWorkdays : remainingMinutes;
  const progressPercent = weeklyTargetMinutes ? Math.min(100, (trackedMinutes / weeklyTargetMinutes) * 100) : 0;
  const isReached = trackedMinutes >= weeklyTargetMinutes;
  let statusKey = "plan";
  let statusLabel = "Im Plan";

  if (isReached) {
    statusKey = "reached";
    statusLabel = "Ziel erreicht";
  } else if (!remainingWorkdays && remainingMinutes > 0) {
    statusKey = "critical";
    statusLabel = "Kritisch";
  } else if (remainingPerWorkday > dailyTargetMinutes * 1.25) {
    statusKey = "critical";
    statusLabel = "Kritisch";
  } else if (remainingPerWorkday > dailyTargetMinutes) {
    statusKey = "tight";
    statusLabel = "Knapp";
  }

  return {
    dailyTargetMinutes,
    weeklyTargetMinutes,
    trackedMinutes,
    remainingMinutes,
    remainingWorkdays,
    remainingPerWorkday: isReached ? 0 : remainingPerWorkday,
    progressPercent,
    statusKey,
    statusLabel,
  };
}

function getDominantCategory(categoryMinutes, totalMinutes) {
  if (!totalMinutes) {
    return null;
  }

  const entries = categoryMinutes instanceof Map ? [...categoryMinutes.entries()] : categoryMinutes;

  return entries.find(([, minutes]) => minutes / totalMinutes > 0.4)?.[0] || null;
}

function formatSignedDurationDifference(minutes) {
  const roundedMinutes = Math.round(minutes);

  if (roundedMinutes === 0) {
    return "stabil";
  }

  const sign = roundedMinutes > 0 ? "+" : "-";
  return `${sign}${formatAnalyticsDuration(Math.abs(roundedMinutes))}`;
}

function formatPercent(value) {
  return `${new Intl.NumberFormat("de-DE", {
    maximumFractionDigits: value < 10 && value > 0 ? 1 : 0,
  }).format(value)} %`;
}

function getWeekSummary(entries) {
  const categoryMinutes = getCategoryMinutes(entries);
  const sortedCategories = [...categoryMinutes.entries()].sort((a, b) => b[1] - a[1]);

  return {
    totalMinutes: getTotalMinutes(entries),
    focusMinutes: getFocusStats(entries).focusMinutes,
    sessionCount: entries.length,
    mainCategory: sortedCategories[0]?.[0] || "Noch offen",
    meetingMinutes: categoryMinutes.get("Meetings") || 0,
    hasMeetings: categoryMinutes.has("Meetings") || getCategoriesForUser().some((category) => category.name === "Meetings"),
  };
}

function getWeekComparisonStats(currentEntries, previousEntries) {
  const current = getWeekSummary(currentEntries);
  const previous = getWeekSummary(previousEntries);

  return {
    current,
    previous,
    hasPreviousData: previousEntries.length > 0,
  };
}

function getCurrentWeekEntries() {
  return getEntriesForWeek(new Date());
}

function createAnalyticsKpiCard(label, value, detail = "", className = "") {
  const card = document.createElement("article");
  card.className = ["analytics-kpi-card", className].filter(Boolean).join(" ");

  const labelElement = document.createElement("p");
  labelElement.textContent = label;
  card.append(labelElement);

  const valueElement = document.createElement("strong");
  valueElement.textContent = value;
  card.append(valueElement);

  if (detail) {
    const detailElement = document.createElement("span");
    detailElement.textContent = detail;
    card.append(detailElement);
  }

  return card;
}

function renderCapacityStats(stats) {
  capacityStatus.textContent = stats.statusLabel;
  capacityStatus.className = `analytics-status-badge is-${stats.statusKey}`;
  capacityProgressFill.style.width = `${stats.progressPercent}%`;
  capacityProgressPercent.textContent = formatPercent(stats.progressPercent);
  capacityStats.innerHTML = "";

  [
    ["Wochenziel", formatAnalyticsDuration(stats.weeklyTargetMinutes), `${formatAnalyticsDuration(stats.dailyTargetMinutes)} pro Tag`],
    ["Bisher erfasst", formatAnalyticsDuration(stats.trackedMinutes)],
    ["Verbleibend", formatAnalyticsDuration(stats.remainingMinutes)],
    [
      "Rest pro Arbeitstag",
      formatAnalyticsDuration(stats.remainingPerWorkday),
      stats.remainingWorkdays ? `${stats.remainingWorkdays} Arbeitstage übrig` : "Keine Arbeitstage übrig",
    ],
    ["Status", stats.statusLabel],
  ].forEach(([label, value, detail]) => {
    capacityStats.append(createAnalyticsKpiCard(label, value, detail));
  });
}

function renderFocusStats(stats, totalMinutes) {
  focusStats.innerHTML = "";

  if (!stats.sessionCount) {
    const empty = document.createElement("p");
    empty.className = "analytics-empty";
    empty.textContent = "Noch keine Fokus-Session ab 45 Minuten in dieser Woche.";
    focusStats.append(empty);
    return;
  }

  const strongestDay = stats.strongestDay
    ? new Intl.DateTimeFormat("de-DE", { weekday: "long" }).format(stats.strongestDay)
    : "Noch offen";

  [
    ["Fokuszeit gesamt", formatAnalyticsDuration(stats.focusMinutes), `${formatPercent(stats.focusShare)} deiner erfassten Zeit`],
    ["Längste Session", formatAnalyticsDuration(stats.longestSession)],
    ["Fokus-Sessions", String(stats.sessionCount), "ab 45 Minuten"],
    ["Stärkster Fokustag", strongestDay, totalMinutes ? "" : "Noch keine Wochenzeit"],
  ].forEach(([label, value, detail]) => {
    focusStats.append(createAnalyticsKpiCard(label, value, detail));
  });
}

function getDurationTrendText(label, difference) {
  if (Math.abs(difference) < 1) {
    return `${label} stabil`;
  }

  return `${formatSignedDurationDifference(difference)} zur Vorwoche`;
}

function renderWeekComparisonStats(stats) {
  weekComparisonStats.innerHTML = "";

  if (!stats.hasPreviousData) {
    const empty = document.createElement("p");
    empty.className = "analytics-empty";
    empty.textContent = "Noch keine Vergleichsdaten aus der Vorwoche.";
    weekComparisonStats.append(empty);
    return;
  }

  const totalDifference = stats.current.totalMinutes - stats.previous.totalMinutes;
  const focusDifference = stats.current.focusMinutes - stats.previous.focusMinutes;
  const sessionDifference = stats.current.sessionCount - stats.previous.sessionCount;
  const sessionTrend = sessionDifference === 0 ? "Sessions stabil" : `${sessionDifference > 0 ? "+" : ""}${sessionDifference} Sessions`;
  const categoryTrend =
    stats.current.mainCategory === stats.previous.mainCategory
      ? "Hauptkategorie stabil"
      : `Vorwoche: ${stats.previous.mainCategory}`;

  const cards = [
    [
      "Gesamtzeit",
      formatAnalyticsDuration(stats.current.totalMinutes),
      getDurationTrendText("Gesamtzeit", totalDifference),
    ],
    [
      "Fokuszeit",
      formatAnalyticsDuration(stats.current.focusMinutes),
      getDurationTrendText("Fokuszeit", focusDifference),
    ],
    [
      "Sessions",
      String(stats.current.sessionCount),
      sessionTrend,
    ],
    [
      "Hauptkategorie",
      stats.current.mainCategory,
      categoryTrend,
    ],
  ];

  if (stats.current.hasMeetings || stats.previous.hasMeetings) {
    const meetingDifference = stats.current.meetingMinutes - stats.previous.meetingMinutes;
    cards.push([
      "Meetings",
      formatAnalyticsDuration(stats.current.meetingMinutes),
      getDurationTrendText("Meetings", meetingDifference),
    ]);
  }

  cards.forEach(([label, value, detail]) => {
    weekComparisonStats.append(createAnalyticsKpiCard(label, value, detail));
  });
}

function renderEnhancedCategoryStats(categoryMinutes, totalMinutes, previousCategoryMinutes) {
  const maxCategoryMinutes = Math.max(...categoryMinutes.values(), 0);
  const sortedCategories = [...categoryMinutes.entries()]
    .filter(([, minutes]) => minutes >= 1)
    .sort((a, b) => b[1] - a[1]);
  const dominantCategory = getDominantCategory(sortedCategories, totalMinutes);

  analyticsEmpty.hidden = totalMinutes >= 1;
  categoryBars.innerHTML = "";

  sortedCategories.forEach(([category, minutes]) => {
    const percent = totalMinutes ? (minutes / totalMinutes) * 100 : 0;
    const previousMinutes = previousCategoryMinutes.get(category) || 0;
    const difference = minutes - previousMinutes;
    const row = document.createElement("div");
    row.className = "category-bar-row";

    const header = document.createElement("div");
    header.className = "category-bar-header";

    const label = document.createElement("span");
    label.textContent = category;
    header.append(label);

    const value = document.createElement("span");
    value.textContent = `${formatAnalyticsDuration(minutes)} · ${formatPercent(percent)} · ${formatSignedDurationDifference(difference)} zur Vorwoche`;
    header.append(value);
    row.append(header);

    const track = document.createElement("div");
    track.className = "category-bar-track";

    const fill = document.createElement("div");
    fill.className = "category-bar-fill";
    fill.style.width = `${maxCategoryMinutes ? (minutes / maxCategoryMinutes) * 100 : 0}%`;
    fill.style.background = CATEGORY_COLORS[category] || CATEGORY_COLORS.Sonstiges;
    fill.title = `${category}: ${formatAnalyticsDuration(minutes)}, ${formatPercent(percent)}`;
    track.append(fill);
    row.append(track);

    if (category === dominantCategory) {
      const hint = document.createElement("p");
      hint.className = "category-dominance-hint";
      hint.textContent = "Diese Kategorie prägt deine Woche.";
      row.append(hint);
    }

    categoryBars.append(row);
  });
}

function renderInterruptionStats(stats) {
  interruptionStats.innerHTML = "";

  const gapText = `${stats.gapStats.short} kurz · ${stats.gapStats.medium} mittel · ${stats.gapStats.long} lang`;
  const quietestDay = stats.quietestDay ? formatWeekdayName(stats.quietestDay.date) : "Noch offen";
  const mostFragmentedDay = stats.mostFragmentedDay ? formatWeekdayName(stats.mostFragmentedDay.date) : "Noch offen";

  [
    ["Sessions", String(stats.sessionCount), "Jeder Eintrag zählt als Session"],
    ["Durchschnitt", formatAnalyticsDuration(stats.averageSession), "pro Session"],
    ["Kurze Sessions", String(stats.shortSessionCount), "unter 15 Minuten"],
    ["Kontextwechsel", String(stats.contextSwitchCount), "Kategorie oder Tätigkeit gewechselt"],
    ["Lücken", gapText, "zwischen Sessions am selben Tag"],
    ["Ruhigster Tag", quietestDay],
    ["Fragmentiertester Tag", mostFragmentedDay],
  ].forEach(([label, value, detail]) => {
    interruptionStats.append(createAnalyticsKpiCard(label, value, detail));
  });

  renderFragmentationCard(stats);
}

function renderFragmentationCard(stats) {
  const label = getFragmentationLabel(stats.fragmentationScore);
  const statusClass = getFragmentationStatusClass(stats.fragmentationScore);

  fragmentationCard.className = `fragmentation-card ${statusClass}`;
  fragmentationCard.innerHTML = `
    <div>
      <p>Fragmentierungsgrad</p>
      <strong>${stats.fragmentationScore}</strong>
    </div>
    <span class="fragmentation-badge ${statusClass}">${escapeHtml(label)}</span>
    <p>${escapeHtml(getFragmentationInsight(stats.fragmentationScore, stats))}</p>
  `;
}

function renderAnalyticsDaySelector(weekEntries) {
  const selectedDay = getSelectedAnalyticsDay(weekEntries);
  const weekStart = getWeekStart(new Date());
  const currentValue = toDateInputValue(selectedDay);

  analyticsDaySelect.innerHTML = "";

  for (let index = 0; index < 7; index += 1) {
    const day = addDays(weekStart, index);
    const option = document.createElement("option");
    option.value = toDateInputValue(day);
    option.textContent = formatDaySelectorLabel(day);
    analyticsDaySelect.append(option);
  }

  analyticsDaySelect.value = currentValue;
  return selectedDay;
}

function renderDayTimeline(weekEntries) {
  const selectedDay = renderAnalyticsDaySelector(weekEntries);
  const dayEntries = getEntriesForDay(selectedDay, weekEntries);

  dayTimelineTrack.innerHTML = "";
  dayTimelineEmpty.hidden = dayEntries.length > 0;

  const scale = document.createElement("div");
  scale.className = "day-timeline-scale";
  CALENDAR_HOUR_MARKERS.forEach((hour) => {
    const marker = document.createElement("span");
    marker.textContent = `${String(hour).padStart(2, "0")}:00`;
    marker.style.top = `${((hour * 60 - CALENDAR_VISIBLE_START) / CALENDAR_VISIBLE_MINUTES) * 100}%`;
    scale.append(marker);
  });
  dayTimelineTrack.append(scale);

  const lanes = document.createElement("div");
  lanes.className = "day-timeline-lanes";

  CALENDAR_HOUR_MARKERS.forEach((hour) => {
    const line = document.createElement("span");
    line.className = "day-timeline-line";
    line.style.top = `${((hour * 60 - CALENDAR_VISIBLE_START) / CALENDAR_VISIBLE_MINUTES) * 100}%`;
    lanes.append(line);
  });

  sortEntriesByStart(dayEntries).forEach((entry) => {
    const startMinute = Math.max(CALENDAR_VISIBLE_START, getMinuteOfDay(entry.startedAt));
    const endMinute = Math.min(CALENDAR_VISIBLE_END, getMinuteOfDay(entry.endedAt));
    const visibleDuration = Math.max(5, endMinute - startMinute);

    if (endMinute <= CALENDAR_VISIBLE_START || startMinute >= CALENDAR_VISIBLE_END) {
      return;
    }

    const block = document.createElement("article");
    block.className = `day-timeline-entry${getEntryMinutes(entry) < 15 ? " is-short" : ""}`;
    block.style.top = `${((startMinute - CALENDAR_VISIBLE_START) / CALENDAR_VISIBLE_MINUTES) * 100}%`;
    block.style.height = `${Math.max(2.4, (visibleDuration / CALENDAR_VISIBLE_MINUTES) * 100)}%`;
    block.style.borderColor = CATEGORY_COLORS[entry.category] || CATEGORY_COLORS.Sonstiges;
    block.style.background = `color-mix(in srgb, ${CATEGORY_COLORS[entry.category] || CATEGORY_COLORS.Sonstiges} 14%, var(--surface))`;
    block.title = `${entry.activity || "Ohne Tätigkeit"} · ${entry.category || "Ohne Kategorie"} · ${formatTime(entry.startedAt)}-${formatTime(entry.endedAt)} · ${formatAnalyticsDuration(getEntryMinutes(entry))}`;

    const title = document.createElement("strong");
    title.textContent = entry.activity || "Ohne Tätigkeit";
    block.append(title);

    const meta = document.createElement("span");
    meta.textContent = `${formatTime(entry.startedAt)}-${formatTime(entry.endedAt)} · ${entry.category || "Ohne Kategorie"}`;
    block.append(meta);

    lanes.append(block);
  });

  dayTimelineTrack.append(lanes);
}

function renderDayQuality(weekEntries) {
  const selectedDay = getSelectedAnalyticsDay(weekEntries);
  const dayEntries = getEntriesForDay(selectedDay, weekEntries);
  const stats = getDayQualityStats(dayEntries);

  dayQualityStats.innerHTML = "";

  [
    ["Bewertung", stats.rating],
    ["Gesamtzeit", formatAnalyticsDuration(stats.totalMinutes)],
    ["Erste Startzeit", stats.firstStart ? formatTime(stats.firstStart) : "-"],
    ["Letzte Endzeit", stats.lastEnd ? formatTime(stats.lastEnd) : "-"],
    ["Sessions", String(stats.sessionCount)],
    ["Längste Session", formatAnalyticsDuration(stats.longestSession)],
    ["Durchschnitt", formatAnalyticsDuration(stats.averageSession)],
    ["Fokuszeit", formatAnalyticsDuration(stats.focusMinutes)],
    ["Stärkste Kategorie", stats.strongestCategory],
    ["Kontextwechsel", String(stats.contextSwitches)],
    ["Fragmentierung", String(stats.fragmentationScore), stats.fragmentationLabel],
  ].forEach(([label, value, detail]) => {
    dayQualityStats.append(createAnalyticsKpiCard(label, value, detail));
  });
}

function renderEnhancedWeekdayStats(weekEntries, weekdayMinutes, weekdayCategoryMinutes) {
  weekdayBars.innerHTML = "";
  const weekStart = getWeekStart(new Date());
  const maxWeekdayMinutes = Math.max(...weekdayMinutes.values(), 0);
  const weekStats = getWeekInterruptionStats(weekEntries);

  for (let index = 0; index < 7; index += 1) {
    const day = addDays(weekStart, index);
    const dayKey = toDateInputValue(day);
    const minutes = weekdayMinutes.get(dayKey) || 0;
    const dayCategories = weekdayCategoryMinutes.get(dayKey) || new Map();
    const dayStats = weekStats.dayStats.find((item) => item.dayKey === dayKey);
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

    const meta = document.createElement("div");
    meta.className = "weekday-bar-meta";
    meta.innerHTML = `
      <span>${dayStats?.sessionCount || 0} Sessions</span>
      <span>${dayStats?.strongestCategory || "Noch offen"}</span>
      <span class="fragmentation-badge ${getFragmentationStatusClass(dayStats?.fragmentationScore || 0)}">${escapeHtml(dayStats?.fragmentationLabel || "ruhig")} · ${dayStats?.fragmentationScore || 0}</span>
    `;
    row.append(meta);

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

function renderAnalytics() {
  const weekEntries = getCurrentWeekEntries();
  const previousWeekEntries = getPreviousWeekEntries(new Date());
  const categoryMinutes = getCategoryMinutes(weekEntries);
  const previousCategoryMinutes = getCategoryMinutes(previousWeekEntries);
  const weekdayMinutes = new Map();
  const weekdayCategoryMinutes = new Map();
  const totalMinutes = getTotalMinutes(weekEntries);

  weekEntries.forEach((entry) => {
    const minutes = getEntryMinutes(entry);
    const weekdayKey = toDateInputValue(entry.startedAt);
    const category = entry.category || "Ohne Kategorie";
    weekdayMinutes.set(weekdayKey, (weekdayMinutes.get(weekdayKey) || 0) + minutes);

    if (!weekdayCategoryMinutes.has(weekdayKey)) {
      weekdayCategoryMinutes.set(weekdayKey, new Map());
    }

    const dayCategories = weekdayCategoryMinutes.get(weekdayKey);
    dayCategories.set(category, (dayCategories.get(category) || 0) + minutes);
  });

  weeklyTotalElement.textContent = formatAnalyticsDuration(totalMinutes);
  const hasVisibleWork = totalMinutes >= 1;
  const sortedCategories = [...categoryMinutes.entries()]
    .filter(([, minutes]) => minutes >= 1)
    .sort((a, b) => b[1] - a[1]);
  dailyAverageElement.textContent = hasVisibleWork ? sortedCategories[0]?.[0] || "Noch offen" : "Noch offen";

  renderCapacityStats(getCapacityStats(weekEntries));
  renderFocusStats(getFocusStats(weekEntries), totalMinutes);
  renderWeekComparisonStats(getWeekComparisonStats(weekEntries, previousWeekEntries));
  renderEnhancedCategoryStats(categoryMinutes, totalMinutes, previousCategoryMinutes);
  renderInterruptionStats(getWeekInterruptionStats(weekEntries));
  renderDayTimeline(weekEntries);
  renderDayQuality(weekEntries);
  renderEnhancedWeekdayStats(weekEntries, weekdayMinutes, weekdayCategoryMinutes);
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

function getEntriesForDay(date, entries = getEntriesForActiveUser()) {
  const dayKey = toDateInputValue(date);

  return entries
    .filter((entry) => toDateInputValue(entry.startedAt) === dayKey)
    .sort((a, b) => a.startedAt.getTime() - b.startedAt.getTime());
}

function getEntriesTotalMinutes(entries) {
  return entries.reduce(
    (total, entry) => total + Math.max(0, (entry.endedAt.getTime() - entry.startedAt.getTime()) / 60000),
    0,
  );
}

function getDayCategoryMinutes(entries) {
  const categoryMinutes = new Map();

  entries.forEach((entry) => {
    const minutes = Math.max(0, (entry.endedAt.getTime() - entry.startedAt.getTime()) / 60000);
    categoryMinutes.set(entry.category, (categoryMinutes.get(entry.category) || 0) + minutes);
  });

  return [...categoryMinutes.entries()].sort((a, b) => b[1] - a[1]);
}

function formatCompactCalendarDuration(minutes) {
  const roundedMinutes = Math.round(minutes);

  if (roundedMinutes <= 0) {
    return "";
  }

  const hours = Math.floor(roundedMinutes / 60);
  const remainingMinutes = roundedMinutes % 60;

  if (!hours) {
    return `${remainingMinutes}m`;
  }

  return remainingMinutes ? `${hours}h ${remainingMinutes}m` : `${hours}h`;
}

function formatHeatmapDuration(minutes) {
  const roundedMinutes = Math.round(minutes);

  if (roundedMinutes <= 0) {
    return "";
  }

  const hours = Math.floor(roundedMinutes / 60);
  const remainingMinutes = roundedMinutes % 60;

  if (!hours) {
    return `${remainingMinutes} m`;
  }

  return `${hours}:${String(remainingMinutes).padStart(2, "0")} h`;
}

function getHeatmapIntensityClass(minutes) {
  if (minutes <= 0) {
    return "heatmap-day-empty";
  }

  if (minutes < 240) {
    return "heatmap-day-low";
  }

  if (minutes < 360) {
    return "heatmap-day-medium";
  }

  if (minutes <= 480) {
    return "heatmap-day-high";
  }

  return "heatmap-day-over";
}

function renderDayCategoryStrip(entries) {
  const strip = document.createElement("span");
  strip.className = "calendar-day-category-strip";
  const totalMinutes = getEntriesTotalMinutes(entries);

  if (!totalMinutes) {
    return strip;
  }

  getDayCategoryMinutes(entries).forEach(([category, minutes]) => {
    const segment = document.createElement("i");
    segment.style.width = `${Math.max(8, (minutes / totalMinutes) * 100)}%`;
    segment.style.background = CATEGORY_COLORS[category] || CATEGORY_COLORS.Sonstiges;
    segment.title = `${category}: ${formatAnalyticsDuration(minutes)}`;
    strip.append(segment);
  });

  return strip;
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

function getMinuteOfDay(date) {
  return date.getHours() * 60 + date.getMinutes();
}

function getVisibleEntryRange(entry, day) {
  const dayStart = new Date(day);
  dayStart.setHours(0, 0, 0, 0);
  const dayEnd = addDays(dayStart, 1);
  const rawStart = entry.startedAt < dayStart ? 0 : getMinuteOfDay(entry.startedAt);
  const rawEnd = entry.endedAt >= dayEnd ? 24 * 60 : getMinuteOfDay(entry.endedAt);
  const endMinute = Math.max(rawEnd, rawStart + 1);
  const startMinute = Math.max(rawStart, CALENDAR_VISIBLE_START);
  const visibleEndMinute = Math.min(endMinute, CALENDAR_VISIBLE_END);

  if (visibleEndMinute <= CALENDAR_VISIBLE_START || startMinute >= CALENDAR_VISIBLE_END) {
    return null;
  }

  return {
    start: startMinute,
    end: Math.max(visibleEndMinute, startMinute + 1),
    clippedStart: rawStart < CALENDAR_VISIBLE_START,
    clippedEnd: endMinute > CALENDAR_VISIBLE_END,
  };
}

function getPositionedDayEntries(dayEntries, day) {
  const lanes = [];

  return dayEntries
    .map((entry) => {
      const range = getVisibleEntryRange(entry, day);
      return range ? { entry, range } : null;
    })
    .filter(Boolean)
    .sort((a, b) => a.range.start - b.range.start || b.range.end - a.range.end)
    .map((positionedEntry) => {
      const laneIndex = lanes.findIndex((laneEnd) => laneEnd <= positionedEntry.range.start);
      const nextLane = laneIndex === -1 ? lanes.length : laneIndex;
      lanes[nextLane] = positionedEntry.range.end;

      return {
        ...positionedEntry,
        lane: nextLane,
        lanes,
      };
    })
    .map((positionedEntry) => ({
      ...positionedEntry,
      laneCount: Math.max(1, positionedEntry.lanes.length),
    }));
}

function renderWeekplanHours() {
  weekplanHours.innerHTML = "";

  CALENDAR_HOUR_MARKERS.forEach((hour) => {
    const marker = document.createElement("span");
    marker.textContent = `${String(hour).padStart(2, "0")}:00`;
    marker.style.setProperty("--hour-top", `${((hour * 60 - CALENDAR_VISIBLE_START) / CALENDAR_VISIBLE_MINUTES) * 100}%`);
    weekplanHours.append(marker);
  });
}

function renderWeekplan() {
  const { start, end } = getCalendarRange();
  const dayCount = calendarViewMode === "month" ? 0 : Math.round((end - start) / 86400000);
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

  renderWeekplanHours();

  for (let index = 0; index < dayCount; index += 1) {
    const day = addDays(start, index);
    const dayKey = toDateInputValue(day);
    const dayEntries = getEntriesForDay(day, calendarEntries);
    const positionedEntries = getPositionedDayEntries(dayEntries, day);
    const totalMinutes = getEntriesTotalMinutes(dayEntries);
    const dayColumn = document.createElement("section");
    dayColumn.className = "weekplan-day";
    dayColumn.dataset.calendarDate = dayKey;
    dayColumn.dataset.entryCount = String(dayEntries.length);
    dayColumn.tabIndex = 0;

    if (dayKey === toDateInputValue(new Date())) {
      dayColumn.classList.add("is-today");
    }

    if (calendarDetailDate && dayKey === toDateInputValue(calendarDetailDate)) {
      dayColumn.classList.add("is-selected");
    }

    const title = document.createElement("h3");
    const dayLabel = new Intl.DateTimeFormat("de-DE", {
      weekday: "short",
      day: "2-digit",
      month: "2-digit",
    }).format(day);
    title.innerHTML = `
      <span>${dayLabel}</span>
      <strong>${formatCompactCalendarDuration(totalMinutes) || "0m"}</strong>
    `;
    dayColumn.append(title);
    dayColumn.append(renderDayCategoryStrip(dayEntries));

    const timeline = document.createElement("div");
    timeline.className = "weekplan-timeline";

    if (!positionedEntries.length) {
      const empty = document.createElement("p");
      empty.className = "weekplan-empty";
      empty.textContent = dayEntries.length ? "Keine Einträge zwischen 06:00 und 24:00" : "Keine Einträge";
      timeline.append(empty);
    }

    positionedEntries.forEach(({ entry, range, lane, laneCount }) => {
      const block = document.createElement("article");
      block.className = `weekplan-entry weekplan-entry-${calendarViewMode}`;
      block.style.setProperty("--entry-top", `${((range.start - CALENDAR_VISIBLE_START) / CALENDAR_VISIBLE_MINUTES) * 100}%`);
      block.style.setProperty("--entry-height", `${((range.end - range.start) / CALENDAR_VISIBLE_MINUTES) * 100}%`);
      block.style.setProperty("--entry-lane", String(lane));
      block.style.setProperty("--entry-lanes", String(laneCount));
      block.style.borderColor = CATEGORY_COLORS[entry.category] || CATEGORY_COLORS.Sonstiges;
      block.title = `${entry.activity} · ${entry.category} · ${formatTime(entry.startedAt)} bis ${formatTime(entry.endedAt)}`;
      block.dataset.entryId = entry.id;

      if (range.clippedStart) {
        block.classList.add("is-clipped-start");
      }

      if (range.clippedEnd) {
        block.classList.add("is-clipped-end");
      }

      const label = document.createElement("strong");
      label.textContent = entry.activity;
      block.append(label);

      const time = document.createElement("span");
      time.textContent =
        `${entry.category} · ${formatTime(entry.startedAt)}-${formatTime(entry.endedAt)} · ${getEntryDurationMinutes(entry)} Min.`;
      block.append(time);
      timeline.append(block);
    });

    dayColumn.append(timeline);
    weekplanDays.append(dayColumn);
  }

  renderCalendarDayDetail();
}

function renderMonthCalendar(monthStart, monthEnd, monthEntries) {
  weekplanDays.classList.add("calendar-month-grid");
  const gridStart = getWeekStart(monthStart);
  const gridEnd = addDays(getWeekStart(addDays(monthEnd, 6)), 7);

  for (let day = new Date(gridStart); day < gridEnd; day = addDays(day, 1)) {
    const currentDay = new Date(day);
    const dayKey = toDateInputValue(currentDay);
    const dayEntries = getEntriesForDay(currentDay, monthEntries);
    const totalMinutes = getEntriesTotalMinutes(dayEntries);
    const dayButton = document.createElement("button");
    dayButton.type = "button";
    dayButton.className = `calendar-month-day heatmap-day ${getHeatmapIntensityClass(totalMinutes)}`;
    dayButton.dataset.calendarDate = dayKey;
    dayButton.setAttribute("aria-label", `${formatDate(currentDay)}, ${formatAnalyticsDuration(totalMinutes)}, ${dayEntries.length} Einträge`);

    if (currentDay.getMonth() !== monthStart.getMonth()) {
      dayButton.classList.add("is-outside-month");
    }

    if (currentDay.getDay() === 0 || currentDay.getDay() === 6) {
      dayButton.classList.add("heatmap-day-weekend");
    }

    if (dayKey === toDateInputValue(new Date())) {
      dayButton.classList.add("is-today");
      dayButton.classList.add("heatmap-day-today");
    }

    if (calendarDetailDate && dayKey === toDateInputValue(calendarDetailDate)) {
      dayButton.classList.add("is-selected");
      dayButton.classList.add("heatmap-day-selected");
    }

    const dayNumber = document.createElement("strong");
    dayNumber.textContent = new Intl.DateTimeFormat("de-DE", { day: "2-digit" }).format(currentDay);
    dayButton.append(dayNumber);

    const total = document.createElement("span");
    total.textContent = formatHeatmapDuration(totalMinutes);
    dayButton.append(total);

    if (dayEntries.length) {
      const count = document.createElement("em");
      count.textContent = `${dayEntries.length}`;
      dayButton.append(count);
    }

    weekplanDays.append(dayButton);
  }

  renderCalendarDayDetail();
}

function renderCalendarDayDetail(entries = getEntriesForActiveUser()) {
  if (!calendarDetailDate) {
    calendarDayDetail.hidden = true;
    return;
  }

  const dayEntries = getEntriesForDay(calendarDetailDate, entries);
  const totalMinutes = getEntriesTotalMinutes(dayEntries);

  calendarDayDetail.hidden = false;
  calendarDayDetail.dataset.date = toDateInputValue(calendarDetailDate);
  calendarDayDetailDate.textContent = new Intl.DateTimeFormat("de-DE", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(calendarDetailDate);
  calendarDayDetailTotal.textContent = formatAnalyticsDuration(totalMinutes);
  calendarDayDetailList.innerHTML = "";

  if (!dayEntries.length) {
    const empty = document.createElement("p");
    empty.className = "calendar-day-detail-empty";
    empty.textContent = "Für diesen Tag gibt es noch keine Einträge.";
    calendarDayDetailList.append(empty);
    return;
  }

  dayEntries.forEach((entry) => {
    const item = document.createElement("article");
    item.className = "calendar-day-detail-entry";
    item.style.borderColor = CATEGORY_COLORS[entry.category] || CATEGORY_COLORS.Sonstiges;
    item.innerHTML = `
      <div>
        <strong>${escapeHtml(entry.activity || "Zeiteintrag")}</strong>
        <span>${escapeHtml(entry.category || "Ohne Kategorie")}</span>
      </div>
      <p>${formatTime(entry.startedAt)}-${formatTime(entry.endedAt)} · ${getEntryDurationMinutes(entry)} Min.</p>
      ${entry.note ? `<p class="calendar-day-detail-note">${escapeHtml(entry.note)}</p>` : ""}
      <div class="calendar-day-detail-actions">
        <button class="settings-secondary-button" type="button" data-calendar-detail-action="edit" data-entry-id="${escapeHtml(entry.id)}">Bearbeiten</button>
        <button class="settings-danger-button" type="button" data-calendar-detail-action="delete" data-entry-id="${escapeHtml(entry.id)}">Löschen</button>
      </div>
    `;
    calendarDayDetailList.append(item);
  });
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

  calendarDetailDate = selectedDate;
  calendarSelectedDate = selectedDate;
  saveCalendarState();
  renderWeekplan();
}

function closeCalendarDayDetail() {
  calendarDetailDate = null;
  renderWeekplan();
}

function addEntryForCalendarDetailDay() {
  const selectedDate = calendarDetailDate ? toDateInputValue(calendarDetailDate) : toDateInputValue(calendarSelectedDate);
  showManualView();
  manualForm.elements.date.value = selectedDate;
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
  renderTimerContext();

  if (!getReminderSettings().enabled || getTodayTotalMinutes() >= getTargetWorkMinutes()) {
    hideInAppReminder();
  }
}

function restoreDefaultReminderSettings() {
  saveReminderSettings(DEFAULT_REMINDER_SETTINGS);
  renderReminderSettingsForm();
  renderTimerContext();
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

  if (isQuoted) {
    throw new Error("Die CSV-Datei enthält ein nicht geschlossenes Anführungszeichen.");
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

function getCsvUserId(row, headerMap) {
  const userId = getCsvValue(row, headerMap, "nutzer-id");

  return userId && getValidUserId(userId) === userId ? userId : activeUserId;
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
    throw new Error("Die CSV-Datei enthält keine importierbaren Zeiteinträge.");
  }

  const headerMap = new Map(rows[0].map((header, index) => [normalizeCsvHeader(header), index]));
  const requiredHeaders = ["datum", "tatigkeit", "kategorie", "arbeitsbeginn", "arbeitsende"];
  const missingHeaders = requiredHeaders.filter((header) => !headerMap.has(header));

  if (missingHeaders.length) {
    throw new Error("Die CSV-Datei hat nicht das erwartete TimeKeeper-Format.");
  }

  const importedEntries = [];
  let invalidRowCount = 0;

  rows.slice(1).forEach((row, index) => {
    const activity = getCsvValue(row, headerMap, "tatigkeit");
    const category = getCsvValue(row, headerMap, "kategorie");
    const dateParts = parseCsvDate(getCsvValue(row, headerMap, "datum"));
    const startParts = parseCsvTime(getCsvValue(row, headerMap, "arbeitsbeginn"));
    const endParts = parseCsvTime(getCsvValue(row, headerMap, "arbeitsende"));
    const startedAt = createDateFromCsvParts(dateParts, startParts);
    const endedAt = createDateFromCsvParts(dateParts, endParts);

    if (!activity || !category || !startedAt || !endedAt || endedAt <= startedAt) {
      invalidRowCount += 1;
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
      user_id: getCsvUserId(row, headerMap),
      created_at: getNowIsoString(),
      updated_at: getNowIsoString(),
    });
  });

  if (!importedEntries.length) {
    throw new Error("Keine gültigen Zeiteinträge gefunden. Bitte Datum, Zeiten, Tätigkeit und Kategorie prüfen.");
  }

  if (invalidRowCount) {
    throw new Error(`${invalidRowCount} CSV-Zeile(n) sind ungültig. Es wurde nichts importiert.`);
  }

  return importedEntries;
}

function deleteAllEntries() {
  return handleResetAllLocal();
  const shouldDelete = window.confirm("Alle lokal gespeicherten Zeiteinträge wirklich löschen?");

  if (!shouldDelete) {
    showSettingsMessage("Löschen abgebrochen.");
    return;
  }

  const confirmedFinal = window.confirm(
    `Endgültig löschen?\n\n${timeEntries.length} lokale Zeiteinträge werden entfernt. Diese Aktion kann nicht rückgängig gemacht werden.`,
  );

  if (!confirmedFinal) {
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

function getDefaultUserProfile(userId) {
  const validUserId = getValidUserId(userId);
  const defaultUser = DEFAULT_USERS.find((user) => user.id === validUserId) || DEFAULT_USERS[0];

  return { ...defaultUser };
}

function getDefaultUserProfiles() {
  return DEFAULT_USERS.map((user) => ({ ...user }));
}

function getDefaultCategoriesForUsers(userIds) {
  return userIds.flatMap((userId) => createDefaultCategoriesForUser(userId));
}

function renderAfterDataReset() {
  renderTimerContext();
  renderCategoryDropdowns();
  renderCategorySettings();
  renderUserProfileSettings();
  refreshEntryViews();
  renderSupabaseStatus();
}

function confirmResetAction({ scope, includesCloud }) {
  const selectedUserName = getUserName(activeUserId);
  const affectedText = scope === "selected" ? `den Nutzer "${selectedUserName}"` : "alle Nutzer";
  const storageText = includesCloud ? "lokal und in der Cloud" : "lokal";
  const timerText = isTimerRunning() && scope === "selected"
    ? "\n\nEin laufender Timer dieses Nutzers wird beendet."
    : isTimerRunning() && scope === "all"
      ? "\n\nEin laufender Timer wird beendet."
      : "";

  const confirmed = window.confirm(
    `Daten zurücksetzen?\n\nBetroffen: ${affectedText}\nSpeicher: ${storageText}\nDiese Aktion kann nicht rückgängig gemacht werden.${timerText}`,
  );

  if (!confirmed) {
    showSettingsMessage("Zurücksetzen abgebrochen.");
    return false;
  }

  const expectedInput = scope === "all" ? "ALLE LÖSCHEN" : "RESET";
  const promptText = scope === "all"
    ? `Bitte "${expectedInput}" eingeben, um alle Nutzer zurückzusetzen.`
    : `Bitte "${expectedInput}" eingeben, um ${selectedUserName} zurückzusetzen.`;
  const finalConfirmation = window.prompt(promptText);

  if (finalConfirmation !== expectedInput) {
    showSettingsMessage("Zurücksetzen abgebrochen. Die Bestätigung war nicht korrekt.", "error");
    return false;
  }

  return true;
}

function resetSelectedUserLocalData({ showSuccess = true } = {}) {
  const selectedUserId = activeUserId;
  const nextEntries = timeEntries.filter((entry) => getValidUserId(entry.user_id) !== selectedUserId);
  const nextCategories = [
    ...categories.filter((category) => getValidUserId(category.user_id) !== selectedUserId),
    ...createDefaultCategoriesForUser(selectedUserId),
  ];
  const defaultUser = getDefaultUserProfile(selectedUserId);
  const nextUsers = users.map((user) => (user.id === selectedUserId ? defaultUser : user));

  if (!persistEntries(nextEntries)) {
    showSettingsMessage("Lokale Einträge konnten nicht zurückgesetzt werden. Bitte Browser-Speicher prüfen.", "error");
    return false;
  }

  categories = nextCategories;
  if (!saveCategories()) {
    showSettingsMessage("Kategorien konnten nicht zurückgesetzt werden. Bitte Browser-Speicher prüfen.", "error");
    return false;
  }

  users = nextUsers;
  if (!saveUserProfiles()) {
    showSettingsMessage("Nutzerprofil konnte nicht zurückgesetzt werden. Bitte Browser-Speicher prüfen.", "error");
    return false;
  }

  timeEntries.splice(0, timeEntries.length, ...nextEntries);
  if (isTimerRunning()) {
    resetTimerScreen();
  }
  renderAfterDataReset();

  if (showSuccess) {
    showSettingsMessage(`${defaultUser.name} wurde lokal zurückgesetzt.`, "success");
  }

  return true;
}

function resetAllLocalData({ showSuccess = true } = {}) {
  const nextUsers = getDefaultUserProfiles();
  const nextCategories = getDefaultCategoriesForUsers(DEFAULT_USERS.map((user) => user.id));

  if (!persistEntries([])) {
    showSettingsMessage("Lokale Einträge konnten nicht zurückgesetzt werden. Bitte Browser-Speicher prüfen.", "error");
    return false;
  }

  categories = nextCategories;
  if (!saveCategories()) {
    showSettingsMessage("Kategorien konnten nicht zurückgesetzt werden. Bitte Browser-Speicher prüfen.", "error");
    return false;
  }

  users = nextUsers;
  activeUserId = DEFAULT_USERS[0].id;
  if (!saveUserProfiles()) {
    showSettingsMessage("Nutzerprofile konnten nicht zurückgesetzt werden. Bitte Browser-Speicher prüfen.", "error");
    return false;
  }

  try {
    localStorage.removeItem(REMINDER_FIRED_KEY);
  } catch (error) {
    showSettingsMessage("Reminder-Status konnte nicht vollständig zurückgesetzt werden.", "error");
    return false;
  }

  timeEntries.splice(0, timeEntries.length);
  resetTimerScreen();
  renderAfterDataReset();

  if (showSuccess) {
    showSettingsMessage("Alle lokalen Nutzerdaten wurden zurückgesetzt.", "success");
  }

  return true;
}

function ensureCloudResetAvailable() {
  const status = getSupabaseStatus();
  renderSupabaseStatus();

  if (!status.connected) {
    showSettingsMessage("Cloud ist nicht verbunden. Supabase-Reset ist aktuell nicht verfügbar.", "error");
    return false;
  }

  return true;
}

async function deleteSupabaseRows(query, errorContext) {
  const result = await query;

  if (result.error) {
    return { error: new Error(`${errorContext}: ${getSupabaseErrorMessage(result.error)}`) };
  }

  return { error: null };
}

async function resetSelectedUserCloudData(userId = activeUserId) {
  if (!ensureCloudResetAvailable()) {
    return { error: new Error("Cloud ist nicht verbunden.") };
  }

  const validUserId = getValidUserId(userId);
  const defaultUser = getDefaultUserProfile(validUserId);
  const defaultCategories = createDefaultCategoriesForUser(validUserId);
  const operations = [
    () => deleteSupabaseRows(
      supabaseClient.from(SUPABASE_TABLE_NAME).delete().eq("user_id", validUserId),
      "Cloud-Zeiteinträge konnten nicht gelöscht werden",
    ),
    () => deleteSupabaseRows(
      supabaseClient.from(SUPABASE_CATEGORIES_TABLE_NAME).delete().eq("user_id", validUserId),
      "Cloud-Kategorien konnten nicht gelöscht werden",
    ),
    async () => {
      const result = await supabaseClient
        .from(SUPABASE_USERS_TABLE_NAME)
        .upsert([createSupabaseUserRecord(defaultUser)], { onConflict: "id" });
      return result.error
        ? { error: new Error(`Cloud-Nutzerprofil konnte nicht zurückgesetzt werden: ${getSupabaseErrorMessage(result.error)}`) }
        : { error: null };
    },
    async () => {
      const result = await supabaseClient
        .from(SUPABASE_CATEGORIES_TABLE_NAME)
        .upsert(defaultCategories.map(createSupabaseCategoryRecord), { onConflict: "id" });
      return result.error
        ? { error: new Error(`Cloud-Standardkategorien konnten nicht erstellt werden: ${getSupabaseErrorMessage(result.error)}`) }
        : { error: null };
    },
  ];

  for (const operation of operations) {
    const { error } = await operation();

    if (error) {
      return { error };
    }
  }

  markCloudSyncCompleted();
  renderSupabaseStatus();
  return { error: null };
}

async function resetAllCloudData() {
  if (!ensureCloudResetAvailable()) {
    return { error: new Error("Cloud ist nicht verbunden.") };
  }

  const defaultUsers = getDefaultUserProfiles();
  const defaultCategories = getDefaultCategoriesForUsers(defaultUsers.map((user) => user.id));
  const operations = [
    () => deleteSupabaseRows(
      supabaseClient.from(SUPABASE_TABLE_NAME).delete().neq("id", "__timekeeper_keep_none__"),
      "Cloud-Zeiteinträge konnten nicht gelöscht werden",
    ),
    () => deleteSupabaseRows(
      supabaseClient.from(SUPABASE_CATEGORIES_TABLE_NAME).delete().neq("id", "__timekeeper_keep_none__"),
      "Cloud-Kategorien konnten nicht gelöscht werden",
    ),
    () => deleteSupabaseRows(
      supabaseClient.from(SUPABASE_USERS_TABLE_NAME).delete().neq("id", "__timekeeper_keep_none__"),
      "Cloud-Nutzerprofile konnten nicht gelöscht werden",
    ),
    async () => {
      const result = await supabaseClient
        .from(SUPABASE_USERS_TABLE_NAME)
        .upsert(defaultUsers.map(createSupabaseUserRecord), { onConflict: "id" });
      return result.error
        ? { error: new Error(`Cloud-Nutzerprofile konnten nicht zurückgesetzt werden: ${getSupabaseErrorMessage(result.error)}`) }
        : { error: null };
    },
    async () => {
      const result = await supabaseClient
        .from(SUPABASE_CATEGORIES_TABLE_NAME)
        .upsert(defaultCategories.map(createSupabaseCategoryRecord), { onConflict: "id" });
      return result.error
        ? { error: new Error(`Cloud-Standardkategorien konnten nicht erstellt werden: ${getSupabaseErrorMessage(result.error)}`) }
        : { error: null };
    },
  ];

  for (const operation of operations) {
    const { error } = await operation();

    if (error) {
      return { error };
    }
  }

  markCloudSyncCompleted();
  renderSupabaseStatus();
  return { error: null };
}

function handleResetSelectedUserLocal() {
  if (!confirmResetAction({ scope: "selected", includesCloud: false })) {
    return;
  }

  resetSelectedUserLocalData();
}

async function handleResetSelectedUserCloud() {
  if (!confirmResetAction({ scope: "selected", includesCloud: true })) {
    return;
  }

  showSettingsMessage("Cloud-Reset läuft ...");
  const cloudResult = await resetSelectedUserCloudData(activeUserId);

  if (cloudResult.error) {
    showSettingsMessage(cloudResult.error.message, "error");
    return;
  }

  if (resetSelectedUserLocalData({ showSuccess: false })) {
    showSettingsMessage(`${getDefaultUserName(activeUserId)} wurde lokal und in der Cloud zurückgesetzt.`, "success");
  }
}

function handleResetAllLocal() {
  if (!confirmResetAction({ scope: "all", includesCloud: false })) {
    return;
  }

  resetAllLocalData();
}

async function handleResetAllCloud() {
  if (!confirmResetAction({ scope: "all", includesCloud: true })) {
    return;
  }

  showSettingsMessage("Cloud-Reset läuft ...");
  const cloudResult = await resetAllCloudData();

  if (cloudResult.error) {
    showSettingsMessage(cloudResult.error.message, "error");
    return;
  }

  if (resetAllLocalData({ showSuccess: false })) {
    showSettingsMessage("Alle Nutzer wurden lokal und in der Cloud zurückgesetzt.", "success");
  }
}

function importCsvEntries(event) {
  const file = event.target.files?.[0];

  if (!file) {
    return;
  }

  const reader = new FileReader();

  reader.addEventListener("load", () => {
    let importedEntries = [];

    try {
      importedEntries = entriesFromCsvText(String(reader.result || ""));
    } catch (error) {
      showSettingsMessage(error.message || "CSV-Datei konnte nicht importiert werden.", "error");
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
    showSettingsMessage(`${importedEntries.length} Einträge wurden importiert.`, "success");
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

  const activity = activityInput.value.trim();
  const category = categorySelect.value;
  const validationMessage = getEntryValidationMessage();

  if (validationMessage) {
    showTimerMessage("Bitte Tätigkeit und Kategorie vor dem Speichern ergänzen.", "error");
    completionPanel.hidden = false;
    return;
  }

  const nextEntries = [
    {
      id: createEntryId(),
      activity,
      category,
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

function syncActiveTimerDraft() {
  if (!isTimerRunning()) {
    return;
  }

  activeActivity = activityInput.value.trim();
  activeCategory = categorySelect.value;
  timerStateElement.textContent = activeActivity || "Timer läuft";
  persistActiveTimer();
}

updateCurrentDateTime();
setInterval(updateCurrentDateTime, 30000);

menuButton.addEventListener("click", () => {
  setNavigationVisibility(!isNavigationVisible);
});

navigationLayoutQuery.addEventListener("change", closeNavigationMenu);

startButton.addEventListener("click", () => {
  if (isTimerRunning()) {
    stopTimer();
    return;
  }

  startTimer();
});

activityInput.addEventListener("input", syncActiveTimerDraft);
categorySelect.addEventListener("change", syncActiveTimerDraft);
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
analyticsDaySelect.addEventListener("change", () => {
  setSelectedAnalyticsDay(new Date(`${analyticsDaySelect.value}T00:00`));
  renderDayTimeline(getCurrentWeekEntries());
  renderDayQuality(getCurrentWeekEntries());
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
  const calendarDay = event.target.closest("[data-calendar-date]");

  if (calendarDay) {
    openCalendarDay(calendarDay.dataset.calendarDate);
  }
});
weekplanDays.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") {
    return;
  }

  const calendarDay = event.target.closest("[data-calendar-date]");

  if (calendarDay) {
    event.preventDefault();
    openCalendarDay(calendarDay.dataset.calendarDate);
  }
});
calendarDayDetailClose.addEventListener("click", closeCalendarDayDetail);
calendarDayDetailAdd.addEventListener("click", addEntryForCalendarDetailDay);
calendarDayDetail.addEventListener("click", (event) => {
  const actionButton = event.target.closest("[data-calendar-detail-action]");

  if (!actionButton) {
    return;
  }

  const entry = timeEntries.find((item) => item.id === actionButton.dataset.entryId);

  if (!entry) {
    return;
  }

  if (actionButton.dataset.calendarDetailAction === "edit") {
    showHistoryView();
    renderEditForm(entry);
  }

  if (actionButton.dataset.calendarDetailAction === "delete") {
    deleteHistoryEntry(entry.id);
    renderCalendarDayDetail();
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
resetSelectedUserLocalButton.addEventListener("click", handleResetSelectedUserLocal);
resetSelectedUserCloudButton.addEventListener("click", handleResetSelectedUserCloud);
resetAllLocalButton.addEventListener("click", handleResetAllLocal);
resetAllCloudButton.addEventListener("click", handleResetAllCloud);
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
});
activeUserSelect.addEventListener("change", saveActiveUserFromSettings);
timerUserSelect.addEventListener("change", saveActiveUserFromStartscreen);
userSettingsForm.addEventListener("input", () => saveUserNamesFromSettings());
userSettingsForm.addEventListener("change", () => saveUserNamesFromSettings({ showMessage: true }));
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
setActiveNavigation("timer");
closeNavigationMenu();

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
