function App() {
  const title = 'Blog post';
  const body = 'This is blog post body!';
  const comments = [
    {
      id: 1,
      text: 'Comment one',
    },
    {
      id: 2,
      text: 'Comment two',
    },
    {
      id: 3,
      text: 'Comment three',
    },
  ];

  return (
    <div>
      <h1> {title} </h1>
      <p> {body} </p>
      <h3> Comments ({comments.length}) </h3>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}> {comment.text} </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
