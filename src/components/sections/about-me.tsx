import Image from 'next/image';

import SagarFullPose from '/public/images/sagar-full-pose.jpg';
import Tag from '@/components/data-display/tag';
import Container from '@/components/layout/container';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import { EXTERNAL_LINKS } from '@/lib/data';

const AboutMeSection = () => {
  return (
    <Container className="bg-gray-50" id="about">
    <div className="self-center">
      <Tag label="About me" />
    </div>
  
    <div className="flex w-full flex-col justify-center gap-12">
      {/* Content */}
      <div className="flex max-w-4xl flex-col gap-6 mx-auto">
        <Typography variant="h3">
          Curious about me? Here you have it:
        </Typography>
        <Typography>
          I&apos;m a passionate Junior software developer developer specializing in Angular and .NET (C#). 
          I thrive on blending technical and visual elements to create seamless digital experiences. With a strong focus 
          on user experience, pixel-perfect design, and writing clean, high-performance code, I bring digital products to life with precision and efficiency
        </Typography>
        <Typography>
          I began my journey as a web developer in 2018, and since then,
          I&apos;ve continued to grow and evolve as a developer, taking on new
          challenges and learning the latest technologies along the way. Now,
          in my twenties, 4  years after starting professional my web development
          journey, I&apos;m building cutting-edge web applications using
          modern technologies such as Angular, TypeScript, Bootstrap,
          Tailwindcss and much more.
        </Typography>
        <Typography>
          I am very much a progressive thinker and enjoy working on products
          end to end, from ideation all the way to development.
        </Typography>
        <Typography>
          When I&apos;m not in full-on developer mode, you can find me
          on online chess . You can follow
          me on{' '}
          <Link
            noCustomization
            externalLink
            withUnderline
            href={EXTERNAL_LINKS.TWITTER}
          >
            Twitter
          </Link>{' '}
          where I share tech-related bites and build in public, or you can
          follow me on{' '}
          <Link
            noCustomization
            externalLink
            withUnderline
            href={EXTERNAL_LINKS.GITHUB}
          >
            GitHub
          </Link>
          .
        </Typography>
        <Typography>Finally, some quick bits about me.</Typography>
        <div className="flex flex-col gap-2 md:flex-row md:gap-6">
          <ul className="flex list-inside list-disc flex-col gap-2">
            <Typography component="li">
              Adv in Computer Science
            </Typography>
            <Typography component="li">Part time freelancer</Typography>
          </ul>
          <ul className="flex list-inside list-disc flex-col gap-2">
            <Typography component="li">Avid learner</Typography>
            <Typography component="li">Aspiring Cloud Engineer</Typography>
          </ul>
        </div>
        <Typography>
          One last thing, I&apos;m available for freelance work, so feel free
          to reach out and say hello! I promise I don&apos;t bite 😉
        </Typography>
      </div>
    </div>
  </Container>
  
  );
};

export default AboutMeSection;
