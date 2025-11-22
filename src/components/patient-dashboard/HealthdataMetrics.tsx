import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';

export default function HealthdataMetrics() {
  const [userData, setUserData] = useState([{
    type: "Steps",
    value: 3782,
  },
  {
    type: "Active Time",
    value: "4h 30m",
  },
  {
    type: "Sleep",
    value: "7h 45m",
  }]);
  const fetchUserData = async () => {
    setUserData([{
      type: "Steps",
      value: 3782,
    },
    {
      type: "Active Time",
      value: "4h 30m",
    },
    {
      type: "Sleep",
      value: "7h 45m",
    }])
  };

  useEffect(() => {
    fetchUserData();
  }, []);
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-4">
      {userData.map((item, index) => {
        let iconName = "";
        switch (item.type) {
          case "Steps":
            iconName = "lucide:footprints";
            break;
          case "Active Time":
            iconName = "lucide:activity";
            break;
          case "Sleep":
            iconName = "lucide:moon";
            break;
          default:
            iconName = "lucide:activity"; // Default icon
        }

        return (
          <div key={index} className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-4">
            <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
              <Icon icon={iconName} width="24" height="24" className="text-gray-800 dark:text-white/90" />
            </div>

            <div className="flex items-end justify-between mt-5">
              <div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {item.type}
                </span>
                <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
                  {item.value}
                </h4>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
