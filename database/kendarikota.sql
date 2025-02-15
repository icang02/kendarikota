-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Feb 15, 2025 at 08:24 PM
-- Server version: 8.0.30
-- PHP Version: 8.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kendarikota`
--

-- --------------------------------------------------------

--
-- Table structure for table `agenda`
--

CREATE TABLE `agenda` (
  `id` int NOT NULL,
  `nama` varchar(255) NOT NULL,
  `deskripsi` text NOT NULL,
  `tanggal` date NOT NULL,
  `lokasi` varchar(90) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `agenda`
--

INSERT INTO `agenda` (`id`, `nama`, `deskripsi`, `tanggal`, `lokasi`) VALUES
(1, 'SIDANG PARIPURNA DPRD KOTA KENDARI', 'MENDENGARKAN PIDATO PRESIDEN RI DALAM RANGKA HUT RI KE-76', '2021-08-16', 'KANTOR DPRD KOTA KENDARI'),
(2, 'UPACARA', 'UPACARA PERINGATAN HUT RI KE-76 ', '2021-08-17', 'PELATARAN RUJAB WALIKOTA KENDARI');

-- --------------------------------------------------------

--
-- Table structure for table `aplikasi`
--

CREATE TABLE `aplikasi` (
  `id` int NOT NULL,
  `nama` varchar(125) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `icon` varchar(255) DEFAULT '',
  `link` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `aplikasi`
--

INSERT INTO `aplikasi` (`id`, `nama`, `icon`, `link`) VALUES
(1, 'SPPD ELEKTRONIK', 'icon-aplikasi/sppd2.png', 'https://sppd.kendarikota.go.id/'),
(3, 'Simper', 'icon-aplikasi/simper.png', 'https://simper.kendarikota.go.id'),
(4, 'LHKPN', 'icon-aplikasi/lhkpn3.png', 'https://elhkpn.kpk.go.id/portal/user/pengumuman_lhkpn/VWpNMFVXcEVPWFZqUTI1blNHUlVRM2xVZGxsUlpERldNRkJ2UTNOdGIwNWlWbXBUVVdaS09FOUZUak5EY1d4SFYxRm9VR2RGT1ZRNE9Vd3ZkWEJRZVE9PQ=='),
(5, 'Jaga Kendari', 'icon-aplikasi/jarilogo.png', 'https://jari.kendarikota.go.id/'),
(8, 'PPID Kota Kendari', 'icon-aplikasi/ppid2.png', 'http://ppid.kendarikota.go.id/'),
(10, 'SI-TPPNS', 'icon-aplikasi/si_tppns2.png', 'https://sitppns.kendarikota.go.id'),
(12, 'Lapor SP4N', 'icon-aplikasi/lapor.png', 'https://www.lapor.go.id/instansi/pemerintah-kota-kendari'),
(13, 'Pajak Menyapa', 'icon-aplikasi/logo_jakpa1.png', 'https://jakpa.kendarikota.go.id/'),
(14, 'Si Mantap', 'icon-aplikasi/simantap1.png', 'https://simantap.kendarikota.go.id/auth/login'),
(15, 'PPDB', 'icon-aplikasi/diknas.png', 'https://dikmudora.kendarikota.go.id/ppdb/'),
(16, 'L2T2', 'icon-aplikasi/L2T2.png', 'https://l2t2.kendarikota.go.id/'),
(17, 'e-proksi', 'icon-aplikasi/eproksi.png', 'https://eproksi.kendarikota.go.id/'),
(18, 'Simpel SP2D', 'icon-aplikasi/sp2d.png', 'https://simpelsp2d.kendarikota.go.id/auth/login'),
(19, 'Sistem Bantuan Covid-19', 'icon-aplikasi/bakso.png', 'https://bakso.kendarikota.go.id/'),
(20, 'Absen Online', 'icon-aplikasi/absen.png', 'https://asn.kendarikota.go.id/'),
(21, 'Si Asik Sehat', 'icon-aplikasi/siasik_sehat1.png', 'https://siasiksehat.kendarikota.go.id/'),
(22, 'Kendari Preneur', 'icon-aplikasi/kp.png', 'https://kendaripreneur.kendarikota.go.id/'),
(23, 'USBD', 'icon-aplikasi/payload_sample.jpg', 'https://disdikkendari.id/'),
(24, 'eSakip', 'icon-aplikasi/esakip.png', 'https://esakip.kendarikota.go.id/'),
(25, 'DISDUKCAPIL', NULL, 'http://disdukcapil.kendarikota.go.id'),
(26, 'DINKES', NULL, 'https://siasiksehat.kendarikota.go.id/'),
(27, 'DISPERINDAG', NULL, 'http://disperindag.kendarikota.go.id/'),
(28, 'BPKAD', NULL, 'https://bpkad.kendarikota.go.id'),
(29, 'DIKMUDORA', NULL, 'https://dikmudora.kendarikota.go.id'),
(30, 'DISPPPA', NULL, 'http://dispppa.kendarikota.go.id/'),
(32, 'INSPEKTORAT', NULL, 'https://inspektorat.kendarikota.go.id/'),
(33, 'DPM-PTSP', NULL, 'http://ptsp.kendarikota.go.id'),
(34, 'RSUD', NULL, 'http://rsud.kendarikota.go.id/'),
(35, 'KEC. NAMBO', NULL, 'https://nambojaga.kendarikota.go.id/'),
(36, 'KEC. ABELI', NULL, 'https://abelijaga.kendarikota.go.id/'),
(37, 'KEC. KENDARI', NULL, 'https://kendarijaga.kendarikota.go.id/'),
(38, 'KEC. KENDARI BARAT', NULL, 'https://kendaribaratjaga.kendarikota.go.id/'),
(39, 'KEC. MANDONGA', NULL, 'https://mandongajaga.kendarikota.go.id/'),
(40, 'KEC. PUUWATU', NULL, 'https://puuwatujaga.kendarikota.go.id/'),
(41, 'KEC. KADIA', NULL, 'https://kadiajaga.kendarikota.go.id/'),
(42, 'KEC. WUA - WUA', NULL, 'https://wuawuajaga.kendarikota.go.id/'),
(43, 'KEC. BARUGA', NULL, 'https://barugajaga.kendarikota.go.id/'),
(44, 'KEC. KAMBU', NULL, 'https://kambujaga.kendarikota.go.id/'),
(47, 'Pindara', 'icon-aplikasi/logo_kota_putih.png', 'https://pindara.kendarikota.go.id/'),
(48, 'DERING ASMARA', 'icon-aplikasi/deringasmara.jpeg', 'https://deringasmara.kendarikota.go.id/'),
(49, 'E-Katalog Kendari', 'icon-aplikasi/ekatalog.png', 'https://ikm.kendarikota.go.id'),
(50, 'E - LINMAS', 'icon-aplikasi/E-linmas_logo-removebg-preview.png', 'https://e-linmas.kendarikota.go.id/'),
(51, 'ECO KIM', NULL, 'https://ecokim.id/');

-- --------------------------------------------------------

--
-- Table structure for table `arsip`
--

CREATE TABLE `arsip` (
  `id` int UNSIGNED NOT NULL,
  `judul` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `sumber` varchar(100) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `link` varchar(255) DEFAULT NULL,
  `release` timestamp NULL DEFAULT NULL,
  `penetapan` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `arsip`
--

INSERT INTO `arsip` (`id`, `judul`, `sumber`, `link`, `release`, `penetapan`) VALUES
(4, 'Kota Kendari dalam angka 2023', 'BPS Kota Kendari', NULL, '2023-03-16 15:40:00', NULL),
(7, 'Kota Kendari Dalam Angka 2021', 'BPS Kota Kendari', 'https://drive.google.com/file/d/1NBczLp6Y0NjVDwF_jbrB4cbTfDYAZt0k/view', '2021-02-28 16:53:20', NULL),
(8, 'Ringkasan APBD Kota Kendari Tahun Anggaran 2021', 'BPKAD Kota Kendari', NULL, '2020-12-31 16:13:20', NULL),
(9, 'Ringkasan APBD Kota Kendari Tahun Anggaran  2019', 'BPKAD Kota Kendari', NULL, '2019-12-31 16:53:20', NULL),
(10, 'Kota Kendari dalam angka 2016', 'BPS Kota Kendari', 'https://drive.google.com/uc?authuser=0&id=14yNG84XF_KWxLENqchyAJp1b_Zdwuntp', '2016-03-15 17:00:00', NULL),
(11, 'Kota Kendari dalam angka 2017', 'BPS Kota Kendari', 'https://drive.google.com/uc?authuser=0&id=1GOwZzy-5SJ-M0MT9ODeuj9T1wL-hPvrJ', '2017-03-08 16:40:00', NULL),
(12, 'Kota Kendari dalam angka 2018', 'BPS Kota Kendari', 'https://drive.google.com/uc?authuser=0&id=15CF-qddDXiMiQ_frj1G5uEj6f1blWuet', '2018-03-14 15:26:40', NULL),
(13, 'Kota Kendari dalam angka 2019', 'BPS Kota Kendari', 'https://drive.google.com/uc?authuser=0&id=15CF-qddDXiMiQ_frj1G5uEj6f1blWuet', '2019-03-05 15:53:20', NULL),
(14, 'Kota Kendari dalam angka 2022', 'BPS Kota Kendari', 'https://drive.google.com/uc?authuser=0&id=https://drive.google.com/file/d/1AUNkO4oXds1xX5A3On7n73vNxYyrr9hZ/view?usp=sharing', '2022-03-16 17:20:00', NULL),
(15, 'Kota Kendari Dalam Angka 2020', 'BPS Kota Kendari', 'https://drive.google.com/uc?authuser=0&id=14AQagnZilgvJEcGCMkzVQU3MDpKnXprZ', '2020-03-12 16:40:00', NULL),
(16, 'PDRB menurut lapangan usaha 2010-2013', 'BPS Kota Kendari', 'https://drive.google.com/uc?authuser=0&id=1TY26U2CkfIIvZEOVPouXBV1BJoKMPYvQ', '2014-07-23 16:00:00', NULL),
(17, 'PDRB menurut lapangan usaha 2010-2014', 'BPS Kota Kendari', 'https://drive.google.com/uc?authuser=0&id=1jdKiavcYHbT7QQyLWug7jr6HeO5lNpVZ', '2015-09-16 16:33:20', NULL),
(18, 'PDRB menurut lapangan usaha 2013-2017', 'BPS Kota Kendari', 'https://drive.google.com/uc?authuser=0&id=1c0novK4COuGTFhLEAMdzFcuJk7jJEQxo', '2018-08-21 17:06:40', NULL),
(19, 'Ringkasan APBD Kota Kendari Tahun Anggaran 2023', 'BPKAD Kota Kendari', NULL, '2023-01-08 15:20:00', NULL),
(20, 'Ringkasan RKPD', 'BPKAD Kota Kendari', 'dokumen/static/1. Ringkasan RKPD.pdf', '2022-06-14 15:40:00', NULL),
(21, 'Kebijakan Umum Anggaran', 'BPKAD Kota Kendari', 'dokumen/static/2. Kebijakan Umum Anggaran.pdf', '2022-06-14 15:40:00', NULL),
(22, 'Ringkasan Dokumen Prioritas dan Plafon Anggaran', 'BPKAD Kota Kendari', 'dokumen/static/3. Ringkasan Dokumen Prioritas dan Plafon Anggaran.pdf', '2022-06-14 15:40:00', NULL),
(23, 'Ringkasan Dokumen RKA-PPKD', 'BPKAD Kota Kendari', 'dokumen/static/4&5. RKA KUPA PPAS 2022-2023.zip', '2022-01-12 15:26:40', NULL),
(24, 'Ringkasan Dokumen RKA-SKPD', 'BPKAD Kota Kendari', 'dokumen/static/4&5. RKA KUPA PPAS 2022-2023.zip', '2022-01-13 16:26:40', NULL),
(25, 'Ringkasan Dokumen Rancangan Perda APBD', 'BPKAD Kota Kendari', 'dokumen/static/6,7&8. Dokumen tentang APBD 2022.zip', '2021-12-18 15:26:40', NULL),
(26, 'Perda Tentang APBD', 'BPKAD Kota Kendari', 'dokumen/static/6,7&8. Dokumen tentang APBD 2022.zip', '2021-12-18 15:26:40', NULL),
(27, 'Perda Tentang Penjabaran APBD', 'BPKAD Kota Kendari', 'dokumen/static/6,7&8. Dokumen tentang APBD 2022.zip', '2021-12-18 15:26:40', NULL),
(28, 'Ringkasan DPA-PPKD', 'BPKAD Kota Kendari', 'dokumen/static/9 & 10. Ringkasan dan Informasi DPA-PPKD.zip', '2022-01-13 16:26:40', NULL),
(29, 'SK Kepala Daerah tentang Pejabat Pengelola Keuangan Daerah', 'BPKAD Kota Kendari', 'dokumen/static/19. SK Kepala Daerah Tentang Pejabat Pengelola Keuangan Daerah.pdf', '2021-12-29 15:20:00', NULL),
(30, 'Realisasi Pendapatan Daerah', 'BPKAD Kota Kendari', 'dokumen/static/11,12,13. Realisasi pendapatan daerah 2022.xls', '2023-01-11 15:33:20', NULL),
(31, 'Realisasi Belanja Daerah', 'BPKAD Kota Kendari', 'dokumen/static/2023/11,12,13. Realisasi pendapatan daerah 2022.xls', '2023-01-11 15:33:20', NULL),
(32, 'Realisasi Pembiayaan Daerah', 'BPKAD Kota Kendari', 'dokumen/static/11,12,13. Realisasi pendapatan daerah 2022.xls', '2023-01-11 15:33:20', NULL),
(33, 'Perda Tentang Penjabaran Perubahan Anggaran', 'BPKAD Kota Kendari', 'dokumen/static/16. Penjabaran Perubahan Anggaran.pdf', '2022-10-21 16:53:20', NULL),
(34, 'Ringkasan RKA Perubahan APBD', 'BPKAD Kota Kendari', 'dokumen/static/17. Ringkasan RKA Perubahan APBD.pdf', '2022-10-21 16:53:20', NULL),
(35, 'Rencana Umum Pengadaan', 'BPKAD Kota Kendari', 'dokumen/static/18. Rencana Umum Pengadaan.jpg', '2021-12-01 15:06:40', NULL),
(36, 'Informasi DPA-PPKD', 'BPKAD Kota Kendari', 'dokumen/static/9 & 10. Ringkasan dan Informasi DPA-PPKD.zip', '2022-01-13 16:26:40', NULL),
(37, 'Perda Tentang Kebijakan Akuntansi', 'BPKAD Kota Kendari', 'dokumen/static/20. Perda tentang Kebijakan Akuntansi.pdf', '2022-06-27 14:46:40', NULL),
(38, 'Laporan Arus Kas', 'BPKAD Kota Kendari', 'dokumen/static/21. Laporan Arus KAS 2022.xlsx', '2023-01-02 14:53:20', NULL),
(39, 'Laporan Realisasi Anggaran seluruh SKPD', 'BPKAD Kota Kendari', 'dokumen/static/22. Laporan Realisasi Anggaran SKPD 2022.xlsx', '2023-01-02 14:53:20', NULL),
(40, 'Informasi Neraca', 'BPKAD Kota Kendari', 'dokumen/static/24. Informasi Neraca.pdf', '2023-01-02 14:53:20', NULL),
(42, 'Laporan Keuangan BUMN/Perusahaan Daerah', 'BPKAD Kota Kendari', 'dokumen/static/26. Laporan Keuangan Perusahaan Daerah.pdf', '2023-03-11 16:13:20', NULL),
(43, 'Penetapan Perda Pertanggungjawaban APBD', 'BPKAD Kota Kendari', 'dokumen/static/28. Penetapan Perda Pertanggungjawaban APBD.pdf', '2023-08-29 15:00:00', NULL),
(44, 'Opini BPK-RI', 'BPKAD Kota Kendari', 'dokumen/static/29. OPINI BPK 2022.pdf', '2023-05-16 15:33:20', NULL),
(45, 'Kota Kendari Dalam Angka 2024', 'BPS Kota Kendari', NULL, '2024-02-29 15:40:00', NULL),
(46, 'Informasi Ringkasan Dokumen RKPD 2023', 'BPKAD Kota Kendari', NULL, NULL, NULL),
(47, 'Informasi Kebijakan Umum Anggaran 2023', 'BPKAD Kota Kendari', 'https://drive.google.com/uc?export=download&id=14piTURToig0RmwXxGP-oIkxktXd0VW5O', '2022-09-29 17:06:40', '2022-09-29 16:00:00'),
(48, 'Informasi Ringkasan Dokumen Prioritas dan Plafon 2023', 'BPKAD Kota Kendari', 'https://drive.google.com/uc?export=download&id=1o0AS8x2MlRaO1u9vYePk-GyzfLjhKBCy', '2022-09-29 17:06:40', '2022-09-29 16:00:00'),
(49, 'Informasi Ringkasan Dokumen RKA SKPD 2023', 'BPKAD Kota Kendari', 'https://drive.google.com/uc?export=download&id=1Mu9vQTFJQeJi1zrq4rgM0be04teXlTjO', '2022-09-29 17:06:40', '2022-09-29 16:00:00'),
(50, 'Informasi Ringkasan Dokumen RKA PPKD 2023', 'BPKAD Kota Kendari', NULL, NULL, NULL),
(51, 'Informasi Ringkasan Dokumen Rancangan Peraturan Daerah tentang APBD 2023', 'BPKAD Kota Kendari', 'https://drive.google.com/uc?export=download&id=1F8zROYFc__0jJOrV9HBKGxDZd5547z8G', '2022-11-14 15:53:20', '2022-11-14 16:00:00'),
(52, 'Informasi Peraturan Daerah tentang APBD 2023', 'BPKAD Kota Kendari', 'https://drive.google.com/uc?export=download&id=1EeParTeeSnGwgIW2aBhDAoAy_tRbgCrP', '2022-11-29 17:00:00', '2022-11-14 16:00:00'),
(53, 'Informasi Peraturan Kepala Daerah Tentang Penjabaran APBD 2023', 'BPKAD Kota Kendari', 'https://drive.google.com/uc?export=download&id=18hkrrX2jWUBgWtA67mu82qX_tAjaN05D', '2023-12-30 15:46:40', '2022-12-20 04:39:06'),
(54, 'Informasi Ringkasan DPA SKPD 2023', 'BPKAD Kota Kendari', 'https://drive.google.com/uc?export=download&id=1qIr4pJiUViQQmm3rTJE--8oDxEaCSOdW', '2022-12-30 14:40:00', '2022-12-20 04:39:06'),
(55, ' Informasi DPA PPKD 2023', 'BPKAD Kota Kendari', NULL, NULL, NULL),
(56, ' Informasi Realisasi Pendapatan Daerah 2023', 'BPKAD Kota Kendari', 'https://drive.google.com/uc?export=download&id=1zOrcDm_FZu0AlDCQ1TmfMhzOCvdzjunp', '2024-05-30 15:00:00', '2024-05-21 02:02:46'),
(57, ' Informasi Realisasi Belanja Daerah 2023', 'BPKAD Kota Kendari', 'https://drive.google.com/uc?export=download&id=1aYoSzHNToI9ttLpKA1EOc6jG57QJx4Qz', '2024-05-30 15:00:00', '2024-05-21 02:02:46'),
(58, ' Informasi Realisasi Pembiayaan Daerah 2023', 'BPKAD Kota Kendari', 'https://drive.google.com/uc?export=download&id=1bZGG89ZwO-Ec1aLRgrzU0sPpYG-zLCjU', '2024-05-30 15:00:00', '2024-05-21 02:02:46'),
(59, ' Informasi Ringkasan Dokumen Rancangan Perubahan APBD 2023', 'BPKAD Kota Kendari', 'https://drive.google.com/uc?export=download&id=1_-shsBghyRzMR4ottJO27f9Quh13MOYE', '2023-09-10 15:53:20', '2023-09-10 16:00:00'),
(60, ' Informasi Peraturan Daerah tentang Perubahan APBD 2023', 'BPKAD Kota Kendari', 'https://drive.google.com/uc?export=download&id=1rFliTxGBIYEhRHgKuGMUZ-6KOrXXu_8p', '2023-09-29 15:26:40', '2023-09-11 03:39:06'),
(61, ' Informasi Peraturan Kepala Daerah tentang Penjabaran Perubahan APBD 2023', 'BPKAD Kota Kendari', 'https://drive.google.com/uc?export=download&id=1ZLrQhNeGhm07CTkfVdeG7346gw5q5zKS', '2023-10-30 15:53:20', '2023-10-23 01:39:06'),
(62, ' Informasi Ringkasan RKA Perubahan APBD 2023', 'BPKAD Kota Kendari', 'https://drive.google.com/uc?export=download&id=19TQeWtBip4HGGmF03Iivgv1v9O7W8EWf', '2023-09-29 15:26:40', '2023-09-11 02:39:06'),
(63, ' Informasi Rencana Umum Pengadaan 2023', 'BPKAD Kota Kendari', NULL, NULL, NULL),
(64, ' Informasi SK Kepala Daerah tentang Pejabat Pengelola Keuangan Daerah 2023', 'BPKAD Kota Kendari', 'https://drive.google.com/uc?export=download&id=1AnfGWtnVfv_TjQq_TrxFdUV_pBGA1k1A', '2022-12-30 14:40:00', '2022-12-30 16:00:00'),
(65, ' Informasi Peraturan Kepala Daerah tentang Kebijakan Akuntansi 2023', 'BPKAD Kota Kendari', 'https://drive.google.com/uc?export=download&id=1XO3YPtRw7CpsSNbYSGAstD2hgEi0fuR1', '2022-06-30 01:06:40', '2022-06-26 16:00:00'),
(66, ' Informasi Laporan Arus Kas 2023', 'BPKAD Kota Kendari', 'https://drive.google.com/uc?export=download&id=117W5geNBP5955Q_DgWcFPJnCnFFIxb-n', '2024-05-30 15:00:00', '2024-05-21 02:02:46'),
(67, ' Informasi Laporan Realisasi Anggaran Seluruh SKPD 2023', 'BPKAD Kota Kendari', 'https://drive.google.com/uc?export=download&id=1sLy4XqqhSIQf2IP8Mp6oeFjJV2usU4bF', '2024-05-30 15:00:00', '2024-05-21 02:02:46'),
(68, ' Informasi Laporan Realisasi Anggaran PPKD 2023', 'BPKAD Kota Kendari', NULL, NULL, NULL),
(69, ' Informasi Neraca 2023', 'BPKAD Kota Kendari', 'https://drive.google.com/uc?export=download&id=1XJ4TuES16QDhbyxB73W6OCt2k0xoe_Sv', '2024-05-30 15:00:00', '2024-05-21 02:02:46'),
(70, ' Informasi CaLK Pemerintah Daerah 2023', 'BPKAD Kota Kendari', 'https://drive.google.com/uc?export=download&id=1-l985It4PXqGwF6RQxfORhkL1_AhLwI3', '2024-05-30 15:00:00', '2024-05-21 02:02:46'),
(71, ' Informasi Laporan Keuangan BUMD dan Perusahaan Daerah 2023', 'BPKAD Kota Kendari', 'https://drive.google.com/uc?export=download&id=1GhfH1Kjdi6X9d9H7dp0BIQEqeDpbQWxF', '2024-01-07 23:46:40', '2023-12-31 02:02:46'),
(72, ' Informasi Laporan Akuntabilitas dan Kinerja Tahunan Pemerintah Daerah 2023', 'BPKAD Kota Kendari', NULL, NULL, NULL),
(73, 'Informasi  Penetapan Perda Pertanggunjawaban Pelaksanaan APBD 2023', 'BPKAD Kota Kendari', 'https://drive.google.com/uc?export=download&id=1otGMtd1Q_dc88ArTpgubijiV14GO-8aY', '2024-05-30 15:00:00', '2024-05-21 01:33:09'),
(74, ' Informasi Opini BPK RI 2023', 'BPKAD Kota Kendari', 'https://drive.google.com/uc?export=download&id=1_crY-6gXjs2Y1-te-gZkWlNJLSkGk0ca', '2024-05-30 15:00:00', '2024-05-21 02:02:46');

-- --------------------------------------------------------

--
-- Table structure for table `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cache`
--

INSERT INTO `cache` (`key`, `value`, `expiration`) VALUES
('356a192b7913b04c54574d18c28d46e6395428ab', 'i:1;', 1739454297),
('356a192b7913b04c54574d18c28d46e6395428ab:timer', 'i:1739454297;', 1739454297),
('livewire-rate-limiter:23cd9ac273f49c7de29f40d58c41fc9d933a94b9', 'i:1;', 1739471057),
('livewire-rate-limiter:23cd9ac273f49c7de29f40d58c41fc9d933a94b9:timer', 'i:1739471057;', 1739471057),
('livewire-rate-limiter:a17961fa74e9275d529f489537f179c05d50c2f3', 'i:2;', 1739439838),
('livewire-rate-limiter:a17961fa74e9275d529f489537f179c05d50c2f3:timer', 'i:1739439838;', 1739439838),
('livewire-rate-limiter:bb45610b7c06fdf05f1c358235d33787bf4ae796', 'i:1;', 1739504751),
('livewire-rate-limiter:bb45610b7c06fdf05f1c358235d33787bf4ae796:timer', 'i:1739504751;', 1739504751);

-- --------------------------------------------------------

--
-- Table structure for table `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `owner` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `direktori`
--

