import localforage from "localforage";

const KEY = "key1";

const LocalStorage = {
  save: (value) => {
    try {
      localStorage.setItem(KEY, value);
    } catch (e) {
      console.log('Error LS', e.message);
    }
  },
  load: () => {
    try {
      return localStorage.getItem(KEY);
    } catch (e) {
      console.log('Error LS', e.message);
      return null;
    }
  },
};

const IndexedDB = {
  save: async (value) => {
    try {
      localforage.setDriver([localforage.INDEXEDDB]);

      const table = localforage.createInstance({
        name: "table1",
        storeName: "store1",
      });

      await table.setItem(KEY, value);

      table._dbInfo.db.close();
    } catch (e) {
      console.log('Error IDB', e.message);
    }
  },
  load: async () => {
    try {
      const table = localforage.createInstance({
        name: "table1",
        storeName: "store1",
      });

      const value = await table.getItem(KEY);

      table._dbInfo.db.close();

      return value;
    } catch (e) {
      console.log('Error IDB', e.message);
      return null;
    }
  },
};

export { LocalStorage, IndexedDB };
