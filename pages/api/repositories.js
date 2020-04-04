import nextConnect from 'next-connect';

const handler = nextConnect();

handler.get((req, res) => {
  const repositories = [
    { name: 'git-center-server' },
    { name: 'pattern-assignments' },
    { name: 'awk' },
    { name: 'a-repo-with-a-very-very-very-long-name' },
    { name: 'using-git' },
    { name: 'html-assignments' },
    { name: 'a-new-thing' },
    { name: 'rolling-pawns' },
    { name: 'any-other-repo' },
    { name: 'too-may-repos' },
    { name: 'over-flowing-container' },
    { name: 'boot-strap' },
    { name: 'github-source' },
    { name: 'sauron' }
  ];
  
  res.send({
    error: false,
    message: 'Listed All Repositories',
    data: { repositories }
  });
});

export default handler;
