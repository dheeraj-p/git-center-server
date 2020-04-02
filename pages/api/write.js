import fs from 'fs';

export default (req, res) => {
  try {
    fs.writeFileSync('/usr/src/repos/somefile.txt', 'This is test file');
    res.send({ message: 'Done' });
  } catch (e) {
    res.send({ message: e.message });
  }
};
