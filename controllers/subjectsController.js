const SubjectModel = require('../models/subject');

exports.getSubjects = (req, res) => {
  const subjects = SubjectModel.getAll();
  res.render('subjects', { subjects });
};

exports.addSubject = (req, res) => {
  SubjectModel.add(req.body.name);
  res.redirect('/');
};

exports.addLesson = (req, res) => {
  const subject = SubjectModel.findById(req.body.id);
  if (subject) {
    subject.addLesson(req.body.lesson);
  }
  res.redirect('/');
};

exports.deleteSubject = (req, res) => {
  SubjectModel.delete(req.body.id);
  res.redirect('/');
};

exports.deleteLesson = (req, res) => {
  const subject = SubjectModel.findById(req.body.subjectId);
  if (subject) {
    subject.deleteLesson(req.body.lessonId);
  }
  res.redirect('/');
};

exports.editSubject = (req, res) => {
  const subject = SubjectModel.findById(req.body.id);
  if (subject) {
    subject.updateName(req.body.name);
  }
  res.redirect('/');
};