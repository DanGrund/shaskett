import { useRouter } from 'next/router';
import Link from 'next/link'

const About = () => {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <p>
      <Link href="/">
        <a>Home</a>
      </Link>
      About
    </p>
  )
};

export default About;
