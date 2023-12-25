import { MyContextProvider } from "../components/MyContext";
import ButtonComponent from "../components/ButtonComponent";
import DivComponent from "../components/DivComponent";

export default function Home() {
  return (
    <MyContextProvider>
      <div>
        <ButtonComponent />
        <DivComponent />
      </div>
    </MyContextProvider>
  );
}
