export default function Page() {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <h1 className="break-words">Route Groups</h1>
      <p>
        In the <code>app</code> directory, nested folders are normally mapped to
        URL paths. However, you can mark a folder as a{' '}
        <strong>Route Group</strong> to prevent the folder from being included
        in the routes URL path.
      </p>
      <p>
        This allows you to organize your route segments and project files into
        logical groups without affecting the URL path structure.
      </p>
    </div>
  );
}
