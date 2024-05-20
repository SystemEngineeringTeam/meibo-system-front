import { atom } from 'jotai';
import { loadable } from 'jotai/utils';
import { type SigninedUser } from '@/types/user';
import { waitMs } from '@/utils/promise';

const fetchUser = async (): Promise<SigninedUser<boolean>> => {
  await waitMs(2000);

  const user: SigninedUser<boolean> = {
    signined: true,
    id: '0000-0000-0000-0000',
    firstName: '智',
    lastName: '佐藤',
    firstNameKana: 'さとる',
    lastNameKana: 'さとう',
    skills: ['JavaScript', 'TypeScript', 'React'],
    graduationYear: 2027,
    slackName: '',
    iconUrl: 'https://via.placeholder.com/50',
    type: 'active',
    grade: 'B1',
    position: '部員',
    studentNumber: 'k23075',
    birthdate: '2005-01-05',
    email: 'satooru@syscat.net',
    gender: '男',
    phoneNumber: '090-0000-0000',
    currentAddress: {
      address: '愛知県名古屋市',
      postalCode: '460-0000',
    },
    homeAddress: {
      address: '愛知県名古屋市',
      postalCode: '460-0000',
    },
  };

  return user;
};

const userAtom = atom(async () => await fetchUser());
export const userAtomLoadable = loadable(userAtom);
