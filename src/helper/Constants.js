const baseURL = "https://api.kooiker-fr.com/kooiker/items";

module.exports = {
  url: "https://api.kooiker-fr.com/kooiker/items",
  breeding: baseURL + "/breeding?fields=*.*.*",
  aboutus: baseURL + "/aboutus?fields=*.*.*",
  aboutus_trans : baseURL + "/aboutus_translations?filter[language][eq]=",
  aboutus_gallery: baseURL + "/aboutus_directus_files?fields=*.*",
  dogs: baseURL + "/dogs?fields=*&filter[date_of_birth][eq]=",
  ivy: baseURL + "/dogs?fields=*.*.*&filter[name][eq]=Ivy",
  news: baseURL + "/news?fields=*.*.*.*&sort=-id",
  offspring: baseURL + "/offspring?fields=*.*.*.*",
  expositions: baseURL + "/expositons?fields=*.*.*.*",
  welpen: baseURL + "/welpen?fields=*.*.*.*&sort=-id",
  smallDogs: baseURL + '/dogs?fields=*.*.*&filter[date_of_birth.dateofbirth][eq]=',
};