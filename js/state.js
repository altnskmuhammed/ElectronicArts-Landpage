const set = (key, item) => {
    try {
      const jsonItem = JSON.stringify(item);
       localStorage.setItem(key, jsonItem)
    } catch (e) {
      console.log(e.message)
    }
}
const get = (key) => {
    try {
      return JSON.parse(localStorage.getItem(key))
    } catch (e) {
        console.log(e.message)
    }
}

// shape your data model
const INIT_MODEL = {
    isModalSettingsOpen: false,
    darkMode: false,
    items: [],
};
  
// set initial model
set("model", INIT_MODEL);
  
// write one generic function
const toggle = (oldModel, prop) => ({ ...oldModel, [prop]: !oldModel[prop] });
// and then use:
// const oldModel = get("model");
// toggle(oldModel, "isModalSettingsOpen");
// toggle(oldModel, "darkMode");