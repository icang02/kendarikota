import { WordObject } from "@/types";

export function convertStringToWords(inputString: string): WordObject[] {
  return inputString.split(" ").map((word, index, array) => {
    const obj: WordObject = { text: word };
    if (index === array.length - 1) {
      obj.className = "text-blue-400";
    }
    return obj;
  });
}

export const navProgramKotaku = {
  title: "Program Kotaku",
  menu: [
    {
      label: "Tentang Kotaku",
      url: "https://kotaku.pu.go.id/page/6880/tentang-program-kota-tanpa-kumuh-kotaku",
    },
    {
      label: "Dokumen",
      subMenu: [
        {
          label: "SK Pengurangan Kumuh 2020",
          url: "/dokumen/SK_Kumuh_Walikota_Kendari_2020.pdf",
        },
        {
          label:
            "Lokasi & Besaran Bantuan Kegiatan Infrastruktur Berbasis Masyarakat",
          subMenu: [
            {
              label: "Tahun 2017",
              url: "/dokumen/1_Surat_Daftar_Lokasi_dan_Alokasi_Bantuan_Pemerintah_2017.pdf",
            },
            {
              label: "Tahun 2018",
              url: "/dokumen/180522_DAFLOK_BDI_2018.pdf",
            },
            {
              label: "Tahun 2019",
              url: "/dokumen/surat-dir-pkp-no-bw-0901-ttg-lokasi-alokasi-bpm-2019-nsup-kotaku.pdf",
            },
            {
              label: "Tahun 2020",
              url: "/dokumen/Kepmen-PUPR-167-Lokasi-IBM-TA-2020.pdf",
            },
            {
              label: "Tahun 2021",
              url: "/dokumen/20210222-Kepmen-PUPR-No-177-KPTS-M-2021-penetapan-lokasi-dan-besaran-bantuan-kegiatan-IBM-2021.pdf",
            },
          ],
        },
      ],
    },
    {
      label: "Profil Kumuh",
      subMenu: [
        {
          label: "Profil Kumuh 19 Parameter",
          url: "http://103.12.84.58/slum/profil/umum",
        },
        {
          label: "Profil Kumuh 16 Parameter",
          url: "http://103.12.84.58/slum/profil16p/umum",
        },
      ],
    },
    {
      label: "Realisasi Kegiatan Skala Kawasan",
      subMenu: [
        {
          label: "Informasi Umum",
          url: "http://103.12.84.58/report/skala_kawasan/informasi_umum_kawasan?prop=74",
        },
        {
          label: "Lelang Progres",
          url: "http://103.12.84.58/report/skala_kawasan/progres_lelang?prop=74",
        },
        {
          label: "Selesai Lelang",
          url: "http://103.12.84.58/report/skala_kawasan/selesai_lelang?prop=74",
        },
        {
          label: "Progres Pembayaran",
          url: "http://103.12.84.58/report/skala_kawasan/progres_pembayaran?prop=74",
        },
        {
          label: "Output Kegiatan",
          url: "http://103.12.84.58/report/skala_kawasan/output_kegiatan?kota=7471",
        },
      ],
    },
    {
      label: "Realisasi Kegiatan Kolaborasi",
      subMenu: [
        {
          label: "Tahun 2015",
          url: "http://103.12.84.58/report/kolaborasi_wb?th=2015&tha=2015&Kota=7471",
        },
        {
          label: "Tahun 2016",
          url: "http://103.12.84.58/report/kolaborasi_wb?th=2016&tha=2016&Kota=7471",
        },
        {
          label: "Tahun 2017",
          url: "http://103.12.84.58/report/kolaborasi_wb?th=2017&tha=2017&Kota=7471",
        },
        {
          label: "Tahun 2018",
          url: "http://103.12.84.58/report/kolaborasi_wb?th=2018&tha=2018&Kota=7471",
        },
        {
          label: "Tahun 2019",
          url: "http://103.12.84.58/report/kolaborasi_wb?th=2019&tha=2019&Kota=7471",
        },
        {
          label: "Tahun 2020",
          url: "http://103.12.84.58/report/kolaborasi_wb?th=2020&tha=2020&Kota=7471",
        },
        {
          label: "Tahun 2021",
          url: "http://103.12.84.58/report/kolaborasi_wb?th=2021&tha=2021&Kota=7471",
        },
      ],
    },
    {
      label: "Realisasi Kegiatan Skala Lingkungan",
      subMenu: [
        {
          label: "Tahun 2017",
          url: "http://103.12.84.58/report/pencairan?th=2017&blm=1&Kota=7471",
        },
        {
          label: "Tahun 2018",
          url: "http://103.12.84.58/report/pencairan?th=2018&blm=1&Kota=7471",
        },
        {
          label: "Tahun 2019",
          url: "http://103.12.84.58/report/pencairan?th=2019&blm=1&Kota=7471",
        },
        {
          label: "Tahun 2020",
          url: "http://103.12.84.58/report/pencairan?th=2020&blm=1&Kota=7471",
        },
        {
          label: "Tahun 2021",
          url: "http://103.12.84.58/report/pencairan?th=2021&blm=1&Kota=7471",
        },
      ],
    },
    {
      label: "Foto Kegiatan Skala Kawasan",
      subMenu: [
        {
          label: "Tahun 2019",
          url: "http://103.12.84.58/report/foto_realisasi_kegiatan_kawasan?th=2019&prop=74",
        },
        {
          label: "Tahun 2021",
          url: "http://103.12.84.58/report/foto_realisasi_kegiatan_kawasan?th=2021&prop=74",
        },
      ],
    },
    {
      label: "Foto Kegiatan Padat Karya",
      subMenu: [
        {
          label: "Tahun 2019",
          url: "http://103.12.84.58/report/realisasi_kegiatan?th=2019&prop=74",
        },
        {
          label: "Tahun 2020",
          url: "http://103.12.84.58/report/realisasi_kegiatan?th=2020&prop=74",
        },
        {
          label: "Tahun 2021",
          url: "http://103.12.84.58/report/realisasi_kegiatan?th=2021&prop=74",
        },
      ],
    },
  ],
};