CREATE TABLE `direktori` (
  `id` int NOT NULL,
  `nama` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `deskripsi` varchar(255) DEFAULT NULL,
  `icon` varchar(150) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `direktori`
--

INSERT INTO `direktori` (`id`, `nama`, `slug`, `deskripsi`, `icon`) VALUES
(1, 'Wisata', 'wisata', 'Informasi destinasi wisata di Kota Kendari', 'walking'),
(2, 'Institusi Pendidikan', 'institusi-pendidikan', 'Daftar sekolah dan perguruan tinggi di Kendari', 'school'),
(3, 'Rumah Sakit', 'rumah-sakit', 'Informasi rumah sakit dan layanan kesehatan', 'hospital'),
(4, 'Rumah Ibadah', 'rumah-ibadah', 'Lokasi tempat ibadah berbagai agama di Kendari', 'mosque'),
(5, 'Pusat Perbelanjaan', 'pusat-perbelanjaan', 'Daftar pusat perbelanjaan dan pasar di Kendari', 'shop'),
(6, 'Hiburan', 'hiburan', 'Tempat hiburan dan taman rekreasi Kota Kendari', 'hiburan'),
(7, 'Kelurahan & Kecamatan', 'kelurahan-kecamatan', 'Informasi wilayah administratif Kota Kendari', 'office'),
(8, 'Olahraga', 'olahraga', 'Sarana dan fasilitas olahraga yang tersedia', 'sports'),
(9, 'Transportasi', 'transportasi', 'Moda transportasi umum dan layanan angkutan', 'transportasi');

-- --------------------------------------------------------

--
-- Table structure for table `download`
--

CREATE TABLE `download` (
  `id` int NOT NULL,
  `judul` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `deskripsi` text CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `tanggal` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `download` int NOT NULL DEFAULT '0',
  `link` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `download`
--

INSERT INTO `download` (`id`, `judul`, `deskripsi`, `tanggal`, `download`, `link`) VALUES
(4, 'Kota Kendari dalam angka 2016', 'Kota Kendari dalam angka 2016', '2023-02-04 09:32:37', 0, 'https://drive.google.com/uc?authuser=0&id=14yNG84XF_KWxLENqchyAJp1b_Zdwuntp&export=download'),
(5, 'Kota Kendari dalam angka 2017', 'Kota Kendari dalam angka 2017', '2023-02-04 09:32:37', 0, 'https://drive.google.com/uc?authuser=0&id=1GOwZzy-5SJ-M0MT9ODeuj9T1wL-hPvrJ&export=download'),
(6, 'Kota Kendari dalam angka 2018', 'Kota Kendari dalam angka 2018', '2023-02-04 09:32:37', 0, 'https://drive.google.com/uc?authuser=0&id=1GJMiywaee6vTaNkZoQoJFlD-Chd9Qxfp&export=download'),
(7, 'Kota Kendari dalam angka 2019', 'Kota Kendari dalam angka 2019', '2023-02-04 09:32:37', 0, 'https://drive.google.com/uc?authuser=0&id=15CF-qddDXiMiQ_frj1G5uEj6f1blWuet&export=download'),
(8, 'PDRB menurut lapangan usaha 2010-2013', '2010-2013', '2023-02-04 09:32:37', 0, 'https://drive.google.com/uc?authuser=0&id=1TY26U2CkfIIvZEOVPouXBV1BJoKMPYvQ&export=download'),
(9, 'PDRB menurut lapangan usaha 2010-2014', '2010 - 2014', '2023-02-04 09:32:37', 0, 'https://drive.google.com/uc?authuser=0&id=1jdKiavcYHbT7QQyLWug7jr6HeO5lNpVZ&export=download'),
(11, 'PDRB menurut lapangan usaha 2013-2017', '2013-2017', '2023-02-04 09:32:37', 0, 'https://drive.google.com/uc?authuser=0&id=1c0novK4COuGTFhLEAMdzFcuJk7jJEQxo&export=download'),
(12, 'PDRB menurut lapangan usaha 2012-2016', '2012 - 2016', '2023-02-04 09:32:37', 0, 'https://drive.google.com/uc?authuser=0&id=15IfDszK1XDK0IeoZ-ioxChRYqADlhmZh&export=download'),
(13, 'PDRB menurut pengeluaran 2010-2013', '2010 - 2013', '2023-02-04 09:32:37', 0, 'https://drive.google.com/uc?authuser=0&id=1InugGE0VA00gX08FUSnB_8yu2_-IcZQU&export=download'),
(14, 'PDRB menurut pengeluaran 2010-2014', '2010 - 2014', '2023-02-04 09:32:37', 0, 'https://drive.google.com/uc?authuser=0&id=1j2cF0TXCFlfYNlnKYidXz71lZFC9COdK&export=download'),
(15, 'PDRB menurut lapangan usaha 2014-2018', '2014 - 2018', '2023-02-04 09:32:37', 0, 'https://drive.google.com/uc?authuser=0&id=1qk-NWuTVKjWwYaDHMfmq3s9RYddFCriH&export=download'),
(16, 'Kota Kendari Dalam Angka 2020, Penyediaan Data Untuk Perencanaan Pembangunan', 'KDA 2020', '2023-02-04 09:32:37', 0, 'https://drive.google.com/uc?authuser=0&id=14AQagnZilgvJEcGCMkzVQU3MDpKnXprZ&export=download'),
(17, 'Kota Kendari dalam angka 2021', 'Kendari dalam angka 2021', '2023-02-04 09:32:37', 0, 'https://drive.google.com/file/d/1hafTq_YqT1e9lYloazvFjD9ZSGGP6mpg/view?usp=sharing'),
(18, 'Kota Kendari dalam angka 2022', 'Kota Kendari dalam angka 2022', '2023-02-04 09:32:37', 0, 'https://drive.google.com/file/d/1AUNkO4oXds1xX5A3On7n73vNxYyrr9hZ/view?usp=sharing');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `halaman`
--

CREATE TABLE `halaman` (
  `id` int NOT NULL,
  `judul` varchar(50) NOT NULL,
  `slug` varchar(50) NOT NULL,
  `isi` text NOT NULL,
  `aktif` varchar(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `halaman`
--

INSERT INTO `halaman` (`id`, `judul`, `slug`, `isi`, `aktif`) VALUES
(1, 'Sejarah Kota Kendari', 'sejarah-kota-kendari', '<p>Sejak dahulu Teluk Kendari telah dikenal oleh pelaut-pelaut nusantara maupun eropa sebagai jalur persinggahan perdagangan laut dari dan menuju Ternate atau Maluku. Pada Kartografi Portugis kuno awal abad ke-15 telah menunjukkan adanya perkampungan di Pantai Timur Celebes atau Sulawesi yang dinamakan <em>Citta dela Baia</em> di pesisir teluk bernama <em>Baia du Tivora</em> yang identik dengan Teluk Kendari. Dalam sastra lisan tua suku Tolaki, wilayah Teluk Kendari disebut dengan nama <em>Lipu I Pambandahi</em>, Wonua <em>I Pambandokooha</em> yang merupakan salah satu daerah di pesisir timur Kerajaan Konawe.</p><p>Pada tahun 1828, seorang pelaut bernama Jacques Nicholas Vosmaer mendapat tugas dari Gubernur Jenderal Hindia Belanda untuk melakukan observasi terhadap jalur perdagangan di pesisir timur Sulawesi. Peta pertama Teluk Kendari di buat pada 9 Mei 1831 dan sejak 6 Februari 1835 teluk Kendari disebut sebagai <em>Vosmaer’s Baai</em> atau Teluk Vosmaer melalui Surat Keputusan Jenderal Van Den Bosch di Batavia. Dalam catatan perjalanannya yang berjudul <em>Korte Beschrijving van het zuid oostelijk schiereiland van Celebes,</em> Vosmaer menuliskan tertarik akan keindahan Teluk Kendari, setelah mendapat izin dari Tebau sebagai penguasa wilayah timur Kerajaan Konawe pada tahun 1932, Vosmaer kemudian mendirikan kantor dagang dan membuatkan istana Tebau dari Lepo-Lepo ke Teluk Kendari. hal inilah yang merupakan titik tolak perkembangan Kendari menjadi kota pusat pemerintahan dan perdagangan.</p><p>Penamaan Kendari sendiri berasal dari kata “Kandai” yaitu alat dari bambu atau kayu yang dipergunakan penduduk teluk Kendari untuk mendorong perahu, dari kata Kandai inilah kemudian diabadikan menjadi kampung Kandai dan pengembangan dari kata Kandai selanjutnya dalam berbagai literature terakhir disebut Kendari.</p><p>Pada masa pemerintahan kolonial Belanda dan pendudukan Jepang, Kendari yang hanya seluas ± 31,40 km2 saat itu, adalah wilayah Kewedanaan sekaligus Ibu kota <em>Onder Afdeling</em> atau <em>Bun Ken Laiwoi</em>. Kendari berubah dari ibukota kecamatan kemudian berkembang menjadi ibukota Kabupaten Daerah Tingkat II berdasarkan Undang-undang Nomor 29 Tahun 1959.</p><p>Penerbitan Perpu Nomor 2 Tahun 1964 Jo. Undang-undang Nomor&nbsp; &nbsp; &nbsp; 13 Tahun 1964, menandai ditetapkannya Kendari sebagai Ibukota Provinsi Sulawesi Tenggara yang masih terdiri dari dua wilayah kecamatan, yakni Kecamatan Kendari dan Kecamatan Mandonga dengan pertambahan luas wilayah ± 75,76 km2. Kemudian Peraturan Pemerintah Nomor 19 Tahun 1978 mengubah status Kendari menjadi Kota Administratif yang meliputi tiga wilayah kecamatan, yakni Kecamatan Kendari, Mandonga dan Poasia dengan 24 desa.</p><p>Seiring dengan pertumbuhan dan perkembangan Kota Kendari, maka dikeluarkanlah Undang-undang nomor 6 tahun 1995 yang menetapkan Kota Kendari sebagai Kota Madya Daerah Tingkat II dengan luas wilayah±298,89 km2 atau 0,7 persen dari luas wilayah daratan Sulawesi Tenggara.</p><p>Selama terbentuknya Kota Administratif Kendari, Kota Kendari berturut-turut dipimpin oleh :</p><ul><li>H. Mansyur Pamadeng (1978-1979);</li><li>Drs. H. Muhammad Antero Hamra (1980-1985);</li><li>Drs. H. Anas Bunggasi (1985-1987);</li><li>Kolonel Adi Mangilep (selaku Pelaksana Tugas tahun 1988-1991);</li><li>Drs. H. Andi Kaharuddin (selaku Pelaksana Tugas tahun 1991-1992);</li><li>Drs. H. Usman Sabara (selaku Pelaksana Tugas tahun 1993-1993);</li><li>Drs. H. La Ode Muhammad Salihin Sabora (1993-1995); dan</li><li>Kolonel A. Razid Hamzah (selaku Pelaksana Tugas tahun 1995-1995).</li></ul><p>Kendari sebagai daerah otonom berturut-turut dipimpin oleh :</p><ul><li>Drs. Lasjkar Koedoes (selaku Pejabat Walikota tahun 1995-1996);</li><li>Drs. H. Masyhur Masie Abunawas (1996-2001);</li><li>Drs. H. Andi Kaharuddin (selaku Pejabat Walikota tahun 2001-2002);</li><li>Drs. H. Masyhur Abunawas M.Si. dan wakilnya Ir. Andi Muzakkir Mustafa, MM. (2002-2007);</li><li>Dr. Ir. H. Asrun, M.Eng.,Sc. dan wakilnya H. Musadar Mappasomba, SP.,MP. periode pertama (2007-2012) dan periode kedua (2012-2017);</li><li>Adriatma Dwi Putra, ST. dan&nbsp; wakilnya H. Sulkarnain K, SE.,ME.(2017-2022);serta</li><li>H. Sulkarnain K, SE., ME. dan&nbsp; wakilnya dr. Hj. Siska Karina Imran, SKM periode 2017-2022.</li></ul>', '1'),
(2, 'Visi Misi', 'visi-misi', '<p><strong>Menciptakan Kota Kendari yang Aman, Nyaman dan Bahagia</strong><br>&nbsp;</p>', '1');

-- --------------------------------------------------------

--
-- Table structure for table `infografis`
--

CREATE TABLE `infografis` (
  `id` int UNSIGNED NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `img` varchar(100) DEFAULT NULL,
  `release` timestamp NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `infografis`
--

INSERT INTO `infografis` (`id`, `title`, `img`, `release`) VALUES
(3, 'Rata-Rata Harga Pangan di 5 Pasar di Kota Kendari', 'infografis/2023/64118bb027ca3.jpeg', '2023-03-08 16:00:00'),
(4, 'Neraca Ketersediaan Kebutuhan Pangan Pokok', 'infografis/2023/64118bee39636.jpeg', '2023-03-12 16:00:00'),
(5, 'Daftar Harga Bahan Pokok', 'infografis/2023/64118c0eb4e93.jpeg', '2023-03-12 16:00:00'),
(6, 'Rata-Rata Harga Pangan di 5 Pasar di Kota Kendari', 'infografis/2023/64118ca4417f4.jpeg', '2023-03-01 16:00:00'),
(7, ' Daftar Harga Bahan Pokok', 'infografis/2023/64118cc70d8ef.jpeg', '2023-03-05 16:00:00'),
(8, 'Neraca Ketersediaan Kebutuhan Pangan Pokok', 'infografis/2023/64118ce9a1f3c.jpeg', '2023-02-28 16:00:00'),
(9, 'Pembukaan Pendaftaran Seleksi Paskibraka Kota Kendari 2023', 'infografis/2023/6412a0c497bc5.jpg', '2023-02-26 16:00:00'),
(10, 'Neraca Ketersediaan Kebutuhan Pokok', 'infografis/2023/6494f617b2754.jpg', '2023-06-03 16:00:00'),
(11, 'Neraca Ketersediaan Kebutuhan Pokok', 'infografis/2023/6494f62ce87e7.jpg', '2023-06-11 16:00:00'),
(12, 'Rata-Rata Harga Pangan di 5 Pasar di Kota Kendari', 'infografis/2023/6494f9e35f365.jpg', '2023-06-11 16:00:00'),
(13, 'Idul Adha 1444H - 2023M', 'infografis/2023/649bc0888c20c.jpg', '2023-06-27 16:00:00'),
(15, 'Jambore PKK', 'infografis/2023/64ab5f86ba8f1.jpeg', '2023-07-09 16:00:00'),
(16, 'Rakernas Apeksi 2023', 'infografis/2023/64ab5f996221c.jpeg', '2023-07-09 16:00:00'),
(17, 'Selamat dan Sukses Rakernas Apeksi', 'infografis/2023/64ab5fb778ac4.jpeg', '2023-07-09 16:00:00'),
(18, 'Mari Kita Kibarkan Bendera Merah Putih Serentak', 'infografis/2023/64c7c69d81269.jpg', '2023-06-29 16:00:00'),
(19, 'Dirgahayu Ikatan Jurnalis Televisi Indonesia Ke - 25', 'infografis/2023/64d43cb7e5574.jpg', '2023-08-07 16:00:00'),
(20, 'Semarak Kemerdekaan 2023', 'infografis/2023/64d46d06be50e.jpg', '2023-08-09 16:00:00'),
(21, 'Maintenance Agustus 2023', 'infografis/2023/64d58d0cde67e.jpg', '2023-08-10 16:00:00'),
(22, 'Penilaian SPI', 'infografis/2023/64e1f64dd1d48.jpg', '2023-08-20 16:00:00'),
(23, 'Jatuh Tempo Pembayaran Pajak', 'infografis/2023/64e409dda4d26.jpeg', '2023-08-21 16:00:00'),
(24, 'Kuesioner Visi Misi Kota Kendari', 'infografis/2023/64e7048b2679e.jpg', '2023-08-22 16:00:00'),
(25, 'Neraca Ketersediaan Kebutuhan Pangan Pokok', 'infografis/2023/65190d72185f8.jpg', '2023-09-24 16:00:00'),
(26, 'Lomba Stand Up Comedy 2023', 'infografis/2023/6555720dc9c52.jpeg', '2023-11-14 18:15:00'),
(27, NULL, 'infografis/2023/6555722faad70.jpeg', '2023-11-14 18:30:00'),
(28, 'Lomba Tiktok', 'infografis/2023/655572463da0c.jpeg', '2023-11-14 17:21:00'),
(30, 'HPN 2024', 'infografis/2023/65c622f6ce01b.jpeg', '2024-02-08 16:00:00'),
(31, 'puasa 2024', 'infografis/2023/65eeced1850ae.jpeg', '2024-03-10 16:00:00'),
(32, 'Idul Fitri 2024', 'infografis/2023/66192acb11f69.jpeg', '2024-04-09 16:00:00'),
(33, 'karitni 2024', 'infografis/2023/6624bb0923205.jpeg', '2024-04-20 16:00:00'),
(34, 'PKK juara 2024', 'infografis/2023/6624bb181ea48.jpeg', '2024-04-20 16:00:00'),
(35, 'OTONOMI 2024', 'infografis/2023/6629b76943895.jpeg', '2024-04-24 16:00:00'),
(36, 'duka lurah watu watu 2024', 'infografis/2023/662db30615f41.jpeg', '2024-04-27 16:00:00'),
(37, 'HUT Kendari 2024', 'infografis/2023/66382cfc21eb3.jpg', '2024-05-05 16:00:00'),
(38, 'HUT KOTA Kendari 193', 'infografis/2023/663c2dd373447.jpg', '2024-05-08 16:00:00'),
(39, 'idul adha 2024', 'infografis/2023/666e649d470cf.jpg', '2024-06-15 16:00:00'),
(40, 'Hari Anak Nasional', 'infografis/2023/669f1d6687a18.jpeg', '2024-07-22 16:00:00'),
(41, 'Dirgahayu Busel', 'infografis/2023/669f1db8a43a8.jpeg', '2024-07-22 16:00:00'),
(42, 'HUT Muna Barat', 'infografis/2023/669f1ee7b9b31.jpeg', '2024-07-22 16:00:00'),
(43, 'Hari Bakti Adyahksa', 'infografis/2023/669f1f3d3bc97.jpeg', '2024-07-21 16:00:00'),
(44, 'HUT RI Point', 'infografis/2023/669f1fe39097e.jpeg', '2024-07-20 16:00:00'),
(45, 'HUT RI Point', 'infografis/2023/669f1fee2c99c.jpeg', '2024-07-20 16:00:00'),
(46, 'HUT RI 2024', 'infografis/2023/66b1c5cc0cdf3.jfif', '2024-07-31 16:00:00'),
(47, 'HUT RI 79', 'infografis/2023/66bff7419c31c.jpg', '2024-08-16 16:00:00'),
(48, 'Hari Batik 2024', 'infografis/2023/66ff5bca87361.jpg', '2024-09-30 16:00:00'),
(49, 'Hari Pancasila 2024', 'infografis/2023/66ff5c0a9e1b3.jpg', '2024-09-30 16:00:00'),
(50, 'Duka H. Sentosa', 'infografis/2023/66ff5c5ed5491.jpg', '2024-09-22 16:00:00'),
(51, 'Maulid 2024', 'infografis/2023/66ff5c8e3aba7.jpg', '2024-09-15 16:00:00'),
(52, 'Bayar Pbb-1 2024', 'infografis/2023/66ff5cbb31d97.jpg', '2024-09-12 16:00:00'),
(53, 'Bayar PBB-2 2024', 'infografis/2023/66ff5cd1667f4.jpg', '2024-09-12 16:00:00'),
(54, 'RRI 79', 'infografis/2023/66ff5d05e6b2e.jpg', '2024-09-10 16:00:00'),
(55, 'TNI 79', 'infografis/2023/66ff5d27e039b.jpg', '2024-09-09 16:00:00'),
(56, 'KP2024', 'infografis/2023/66ff5d477d838.jpg', '2024-09-08 16:00:00'),
(57, 'Pengajian 2024', 'infografis/2023/66ff5d86513b5.jpg', '2024-08-31 16:00:00'),
(58, 'kejaksaan 2024', 'infografis/2023/66ff5db1a1a4a.jpg', '2024-09-01 16:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `jabatan`
--

CREATE TABLE `jabatan` (
  `id` int NOT NULL,
  `nama` varchar(30) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `jabatan`
--

INSERT INTO `jabatan` (`id`, `nama`) VALUES
(1, 'Wali Kota'),
(2, 'Wakil Wali Kota'),
(3, 'Pj. Wali Kota'),
(4, 'Sekretaris Daerah'),
(5, 'Asisten I'),
(6, 'Asisten II'),
(7, 'Asisten III'),
(8, 'Inspektur'),
(9, 'Kepala Dinas'),
(10, 'Kepala Badan'),
(11, 'Kepala Bagian'),
(12, 'Staf Ahli'),
(13, 'Kepala Kantor'),
(14, 'Sekretaris'),
(15, 'Camat');

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `queue` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `attempts` tinyint UNSIGNED NOT NULL,
  `reserved_at` int UNSIGNED DEFAULT NULL,
  `available_at` int UNSIGNED NOT NULL,
  `created_at` int UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_jobs` int NOT NULL,
  `pending_jobs` int NOT NULL,
  `failed_jobs` int NOT NULL,
  `failed_job_ids` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `options` mediumtext COLLATE utf8mb4_unicode_ci,
  `cancelled_at` int DEFAULT NULL,
  `created_at` int NOT NULL,
  `finished_at` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `kategori_opd`
--

CREATE TABLE `kategori_opd` (
  `id` int NOT NULL,
  `nama` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `kategori_opd`
--

INSERT INTO `kategori_opd` (`id`, `nama`) VALUES
(1, 'Inspektorat'),
(2, 'Sekretaris Daerah'),
(3, 'Dinas'),
(4, 'Badan'),
(5, 'Bagian'),
(6, 'BUMD'),
(7, 'Kecamatan');

-- --------------------------------------------------------

--
-- Table structure for table `lokasi`
--

CREATE TABLE `lokasi` (
  `id` int NOT NULL,
  `nama` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `alamat` text NOT NULL,
  `telp` varchar(20) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `latitude` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `longitude` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `direktori_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `lokasi`
--

INSERT INTO `lokasi` (`id`, `nama`, `alamat`, `telp`, `latitude`, `longitude`, `direktori_id`) VALUES
(1, 'SMK Negeri 1 Kendari', 'Jalan Jend. A. Yani No.17, Bende Kadia, Kota Kendari, Sulawesi Tenggara 93117', '085342435921', '-3.979381', '122.511342', 2),
(2, 'SMA Negeri 4 Kendari', 'Jalan Jenderal Ahmad Yani No. 13, Kel. Bende, Kec. Kadia, Kota Kendari, Sulawesi Tenggara 93111', '085342435921', '-3.978725', '122.512011', 2),
(3, 'Taman Kota Kendari', 'Mandonga, Kota Kendari, Sulawesi Tenggara 93111', '085342435921', '-3.973570', '122.513084', 1),
(4, 'STMIK Catur Sakti Kendari', 'Jl. Drs. H. Abdullah Silondae No.107, Korumba, Mandonga, Kota Kendari, Sulawesi Tenggara 93111', '(0401) 3127274', '-3.970668', '122.517984', 2),
(5, 'Rumah Sakit Bahteramas Kendari', 'Jl. Kapten Piere Tendean, Watubangga, Baruga, Kota Kendari, Sulawesi Tenggara 93116', '(0401) 3195611', '-4.034871', '122.491517', 3),
(6, 'RSUD Kota Kendari', 'Jl. Z.A. Sugianto No. 39., Kambu, Kendari, Kota Kendari, Sulawesi Tenggara 93111', '(0401) 3359171', '-3.990027', '122.533654', 3),
(7, 'RSU Aliyah 2', 'Jl. Buburanda, Korumba, Kendari, Kota Kendari, Sulawesi Tenggara 93231', '(0401) 3906742', '-3.977787', '122.527009', 3),
(8, 'RSU Hati Mulia', 'Jl. DI Panjaitan No.243, Lepo-Lepo, Baruga, Kota Kendari, Sulawesi Tenggara 93118', '(0401) 3196443', '-4.021621', '122.502379', 3),
(9, 'RSU PMI Kendari', 'Jl. Mayjend. S. Parman No.35, Watu-Watu, Kendari Bar., Kota Kendari, Sulawesi Tenggara 93121', '085342435921', '-3.962308', '122.536803', 3),
(10, 'Rumah Sakit Bhayangkara Kendari', 'Jl. Gunung Maluhu No. 7, Kec, Mandonga, Kota Kendari, Sulawesi Tenggara 93117', '(0401) 3121253', '-3.972411', '122.507998', 3),
(11, 'RS Dr. R. Ismoyo (Korem)', 'Jl. Laute No.1, Mandonga, Kota Kendari, Sulawesi Tenggara 93111', '(0401) 3124713', '-3.969509', '122.515826', 3),
(12, 'Rumah Sakit Santa Anna', 'Jl. Dr. Moh. Hatta No. 65A, Sanua, Kendari Barat, Sanua, Kendari Bar., Kota Kendari, Sulawesi Tenggara', '(0401) 3123092', '-3.969562', '122.574576', 3),
(13, 'Hotel Claro', 'Jl. Edi Sabara No.89, Lahundape, Kendari Bar., Kota Kendari, Sulawesi Tenggara 93121', '+624013111888', '-3.969954726034864', '122.52895987142982', 6),
(14, 'Dinas Kependudukan dan Pencatatan sipil Kota Kendari', 'Jl. Balai Kota III No.52B, Pondambea, Kec. Kadia, Kota Kendari, Sulawesi Tenggara 93115', '+624013125337', '-3.9758976212203976', '122.51060198351729', 0),
(15, 'Lippo Plaza Kendari', 'Jln. MT. Haryono No.61-63 Kendari, Sulawesi Tenggara ', '0401-3196500', '-3.9921675', '122.5100125', 5),
(16, 'Masjid Al-Alam', 'Jl. Masjid Al Alam, Lalolara, Kec. Kambu, Kota Kendari, Sulawesi Tenggara', NULL, '-3.9779331', '122.5424109', 4),
(17, 'Universitas Halu Oleo ', 'Kampus Hijau Bumi Tridharma, Anduonohu, Kec. Kambu, Kota Kendari, Sulawesi Tenggara 93232', NULL, '-4.0084962', '122.5185603', 2),
(18, 'SMA Negeri 1 Kendari', 'Jl. Mayjen. Sutoyo No.102, Tipulu, Kendari, Kota Kendari, Sulawesi Tenggara 93122\r\n', NULL, '-3.9624163', '122.5394239', 2),
(19, 'Masjid Raya Al-Kautsar Kendari', 'Jl. H. Abdul Silondae, Mandonga, Kec. Mandonga, Kota Kendari, Sulawesi Selatan 93111', NULL, '3.9659792', '122.5143908', 4),
(20, 'SMA Negeri 2 Kendari', 'JL. Sisingamangaraja, No. 41, Rahandouna, Poasia, Kandai, Kec. Kendari, Kota Kendari, Sulawesi Tenggara 93232', '(0401) 3005713', '-4.007945457008683', '122.55768672387686', 2);

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `opd`
--

CREATE TABLE `opd` (
  `id` int NOT NULL,
  `kategori_opd_id` int NOT NULL,
  `nama` varchar(100) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `struktur` varchar(100) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `tupoksi` varchar(100) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `struktur_new` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `opd`
--

INSERT INTO `opd` (`id`, `kategori_opd_id`, `nama`, `struktur`, `tupoksi`, `struktur_new`) VALUES
(1, 1, 'Inspektorat', '19bdaQ2R5SLPXTxOvHNFAbXLGuqFMG9lt', '1cTznUnIEjxF1HXwlXeKjbr_CI2i065g5', NULL),
(2, 4, 'Badan Pengelola Keuangan & Aset Daerah ', 'WhatsApp Image 2023-03-24 at 12.11.18.jpeg', '17hNOdV7Lz9lRH9T4GYwEw8NrVDhigXMr', 'trial'),
(3, 3, 'Dinas Pemberdayaan Perempuan & Perlindungan Anak', '16GxnXj0Ptvad43gFcUrgWTLz3Vp008jt', '1VEtXT5rVm5j-GfatdHCn2pAHtjUgX6ZE', NULL),
(5, 3, 'Dinas Perdagangan, Koperasi, UKM', '1cKXTdwA1_CWL_9fQcDltTJHJZBCgdlwG', '1GKO13Otwt71B0GXt4DTLUC28AHZM2OmA', NULL),
(6, 3, 'Dinas Kesehatan', '1v9QbWQf6xg27qKZcE_CIbvNgWQBrUGdr', '12o_Zs6WIgMRWtZge4zXYU__m6M6jOFJy', NULL),
(10, 4, 'Badan Penanggulangan Bencana Daerah ', '112WaqQEr9NcyTwaLJrNaLrfef2HK7nVm', '1MHIvbrvNh_UKSfyFqg3ZwE06e5hLh8Jb', NULL),
(12, 5, 'Bagian Pengadaan Barang/Jasa', '1D4vb6LWJ7Y6NCJ8SDbk2pLUdLaach4hH', '1HPCGyZLEa6O9K-qIre5NT8kMw-OQWQcG', NULL),
(13, 3, 'Dinas PU & Penataan Ruang', '19iAviv-PXfy8upKvtEdHfwPlPbOWg4b6', '12n5nQ8B2VYyalnZKtX9UH27gE8MF-_ir', NULL),
(16, 7, 'Kec. Kendari', '1M5whKAOYKk4yNRbwE80J7esOG5ymGPyB', '1T8MTPS4kuKQgo-mqrgcp2aRhzNeaQLc3', NULL),
(17, 7, 'Kec. Kendari Barat', '18u9l-ncFMPHfGEh9XYvF_eE9MekeU5et', '1JelGTqsS5VdbDu86gG5hvhYS09xSWXLo', NULL),
(18, 7, 'Kec. Mandonga', '19ZItA-FfjPQFFofoq2kGoAqQ0KE_ImlV', '1EW52QaaQKR8Ht0YiIfMM_-4MzoG1TLEK', NULL),
(20, 3, 'Dinas Pengendalian Penduduk dan KB', '1HeZN84v4i55vfGPPUSqCHWJrm8U4IvHD', '1vkDCpPJoufAgt54kpt_yYPzR9U8i8OVF', NULL),
(21, 3, 'Dinas Kebudayaan & Pariwisata', '1GiGEhCbCeq9-DrCHTypWaadw7JAvUnZj', '1_0wSiEIe3U51IEBOoP5w-nd_zOSpQCVe', NULL),
(22, 5, 'Bagian Adm. Perekonomian & Usaha Daerah', '19vTrZcTm4G9PhFB4XFdrjacQZ5euhXdL', '1Zt6waCh5iBrUy2FQ38ZqcmbT_l7zd555', NULL),
(23, 3, 'Dinas Pendidikan, Kepemudaan & Olahraga ', '18N9mgYr8e7sUX4NEpCXb5fsu0LAVgnZk', '1YrwwqcfUVIbyXot15_2sIToRAGRolpGa', NULL),
(24, 3, 'Dinas Kebakaran', '1iNwj8OXSBa4vaBMFf6Gp1IsbIHTZ1KUd', '1VPsFBOdEZbV_42D3wYf0cIAzv-fl1GsS', NULL),
(25, 3, 'Dinas Lingkungan Hidup & Kehutanan', '1QUdPdiqvvPyQbLx1gXG0-7DqxUCDU4gQ', '13PsfV-QZh3j0VLTN2MxZp9RtlMG7Br7q', NULL),
(26, 3, 'Dinas Sosial', '1oTPjqyZBkrnBqSAsF7EA-40UUn--eYyt', '127nDLF_6KrLqqHxspIGDKIxsnFb9d13S', NULL),
(27, 2, 'Asisten I', '1TXWcdrEW2QgTCInNleDLFXEPlRgUic7G', '11UKbKbH6o8sqOhDzfc7PpbQ3hkSqY7hu', NULL),
(29, 3, 'Dinas Komunikasi & Informatika', '', '18N_HVsErGgMvhUSu1ZOi9I9fphBv2lut', '2964d8e8d578a42.jpg'),
(30, 4, 'Badan Kesatuan Bangsa dan Politik', '1HMPqfbV705-PiGWCZtT9fPEQLxvJ0kBN', '1Ky2_7wJEqtbzngOf-KV5iC9PVZrOqzLm', NULL),
(31, 3, 'Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu', '1kr4eQfN8UIDkqjGoMX_79k9qhUW0fKOC', '1xbup2CKrQvL9VypqT-PxAqtAJ5iua6ul', NULL),
(33, 2, 'Asisten II', '1rkmWRsaPklgcarMSn1y3Cs8aT_wI9380', '11UKbKbH6o8sqOhDzfc7PpbQ3hkSqY7hu', NULL),
(34, 2, 'Asisten III', '1V1gWc_4qd7JriCtAM8Y2f1FmF3eIZt3j', '11UKbKbH6o8sqOhDzfc7PpbQ3hkSqY7hu', NULL),
(35, 2, 'Staf Ahli', '1mSGPQ9VPVcV1yXkfbE9xp0pHCdwRMF_n', '11UKbKbH6o8sqOhDzfc7PpbQ3hkSqY7hu', NULL),
(36, 3, 'Satuan Polisi Pamong Praja', '1cmPAYA1-AtrhTpjbBC6CpEWSDwQLMirt', '1mlGoCJ-f5OpmoAeHFxFnXMS1xhanFS7t', NULL),
(37, 6, 'RSUD Kota Kendari', '1lx7Zm5aeJ8w5iRBBN9Ysg9pP3mBnnUy7', '-', NULL),
(38, 3, 'Dinas Perikanan', '1szf7udNGOgvLVCyb35DHxMYryGkg4psF', '1eNgABSDyoL81WknvXLA-o_lDAuNDVQDa', NULL),
(39, 3, 'Dinas Pertanian', '1NNBcgHh1dx2WL3LU-575j4o854VEaKSw', '1-R_ds5XdoCVdDeZa8ATSJfHN_fAkht5Y', NULL),
(40, 3, 'Dinas Tenaga Kerja & Perindustrian', '1lD4GUn74_4GGYPcAyJ0J7DfZwLOLk2AL', '1tvFsJAgxADg3NLnFPbLiC1-KP7CbQsah', NULL),
(41, 3, 'Dinas Perhubungan', '1aESZ1arRXd5SHNnB-YNdG_8SLhyyPV_i', '1DujWA4cIUhc91bZs3wJODZyDXYJcw5NX', NULL),
(42, 3, 'Dinas Kependudukan & Catatan Sipil', '1WgiaOD_gGkbH8tNwtv5juqhVwsGLoUsl', '1iQr59PXT1YwfXNQuQYQdwdSLFcihgrSk', NULL),
(43, 3, 'Dinas Perumahan, Kawasan Permukiman & Pertanahan', '1H0tGTpMTQjvSo_wkWV4sUH2GztwHrpUZ', 'https://drive.google.com/open?id=1_PQguVYe1LD3x_BoyHZK_mvZOOprk3Ot', NULL),
(44, 3, 'Dinas Perpustakaan & Kearsipan', '1TuRQhVmrEEE8zODJ_m6-UAmi92bqGewc', '1apqQfoXm3D8sI23thPK_tZ37_T4Y8kRB', NULL),
(45, 3, 'Dinas Ketahanan Pangan', '', '1ONDzgWWLQNUmV5zX0aR0cw_02gwh_PTS', NULL),
(47, 4, 'Badan Pengelola Pajak & Retribusi Daerah', '1pQHt_IofNGiy92eRxpuJSm7uLda921tj', '1K4iCLKSxVqkwl1Xm8Yq-reLoE0t5HOCB', NULL),
(48, 4, 'Badan Kepegawaian & Pengembangan SDM', '1S6V7_hHVXAPgUbrss4x3DPqpOi77TQvA', '18zZLtX5__KEu1kbCUH5bOfXvZ6qSc8Oy', NULL),
(49, 4, 'Badan Perencanaan Pembangunan Daerah', '1hs3I7_dNzdW6sKrfiVsOOvM7NIx1eHZ-', '154DbjEaUbU_Q60JHnic08CJZNZ7AdUVj', NULL),
(50, 2, 'Sekretariat DPRD', '1lblk1HV1jubDqWiov-wOZTfWjH7CQ7Dj', '11LHJ6Wm-8plfhixx7ZHFT8PQjuRFk7r_', NULL),
(51, 7, 'Kec. Abeli', '1pD4QesCxqsNny3DpMmKhlY-_sPuczNJE', '1TQXtDQvPO34ubOeH0vvd4jtSwkCI64qo', NULL),
(52, 7, 'Kec. Baruga', '1S7FS2nuLQflqY9wu6FmY0pZbHEpVge0qid=1S7FS2nuLQflqY9wu6FmY0pZbHEpVge0q', '1TQXtDQvPO34ubOeH0vvd4jtSwkCI64qo', NULL),
(53, 7, 'Kec. Kadia', '1aO5AkyvqN_3LGB54S3gOOK5jX_oOBWvT', '1TQXtDQvPO34ubOeH0vvd4jtSwkCI64qo', NULL),
(54, 7, 'Kec. Kambu', '1Av2nIpqUUblcBtKJKlP35Hq38lYOm_Zt', '1TQXtDQvPO34ubOeH0vvd4jtSwkCI64qo', NULL),
(55, 7, 'Kec. Nambo', '1aBGWnC3QaS1LY1kx2OFh8MjAjYJ5oJqe', '1TQXtDQvPO34ubOeH0vvd4jtSwkCI64qo', NULL),
(56, 7, 'Kec. Poasia', '1TlPA_u4-fZ9fony-joYPMJvV5ek-QV6h', '1TQXtDQvPO34ubOeH0vvd4jtSwkCI64qo', NULL),
(57, 7, 'Kec. Puuwatu', '1lemIeuQpsoHGGmOUKMZizEd7kSJonBZz', '1TQXtDQvPO34ubOeH0vvd4jtSwkCI64qo', NULL),
(58, 7, 'Kec. Wua-wua', '1pY2ekgaolkhe2VmurnIYa_clfl8VPJmR', '1TQXtDQvPO34ubOeH0vvd4jtSwkCI64qo', NULL),
(59, 2, 'Sekretaris Daerah', '1FwI8hySHn8TGL4NJRqHs-71BuP8t5lqA', '11UKbKbH6o8sqOhDzfc7PpbQ3hkSqY7hu', NULL),
(60, 5, 'Bagian Adm. Humas & Protokoler', '1V1gWc_4qd7JriCtAM8Y2f1FmF3eIZt3j', '1ZBWjN8toNq6-5HZeG43Z2ahyrnngPkl2', NULL),
(61, 5, 'Bagian Hukum dan HAM', '1TXWcdrEW2QgTCInNleDLFXEPlRgUic7G', '199AvNU2Y1ldkj3eXPlUByYijXlxrZiDU', NULL),
(62, 5, 'Bagian Tata Pemerintahan', '0', '0', NULL),
(63, 5, 'Bagian Organisasi Setda', '0', '0', NULL),
(64, 6, 'Rumah Sakit Antero Hamra', '', '-', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pejabat`
--

CREATE TABLE `pejabat` (
  `id` int NOT NULL,
  `opd_id` int DEFAULT NULL,
  `nama` varchar(100) NOT NULL,
  `jabatan_id` int NOT NULL,
  `keterangan` text CHARACTER SET latin1 COLLATE latin1_swedish_ci,
  `foto` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `facebook` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `twitter` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `instagram` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `tahun_periode` varchar(191) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pejabat`
--

INSERT INTO `pejabat` (`id`, `opd_id`, `nama`, `jabatan_id`, `keterangan`, `foto`, `facebook`, `twitter`, `instagram`, `tahun_periode`) VALUES
(7, 1, 'SRI YUSNITA, ST.,MM', 8, '', 'foto-pejabat/sri-yusnita-stmm1.png', 'https://facebook.com', 'https://twitter.com', 'https://instagram.com', ''),
(10, 13, 'Hj. Erlis Sadya Kencana, ST.,MT', 9, '<p><strong>NIP</strong>         : 19680730 200212 2 007</p><p><strong>Pangkat</strong> : Pembina / Golongan IV A</p>', 'foto-pejabat/hj-erlis-sadya-kencana-stmt1.jpg', 'https://facebook.com', 'https://twitter.com', 'https://instagram.com', ''),
(12, 57, 'RATRIANSYAH PUTRA H, S.STP,.M.Si', 15, '', NULL, 'https://facebook.com', 'https://twitter.com', 'https://instagram.com', ''),
(13, NULL, 'DRS. AL IMRAN      ', 11, '', NULL, 'https://facebook.com', 'https://twitter.com', 'https://instagram.com', ''),
(15, 16, 'Laode Muh. Maluadi Poto, SH', 15, '<figure class=\"table\"><table><tbody><tr><td><strong>NIP</strong></td><td>:</td><td>19661127 200003 1 005</td></tr><tr><td><strong>TTL</strong></td><td>:</td><td>Muna,  27  November   1966</td></tr><tr><td><strong>Alamat</strong></td><td>:</td><td>BTN.  Punggolaka  Permai   Bloc C  No. 12  Kendari</td></tr><tr><td><strong>Unit Kerja</strong></td><td>:</td><td>Kantor Kecamatan Kendari</td></tr><tr><td><strong>No. HP</strong></td><td>:</td><td>0813 – 4154 - 0166</td></tr></tbody></table></figure>', 'foto-pejabat/laode-muh-maluadi-poto-sh.jpeg', 'https://facebook.com', 'https://twitter.com', 'https://instagram.com', ''),
(16, 20, 'Hj. ANDI DADJENG, SE', 9, '<ol><li>Nama                   : Hj. ANDI DADJENG, SE</li><li>NIP                          : 19660117 199103 2 005</li><li>Tempat/Tgl Lahir   : Kolaka, 17 Januari 1966</li><li>Agama                     : Islam</li><li>Pendidikan Terakhir  : S1 </li><li>Pangkat/ Golongan  : Pembina TK.I, IV/b</li></ol>', 'foto-pejabat/hj-andi-dadjeng-se1.jpg', '', '', '', ''),
(18, 23, 'Hj. Saemina, S.Pd. M.Pd', 9, '', 'foto-pejabat/hj-saemina-spd-mpd.jpg', '', '', '', ''),
(22, 26, 'AMIR YUSUF S.Sos M.Sos', 9, '<p>PLT Kepala Dinas Sosial</p><p> NIP : 197906162009011005</p>', NULL, '', '', '', ''),
(23, NULL, 'Makmur,S.Pd,M.Pd', 7, '<p>tes</p>', 'foto-pejabat/makmurspdmpd.jpg', '', '', '', ''),
(26, 29, 'Ir. NISMAWATI, M.Si', 9, '<p>-</p>', 'foto-pejabat/ir-nismawati-msi4.jpg', '', '', '', ''),
(28, 6, 'drg. FAUZIAH, M.Kes', 9, '<p>PLT Kepala Dinas</p><p>197302092006042003</p>', NULL, '', '', '', ''),
(30, 10, 'Drs. Fadlil Suparman', 10, '', 'foto-pejabat/drs-fadlil-suparman.jpeg', '', '', '', ''),
(32, 48, 'Hj.Hasria, SKM.,M.AP', 10, '<ol><li>Nama                             : Hj.Hasria, SKM.,M.AP</li><li>NIP                                 : 19680815 199003 2 007</li><li>Tempat Tanggal Lahir  : Kendari, 15 Agustus 1968</li><li>Pangkat/Gol                  : Pembina Tk.I, Gol IV/b</li><li>Jabatan/Eselon              : Kepala Dinas /II.b</li><li>Alamat Rumah              :Jl. R.Suprapto No.6</li><li>Pendidikan                    : S-2 Administrasi Pembangunan</li></ol>', 'foto-pejabat/hjhasria-skmmap1.png', '', '', '', ''),
(36, 47, 'Hj. Satria Damayanti, SE.,ME ', 10, '<p>Nama                     : Hj. Satria Damayanti, SE.,ME <br><br>NIP                         : 19731207 199303 2 006 <br><br>Tempat/Tgl Lahir : Kendari 7 Desember 1973 <br><br>Agama                   : Islam <br><br>Pendidikan Terakhir : S2 Ekonomi <br><br>Pangkat/Gol             : IV/a <br> </p>', NULL, '', '', '', ''),
(37, 49, 'CORNELIUS PADANG, SE ', 10, '<p>Nama : CORNELIUS PADANG, SE <br><br>NIP :  197407132000031 005</p>', NULL, '', '', '', ''),
(38, 30, 'Junaidin Umar, S.Sos', 10, '', 'foto-pejabat/junaidin-umar-ssos1.png', '', '', '', ''),
(43, 41, 'LA  ODE ABD. MANAS SALIHIN, S.Sos, M.Si', 9, '<p>-</p>', 'foto-pejabat/la--ode-abd-manas-salihin-ssos-msi.jpg', '', '', '', ''),
(44, 39, 'SAHURIYANTO MERONDA, SP', 9, '<p>-</p>', 'foto-pejabat/sahuriyanto-meronda-sp.png', '', '', '', ''),
(47, NULL, 'Amir Hasan, STP, SH, M.Si', 5, '<p>NAMA : Amir Hasan, STP, SH, M.Si</p><p><strong>NIP : 19720103 199303 1 009</strong></p><p><strong>Tempat Tanggal Lahir : ANDOOLO, 3 JANUARI 1972</strong></p><p><strong>Agama : ISLAM</strong></p><p><strong>Pendidikan : S-2</strong></p><p><strong>Pangkat / Golongan : PEMBINA UTAMA MUDA , GOL. IV/c</strong></p><p><strong>Alamat : JL. DRS. H. ABD. SILONDAE NO. 8</strong></p><p><strong>(0401) 3111268</strong></p><p> </p>', 'foto-pejabat/amir-hasan-stp-sh-msi1.jpg', '', '', '', ''),
(49, NULL, 'Drs. JAHUDDING, M.SI.', 6, '<ol><li>Nama                             : Drs. JAHUDDING, M.SI.</li><li>NIP                                 : 196803031996031 003</li><li>Tempat Tanggal Lahir  : -</li><li>Pangkat/Gol                  : -</li><li>Jabatan/Eselon              : Kepala Dinas /II.b</li><li>Alamat Rumah              :-</li><li>Pendidikan                    : S-2</li><li>Agama                           :Islam</li></ol>', 'foto-pejabat/drs-jahudding-msi1.png', '', '', '', ''),
(50, 22, 'DR.H. SYAFRUDDIN, SP.,MP ', 11, '<p>-</p>', NULL, '', '', '', ''),
(51, 31, 'Maman Firman Syah, S.STP., MM', 9, '<ul><li>Nama : Maman Firman Syah, S.STP., MM</li><li>Tempat / Tgl Lahir : Raha, Sulawesi Tenggara - 20 October, 1980</li><li>Agama : Islam</li></ul>', 'foto-pejabat/maman-firman-syah-sstp-mm.jpg', '', '', '', ''),
(54, 40, 'Ir. MUH. ALI AKSA, MM', 9, '<p>NAMA                                                : Ir. MUH. ALI AKSA, MM</p><p>NIP                                                     : 19651223 199703 1 001</p><p>TEMPAT/TANGGAL LAHIR          : UJUNG PANDANG, 23 DESEMBER 1965</p><p>AGAMA                                             : ISLAM</p><p>PENDIDIKAN TERAKHIR             : S2 MAGISTER MANAJEMEN</p><p>JABATAN                                          : KEPALA DINAS PERHUBUNGAN</p><p>PANGKAT/GOLONGAN                : PEMBINA TK.I, GOL. IV/B</p><p>ALAMAT KANTOR                         : JALAN TAMBOLO SOANO OLEO KOMP. TERMINAL BARUGA KOTA KENDARI</p>', 'foto-pejabat/ir-muh-ali-aksa-mm1.jpg', '', '', '', ''),
(55, 51, 'ADY IRFAN, SE', 15, '', NULL, '', '', '', ''),
(56, 38, 'IMRAN ISMAIL, S.Pt, M.Si', 9, '', 'foto-pejabat/imran-ismail-spt-msi1.jpg', '', '', '', ''),
(57, 50, 'ADRIANA MUSARUDDIN, S.Sos, M.Si', 9, '', 'foto-pejabat/adriana-musaruddin-ssos-msi.png', '', '', '', ''),
(58, 2, 'DR. FARIDA AGUSTINA. M, SE., M.Si', 10, '<p>-</p>', 'foto-pejabat/dr-farida-agustina-m-se-msi.png', '', '', '', ''),
(59, 25, 'PAMINUDDIN, SE, M.Si', 9, '<p>PAMINUDDIN, SE, M.Si</p><p>Nip. 19631107 198607 1 002</p>', 'foto-pejabat/paminuddin-se-msi1.jpg', '', '', '', ''),
(61, 36, 'ALIMIN, S.SOS.,M.AP', 13, '', NULL, '', '', '', ''),
(64, NULL, 'Syarifuddin,SE, AK, MSA, CGAA, CGCAE', 12, '', 'foto-pejabat/syarifuddinse-ak-msa-cgaa-cgcae.jpg', '', '', '', ''),
(66, 59, 'Dr. Drs. Ridwansyah Taridala,M.Si', 4, '<p>Sekretaris Daerah </p>', 'foto-pejabat/dr-drs-ridwansyah-taridalamsi2.jpg', '', '', '', ''),
(67, 45, 'Drs. ABDUL RAUF', 9, '', 'foto-pejabat/drs-abdul-rauf.JPG', '', '', '', ''),
(68, 21, 'RIZA IBRAHIM, SE', 9, '<p>PLT Kepala DInas</p><p>NIP : 197108291999021001</p>', NULL, '', '', '', ''),
(69, 56, 'RONIVA MANDALAY PUTERA', 15, NULL, 'foto-pejabat/yahya-sems1.jpg', '', '', '', ''),
(70, 58, 'ZULQAIDAH TARIDALA, SE', 15, '', NULL, '', '', '', ''),
(71, 55, 'ARLING HABIR, S.IP, M.APZ', 15, '', NULL, '', '', '', ''),
(72, 52, 'H. Sentosa, S.Pi, M.Si', 15, '', NULL, '', '', '', ''),
(73, 54, 'ABDUL SALAM, S.Pd', 15, '', 'foto-pejabat/abdul-salam-spd.jpg', '', '', '', ''),
(74, 24, 'SATRIYAWAN ABU YASID, S.STP.,M.A.P', 9, '<p>PLT Kepala Dinas</p>', NULL, '', '', '', ''),
(75, 5, 'Alda Kesutan Lapae, S.Si', 9, '', 'foto-pejabat/alda-kesutan-lapae-ssi.png', '', '', '', ''),
(76, 43, 'Ir. AGUS SALIM, MS', 9, '', 'foto-pejabat/ir-agus-salim-ms.jpg', '', '', '', ''),
(78, 42, 'ISWANTO, S.Sos, M.Si', 9, '<p>NAMA : ISWANTO, S.Sos, M.Si</p><p>NIP : 196507271986031 015</p>', 'foto-pejabat/iswanto-ssos-msi1.jpg', '', '', '', ''),
(79, 12, 'HERMAWATY, ST., MT ', 11, '<p>Nama                    : HERMAWATY, ST., MT  <br>NIP                     : 197611292009032001 <br>Tempat Tanggal Lahir    : Kendari, 29 november 1976  <br>Pangkat/Gol             : Penata Tingkat I. III/d <br>Jabatan/Eselon          : kepala Bagian PBJ/Eselon III.a <br>Alamat Rumah            : Jl. mekar, No. 23A <br>Pendidikan              : S2 <br>Agama                   : Islam</p>', 'foto-pejabat/hermawaty-st-mt-.jpeg', '', '', '', ''),
(80, 63, 'AKRIM KURDIN, ST, M.Si', 11, '<p>NAMA                                        : <strong>AKRIM KURDIN, ST, M.Si</strong></p><p>NIP                                            : 19680609 199803 1 008</p><p>TEMPAT / TANGGAL LAHIR    : KENDARI, 09 JUNI 1968</p><p>PANGKAT/GOL.                        : PEMBINA TK. I / GOL. IV.b</p><p>JABATAN/ESELON                  : KEPALA BAGIAN TATA PEMERINTAHAN /</p><p>                                                    ESELON III.a</p><p>ALAMAT RUMAH                      : JL. KETAPANG NO. 8 KENDARI</p><p>PENDIDIKAN                            : S.2 ADMINISTRASI PEMBANGUNAN</p><p>AGAMA                                     : I S L A M</p>', 'foto-pejabat/akrim-kurdin-st-msi.jpeg', '', '', '', ''),
(82, 64, 'dr.PATMA AYUNITA, M.Kes', 13, '<p>-</p>', 'foto-pejabat/drpatma-ayunita-mkes.png', '', '', '', ''),
(83, 3, 'DR. HASLITA, M.Si', 9, '<p>PLT Kepala Dinas</p>', NULL, '', '', '', ''),
(84, 44, 'ASWIDO, ST,MM', 9, '<p>PLT Kepala Dinas</p>', NULL, '', '', '', ''),
(85, 37, 'dr. Sukirman, MARS, M.Kes, Sp.PA', 13, '<p>-</p>', 'foto-pejabat/dr-sukirman-mars-mkes-sppa.png', '', '', '', ''),
(86, NULL, 'H. SUDIRHAM S.Pd. M. Ed', 12, '<p>-</p>', 'foto-pejabat/h-sudirham-spd-m-ed.jpg', '', '', '', ''),
(87, NULL, 'Muhamad Saiful, ST., M.M', 12, '<p>-</p>', 'foto-pejabat/muhamad-saiful-st-mm.png', '', '', '', ''),
(88, NULL, 'HERRY ASHAK, SE, M.Si', 11, '<p>-</p>', 'foto-pejabat/herry-ashak-se-msi.png', '', '', '', ''),
(89, 62, 'Yahya, SE, MS', 11, NULL, NULL, '', '', '', ''),
(90, NULL, 'Drs. Jarnalis, M.Si', 11, '<p>-</p>', NULL, '', '', '', ''),
(91, NULL, 'Dr. drs. Sapri, M.Si', 11, '<p>-</p>', 'foto-pejabat/dr-drs-sapri-msi.jpg', '', '', '', ''),
(92, NULL, 'Sari Handayani, SE., M.Ak', 11, '<p>-</p>', NULL, '', '', '', ''),
(93, 61, 'Dr. Kurniawan Ilyas, SH.,MH', 11, '<p>-</p>', 'foto-pejabat/dr-kurniawan-ilyas-shmh.jpg', '', '', '', ''),
(95, 53, 'RUDI HARTONO, SE', 15, NULL, NULL, NULL, NULL, NULL, ''),
(96, NULL, 'Muhammad Yusuf, SE, M. Si', 3, '<p>\n                      <strong>Nama Lengkap</strong> : Muhammad Yusup, SE. M.Si{\" \"}\n                      <br />\n                      <strong>Tempat, Tgl. Lahir</strong> : 16 Januari 1971\n                    </p>\n                    <p>\n                      <strong>Riwayat Pendidikan</strong>&nbsp;&nbsp; :\n                    </p>\n                    <ul>\n                      <li>SD Negeri 1 Kendari Tahun 1982</li>\n                      <li>SMP Negeri 2 Kendari Tahun 1985</li>\n                      <li>SLTA Negeri 7 Yogyakarta Tahun 1989</li>\n                      <li>S1 UII Yogyakarta Tahun 1995</li>\n                      <li>S2 UGM Yogyakarta Tahun 2003</li>\n                    </ul>\n                    <p>\n                      <strong>Riwayat Pekerjaan</strong>&nbsp;&nbsp;&nbsp;&nbsp;\n                      :\n                    </p>\n                    <ul>\n                      <li>Staf Bappeda Provinsi Sultra Tahun 1998 s/d. 2014</li>\n                      <li>\n                        PJ. Kasubid Pemantauan Bapedalda Provinsi Sultra Tahun\n                        2004 sampai 2006\n                      </li>\n                      <li>\n                        Kasubag Anggaran Rutin Biro Keuangan Setda Provinsi\n                        Sultra Tahun 2006 – 2008.\n                      </li>\n                      <li>\n                        Kasubid Kesejahteraan Sosial Bappeda Provinsi Sultra\n                        Tahun Anggaran Tahun 2008 – 2009.\n                      </li>\n                      <li>\n                        Kasubid Perhubungan Bappeda Provinsi Sultra Tahun 2009\n                        -2010.\n                      </li>\n                      <li>\n                        Kabid Pengembangan Kawasan dan Penempatan Trans.\n                        Nakertrans Kabupaten Muna Tahun 2012-2012.\n                      </li>\n                      <li>Kepala BPBD Kabupaten Muna Tahun 2012 – 2016.</li>\n                      <li>\n                        Sekretaris BPBD Kabupaten Buton Tengah Tahun 2017 –\n                        2020.\n                      </li>\n                      <li>\n                        Kepala BPBD Kabupaten Buton Tengah TAHUN 2017 S.D. 2020\n                      </li>\n                      <li>\n                        Kadis Koperasi dan UMKM Provinsi Sultra Tahun 2020 –\n                        2021.\n                      </li>\n                      <li>\n                        Pj. Bupati Kabupaten Konawe Kepulauan September –\n                        Desember 2021.\n                      </li>\n                      <li>\n                        Kepala Pelaksana BPBD Pprovinsi Sultra Tahun 2021 -2023\n                      </li>\n                    </ul>', 'foto-pejabat/muhammad-yusuf-se-m-si.png', NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `pengumuman`
--

CREATE TABLE `pengumuman` (
  `id` int NOT NULL,
  `judul` varchar(90) NOT NULL,
  `link` text CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `tanggal` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `sumber` varchar(90) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pengumuman`
--

INSERT INTO `pengumuman` (`id`, `judul`, `link`, `tanggal`, `sumber`) VALUES
(1, 'Ringkasan APBD Kota Kendari Tahun 2019', 'https://drive.google.com/open?id=1XRDA05RdTOkUqDGCbKwhKShul6BRO66X', '2023-02-04 09:32:41', 'BPKAD Kota Kendari'),
(2, 'Ringkasan APBD Kota Kendari Tahun Anggaran 2021', 'https://drive.google.com/file/d/1ZHht8rquukTYYOFmkUUvjNTmG-PcCbe1/view?usp=sharing', '2023-02-04 09:32:41', 'BPKAD Kota Kendari'),
(3, 'Ringkasan APBD Kota Kendari Tahun Anggaran 2021', 'https://drive.google.com/file/d/1ZHht8rquukTYYOFmkUUvjNTmG-PcCbe1/', '2023-02-04 09:32:41', 'BPKAD Kota Kendari'),
(4, 'Kota Kendari dalam angka 2021', 'https://drive.google.com/file/d/1NBczLp6Y0NjVDwF_jbrB4cbTfDYAZt0k/view?usp=sharing', '2023-02-04 09:32:41', 'BPS Kota Kendari'),
(5, 'Ringkasan APBD Kota Kendari Tahun Anggaran 2022', 'https://drive.google.com/file/d/1w-CoAAgDWboMYca4gqeCIh73J5nGHBkQ/view?usp=sharing', '2023-02-04 09:32:41', 'BPKAD KOTA KENDARI');

-- --------------------------------------------------------

--
-- Table structure for table `perda`
--

CREATE TABLE `perda` (
  `id` int NOT NULL,
  `no_perda` varchar(100) NOT NULL,
  `tentang` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `tanggal` timestamp NOT NULL,
  `link` varchar(150) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `perda`
--

INSERT INTO `perda` (`id`, `no_perda`, `tentang`, `tanggal`, `link`) VALUES
(4, 'Nomor 7 Tahun 2015', 'Pelarangan Penebangan, Peredaran Dan Perdagangan Kayu Dolken', '2019-08-01 05:54:36', NULL),
(5, 'Nomor 3 Tahun 2015', 'Retribusi Izin Tempat Penjualan Minuman Beralkohol', '2019-08-01 05:55:31', NULL),
(6, 'Nomor 19 Tahun 2014', 'Penanggulangan HIV Dan AIDS', '2019-08-01 05:56:30', NULL),
(7, 'Nomor 16 Tahun 2014', 'Kawasan Tanpa Rokok', '2019-08-01 05:57:17', NULL),
(8, 'Nomor 17 Tahun 2014', 'Tanggung Jawab Sosial Dan Lingkungan Perusahaan', '2019-08-01 05:58:02', NULL),
(9, 'Nomor 18 Tahun 2014', 'Etika Berbusana', '2019-08-01 05:58:51', NULL),
(10, 'Nomor 2 Tahun 2011', 'Pajak dan Retribusi', '2019-08-01 06:00:51', NULL),
(11, 'Nomor 9 Tahun 2014', 'Pembinaan Anak Jalanan, Gelandangan, Pengemis, dan Pengamen', '2019-08-01 06:01:39', NULL),
(12, 'Nomor 8 Tahun 2014', 'Pengarusutamaan Gender dalam Pembangunan Daerah', '2019-08-01 06:02:23', NULL),
(13, 'Nomor 16 Tahun 2014', 'Kawasan Tanpa Rokok', '2019-08-01 06:03:26', NULL),
(14, 'Nomor 12 Tahun 2014', 'Kebersihan dan Keindahan', '2019-08-01 06:04:24', NULL),
(15, 'Nomor 11 Tahun 2014', 'Penyertaan Modal Pemerintah Daerah pada BANK SULTRA', '2019-08-01 06:05:18', NULL),
(16, 'Nomor 15 Tahun 2014', 'Perubahan Keempat atas Peraturan Daerah Nomor 8 Tahun 2008 Tentang Pembentukan Organisasi dan Tata Kerja Lembaga Teknis Daerah Kota Kendari ', '2019-08-01 06:06:17', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_agent` text COLLATE utf8mb4_unicode_ci,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_activity` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('BsgOUpomIZTos64B9i5P2knwipoaAaZ9cBIja8Q6', NULL, '192.168.1.8', 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Mobile Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiajNDVzZUWUJ3VFNyRWRCZ3BNN2NiZjlnbGVYZ2s3VHFnZllXM2JjSSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzk6Imh0dHA6Ly8xOTIuMTY4LjEuMTE6ODAwMC9hcGkvcGVuZ3VtdW1hbiI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1739641618),
('JmunhlJYTl4FqXkTZqbkdSeqIthQR5iVu6QnXvnN', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiRzd1YjlpTTJZbnUzMHB1RldrVUpiM3h0Mld3OFhNRUNKdDNQR2MwUSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzg6Imh0dHA6Ly9rZW5kYXJpa290YS50ZXN0L2FwaS9wZW5ndW11bWFuIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1739641800),
('YjYIEh70eQge271YGn3SC2GS9KDvsQJVaX7YwpgW', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiNEJQSTJPdHlkemhTSW9yQWIzUEx3Q3cxZnI2YkRhYjRNaUpIRHJYbiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjM6Imh0dHA6Ly9rZW5kYXJpa290YS50ZXN0Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1739638881);

-- --------------------------------------------------------

--
-- Table structure for table `twibbon`
--

CREATE TABLE `twibbon` (
  `id` int UNSIGNED NOT NULL,
  `title` varchar(100) DEFAULT NULL,
  `slogan` varchar(255) DEFAULT NULL,
  `img` varchar(100) DEFAULT NULL,
  `deskripsi` text CHARACTER SET latin1 COLLATE latin1_swedish_ci
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `twibbon`
--

INSERT INTO `twibbon` (`id`, `title`, `slogan`, `img`, `deskripsi`) VALUES
(1, 'Hari Pahlawan 2022', 'Pahlawanku Teladanku', 'twibbon/2024/pahlawan_2022.png', '<p>Gunakan Tagar <strong>#pahlawankendari2022, #kendaribergerak</strong> dan <strong>#kendarikotatwibon</strong> pada IG, Facebook dan Twitter</p>'),
(22, 'MTQ ke 29', 'Membangun Generasi khaira ummah', 'twibbon/2024/MTQ ke 29.png', '<p>Gunakan Tagar <strong>#mtqkendari29, #kendarisukses</strong> dan <strong>#kendarikotatwibon</strong> pada IG, Facebook dan Twitter</p>'),
(23, 'HUT 77 RI', 'Pulih Lebih Cepat Bangkit Lebih Kuat', 'twibbon/2024/HUT 77 RI.png', '<p>Gunakan Tagar <strong>#hutri77, #ri77, #pulihlebihcepatbangkitlebihkuat, #kendarisukses</strong> dan <strong>#kendarikotatwibon</strong> pada IG, Facebook dan Twitter</p>'),
(24, 'WTP 2021', 'Kendari Sukses', 'twibbon/2024/WTP 2021.png', '<p>Gunakan Tagar <strong>#wtpkendari2021, #kendarisukses </strong>dan <strong>#kendarikotatwibon</strong> pada IG, Facebook dan Twitter</p>'),
(25, 'Hari Lingkungan Hidup 2022', 'Hanya satu Bumi Untuk Masa Depan', 'twibbon/2024/Hari Lingkungan Hidup 2022.png', '<p>Gunakan Tagar <strong>#harilingkunganhidupkendari2022, #kendarisukses, #hanyasatubumiuntukmasadepan</strong> dan <strong>#kendarikotatwibon</strong> pada IG, Facebook dan Twitter</p>'),
(26, 'HUT Kendari 191', 'Kendari Sukses', 'twibbon/2024/HUT Kendari 191.png', '<p>Gunakan Tagar <strong>#kendari191, #kendarisukses </strong>dan <strong>#kendarikotatwibon</strong> pada IG, Facebook dan Twitter</p>'),
(28, 'Ramadhan 2023', 'Bergerak dibulan Suci', 'twibbon/2024/Ramadhan 2023.png', '<p>Gunakan Tagar <strong>#ramadhan2023, #kendaribergerak</strong> dan <strong>#kendarikotatwibon</strong> pada IG, Facebook dan Twitter</p>'),
(29, 'HUT Kota Kendari 192', 'Kendari Bergerak Menuju Masyarakat Maju, Mandiri, Sejahtera dan Berkeadilan', 'twibbon/2024/HUT Kota Kendari 192.png', '<p>Gunakan Tagar #kendari192, #kendaribergerak dan #kendarikotatwibon pada IG, Facebook dan Twitter</p>'),
(30, 'Idul Adha 1444H - 2023M', 'Selamat Hari Raya Idul Adha - 10 Dzulhijjah 1444H  - 2023M', 'twibbon/2024/Idul Adha 1444H - 2023M.png', '<p>Gunakan Tagar <strong>#iduladha2023, #kendaribergerak</strong> dan <strong>#kendarikotatwibon</strong> pada IG, Facebook dan Twitter</p>'),
(31, 'Jambore Temu Kader PKK', 'Selamat & Sukses Jambore PKK Provinsi SULTRA 2023', 'twibbon/2024/Jambore Temu Kader PKK.png', '<p>Gunakan Tagar <strong>#pkkkendari2023, #kendaribergerak</strong> dan <strong>#kendarikotatwibon</strong> pada IG, Facebook dan Twitter</p>'),
(32, 'Tahun Baru Islam 2023', 'Selamat Tahun Baru Islam', 'twibbon/2024/Tahun Baru Islam 2023.png', '<p>Gunakan Tagar <strong>#tahunbaruislam2023, #kendaribergerak</strong> dan <strong>#kendarikotatwibon</strong> pada IG, Facebook dan Twitter</p>'),
(33, 'Dirgahayu Republik Indonesia 78', 'Terus Melaju Untuk Indonesia Maju', 'twibbon/2024/Dirgahayu Republik Indonesia 78.png', '<p>Gunakan Tagar <strong>#dirgahayuri78, #kendaribergerak</strong> dan <strong>#kendarikotatwibon</strong> pada IG, Facebook dan Twitter</p>'),
(34, 'Hari Pahlawan Tahun 2023', 'Semangat Pahlawan Untuk Masa Depan Bangsa Dalam Memerangi Kemiskinan & Kebodohan', 'twibbon/2024/Hari Pahlawan Tahun 2023.png', '<p>Gunakan Tagar <strong>#haripahlawan23, #kendaribergerak</strong> dan <strong>#kendarikotatwibon</strong> pada IG, Facebook dan Twitter</p>'),
(35, 'Idul Fitri 2024', '-', 'twibbon/2024/Idul Fitri 2024.png', '<p>Gunakan Tagar <strong>#idulfitri24</strong> dan <strong>#kendarikotatwibon</strong> pada IG, Facebook dan Twitter</p>'),
(36, 'Dirgahayu Republik Indonesia 79', '-', 'twibbon/2024/Dirgahayu Republik Indonesia 79.png', '<p>Gunakan Tagar <strong>#dirgahayuri79</strong> dan <strong>#kendarikotatwibon</strong> pada IG, Facebook dan Twitter</p>'),
(37, 'Hari Pancasila 2024', '-', 'twibbon/2024/Hari Pancasila 2024.png', '<p>Gunakan Tagar <strong>#pancasila2024 </strong>dan <strong>#kendarikotatwibon</strong> pada IG, Facebook dan Twitter</p>'),
(38, 'Idul Adha 1445', '-', 'twibbon/2024/Idul Adha 1445.png', '<p>Gunakan Tagar <strong>#iduladha2024</strong> dan <strong>#kendarikotatwibon</strong> pada IG, Facebook dan Twitter</p>');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Admin', 'admin@gmail.com', NULL, '$2y$12$1KK7kmXHbcBVDxpvWy1kF.CSZKw7jziIpwAQ5sX7mU4V32mIWztam', 'dmPePmmZu4Ep1j5qn3TZKN5qetmkXgXY0Y03VWrR6GrmRdOEDvw8gCLK0ine', '2025-02-09 10:04:23', '2025-02-09 10:04:23');

-- --------------------------------------------------------

--
-- Table structure for table `youtube`
--

CREATE TABLE `youtube` (
  `id` int UNSIGNED NOT NULL,
  `link` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `youtube`
--

INSERT INTO `youtube` (`id`, `link`) VALUES
(1, 'O1J_21hJ8-s'),
(2, 'UrZK0rjAlH0'),
(3, '9TqcBXnzbpc'),
(4, 'U2mW7xcOcmc'),
(5, 'ygPpM8RwLUA'),
(6, 'cemLAEbvhzU');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `agenda`
--
ALTER TABLE `agenda`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `aplikasi`
--
ALTER TABLE `aplikasi`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `arsip`
--
ALTER TABLE `arsip`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `direktori`
--
ALTER TABLE `direktori`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `download`
--
ALTER TABLE `download`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `halaman`
--
ALTER TABLE `halaman`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `infografis`
--
ALTER TABLE `infografis`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `jabatan`
--
ALTER TABLE `jabatan`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indexes for table `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `kategori_opd`
--
ALTER TABLE `kategori_opd`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `lokasi`
--
ALTER TABLE `lokasi`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_direktori` (`direktori_id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `opd`
--
ALTER TABLE `opd`
  ADD PRIMARY KEY (`id`),
  ADD KEY `kategori_opd_id` (`kategori_opd_id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `pejabat`
--
ALTER TABLE `pejabat`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_opd` (`opd_id`),
  ADD KEY `fk_1` (`jabatan_id`);

--
-- Indexes for table `pengumuman`
--
ALTER TABLE `pengumuman`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `perda`
--
ALTER TABLE `perda`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `twibbon`
--
ALTER TABLE `twibbon`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `youtube`
--
ALTER TABLE `youtube`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `agenda`
--
ALTER TABLE `agenda`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `aplikasi`
--
ALTER TABLE `aplikasi`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60;

--
-- AUTO_INCREMENT for table `arsip`
--
ALTER TABLE `arsip`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=77;

--
-- AUTO_INCREMENT for table `direktori`
--
ALTER TABLE `direktori`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `download`
--
ALTER TABLE `download`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `halaman`
--
ALTER TABLE `halaman`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `infografis`
--
ALTER TABLE `infografis`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;

--
-- AUTO_INCREMENT for table `jabatan`
--
ALTER TABLE `jabatan`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `kategori_opd`
--
ALTER TABLE `kategori_opd`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `lokasi`
--
ALTER TABLE `lokasi`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `opd`
--
ALTER TABLE `opd`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=70;

--
-- AUTO_INCREMENT for table `pejabat`
--
ALTER TABLE `pejabat`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=102;

--
-- AUTO_INCREMENT for table `pengumuman`
--
ALTER TABLE `pengumuman`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `perda`
--
ALTER TABLE `perda`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `twibbon`
--
ALTER TABLE `twibbon`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `youtube`
--
ALTER TABLE `youtube`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `lokasi`
--
ALTER TABLE `lokasi`
  ADD CONSTRAINT `direktori_id` FOREIGN KEY (`direktori_id`) REFERENCES `direktori` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `opd`
--
ALTER TABLE `opd`
  ADD CONSTRAINT `kategori_opd_id` FOREIGN KEY (`kategori_opd_id`) REFERENCES `kategori_opd` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT;

--
-- Constraints for table `pejabat`
--
ALTER TABLE `pejabat`
  ADD CONSTRAINT `fk_1` FOREIGN KEY (`jabatan_id`) REFERENCES `jabatan` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
