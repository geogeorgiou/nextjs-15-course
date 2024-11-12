import Link from "next/link";

const Page = () => {
  return (
    <div>
      <h1>Users</h1>
      <ul className="mt-10">
        {[1, 2, 3, 4].map((id) => (
          <li key={id}>
            <Link href={`/dashboard/users/${id}`}>User {id}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
