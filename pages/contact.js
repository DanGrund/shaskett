import { useRouter } from 'next/router';
import Link from 'next/link'

const Contact = () => {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <p>
      <Link href="/">
        <a>Home</a>
      </Link>
      contact
    </p>
  )
};

export default Contact;
