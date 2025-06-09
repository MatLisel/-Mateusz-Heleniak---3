const { subjects, Subject } = require('../models/subject');

exports.getSubjects = (req, res) => {
  res.render('subjects', { subjects });
};

exports.addSubject = (req, res) => {
  const newSubject = new Subject(req.body.name);
  subjects.push(newSubject);
  res.redirect('/');
};

exports.addLesson = (req, res) => {
  const subject = subjects.find(s => s.id === req.body.id);
  if (subject) {
    subject.addLesson(req.body.lesson);
  }
  res.redirect('/');
};

exports.deleteSubject = (req, res) => {
  const index = subjects.findIndex(s => s.id === req.body.id);
  if (index !== -1) {
    subjects.splice(index, 1);
  }
  res.redirect('/');
};

exports.deleteLesson = (req, res) => {
  const subject = subjects.find(s => s.id === req.body.subjectId);
  if (subject) {
    subject.deleteLesson(req.body.lessonId);
  }
  res.redirect('/');
};

exports.editSubject = (req, res) => {
  const subject = subjects.find(s => s.id === req.body.id);
  if (subject) {
    subject.updateName(req.body.name);
  }
  res.redirect('/');
};