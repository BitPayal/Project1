import ButtonDemo from "./components/Demo/ButtonDemo"
import BadgeDemo from "./components/Demo/BadgeDemo"
import InputDemo from "./components/Demo/InputDemo"
import AvatarDemo from "./components/Demo/AvatarDemo"
import ProgressDemo from "./components/Demo/ProgressDemo"
import LoaderDemo from "./components/Demo/LOaderDemo"
import CheckboxDemo from "./components/Demo/CheckboxDemo"

function App() {
  return (
    <div className="p-6 space-y-6">
      <ButtonDemo />
      <AvatarDemo/> 
      <InputDemo/>
      <BadgeDemo/>
      <ProgressDemo/>
      <LoaderDemo/>
      <CheckboxDemo/>
    </div>
  )
}

export default App
