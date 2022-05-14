import Link from 'next/link'
//useRouter
const HelloPage = () => {
  return (
    <div>
      <h1>hello</h1>
      <Link href="/">home 으로 이동</Link>
    </div>
  );
};

export default HelloPage;
