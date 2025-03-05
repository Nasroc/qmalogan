import { useState, useEffect } from 'react'
import NavBar from './navbar/nav'
import { Dashboard } from './Dashboard/dashboard'
import { Events_Schedule } from './Calendar/events_schedule'
import './App.css'

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const initialNavigation: NavigationItem[] = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Resources', href: '#', current: false },
  { name: 'Events & Schedule', href: '#', current: false },
];

function chooseApp(navigation: NavigationItem[]) {
  const currentNav = navigation.find(nav => nav.current);

  switch (currentNav?.name) {
    case 'Dashboard':
      return <Dashboard />;
    case 'Team':
      return <div>Team Component</div>;
    case 'Resources':
      return <div>Resources Component</div>;
    case 'Events & Schedule':
      return <Events_Schedule />;
    default:
      return <div>Select an option from the navigation bar</div>;
  }
}

function App() {
  const [navigation, setNavigation] = useState<NavigationItem[]>(() => {
    const savedNavigation = localStorage.getItem('navigation');
    if (savedNavigation) {
      const parsedNavigation = JSON.parse(savedNavigation);
      return initialNavigation.map((item, index) => ({
        ...parsedNavigation[index],
        name: item.name,
      }));
    }
    return initialNavigation;
  });

  useEffect(() => {
    localStorage.setItem('navigation', JSON.stringify(navigation));
  }, [navigation]);
  
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <div className="App">
      <NavBar
        navigation={navigation}
        setNavigation={setNavigation}
        isSignedIn={isSignedIn}
        onSignInSuccess={() => setIsSignedIn(true)}
        onSignOut={() => setIsSignedIn(false)} // Add this line
      />
      {chooseApp(navigation)}
    </div>
  );
}

export default App
