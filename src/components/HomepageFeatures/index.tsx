import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Learning something new',
    description: (
      <>
        The purpose of this homelab is to learn new technologies while deepening knowledge about personal interests. I am an Italian DevOps professional with a passion for the cloud, automation, and Kubernetes.
      </>
    ),
  },
  {
    title: 'Have fun',
    description: (
      <>
        I believe that having fun while learning is a great way to improve. Sometimes, I enjoy experimenting with Kubernetes while developing simple applications to test things.
      </>
    ),
  },
  {
    title: 'Self-Improvement',
    description: (
      <>
        One of the purposes of this site is to write about activities that I'm experimenting with. Typically, little to no documentation is written, and one of the goal of this project is to change this habit.
      </>
    ),
  },
];

function Feature({ title, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
