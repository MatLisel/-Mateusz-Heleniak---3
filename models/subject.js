class Subject {
  constructor(name) {
    this.id = Date.now().toString();
    this.name = name;
    this.progress = [];
  }

  addLesson(lesson) {
    this.progress.push({ id: Date.now().toString(), name: lesson });
  }

  deleteLesson(lessonId) {
    this.progress = this.progress.filter(l => l.id !== lessonId);
  }

  updateName(newName) {
    this.name = newName;
  }
}

const subjects = [];

const SubjectModel = {
  getAll: () => subjects,

  add: (name) => {
    const newSubject = new Subject(name);
    subjects.push(newSubject);
  },

  findById: (id) => subjects.find(s => s.id === id),

  delete: (id) => {
    const index = subjects.findIndex(s => s.id === id);
    if (index !== -1) subjects.splice(index, 1);
  }
};

module.exports = SubjectModel;