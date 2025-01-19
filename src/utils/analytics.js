const STORAGE_KEY = "portfolio_analytics";

export const initAnalytics = () => {
  if (!localStorage.getItem(STORAGE_KEY)) {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        pageViews: 0,
        sections: {
          hero: 0,
          skills: 0,
          experience: 0,
          projects: 0,
          contact: 0,
        },
        firstVisit: new Date().toISOString(),
        lastVisit: new Date().toISOString(),
      })
    );
  }

  // Update page views and last visit
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
  data.pageViews += 1;
  data.lastVisit = new Date().toISOString();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

export const trackSection = (sectionName) => {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (data?.sections?.hasOwnProperty(sectionName.toLowerCase())) {
    data.sections[sectionName.toLowerCase()] += 1;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }
};

export const getAnalytics = () => {
  return JSON.parse(localStorage.getItem(STORAGE_KEY));
};

export const resetAnalytics = () => {
  localStorage.removeItem(STORAGE_KEY);
  initAnalytics();
};