export const menuKendariKita = {
  label: "Kendari Kita",
  menu: [
    {
      title: "Sejarah Kota Kendari",
      href: "/kendari-kita/sejarah-kota-kendari",
      description: "Ketahui sejarah dan asal-usul perkembangan Kota Kendari",
    },
    {
      title: "Visi & Misi",
      href: "/kendari-kita/visi-misi",
      description: "Tujuan dan arah pembangunan Kota Kendari",
    },
    {
      title: "Profil Walikota",
      href: "/kendari-kita/walikota",
      description: "Informasi tentang Walikota Kendari saat ini",
    },
    {
      title: "Profil Wakil Walikota",
      href: "/kendari-kita/wakil-walikota",
      description: "Informasi tentang Wakil Walikota Kendari saat ini",
    },
    {
      title: "Pejabat Pemerintah",
      href: "/kendari-kita/pejabat-pemerintah",
      description: "Daftar pejabat yang bertugas di pemerintahan kota",
    },
    {
      title: "Perangkat Daerah",
      href: "/kendari-kita/perangkat-daerah",
      description:
        "Struktur organisasi perangkat daerah pemerintah Kota Kendari",
    },
  ],
};

export const menuDirektori = {
  label: "Direktori",
  menu: [
    {
      title: "Wisata",
      href: "/direktori/wisata",
      description: "Informasi destinasi wisata di Kota Kendari.",
    },
    {
      title: "Institusi Pendidikan",
      href: "/direktori/institusi-pendidikan",
      description: "Daftar sekolah dan perguruan tinggi di Kendari.",
    },
    {
      title: "Rumah Sakit",
      href: "/direktori/rumah-sakit",
      description: "Informasi rumah sakit dan layanan kesehatan",
    },
    {
      title: "Rumah Ibadah",
      href: "/direktori/rumah-ibadah",
      description: "Lokasi tempat ibadah berbagai agama di Kendari",
    },
    {
      title: "Pusat Perbelanjaan",
      href: "/direktori/pusat-perbelanjaan",
      description: "Daftar pusat perbelanjaan dan pasar di Kendari",
    },
    {
      title: "Hiburan",
      href: "/direktori/hiburan",
      description: "Tempat hiburan dan taman rekreasi Kota Kendari",
    },
    {
      title: "Kelurahan & Kecamatan",
      href: "/direktori/kelurahan-kecamatan",
      description: "Informasi wilayah administratif Kota Kendari",
    },
    {
      title: "Olahraga",
      href: "/direktori/olahraga",
      description: "Sarana dan fasilitas olahraga yang tersedia",
    },
    {
      title: "Transportasi",
      href: "/direktori/transportasi",
      description: "Moda transportasi umum dan layanan angkutan",
    },
  ],
};

export const menuEvent = {
  label: "Event",
  menu: [
    {
      title: "Agenda",
      href: "/event/agenda",
      description: "Jadwal acara dan kegiatan resmi di Kendari",
    },
    {
      title: "Pengumuman",
      href: "/event/pengumuman",
      description: "Informasi penting dan pengumuman pemerintah",
    },
  ],
};

export const menuArsip = {
  label: "Arsip",
  url: "/arsip",
  description: "Akses dokumen arsip Pemerintah Kota Kendari",
};

export const menuPeraturanDaerah = {
  label: "Peraturan Daerah",
  url: "/peraturan-daerah",
  description: "Peraturan daerah Pemerintah Kota Kendari",
};

export const menuStatistik = {
  label: "Statistik",
  url: "/statistik",
  description: "Statistik dan laporan Pemerintah Daerah Kota Kendari",
};
