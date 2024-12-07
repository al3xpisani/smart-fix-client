import BugButton from '../components/BugButton';
import { getUserSetting } from '../lib/getUserSetting';

const page = async () => {
  const { theme, language } = await getUserSetting();
  return (
    <div>
      <div className='text-2xl font-bold'>
        <h1>SETTINGS....</h1>
        <h3>Theme {theme}</h3>
        <h3>Language {language}</h3>
      </div>
      <div>
        <BugButton />
      </div>
    </div>
  );
};
export default page;
