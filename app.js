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
const REMINDER_SETTINGS_KEY = "timekeeper.reminderSettings.v1";
const CALENDAR_VIEW_MODE_KEY = "timekeeper.calendar.viewMode.v1";
const CALENDAR_SELECTED_DATE_KEY = "timekeeper.calendar.selectedDate.v1";
const DEFAULT_REMINDER_SETTINGS = {
  enabled: true,
  text: "Was hast du mit deiner Zeit gemacht?",
  times: ["17:30", "19:30", "23:00"],
  targetWorkHours: 8,
};
const CALENDAR_VIEW_MODES = {
  day: 1,
  "3days": 3,
  "5days": 5,
  "7days": 7,
  month: 0,
};
let calendarViewMode = "7days";
let calendarSelectedDate = new Date();
let timerStartedAt = null;
let timerStartedDate = null;
let timerStoppedDate = null;
let timerInterval = null;
let lastElapsedMilliseconds = 0;
let activeActivity = "";
let activeCategory = "";
const timeEntries = [];
const categoryOptions = Array.from(categorySelect.options)
  .map((option) => option.value || option.textContent)
  .filter(Boolean);
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

function serializeEntry(entry) {
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

    const entries = JSON.parse(storedEntries).map(deserializeEntry).filter(Boolean);
    timeEntries.splice(0, timeEntries.length, ...entries);
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
  renderReminderSettingsForm();
  timerView.hidden = true;
  historyView.hidden = true;
  manualView.hidden = true;
  analyticsView.hidden = true;
  exportView.hidden = true;
  settingsView.hidden = false;
  weekplanView.hidden = true;
  clearSettingsMessage();
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
  const activities = [...new Set(timeEntries.map((entry) => entry.activity))];
  activitySuggestions.innerHTML = "";

  activities.forEach((activity) => {
    const option = document.createElement("option");
    option.value = activity;
    activitySuggestions.append(option);
  });
}

function renderHistory() {
  historyEmpty.hidden = timeEntries.length > 0;
  historyList.innerHTML = "";

  timeEntries.sort((a, b) => b.startedAt.getTime() - a.startedAt.getTime());

  timeEntries.forEach((entry) => {
    const item = document.createElement("li");
    item.className = "history-entry";
    item.dataset.entryId = entry.id;

    const title = document.createElement("h3");
    title.textContent = entry.activity;
    item.append(title);

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

  return timeEntries.filter((entry) => entry.startedAt >= weekStart && entry.startedAt < weekEnd);
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
  return timeEntries.filter((entry) => entry.startedAt >= start && entry.startedAt < end);
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

function createCsvExport() {
  const header = [
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
  const rows = [...timeEntries]
    .sort((a, b) => b.startedAt.getTime() - a.startedAt.getTime())
    .map((entry) => [
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
  if (!timeEntries.length) {
    exportMessage.textContent = "Es gibt noch keine Zeiteinträge für den Export.";
    exportMessage.hidden = false;
    return;
  }

  const csv = `\uFEFF${createCsvExport()}`;
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

  return timeEntries
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
    navigator.serviceWorker.register("./service-worker.js").catch(() => {
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
        ${categoryOptions
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
calendarViewModeSelect.addEventListener("change", () => {
  changeCalendarViewMode(calendarViewModeSelect.value);
});
calendarPrevButton.addEventListener("click", () => {
  shiftCalendarPeriod(-1);
});
calendarTodayButton.addEventListener("click", showTodayInCalendar);
calendarNextButton.addEventListener("click", () => {
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
loadPersistedEntries();
loadCalendarState();
renderHistory();
renderAnalytics();
renderWeekplan();
updateActivitySuggestions();
renderReminderSettingsForm();
restoreActiveTimer();
registerServiceWorker();
initializeDeveloperMode();
initializeNotificationPermissionState();
checkReminders();
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
