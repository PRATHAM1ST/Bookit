import Link from "next/link";

export default function Home({ user }) {
  return (
    <div>
      <table id="users">
        <thead>
          <tr key={0} id={0}>
            <th>Name</th>
            <th>Email</th>
            <th>Website</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.website}</td>
            <td>{user.phone}</td>
          </tr>
        </tbody>
      </table>
      <Link href={`/fake`}>Go Back</Link>
    </div>
  );
}

// export async function getServerSideProps(context) {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${context.params.id}`
//   );

//   const user = await res.json();
//   return {
//     props: {
//       user,
//     },
//   };
// }


// Client side 

export async function getStaticProps(context) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${context.params.id}`
  );

  const user = await res.json();
  return {
    props: {
      user,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);

  const users = await res.json();

  const ids = users.map((user) => user.id);

  //   paths: {params: {id: '1', id: '2'}}

  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
}
