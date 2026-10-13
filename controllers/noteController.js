
let notes = [
    {
        id: 1,
        title: "Learning Node.js",
        content: "Understand Node.js basics",
        category: "Learning"
    },
    {
        id: 2,
        title: "College Assignment",
        content: "Complete the Notes API",
        category: "College"
    },
    {
        id: 3,
        title: "Shopping List",
        content: "Buy notebooks and pens",
        category: "Personal"
    }
];

// Get all notes
const getAllNotes = (req, res) => {
    res.status(200).json(notes);
};

// Get a note by ID
const getNoteById = (req, res) => {
    const id = Number(req.params.id);
    const note = notes.find(note => note.id === id);

    if (!note) {
        return res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json(note);
};

// Create a new note
const createNote = (req, res) => {
    const { title, content, category } = req.body;

    const newNote = {
        id: Date.now(),
        title,
        content,
        category
    };

    notes.push(newNote);
    res.status(201).json(newNote);
};

// Update a note
const updateNote = (req, res) => {
    const id = Number(req.params.id);
    const note = notes.find(note => note.id === id);

    if (!note) {
        return res.status(404).json({ message: "Note not found" });
    }

    const { title, content, category } = req.body;

    if (title !== undefined) note.title = title;
    if (content !== undefined) note.content = content;
    if (category !== undefined) note.category = category;

    res.status(200).json(note);
};

// Delete a note
const deleteNote = (req, res) => {
    const id = Number(req.params.id);
    const index = notes.findIndex(note => note.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Note not found" });
    }

    const deletedNote = notes.splice(index, 1)[0];

    res.status(200).json({
        message: "Note deleted successfully",
        note: deletedNote
    });
};

module.exports = {
    getAllNotes,
    getNoteById,
    createNote,
    updateNote,
    deleteNote
};
