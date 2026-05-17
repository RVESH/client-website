import { createContext, useContext, useState } from "react";

const SubscriptionContext = createContext(null);

export const SubscriptionProvider = ({ children }) => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [plan, setPlan] = useState(null);

  const activateSubscription = (selectedPlan) => {
    setIsSubscribed(true);
    setPlan(selectedPlan);
  };

  return (
    <SubscriptionContext.Provider value={{ isSubscribed, plan, activateSubscription }}>
      {children}
    </SubscriptionContext.Provider>
  );
};

export const useSubscription = () => useContext(SubscriptionContext);