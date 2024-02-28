import { Convert, Home } from '@components/pages';
import { useEffect, useState } from 'react';
import { useAppStore } from './store';

function App() {
  const [tabUrl, setTabUrl] = useState<string>();
  const { page } = useAppStore();

  useEffect(() => {
    chrome.tabs.query(
      { active: true, currentWindow: true },
      (tabs: chrome.tabs.Tab[]) => {
        if (tabs && tabs[0]) {
          const url = new URL(tabs[0].url!);
          const domain = `${url.protocol}//${url.hostname}${url.pathname}`;
          setTabUrl(domain);
        }
      }
    );
  }, []);

  if (!tabUrl?.includes('stdn.iau.ir')) {
    return <h1>فقط در آموزشیار از این اکستنشن استفاده کنید</h1>;
  }

  switch (page) {
    case 'home':
      return <Home />;

    case 'convert':
      return <Convert />;
  }
}

export default App;
