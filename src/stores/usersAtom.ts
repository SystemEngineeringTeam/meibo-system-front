import { atom } from 'jotai';
import { loadable } from 'jotai/utils';
import { type User } from '@/types/user';
import { waitMs } from '@/utils/promise';

const fetchUsers = async (): Promise<Array<User<false>>> => {
  await waitMs(2000);

  const users: Array<User<false>> = [
    {
      id: '',
      firstName: 'さとる',
      lastName: '佐藤',
      firstNameKana: '',
      lastNameKana: '',
      skills: ['JavaScript', 'TypeScript', 'React'],
      graduationYear: 2027,
      slackName: '',
      iconUrl: '',
      type: 'active',
      grade: 'B1',
      position: '部員',
      studentNumber: 'k23075',
    },
    {
      id: '',
      firstName: '邪馬',
      lastName: '山田',
      firstNameKana: '',
      lastNameKana: '',
      skills: ['JavaScript', 'TypeScript', 'React'],
      graduationYear: 2027,
      slackName: '',
      iconUrl: '',
      type: 'active',
      grade: 'B1',
      position: '部員',
      studentNumber: 'k23075',
    },
  ];

  return users;
};

const usersAtom = atom(async () => await fetchUsers());
export const userAtomLoadable = loadable(usersAtom);
