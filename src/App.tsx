import { useState, useEffect } from 'react'
import NavBar from './navbar/nav'
import { Dashboard } from './Dashboard/dashboard'
import Calendar from './Calendar/calendar'
import './App.css'

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const initialNavigation: NavigationItem[] = [
  { name: 'Dashboard', href: 'www.qmalogan.com', current: true },
  { name: 'Team', href: 'www.qmalogan.com', current: false },
  { name: 'Projects', href: 'www.qmalogan.com', current: false },
  { name: 'Calendar', href: 'www.qmalogan.com', current: false },
];

function chooseApp(navigation: NavigationItem[]) {
  const currentNav = navigation.find(nav => nav.current);

  switch (currentNav?.name) {
    case 'Dashboard':
      return <Dashboard />;
    case 'Team':
      return <div>Team Component</div>;
    case 'Projects':
      return <div>Projects Component</div>;
    case 'Calendar':
      return <Calendar />;
    default:
      return <div>Select an option from the navigation bar</div>;
  }
}

function App() {
  const [navigation, setNavigation] = useState<NavigationItem[]>(() => {
    const savedNavigation = localStorage.getItem('navigation');
    return savedNavigation ? JSON.parse(savedNavigation) : initialNavigation;
  });

  useEffect(() => {
    localStorage.setItem('navigation', JSON.stringify(navigation));
  }, [navigation]);

  return (
    <div className="App">
      <NavBar navigation={navigation} setNavigation={setNavigation} />
      {chooseApp(navigation)}
    </div>
  );
}

export default App
