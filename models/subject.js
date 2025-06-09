let subjects = [];

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

module.exports = { subjects, Subject };