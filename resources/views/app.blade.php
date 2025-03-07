@php
  $desc =
      'Kami siap untuk melayani masyarakat demi Terwujudnya Kota Kendari Tahun 2029 sebagai Kota Layak Huni yang Semakin Maju, Berdaya Saing, Adil, Sejahtera, dan Berkelanjutan.';
@endphp

<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="google-site-verification" content="Gas7tAzgL-UWbYJgFzXaDPZF7p88n0drTsI0P2jGd2c" />

  <title>Portal Resmi Pemerintah Daerah Kota Kendari</title>
  <meta name="description" content="{{ $desc }}">
  <meta name="keywords" content="kota kendari, kendarikota, kendarita.go.id, kendarikota go id, pemerintah kota kendari">

  <!-- Open Graph / Facebook -->
  <meta property="og:title" content="Portal Resmi Pemerintah Daerah Kota Kendari">
  <meta property="og:description" content="{{ $desc }}">
  <meta property="og:image" content="{{ asset('img/kdi-logo.png') }}">
  <meta property="og:url" content="{{ url()->current() }}">
  <meta property="og:type" content="website">

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Portal Resmi Pemerintah Daerah Kota Kendari">
  <meta name="twitter:description" content="{{ $desc }}">
  <meta name="twitter:image" content="{{ asset('img/kdi-logo.png') }}">

  <!-- Canonical URL -->
  <link rel="canonical" href="{{ url()->current() }}" />

  <!-- Fonts -->
  {{-- <link rel="preconnect" href="https://fonts.bunny.net">
  <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" /> --}}
  <link rel="icon" type="image/x-icon" href="{{ asset('img/kdi-logo.png') }}" />

  <!-- Scripts -->
  @routes
  @viteReactRefresh
  @vite(['resources/js/app.tsx', "resources/js/Pages/{$page['component']}.tsx"])
  @inertiaHead
</head>

<body class="font-sans antialiased">
  @inertia
</body>

</html>
