import localforage from "localforage";

const KEY = "key1";

const LocalStorage = {
  save: (value) => {
    localStorage.setItem(KEY, value);
  },
  load: () => localStorage.getItem(KEY),
};

const IndexedDB = {
  save: async (value) => {
    localforage.setDriver([localforage.INDEXEDDB]);

    const table = localforage.createInstance({
      name: "table1",
      storeName: "store1",
    });

    await table.setItem(KEY, value);

    table._dbInfo.db.close()
  },
  load: async () => {
    const table = localforage.createInstance({
      name: "table1",
      storeName: "store1",
    });

    const value = await table.getItem(KEY);

    table._dbInfo.db.close()

    return value;
  },
};

export { LocalStorage, IndexedDB };
