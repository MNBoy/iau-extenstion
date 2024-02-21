import { useAppStore } from '@lib/store';
import { RecoveryConvert } from 'iconsax-react';
import { useEffect } from 'react';

interface IProfile {
  name: string;
  studentId: string;
}

interface IListboxItem {
  key: string;
  label: string;
  description?: string;
  icon?: React.ReactNode;
}

const listItems: IListboxItem[] = [
  {
    key: 'convertText',
    label: 'تبدیل اسم دروس',
    description: 'برای جست و جو درس میتونید از این قسمت استفاده کنید',
    icon: <RecoveryConvert variant='Bulk' />,
  },
];

const useHome = () => {
  const { setProfile, profile } = useAppStore();

  useEffect(() => {
    chrome.tabs.query(
      { active: true, currentWindow: true },
      (tabs: chrome.tabs.Tab[]) => {
        if (tabs && tabs[0]) {
          const activeTabId = tabs[0].id!;
          if (activeTabId) {
            chrome.scripting.executeScript({
              target: { tabId: activeTabId },
              func: () => {
                const usernameAndUserId =
                  document.querySelector('.username strong')?.textContent;
                if (usernameAndUserId) {
                  const pattern = /([\p{L}\s]+)\s\[\s(\d+)@edu\s\]/u;
                  const match = pattern.exec(usernameAndUserId.trim());
                  if (match) {
                    const name = match[1].trim(); // Trim to remove extra spaces
                    const studentId = match[2];
                    chrome.runtime.sendMessage({
                      name,
                      studentId,
                    });
                  } else {
                    console.log('No match found');
                  }
                } else {
                  console.log('usernameAndUserId is null or undefined');
                }
              },
            });
          }
        }
      }
    );

    const setData = (req: IProfile) => {
      setProfile({
        name: req.name,
        studentId: req.studentId,
      });
    };
    chrome.runtime.onMessage.addListener(setData);

    return () => {
      chrome.runtime.onMessage.removeListener(setData);
    };
  }, []);

  return { profile, listItems };
};

export default useHome;
