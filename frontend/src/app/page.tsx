import UrlForm from "./components/urlform/UrlForm";
import CustomUrl from "./components/customurl/CustomUrl";
import Info from "./components/info/Info";

export default function Home() {
  return (
    <main className="text-center">
      <Info/>
      <UrlForm />
      <CustomUrl/>
    </main>
  );
}
