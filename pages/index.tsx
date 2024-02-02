import Image from "next/image";
import NavbarMain from "./components/navbar";
import ActivityButton from './components/activityButton';
import CardActivity from "./components/cardActivity";
export default function Home() {
  return (
    <div>
      <NavbarMain />
      <ActivityButton/>
      <CardActivity/>
    </div>
  );
}
