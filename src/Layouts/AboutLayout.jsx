import { Outlet } from "react-router";

function AboutLayout() {
  const isUser = true;
  return (
    <div>
      {isUser ? (
        <>
          <header>
            <h3>About Header </h3>
          </header>
          <main>
            <Outlet />
          </main>
          <footer>
            <h3>About Footer</h3>
          </footer>
        </>
      ) : (
        <h1>You Are Not User </h1>
      )}
    </div>
  );
}

export default AboutLayout;
