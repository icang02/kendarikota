import { useState } from "react";
import { PlaceholdersAndVanishInput } from "./ui/aceternity/vanish-input";

const FormSearch = () => {
  const [search, setSearch] = useState<string>("");

  const placeholders = [
    "Berita terbaru hari ini di kota kita",
    "Apa kebijakan terbaru dari pemerintah kota?",
    "Agenda acara minggu ini, jangan sampai ketinggalan!",
    "Bagaimana perkembangan proyek infrastruktur terbaru?",
    "Laporan cuaca dan info lalu lintas terkini!",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTimeout(() => {
      window.open("https://berita.kendarikota.go.id/?s=" + search, "_blank");
    }, 1000);
  };

  return (
    <div className="flex flex-col justify-center items-center px-4">
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default FormSearch;
