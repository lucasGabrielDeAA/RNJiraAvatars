import React, { FC } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Column, Avatars } from 'src/components';

const Home: FC = () => {
  const avatars = [
    { id: 0, avatar_url: 'https://themes.gohugo.io/theme/vncnt-hugo/img/avatar.jpg' },
    { id: 1, avatar_url: 'https://themes.gohugo.io/theme/vncnt-hugo/img/avatar.jpg' },
    { id: 2, avatar_url: 'https://themes.gohugo.io/theme/vncnt-hugo/img/avatar.jpg' },
    { id: 3, avatar_url: 'https://themes.gohugo.io/theme/vncnt-hugo/img/avatar.jpg' },
    { id: 4, avatar_url: 'https://themes.gohugo.io/theme/vncnt-hugo/img/avatar.jpg' },
    { id: 5, avatar_url: 'https://themes.gohugo.io/theme/vncnt-hugo/img/avatar.jpg' },
    { id: 6, avatar_url: 'https://themes.gohugo.io/theme/vncnt-hugo/img/avatar.jpg' },
    { id: 7, avatar_url: 'https://themes.gohugo.io/theme/vncnt-hugo/img/avatar.jpg' },
    { id: 8, avatar_url: 'https://themes.gohugo.io/theme/vncnt-hugo/img/avatar.jpg' },
    { id: 9, avatar_url: 'https://themes.gohugo.io/theme/vncnt-hugo/img/avatar.jpg' },
    { id: 10, avatar_url: 'https://themes.gohugo.io/theme/vncnt-hugo/img/avatar.jpg' },
    { id: 11, avatar_url: 'https://themes.gohugo.io/theme/vncnt-hugo/img/avatar.jpg' },
    { id: 12, avatar_url: 'https://themes.gohugo.io/theme/vncnt-hugo/img/avatar.jpg' }
  ];

  return (
    <Column as={SafeAreaView} alignItems='center' flex={1}>
      <Avatars data={avatars} callToAction={() => {}} />
    </Column>
  );
};

export default Home;
