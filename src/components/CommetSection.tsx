import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import Giscus from '@giscus/react';

export const CommentSection = () => {
  const { colorMode } = useColorMode();

  return (
    <div style={{ marginTop: '20px' }}>
      <Giscus
        id="comments"
        repo="mattefara/mattefara.github.io"
        repoId="MDEwOlJlcG9zaXRvcnkxMTUxMjE4MDY"
        category="Ideas"
        categoryId="DIC_kwDOBtyejs4Cf7pz"
        mapping="specific"
        term="posts"
        reactionsEnabled="0"
        emitMetadata="0"
        inputPosition="top"
        theme={colorMode}
        lang="en"
        loading="lazy"
      />
    </div>

  );
};
