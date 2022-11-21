import Link from "next/link";

export default function Home({ users }) {
  return (
    <div>
      <table id="users">
        <thead>
          <tr key={0} id={0}>
            <th>Name</th>
            <th>Email</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} id={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Link href={`/fake/${user.id}`}>
                    View Detail
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);

  const users = await res.json();
  return {
    props: {
      users,
    },
  };
}
