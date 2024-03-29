import UrlForm from "./components/urlform/UrlForm";
import Info from "./components/info/Info";

export default function Home() {
  return (
    <main className="text-center">
      <Info/>
      <UrlForm />
    </main>
  );
}
