import fs from 'fs';

export default (req, res) => {
  try {
    fs.writeFileSync(`${process.env.REPOSITORIES_PATH}/somefile.txt`, 'This is test file');
    res.send({ message: 'Done' });
  } catch (e) {
    res.send({ message: e.message });
  }
};
