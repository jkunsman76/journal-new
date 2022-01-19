
export const getEntries = () => {
  return fetch("http://localhost:8088/JournalEntries")
    .then(res => res.json())
};

export const searchEntries = (searchTerm) => {
  return fetch(`http://localhost:8088/JournalEntries?q=${searchTerm}`)
    .then(res => res.json())
};

export const getEntryById = id => {
  return fetch(`http://localhost:8088/JournalEntries/${id}`)
    .then(res => res.json())
};

export const addEntry = Entry => {
  return fetch("http://localhost:8088/JournalEntries", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(Entry)
  }).then(getEntries);
};

export const deleteEntry = entryId => {
  return fetch(`http://localhost:8088/JournalEntries/${entryId}`, {
    method: "DELETE"
  })
};

export const updateEntry = entry => {
  return fetch(`http://localhost:8088/JournalEntries/${entry.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(entry)
  })
};

